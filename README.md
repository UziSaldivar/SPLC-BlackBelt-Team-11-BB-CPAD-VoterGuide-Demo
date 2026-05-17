# Alabama Civic Slides — Maintainer Guide

## What Each File Does

| File | Purpose | Edit? |
|------|---------|-------|
| `index.html` | App shell and HTML structure | Rarely |
| `style.css` | All visual styling | For design tweaks |
| `app.js` | Core navigation and logic | Almost never |
| `config/slides.js` | **Everything content-related** | YES — this is your file |

---

## How to Update Slides

### Replace a slide image
1. Export the updated slide from Canva as **WebP** (preferred) or **PNG**
2. Name it `slide-001.webp`, `slide-002.webp`, etc.
3. Drop it into the `/slides/` folder — done.

### Add a new slide
1. Export and place the image in `/slides/` for english slides and `/slides-es/ ` for spanish
2. Open `config/slides.js`
3. Add a new object to the `slides` array:

```javascript
{
  id: 10,
  image: "slides/slide-010.webp",
  alt: "Description for accessibility",
  buttons: [],
  overlays: [],
},
```

### Remove a slide
1. Delete its image from `/slides/` and `/slides-es/`
2. Remove its entry from the `slides` array in `config/slides.js`

---

## How to Position Buttons

### Step 1: Turn on Debug Mode
In `config/slides.js`, set:
```javascript
debugButtons: true,
```
This makes all invisible buttons visible as gold dashed outlines.

### Step 2: Open the site in your browser
You'll see the button outlines overlaid on the slide image.

### Step 3: Adjust percentages
Each button uses `top`, `left`, `width`, `height` as **percentages** of the slide:

```javascript
top: "45%",    // 45% down from the top of the slide
left: "20%",   // 20% from the left edge
width: "30%",  // button is 30% of the slide width
height: "10%", // button is 10% of the slide height
```

### Step 4: Turn off Debug Mode when done
```javascript
debugButtons: false,
```

---

## Button Types (Quick Reference)

```javascript
// Go to next slide
{ action: "next", ... }

// Go back (uses navigation history — returns to actual previous slide)
{ action: "back", ... }

// Jump to any slide
{ action: "goto", target: 5, ... }

// Return to slide 1, clear history
{ action: "home", ... }

// Open a source — drawer (Plan A) or new tab (Plan B) based on settings
{ action: "source", url: "https://...", title: "...", description: "...", ... }

// Always opens in a new tab
{ action: "external", url: "https://...", ... }

// Gives user an ICS or calendar reminder to add to their phone
{action: "calendar", title: "...", description: "...", location: "...", startDate: "YYYY-MM-DDTHH:MM:SS", endDate:"YYYY-MM-DDTHH:MM:SS", allDay:"T/F"}
```

---

## Switch Between Source Behaviors

In `config/slides.js` → `settings`:

```javascript
// Plan A: bottom drawer panel (keeps users in-app)
sourceBehavior: "drawer",

// Plan B: opens source in a new tab
sourceBehavior: "newtab",
```

---

## How to Add a GIF Overlay

1. Place your GIF in the `/gifs/` folder
2. Add an entry to the slide's `overlays` array:

```javascript
overlays: [
  {
    src: "gifs/your-animation.gif",
    alt: "Description for screen readers",
    top: "20%",    // position from top
    left: "60%",   // position from left
    width: "25%",  // width as % of slide (height scales automatically)
  }
],
```

---

## How to Disable Global Buttons on a Slide

Use `disableGlobal` with the button's ID:

```javascript
{
  id: 1,
  image: "slides/slide-001.webp",
  disableGlobal: ["btn-global-back", "btn-global-home"], // hides Back and Home
  buttons: [...],
}
```

Global button IDs (defined in `globalButtons`):
- `btn-global-next`
- `btn-global-back`
- `btn-global-home`

---

## Navigation History (Back Button)

The app tracks a navigation history stack automatically.

**Example:**
- Slide 1 → (shortcut) → Slide 8 → press Back → returns to Slide 1
- Slide 7 → (next) → Slide 8 → press Back → returns to Slide 7

No extra configuration needed. The `action: "back"` button always returns to wherever the user came from.

---

## Deploying to GitHub Pages

1. Push your project to a GitHub repository
2. Go to **Settings → Pages**
3. Set Source to `main` branch, root folder `/`
4. Your site will be live at `https://yourusername.github.io/your-repo/`

**Important:** All file paths in `config/slides.js` are relative to `index.html`.  
So `slides/slide-001.webp` means the file is at `/your-repo/slides/slide-001.webp`.

---

## Recommended Folder Structure

```
/
├── index.html
├── app.js
├── style.css
├── config/
│   └── slides.js          ← edit this to update content
├── slides/                ← English Slides in here
│   ├── slide-001.webp
│   ├── slide-002.webp
│   └── ...
|── slides-es/             ← Spanish Slides in here
|   ├── slide-001.webp
│   ├── slide-002.webp
│   └── ...
└── gifs/
    ├── animation-vote.gif
    └── ...
```

---

## Mobile Tips

- Users can **swipe left/right** to navigate between slides
- **Keyboard**: Arrow keys navigate, Escape closes the source drawer
- The app is designed for **portrait phone**, **landscape phone**, **tablet**, and **desktop**
- For best loading speed on mobile QR code scans, export slides as **WebP** format at 1920×1080

---

## Troubleshooting

**Buttons not showing up?**
→ Turn on `debugButtons: true` in settings to see where they are.

**Buttons misaligned on mobile?**
→ Adjust `top`/`left`/`width`/`height` percentages with debug mode on.

**Source drawer not working on some sites?**
→ Some websites block iframe embedding. Use `sourceBehavior: "newtab"` instead.

**Images not loading?**
→ Check that the file path in `config/slides.js` matches exactly (case-sensitive).
→ WebP files must end in `.webp`, PNG files in `.png`.

**Back button goes to wrong slide?**
→ This is working correctly — it returns to wherever the user *actually* came from.
→ The app uses a navigation history stack, not simple slide numbers.
