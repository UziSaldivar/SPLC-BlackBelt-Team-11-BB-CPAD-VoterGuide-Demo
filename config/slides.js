/**
 * =============================================================================
 * SLIDES.JS — Master Configuration File
 * =============================================================================
 * This is the ONLY file you need to edit to maintain the app.
 *
 * HOW TO ADD A SLIDE:
 *   1. Export your slide as a WebP or PNG image
 *   2. Place it in the /slides/ folder
 *      2a. When making slides, ensure you have a spanish version
 *      2b. There are 2 folders slides and slides-es
 *   3. Add an entry to the `slides` array below
 *
 * HOW TO ADD/MOVE A BUTTON:
 *   - All positions use PERCENTAGES (0–100) of the slide's width/height
 *   - top/left = position of button's top-left corner
 *   - width/height = size of the button
 *   - Use browser DevTools overlay (see README) to find coordinates
 *
 * BUTTON ACTIONS:
 *   "next"     → go to the next slide
 *   "back"     → return to wherever the user came from
 *   "goto"     → jump to a specific slide number (requires `target`)
 *   "home"     → return to slide 1 and clear history
 *   "source"   → open a source panel/tab (requires `url` and optional `title`, `description`)
 *   "external" → open any external link in a new tab (requires `url`)
 *   "caledar"  → allows users to add reminders to their device's calendar
 *   "overlay"  → toggle a GIF/media overlay on this slide (requires `overlayId`)
 * =============================================================================
 */

const SLIDE_CONFIG = {

  // ---------------------------------------------------------------------------
  // GLOBAL SETTINGS
  // ---------------------------------------------------------------------------
  settings: {
    // Aspect ratio of your Canva slides (1920x1080 = 16/9)
    aspectRatio: 16 / 9,

    // Source panel behavior: "drawer" (Plan A) or "newtab" (Plan B)
    // Change this one value to switch the entire app's behavior
    sourceBehavior: "drawer",

    // Slide transition animation: "fade", "slide", or "none"
    transition: "fade",

    // Show debug outlines on buttons (set true while positioning buttons)
    debugButtons: false,
  },

  // ---------------------------------------------------------------------------
  // GLOBAL BUTTONS — applied to every slide unless disabled
  // ---------------------------------------------------------------------------
  // These are the standard Next, Back, and Home buttons.
  // Tweak these positions to match your slide design.
  globalButtons: [
    {
      id: "btn-global-next",
      label: "Next",
      action: "next",
      // Position these over your PDF's "Next" button shape
      top: "88%",
      left: "83%",
      width: "13%",
      height: "9%",
    },
    {
      id: "btn-global-back",
      label: "Back",
      action: "back",
      top: "88%",
      left: "67%",
      width: "13%",
      height: "9%",
    },
    {
      id: "btn-global-home",
      label: "Home",
      action: "home",
      top: "0%",
      left: "0%",
      width: "9%",
      height: "11%",
    },
  ],

  // ---------------------------------------------------------------------------
  // SLIDES — add one entry per slide
  // ---------------------------------------------------------------------------
  slides: [

    // ---- SLIDE 1: Title / Home ----
    {
      id: 1,
      image: "slides/slide-0001.png",
      alt: "Language Selection",

      // Disable the Back and Home buttons on the first slide
      disableGlobal: ["btn-global-back", "btn-global-home", "btn-global-next"],

      buttons: [
        // English toggle
        {
          id: "btn-lang-en",
          label: "English",
          action: "language",
          target: "en",
          then: "next",
          top: "44%",
          left: "34%",
          width: "32%",
          height: "15%",
        },
        // Spanish Toggle
        {
          id: "btn-lang-es",
          label: "Spanish",
          action: "language",
          target: "es",
          then: "next",
          top: "67%",
          left: "34%",
          width: "32%",
          height: "15%",
        },
      ],

      overlays: [],
    },
    // ---- SLIDE 2 Quick Tutorial----
    {
      id: 2,
      image: "slides/slide-0002.png",
      alt: "Tutorial",

      //Disabling "Next" and "Home" button for this slide"
      disableGlobal: ["btn-global-next", "btn-global-home"], 
      
      //Buttons used for tutorial includes source, back and home global button, 
      buttons: [
        // Source button — opens example source for user to see
        {
          id: "btn-source-sos",
          label: "Source: AL Secretary of State",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes",
          title: "Welcome!",
          description:
            "Here you'll see a summary of where the information was found \n\n Below you can access the site!",
          descriptionEs: "Aquí verás un resumen de dónde se encontró la información.\n\n¡Abajo puedes acceder al sitio!",
            top: "90%",
          left: "1%",
          width: "15%",
          height: "7%",
        },

        //Yellow Center button to leave tutorial screen
        {
          id: "btn-jump-english-tutorial-click-ready",
          label: "Click when Ready",
          action: "goto",
          target: 3,
          top: "40%",
          left: "34%",
          width: "32%",
          height: "15%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 3 Overall Main Menu----
    {
      id: 3,
      image: "slides/slide-0003.png",
      alt: "Alabama Voting Guide Main Menu",

      //Disabling all global button for this slide except home"
      disableGlobal: ["btn-global-next","btn-global-back"], 
      
      //Buttons used is global home and 4 different button for shortcut
      buttons: [
        //Why Vote Button, continue to next slide
        {
          id: "btn-jump-why-vote",
          label: "Why Vote Button ",
          action: "next",
          top: "39%",
          left: "45%",
          width: "19%",
          height: "10%",
        },
        
        //Voting Registration Button, skips to slide ID 6
        {
          id: "btn-jump-voting-registration",
          label: "Voting Registration Button",
          action: "goto",
          target: 6,
          top: "55%",
          left: "45%",
          width: "19%",
          height: "10%",
        },

        //Preparing for Election Day Button, skips to slide ID 11
        {
          id: "btn-jump-prepare-for-election-day",
          label: "Preparing for Election Day",
          action: "goto",
          target: 11,
          top: "70%",
          left: "45%",
          width: "19%",
          height: "10%",
        },

        //Special Voting Topics Button, skips to 24
        {
          id: "btn-jump-special-voting-topic",
          label: "Special voting topic",
          action: "goto",
          target: 24,
          top: "85%",
          left: "45%",
          width: "19%",
          height: "10%",
        }
      ],

      //Do not remove, used as template for next person
      overlays: []/*[
        // Example GIF overlay on this slide
        {
          id: "gif-flag",
          src: "gifs/alabama-flag.gif",
          alt: "Waving Alabama flag",
          top: "10%",
          left: "72%",
          width: "22%", // height scales automatically
        },
      ],*/
    },
    // ---- SLIDE 4: Why your vote matters ----
    {
      id: 4,
      image: "slides/slide-0004.png",
      alt: "Why Your Vote Matters",

      buttons: [],
      overlays: [],
    },
    // ---- SLIDE 5: Why your Your Vote Matters ----
    {
      id: 5,
      image: "slides/slide-0005.png",
      alt: "Why your vote matter",

      buttons: [],

      overlays: [],
    },
    // ---- SLIDE 6: Voter Registration Requirement ----
    {
      id: 6,
      image: "slides/slide-0006.png",
      alt: "Voter registration Requirements",

      buttons: [
        {
          id: "btn-source-register-requirement",
          label: "Source: Alabama Secretary of State Website",
          action: "source",
          url: "https://www.alabamainteractive.org/sos/voter_registration/voterRegistrationWelcome.action#:~:text=For%20any%20election,court%20of%20law.",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:"This information was sourced from Alabama’s official Secretary of State (SoS) website regarding voter registration eligibility and voting rights restoration requirements in Alabama.",
          descriptionEs: "Esta información fue obtenida del sitio web oficial de la Secretaría de Estado de Alabama (SoS) sobre los requisitos de elegibilidad para el registro de votantes y la restauración de los derechos de voto en Alabama.",
          top: "90%",
          left: "1%",
          width: "15%",
          height: "7%",
        },
        //felon button shortcut
        {
          id: "btn-jump-felon-info-shortcut",
          label: "Shortcut to more info on felon",
          action: "goto",
          target: 39,
          top: "88%",
          left: "51%",
          width: "13%",
          height: "9%",
        }
      ],

      overlays: [],
    },
    // ---- SLIDE 7: voter registration main menu ----
    {
      id: 7,
      image: "slides/slide-0007.png",
      alt: "Voter-registration-Menu",

      //Disabling all global button for this slide except home"
      disableGlobal: ["btn-global-next","btn-global-back"], 
      buttons: [
        //Next Button
        {
          id: "btn-jump-register-online",
          label: "Next button to register online",
          action: "next",
          top: "51%",
          left: "71%",
          width: "19%",
          height: "10%",
        },

        //Back Button
        {
          id: "btn-back-button-to-register-eligibility",
          label: "Back button to register eligibility",
          action:"back",
          top: "51%",
          left: "44%",
          width: "19%",
          height: "10%",
        },

        //Registering Online Button: Not really a short cut, next button
        {
          id: "btn-jump-to-registering-online",
          label: "Registering Online",
          action: "next",
          top: "75%",
          left: "44%",
          width: "19%",
          height: "10%",
        },
        //Registering by mail button shortcut: Skips to slide 9
        {
          id: "btn-jump-register-by-mail",
          label: "Registering by Mail",
          action: "goto",
          target: 9,
          top: "75%",
          left: "71%",
          width: "19%",
          height: "10%",
        },
        //Just Registered Button shortcut: Skips to slide 10
        {
          id: "btn-jump-just-registered",
          label: "Just Registered Shortcut button",
          action: "goto",
          target: 10,
          top: "88%",
          left: "57%",
          width: "19%",
          height: "10%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 8: Registering Online Slide ----
    {
      id: 8,
      image: "slides/slide-0008.png",
      alt: "Registering by Online",

      buttons: [
        //External button to register online
        {
          id: "btn-external-to-register-online",
          label: "External Link to register online",
          action: "external",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote",
          top: "60%",
          left: "5%",
          width: "12%",
          height: "9%",
        },
        //Just Registered Button shortcut: Skips to slide 10
        {
          id: "btn-jump-just-registered",
          label: "Preparing for Election Day",
          action: "goto",
          target: 10,
          top: "88%",
          left: "51%",
          width: "12%",
          height: "10%",
        },
        //Source button for registering online to vote
        {
          id: "btn-source-register-online",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This information was sourced from Alabama’s official Secretary of State (SoS) website regarding online voter registration requirements and the online application process.",
          descriptionEs: "Esta información fue obtenida del sitio web oficial de la Secretaría de Estado de Alabama (SoS) sobre los requisitos para el registro de votantes en línea y el proceso de solicitud en línea.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        }
      ],

      overlays: [
        // GIF overlay on how to register online
        {
          id: "gif-how-to-register-online",
          src: "gifs/how_to_register_online_slide_8.gif",
          alt: "How to register online",
          top: "18%",
          left: "49%",
          width: "50%", // height scales automatically
        },
      ],
    },
    // ---- SLIDE 9: Registering by Mail----
    {
      id: 9,
      image: "slides/slide-0009.png",
      alt: "Registering by Mail",

      buttons: [
        // external button to register to vote
        {
          id: "btn-external-to-register-to-vote",
          label: "external to register to vote",
          action: "external",
          url: 41,
          top: "88%",
          left: "35%",
          width: "13%",
          height: "10%",
        },
        // Shortcut button to register w/o printer or internet to slide 41
        {
          id: "btn-jump-register-no-printer",
          label: "Shortcut to",
          action: "goto",
          target: 41,
          top: "88%",
          left: "51%",
          width: "13%",
          height: "10%",
        },
        //Source button for registering online to vote
        {
          id: "btn-source-register-online",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This information was sourced from Alabama’s official Secretary of State (SoS) website regarding mail-in voter registration forms, printable registration applications, and mailing instructions.",
          descriptionEs: "Esta información fue obtenida del sitio web oficial de la Secretaría de Estado de Alabama (SoS) sobre los formularios de registro de votantes por correo, las solicitudes de registro imprimibles y las instrucciones de envío por correo.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
      ],

      overlays: [
        {
          id: "gif-how-to-register-mail",
          src: "gifs/Register_by_mail_slide_9.gif",
          alt: "How to register by mail",
          top: "18%",
          left: "47%",
          width: "50%", // height scales automatically
        }
      ],
    },
    // ---- SLIDE 10: Just Registered Slide ----
    {
      id: 10,
      image: "slides/slide-0010.png",
      alt: "Just Registered",

      buttons: [
        //Source button for summary of next steps after registering
        {
          id: "btn-source-next-steps-after-registering",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote#:~:text=Upon,State%2E",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This information was sourced from Alabama's official Secretary of State (SoS) website and USA.gov (An official U.S government website + Link in Source Document)"+
            "\n\n Information Used / Sourced From:\n - Voter ID Card (information and content): AL Secretary of State Website\n- Voter ID Card (delivery speed): USA.gov",
          descriptionEs: "Esta información fue obtenida del sitio web oficial de la Secretaría de Estado de Alabama (SoS) y USA.gov (un sitio web oficial del gobierno de los Estados Unidos + enlace en el documento de fuentes).\n\nInformación utilizada / obtenida de:\n- Tarjeta de identificación de votante (información y contenido): Sitio web de la Secretaría de Estado de Alabama\n- Tarjeta de identificación de votante (tiempo de entrega): USA.gov",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
      ],

      overlays: [],
    },
    // ---- SLIDE 11: Election Day Preparation Slide ----
    {
      id: 11,
      image: "slides/slide-0011.png",
      alt: "Election Day Preparation",

      //Disabling all global button for this slide except home"
      disableGlobal: ["btn-global-next","btn-global-back"], 

      buttons: [
        //Jump then Back button to confirm your registeration, takes user back to this slide 
        {
          id: "btn-jump-then-back-shortcut",
          label: "jump-then-back-confirm-registration",
          action: "goto",
          target: 28,
          top: "23%",
          left: "61%",
          width: "18%",
          height: "15%",
        },
        //Back button to previous slide, irregular back button placement to just registered slide
        {
          id: "btn-back-button",
          label: "back button to just registered",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        
        //Jump button to Absentee/Main In section
        {
          id: "btn-jump-absentee-mail-in-section",
          label: "jump-then-back-mail-in-section",
          action: "goto",
          target: 14,
          top: "71%",
          left: "54%",
          width: "18%",
          height: "13%",
        },

        //Next button to In-person section: KTBED slide
        {
          id: "btn-next-in-person-section",
          label: "next button to in-person section",
          action: "next",
          top: "56%",
          left: "54%",
          width: "18%",
          height: "12%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 12: In-person-voting: Know before election day ----
    {
      id: 12,
      image: "slides/slide-0012.png",
      alt: "Know This Before Election Day",

      buttons: [
        //Source button for summary of next steps after registering NEEDS UPDATING FOR THIS SLIDE
        {
          id: "btn-source-know-this-before-election-day",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/photo-voter-id",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about election dates, polling hours, voter ID requirements, provisional ballots, and polling location lookup tools for Alabama voters.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre fechas electorales, horarios de votación, requisitos de identificación de votante, boletas provisionales y herramientas para buscar lugares de votación para los votantes de Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //Jump then back button to Finding Upcoming Elections Information
        {
          id: "btn-back-find-upcoming-election",
          label: "back button finding upcoming election",
          action: "goto",
          target: 25,
          top: "70%",
          left: "9%",
          width: "18%",
          height: "16%",
        },
        //Jump then back button to List of approved photo ID
        {
          id: "btn-back-list-approved-photo-id",
          label: "back button to approved-photo-id",
          action: "goto",
          target: 29,
          top: "55%",
          left: "41%",
          width: "18%",
          height: "15%",
        },
        //Jump then back button to alabama free id program
        {
          id: "btn-back-free-id-program",
          label: "back button to alabama free ID program",
          action: "goto",
          target: 31,
          top: "71%",
          left: "41%",
          width: "18%",
          height: "15%",
        },
        //Jump then back button to find-polling-location
        {
          id: "btn-back-find-polling-location",
          label: "back button to find polling location",
          action: "goto",
          target: 28,
          top: "67%",
          left: "73%",
          width: "18%",
          height: "15%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 13: Stuff to know about polling place ----
    {
      id: 13,
      image: "slides/slide-0013.png",
      alt: "Stuff to know about polling place",

      disableGlobal: ["btn-global-next"],
      buttons: [
        //Jump then back button to alabama free id program
        {
          id: "btn-back-provisonal-ballot",
          label: "back button to provisional ballot",
          action: "goto",
          target: 33,
          top: "88%",
          left: "50%",
          width: "13%",
          height: "9%",
        },
         //Jump and back to Ready message slide 23
        {
          id: "btn-back-ready-to-vote",
          label: "back button to ready to vote",
          action: "goto",
          target: 23,
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //Source button
        {
          id: "btn-source-about-polling-place",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote",
          title: "Stuff you should know about polling place",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about polling place procedures, voter check-in, photo ID requirements, provisional ballots, and voting methods used on Election Day.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre los procedimientos en los centros de votación, el registro de votantes, los requisitos de identificación con foto, las boletas provisionales y los métodos de votación utilizados el Día de las Elecciones.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 14 Absentee Voting What is it----
    {
      id: 14,
      image: "slides/slide-0014.png",
      alt: "Why Your Vote Matters",
      disableGlobal: ["btn-global-back"],
      buttons: [
         //back button to go to election day preparation, Should not go back through in person voting section
        {
          id: "btn-back-prepare-for-election",
          label: "back button to ready to vote",
          action: "goto",
          target: 11,
          top: "88%",
          left: "67%",
          width: "13%",
          height: "9%",
        },
        //Source button for absentee voting
        {
          id: "btn-source-absentee-voting",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about absentee voting requirements, absentee ballot applications, eligibility rules, and important voting deadlines in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre los requisitos para votar en ausencia, las solicitudes de boletas en ausencia, las reglas de elegibilidad y las fechas límite importantes para votar en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 15: Approved reason to vote absentee ----
    {
      id: 15,
      image: "slides/slide-0015.png",
      alt: "Approved Reasons to Vote Absentee",

      buttons: [
         //Source 
        {
          id: "btn-source-approved-reason-absentee",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about approved absentee voting reasons, absentee ballot eligibility requirements, and absentee election procedures in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre las fechas límite para solicitar boletas en ausencia, las fechas límite para devolverlas y los métodos de entrega para la votación en ausencia en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //External button to full list of approved reason to vote absentee
        {
          id:"btn-external-to-full-list-reason",
          label: "External button to full of reason for absentee",
          action: "external",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting#:~:text=here%2E-,Absentee,turpitude",
          top: "44%",
          left: "73%",
          width: "22%",
          height: "19%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 16: Voting Absentee Deadline Slide ----
    {
      id: 16,
      image: "slides/slide-0016.png",
      alt: "Absentee Voting Deadline",

      buttons: [
         //Source button Absentee Deadline
        {
          id: "btn-source-absentee-deadline",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about absentee voting application deadlines, ballot return deadlines, and delivery methods for absentee voting in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre las fechas límite para solicitar boletas en ausencia, las fechas límite para devolverlas y los métodos de entrega para la votación en ausencia en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 17:How to vote absentee menu ----
    {
      id: 17,
      image: "slides/slide-0017.png",
      alt: "How to vote absentee Menu",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //irregular back button placement
        {
          id: "btn-back-button",
          label: "back button to just registered",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //Jump to Mail section of voting absentee
        {
          id: "btn-jump-to-Mail-Absentee",
          label: "jump button to absentee by mail",
          action: "next",
          top: "45%",
          left: "53%",
          width: "18%",
          height: "14%",
        },
        //Jump to In-person section of voting absentee
        {
          id: "btn-jump-to-in-person",
          label: "jump button to in person absentee",
          action: "goto",
          target: 19,
          top: "62%",
          left: "53%",
          width: "18%",
          height: "14%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 18: Applying Absentee by mail----
    {
      id: 18,
      image: "slides/slide-0018.png",
      alt: "Why Your Vote Matters",
      disableGlobal:["btn-global-next"],
      buttons: [
        //External Button to Applying Absentee
        {
          id: "btn-external-Apply-Absentee",
          label: "back button to just registered",
          action: "external",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting",
          top: "88%",
          left: "51%",
          width: "13%",
          height: "9%",
        },
        //Source button 
        {
          id: "btn-source-applying-absentee-by-mail",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/absentee-ballot-application-by-county",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about absentee ballot applications, county absentee election managers, mailing instructions, and photo ID requirements for absentee voting in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre las solicitudes de boletas en ausencia, los administradores electorales de ausencia del condado, las instrucciones de envío por correo y los requisitos de identificación con foto para votar en ausencia en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //Next button to go to Absentee steps after applying
        {
          id: "btn-jump-after-apply-absentee",
          label: "jump button to after applying absentee",
          action: "goto",
          target: 20,
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
      ],
      overlays: [
        // GIF overlay on how to absentee by mail
        {
          id: "gif-how-to-absentee-by-mail",
          src: "gifs/how_to_absentee_by_mail_slide_18.gif",
          alt: "How to register online",
          top: "18%",
          left: "50%",
          width: "45%", // height scales automatically
        },
      ],
    },
    // ---- SLIDE 19: Applying Absentee In-Person ----
    {
      id: 19,
      image: "slides/slide-0019.png",
      alt: "Applying absentee in person",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //back button to go to Absentee How to Main menu
        {
          id: "btn-back-prepare-for-election",
          label: "back button to ready to vote",
          action: "back",
          top: "88%",
          left: "67%",
          width: "13%",
          height: "9%",
        },
        //Next button to go to Absentee steps after applying
        {
          id: "btn-jump-after-apply-absentee",
          label: "jump button to after applying absentee",
          action: "goto",
          target: 20,
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //External Button to Applying Absentee
        {
          id: "btn-external-Apply-Absentee",
          label: "back button to just registered",
          action: "external",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting",
          top: "88%",
          left: "51%",
          width: "13%",
          height: "9%",
        },
        //Source button 
        {
          id: "btn-source-absentee-in-person",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about applying for absentee voting in person, county absentee election offices, voter ID requirements, and absentee ballot application procedures in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre cómo solicitar votar en ausencia en persona, las oficinas electorales de ausencia del condado, los requisitos de identificación de votante y los procedimientos de solicitud de boletas en ausencia en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        }
      ],
      overlays: [
        // GIF overlay on how to absentee in person
        {
          id: "gif-how-to-absentee-in-person",
          src: "gifs/How_to_absentee_in_person_slide_19.gif",
          alt: "How to register online",
          top: "13%",
          left: "47%",
          width: "50%", // height scales automatically
        },
      ],
    },
    // ---- SLIDE 20: What happens after applying ----
    {
      id: 20,
      image: "slides/slide-0020.png",
      alt: "What happens after absentee application",
      disableGlobal:["btn-global-back"],
      buttons: [
        //Source
        {
          id: "btn-source-after-absentee",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about absentee ballot application processing, absentee election manager procedures, and how approved absentee ballots are delivered to voters in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre el procesamiento de solicitudes de boletas en ausencia, los procedimientos de los administradores electorales de ausencia y cómo se entregan las boletas en ausencia aprobadas a los votantes en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //Back button to absentee how to main menu
        {
          id:"btn-back-to-absentee-main-menu",
          label:"Back button to applying absentee main menu",
          action: "goto",
          target: 17,
          top:"88%",
          left:"66%",
          width:"14%",
          height:"9%"
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 21: Submitting Absentee Ballot ----
    {
      id: 21,
      image: "slides/slide-0021.png",
      alt: "Submitting Absentee Ballot Instructions",

      buttons: [
        //Source
        {
          id: "btn-source-submitting-application",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting",
          title: "Source for submitting absentee ballot",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about absentee ballot submission instructions, affidavit requirements, witness/notary requirements, ballot return procedures, and absentee ballot tracking in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre las instrucciones para enviar boletas en ausencia, los requisitos de declaración jurada, los requisitos de testigos/notarios, los procedimientos de devolución de boletas y el seguimiento de boletas en ausencia en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 22: Tracking your Ballot ----
    {
      id: 22,
      image: "slides/slide-0022.png",
      alt: "Tracking your ballot",

      buttons: [
        //External Button to tracking your ballot
        {
          id: "btn-external-tracking-ballot",
          label: "external button to tracking your ballot",
          action: "external",
          url: "https://myinfo.alabamavotes.gov/VoterView",
          top: "88%",
          left: "51%",
          width: "13%",
          height: "9%",
        },
        //Source button
        {
          id: "btn-source-",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://myinfo.alabamavotes.gov/VoterView",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about absentee ballot tracking, voter registration lookup tools, and checking absentee ballot status in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre el seguimiento de boletas en ausencia, herramientas para buscar el registro de votantes y cómo verificar el estado de una boleta en ausencia en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 23: Ready to Vote Slide ----
    {
      id: 23,
      image: "slides/slide-0023.png",
      alt: "Ready to Vote Slide",
      disableGlobal:["btn-global-back","btn-global-next"],
      buttons: [
         //irregular back button placement
        {
          id: "btn-back-button",
          label: "back button to just registered",
          action: "back",
          top: "86%",
          left: "2%",
          width: "15%",
          height: "12%",
        },
         //Next Button Irregular Size to Know more section
        {
          id: "btn-back-button",
          label: "back button to just registered",
          action: "next",
          top: "86%",
          left: "83%",
          width: "15%",
          height: "12%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 24: Know More Screen: Oh lord... ----
    {
      id: 24,
      image: "slides/slide-0024.png",
      alt: "Know more slide",
      disableGlobal:["btn-global-back","btn-global-next"],
      buttons: [
        //1:Confirming Registration_Polling
        {
          id: "btn-confirm_registration_polling",
          label: "Special voting topic: Confirm Registration and polling",
          action: "goto",
          target: 28,
          top: "17%",
          left: "35%",
          width: "17%",
          height: "9%",
        },
        //2 Alabama Free Voting ID Button
        {
          id: "btn-Alabama_Free_Voting_ID_Program",
          label: "Special voting topic: Alabama_Free_Voting_ID",
          action: "goto",
          target: 31,
          top: "17%",
          left: "57%",
          width: "17%",
          height: "9%",
        },
        //3 Provisional ballot
         {
          id: "btn-jump-provisional-ballot",
          label: "Special voting topic: provisonal ballot",
          action: "goto",
          target: 33,
          top: "17%",
          left: "79%",
          width: "17%",
          height: "9%",
        },
        //4 disabled voter button
        {
          id: "btn-voting-right-disabled-voters",
          label: "Special voting topic:disabled voters",
          action: "goto",
          target: 27,
          top: "32%",
          left: "35%",
          width: "17%",
          height: "9%",
        },
        //5 photo id requirement button
        {
          id: "btn-photo-id-requirement",
          label: "Special voting topic: Photo ID Requirement",
          action: "goto",
          target: 29,
          top: "33%",
          left: "57%",
          width: "17%",
          height: "9%",
        },
        //6 primary vs general election 
         {
          id: "btn-primary-general-election",
          label: "Special voting topic: primary_vs_general",
          action: "goto",
          target: 34,
          top: "33%",
          left: "80%",
          width: "17%",
          height: "9%",
        },
        //7 find upcoming election
        {
          id: "btn-find-upcoming-election",
          label: "Special voting topic: find upcoming election",
          action: "goto",
          target: 25,
          top: "48%",
          left: "35%",
          width: "17%",
          height: "9%",
        },
        //8 your rights as a voter
        {
          id: "btn-your-rights-as-a-voter",
          label: "Special voting topic: your rights as a voter",
          action: "goto",
          target: 26,
          top: "49%",
          left: "58%",
          width: "17%",
          height: "9%",
        },
        //9 finding sample ballots
         {
          id: "btn-finding-sample-ballot",
          label: "Special voting topic: finding sample ballot",
          action: "goto",
          target: 35,
          top: "49%",
          left: "80%",
          width: "17%",
          height: "9%",
        },
        //10 Get Reminder for Election
        {
          id: "btn-reminder-election",
          label: "Special voting topic: Get Reminder",
          action: "goto",
          target: 40,
          top: "64%",
          left: "35%",
          width: "17%",
          height: "9%",
        },
        //11 Election cycle
        {
          id: "btn-election-cycle",
          label: "Special voting topic: election cycles",
          action: "goto",
          target: 36,
          top: "64%",
          left: "58%",
          width: "17%",
          height: "9%",
        },
        //12 Voting right for felons
         {
          id: "btn-voting-right-for-felons",
          label: "Special voting topic: voting right for felons",
          action: "goto",
          target: 39,
          top: "64%", //56
          left: "80%", //80
          width: "17%", //17
          height: "9%", //9
        },
        //13 Source Used Documentation 
        {
          id: "btn-source-used-documentation",
          label: "Special voting topic: Source Used Documentation",
          action: "goto",
          target: 37,
          top: "87%",
          left: "37%",
          width: "17%",
          height: "9%",
        },
        //14 About and Contact Info
         {
          id: "btn-about-and-contact-info",
          label: "Special voting topic: about and contact info",
          action: "goto",
          target: 38,
          top: "87%",
          left: "58%",
          width: "17%",
          height: "9%",
        },
        //irregular back button placement
        {
          id: "btn-back-button",
          label: "back button to ready to vote slide",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 25 Find upcoming election ----
    {
      id: 25,
      image: "slides/slide-0025.png",
      alt: "finding upcoming election",

      disableGlobal:["btn-global-next","btn-global-back"],

      buttons: [
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //external button to upcoming election website
        {
          id: "btn-external-button-to-upcoming-election",
          label: "back button to know more menu",
          action: "external",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/upcoming-elections",
          top: "88%",
          left: "67%",
          width: "13%",
          height: "9%",
        },
        //source button
        {
          id: "btn-source-upcoming-election",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/upcoming-elections",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about upcoming Alabama elections, election calendars, statewide elections, and local election schedules.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre las próximas elecciones en Alabama, calendarios electorales, elecciones estatales y horarios de elecciones locales.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 26 Your rights as a voter ----
    {
      id: 26,
      image: "slides/slide-0026.png",
      alt: "your rights as a voter",
      disableGlobal:["btn-global-next","btn-global-back"],
      buttons: [
         //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "goto",
          target: 24,
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //source button
        {
          id: "btn-source-rights-as-a-voter",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/faqs",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from official federal and Alabama election resources about voter protections, voting assistance rights, replacement ballots, language assistance, and voter rights on Election Day.",
          descriptionEs: "Esta página utiliza información de recursos electorales oficiales federales y de Alabama sobre protecciones para votantes, derechos de asistencia para votar, boletas de reemplazo, asistencia lingüística y derechos de los votantes el Día de las Elecciones.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 27 Disabled Voter ----
    {
      id: 27,
      image: "slides/slide-0027.png",
      alt: "Disabled Voters",
      disableGlobal:["btn-global-next","btn-global-back"],
      buttons: [
        //source button
        {
          id: "btn-source-disabled-voters",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/assistance-disability",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from official Alabama election resources and federal disability voting protections about accessible voting options, absentee voting accommodations, accessible voting machines, and disability-related voter assistance rights.",
          descriptionEs: "Esta página utiliza información de recursos electorales oficiales de Alabama y protecciones federales para votantes con discapacidades sobre opciones de votación accesibles, adaptaciones para votar en ausencia, máquinas de votación accesibles y derechos de asistencia para votantes relacionados con discapacidades.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "goto",
          target: 24,
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 28 Confirm Registration and Polling ----
    {
      id: 28,
      image: "slides/slide-0028.png",
      alt: "Confirm Registration and Polling",
      disableGlobal:["btn-global-next","btn-global-back"],
      buttons: [
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          target: 24,
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //source button
        {
          id: "btn-source-",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://myinfo.alabamavotes.gov/VoterView",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about checking voter registration status, ballot status, polling locations, voter addresses, and updating voter registration information in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre cómo verificar el estado del registro de votante, el estado de la boleta, los lugares de votación, las direcciones de los votantes y cómo actualizar la información de registro de votante en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //jump button to registering menu
        {
          id: "btn-jump-button-to-registering-menu",
          label: "back button to register menu",
          action: "goto",
          target: 7,
          top: "88%",
          left: "67%",
          width: "13%",
          height: "9%",
        },
        //external button to checking registration
        {
          id: "btn-external-button-to-upcoming-election",
          label: "back button to find upcoming election",
          action: "external",
          url: "https://myinfo.alabamavotes.gov/VoterView",
          top: "27%",
          left: "12%",
          width: "12%",
          height: "9%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 29 Photo Requirement List Part 1 ----
    {
      id: 29,
      image: "slides/slide-0029.png",
      alt: "Photo Requirement List Part 1",
      disableGlobal: ["btn-global-back"],
      buttons: [
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "67%",
          width: "13%",
          height: "9%",
        },
        //external button to upcoming election website
        {
          id: "btn-jump-free-id-program",
          label: "jump to free id program",
          action: "goto",
          target: 31,
          top: "88%",
          left: "51%",
          width: "13%",
          height: "9%",
        },
        //source button
        {
          id: "btn-source-voter-ID",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/voter-id",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about approved photo IDs accepted for voting in Alabama and voter photo ID requirements for Election Day.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre las identificaciones con foto aprobadas para votar en Alabama y los requisitos de identificación para el Día de las Elecciones.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 30 Photo Requirement list part 2----
    {
      id: 30,
      image: "slides/slide-0030.png",
      alt: "Photo ID List Part 2",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
         //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //external button to upcoming election website
        {
          id: "btn-jump-free-id-program",
          label: "jump to free id program",
          action: "goto",
          target: 31,
          top: "88%",
          left: "67%",
          width: "13%",
          height: "9%",
        },
        //source button
        {
          id: "btn-source-voter-ID",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/voter-id",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about approved photo IDs accepted for voting in Alabama and voter photo ID requirements for Election Day.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre las identificaciones con foto aprobadas para votar en Alabama y los requisitos de identificación para el Día de las Elecciones.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
      ],
      overlays: [

      ],
    },
    // ---- SLIDE 31 Free photo ID program ----
    {
      id: 31,
      image: "slides/slide-0031.png",
      alt: "Alabamas free photo id",

      buttons: [
        //jump button to photo id list
        {
          id: "btn-jump-photo-list",
          label: "valid photo list",
          action: "goto",
          target: 29,
          top: "88%",
          left: "51%",
          width: "13%",
          height: "9%",
        },
        //source button
        {
          id: "btn-source-free-ID-program",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/photo-voter-id/obtain-free-photo-voter-id",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about Alabama’s free voter photo ID program, voter ID eligibility requirements, and obtaining a free photo ID for voting in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre el programa gratuito de identificación con foto para votantes de Alabama, los requisitos de elegibilidad y cómo obtener una identificación gratuita para votar en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 32 How to Apply to vote for program----
    {
      id: 32,
      image: "slides/slide-0032.png",
      alt: "How to Apply for program",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //source button
        {
          id: "btn-source-apply-free-program",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/photo-voter-id/obtain-free-photo-voter-id",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about applying for Alabama’s free voter photo ID card, eligibility requirements, accepted identity documents, and application locations.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre cómo solicitar la tarjeta gratuita de identificación con foto para votantes de Alabama, los requisitos de elegibilidad, los documentos de identidad aceptados y los lugares de solicitud.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //External button to full list of approved reason to vote absentee
        {
          id:"btn-external-to-Application",
          label: "External button to application",
          action: "external",
          url: "https://www.sos.alabama.gov/alabama-votes/photo-voter-id/obtain-free-photo-voter-id",
          top: "59%",
          left: "63%",
          width: "16%",
          height: "16%",
        },
        //External button to finding local board of registar
        {
          id:"btn-external-to-finding-local-board",
          label: "External button to finding local board",
          action: "external",
          url: "https://www.sos.alabama.gov/city-county-lookup/bor",
          top: "59%",
          left: "82%",
          width: "16%",
          height: "16%",
        },
         //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        } 
      ],
      overlays: [],
    },
    // ---- SLIDE 33: Provisonal Ballots ----
    {
      id: 33,
      image: "slides/slide-0033.png",
      alt: "What are provisonal ballots",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        ////source button
        {
          id: "btn-source-provisional-ballot",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/sites/default/files/election-2022/2023_Provisional_Ballot_Guide.pdf",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about provisional ballots, voter eligibility issues, provisional ballot procedures, and how voters can resolve issues to have their ballot counted.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre las boletas provisionales, problemas de elegibilidad de votantes, procedimientos de boletas provisionales y cómo los votantes pueden resolver problemas para que su boleta sea contada.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
         //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        }
        
      ],
      overlays: [],
    },
    // ---- SLIDE 34 Primary vs General Election----
    {
      id: 34,
      image: "slides/slide-0034.png",
      alt: "Primary vs General Election",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //source button
        {
          id: "btn-source-primary-general",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about primary elections, general elections, runoff elections, and Alabama election procedures.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre elecciones primarias, elecciones generales, elecciones de desempate y procedimientos electorales de Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 35: Finding Sample ----
    {
      id: 35,
      image: "slides/slide-0035.png",
      alt: "Finding Sample Ballot",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //source button
        {
          id: "btn-source-finding-sample-ballot",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/2026-primary-election-sample-ballots",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official Secretary of State website about sample ballots, county ballot previews, party ballots, and viewing election ballots before Election Day.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Secretaría de Estado de Alabama sobre boletas de muestra, vistas previas de boletas por condado, boletas de partidos y cómo ver las boletas antes del Día de las Elecciones.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //external button to sample ballot website
        {
          id: "btn-external-button-to-sample-ballot",
          label: "external button to sample ballot website",
          action: "external",
          url: "https://www.sos.alabama.gov/alabama-votes",
          top: "88%",
          left: "66%",
          width: "13%",
          height: "9%",
        },
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
      ],
      overlays: [
        // GIF overlay on how to register online //UPDATE GIF
        {
          id: "gif-how-to-find-sample-ballot",
          src: "gifs/How_to_find_sample_ballot_slide_35.gif",
          alt: "How to register online",
          top: "22%",
          left: "48%",
          width: "50%", // height scales automatically
        }
      ],
    },
    // ---- SLIDE 36: Election Cycle ----
    {
      id: 36,
      image: "slides/slide-0036.png",
      alt: "Election Cycle",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //source button
        {
          id: "btn-source-",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.fvap.gov/uploads/FVAP/Outreach-Materials/PrimaryElectionsFactSheet.pdf",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Federal Voting Assistance Program website (Government Website) about election cycles, election schedules, primary elections, general elections, and how often different government offices are elected.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de la Federal Voting Assistance Program sobre ciclos electorales, calendarios electorales, elecciones primarias, elecciones generales y con qué frecuencia se eligen diferentes cargos gubernamentales.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //external button to election cycle website
        {
          id: "btn-external-button-to-upcoming-election",
          label: "back button to know more menu",
          action: "external",
          url: "https://www.sos.alabama.gov/sites/default/files/2023-07/Alabama%20Election%20Chart%202016-2030%20FINAL%207.19.2023.pdf",
          top: "88%",
          left: "67%",
          width: "13%",
          height: "9%",
        },
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 37 Source and Information ---- 
    {
      id: 37,
      image: "slides/slide-0037.png",
      alt: "Sources and Information",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //jump button to Contact Information
        {
          id: "btn-jump-button-to-registering-menu",
          label: "back button to know more menu",
          action: "goto",
          target: 38,
          top: "88%",
          left: "67%",
          width: "13%",
          height: "9%",
        },
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //source button
        {
          id: "btn-source-finding-sample-ballot",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://docs.google.com/document/d/19lc_D2ha9UNJDfugI_jrtoXh5rwK8NSAnIjEKDOOLPA/edit?usp=sharing",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "To view all sources that was used in this project, please click below to access our document for all sources used",
          descriptionEs: "Para mirar todo los fuentes usado en este projecto, abrí el enlace para acesar el documento",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 38 Contact and Info Slide ----
    {
      id: 38,
      image: "slides/slide-0038.png",
      alt: "contact and info page",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          target: 24,
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //instagram button external
        {
          id: "btn-instagram-button",
          label: "instagram external",
          action: "external",
          url:"https://www.instagram.com/splcenter/",
          top: "52%",
          left: "54%",
          width: "9%",
          height: "15%",
        },
        //facebook button external
        {
          id: "btn-facebook-button",
          label: "facebook external",
          action: "external",
          url:"https://www.facebook.com/SPLCenter/",
          top: "52%",
          left: "66%",
          width: "9%",
          height: "15%",
        },
        //X social media button external
        {
          id: "btn-X-button",
          label: "X external",
          action: "external",
          url:"https://x.com/splcenter",
          top: "52%",
          left: "77%",
          width: "9%",
          height: "15%",
        },
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          target: 24,
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },

      ],
      overlays: [],
    },
    // ---- SLIDE 39 voting rights for felons ----
    {
      id: 39,
      image: "slides/slide-0039.png",
      alt: "Voting right for felons",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //source button
        {
          id: "btn-source-more-info",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://paroles.alabama.gov/wp-content/uploads/Voting-Rights-Final-Version.pdf",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This information was sourced from Alabama’s official Secretary of State (SoS) website and Alabama Bureau of Pardons and Paroles resources regarding felony voting eligibility, restoration requirements, unpaid fines/fees, and the voting rights restoration process for individuals with disqualifying felony convictions.",
          descriptionEs: "Esta información fue obtenida del sitio web oficial de la Secretaría de Estado de Alabama (SoS) y de recursos de la Oficina de Indultos y Libertad Condicional de Alabama sobre elegibilidad para votar con antecedentes de delitos graves, requisitos de restauración de derechos, multas/cuotas impagas y el proceso de restauración de derechos de voto para personas con condenas por delitos graves descalificantes.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 40: Reminder Page ----
    {
      id: 40,
      image: "slides/slide-0040.png",
      alt: "Useful Resource ",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to know more menu",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //Reminder Button 2026 Primary Election
        {
          id: "btn-primary-election",
          label: "Add Primary Election Day",
          action: "calendar",
          title: "Alabama Primary Election Day — Go Vote!",
          description: "Polls are open 7am–7pm. Bring your photo ID.",
          location: "Your local polling place, Alabama",
          startDate: "2026-05-19T07:00:00",   // YYYY-MM-DDTHH:MM:SS
          endDate:   "2026-05-19T19:00:00",
          allDay: false,
          top: "46%", left: "74%", width: "13%", height: "9%",
        },
        //Reminder Button 2026 Primary Runoff Election
        {
          id: "btn-primary-runoff",
          label: "reminder for primary runoff election",
          action: "calendar",
          title: "Alabama Runoff Election — Go Vote!",
          description: "Polls are open 7am–7pm. Bring your photo ID.",
          location: "Your local polling place, Alabama",
          startDate: "2026-06-16T07:00:00",   // YYYY-MM-DDTHH:MM:SS
          endDate:   "2026-06-16T19:00:00",
          allDay: false,
          top: "60%", left: "74%", width: "13%", height: "9%",
        },
        //Reminder Button 2026 General Election
        {
          id: "btn-general-election",
          label: "reminder for general election",
          action: "calendar",
          title: "Alabama General Election — Go Vote!",
          description: "Polls are open 7am–7pm. Bring your photo ID.",
          location: "Your local polling place, Alabama",
          startDate: "2026-11-03T07:00:00",   // YYYY-MM-DDTHH:MM:SS
          endDate:   "2026-11-03T19:00:00",
          allDay: false,
          top: "75%",
          left: "74%",
          width: "13%",
          height: "9%",
        },
      ],
      overlays: [],
    },
    // ---- SLIDE 41 Registering by mail no internet/printer Other Menu ----
    {
      id: 41,
      image: "slides/slide-0041.png",
      alt: "Reigistering by mail no internet/printer",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
         //Jump to no printer tutorial
        {
          id: "btn-jump-to-no-printer",
          label: "no printer registering",
          action: "goto",
          target: 42,
          top: "34%",
          left: "47%",
          width: "18%",
          height: "14%",
        },
        //Jump to no printer and internet
        {
          id: "btn-jump-to-no-printer/internet",
          label: "jump to no printer/internet",
          action: "goto",
          target: 43,
          top: "34%",
          left: "70%",
          width: "18%",
          height: "14%",
        },
        //Jump Back
        {
          id: "btn-jump-back",
          label: "jump back",
          action: "back",
          target: 9,
          top: "67%",
          left: "60%",
          width: "18%",
          height: "14%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE 42 Register by mail no printer ----
    {
      id: 42,
      image: "slides/slide-0042.png",
      alt: "Register by mail no printer",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //back button to register special
        {
          id: "btn-back-button",
          label: "back button to special register",
          action: "back",
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        },
        //Just Registered Button shortcut: Skips to slide 10
        {
          id: "btn-jump-just-registered",
          label: "Just Registered Shortcut button",
          action: "goto",
          target: 10,
          top: "88%",
          left: "67%",
          width: "13%",
          height: "10%",
        },
        //source button
        {
          id: "btn-source-register-no-printer",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official election website about requesting voter registration forms by mail, mail-in voter registration procedures, and submitting voter registration forms to local Boards of Registrars in Alabama.",
          descriptionEs: "Esta página utiliza información del sitio web oficial de elecciones de Alabama sobre cómo solicitar formularios de registro de votantes por correo, procedimientos de registro por correo y cómo enviar formularios de registro a las Juntas Locales de Registradores en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        }
      ],
      overlays: [
        // GIF overlay on how to register online //UPDATE GIF
        {
          id: "gif-how-to-mail-in-reg-no-printer",
          src: "gifs/How_to_request_mail_in_reg_no_printer_slide_42.gif",
          alt: "How to register online",
          top: "24%",
          left: "52%",
          width: "47%", // height scales automatically
        }
      ],
    },
    // ---- SLIDE 43 Register by mail with no printer or internet----
    {
      id: 43,
      image: "slides/slide-0043.png",
      alt: "Register by mail no printer or internet",
      disableGlobal: ["btn-global-back","btn-global-next"],
      buttons: [
        //source button
        {
          id: "btn-source-register-by-mail-no-printer-or-internet",
          label: "Source: Alabama SoS Website",
          action: "source",
          url: "https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote",
          title: "Where This Information Came From",
          titleEs: "Donde vieno esta information",
          description:
            "This page uses information from Alabama’s official election resources about requesting voter registration forms by phone or mail and registering to vote without internet or printer access in Alabama.",
          descriptionEs: "Esta página utiliza información de recursos electorales oficiales de Alabama sobre cómo solicitar formularios de registro de votantes por teléfono o correo y cómo registrarse para votar sin acceso a internet o impresora en Alabama.",
          top: "90%",
          left: "2%",
          width: "14%",
          height: "6%",
        },
        //Just Registered Button shortcut: Skips to slide 10
        {
          id: "btn-jump-just-registered",
          label: "Just Registered Shortcut button",
          action: "goto",
          target: 10,
          top: "88%",
          left: "67%",
          width: "13%",
          height: "10%",
        },
        //back button to know more menu
        {
          id: "btn-back-button",
          label: "back button to special register",
          action: "goto",
          target: 41,
          top: "88%",
          left: "83%",
          width: "13%",
          height: "9%",
        }
      ],
      overlays: [],
    },
    // ---- SLIDE Template ----
    {
      id: -1,
      image: "slides/slide-0000.png",
      alt: "name of slide",

      //Add buttons here
      buttons: [],

      //Here are for gifs
      overlays: [],
    },
    // ---------------------------------------------------------------------------
    // ADD MORE SLIDES HERE — copy any block above as a template
    // ---------------------------------------------------------------------------

  ],
};
