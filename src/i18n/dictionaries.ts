import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  skipToContent: string;
  nav: {
    main: string;
    mobile: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    resume: string;
    openMenu: string;
    closeMenu: string;
  };
  language: {
    label: string;
    he: string;
    en: string;
  };
  hero: {
    kicker: string;
    tagline: string;
    viewWork: string;
    getInTouch: string;
  };
  about: {
    kicker: string;
    heading: string;
    p1: string;
    p2: string;
    stats: {
      years: string;
      projects: string;
      stack: string;
      unit: string;
    };
    imageAlt: string;
  };
  skills: {
    kicker: string;
    heading: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      devops: string;
      tools: string;
    };
  };
  projects: {
    kicker: string;
    heading: string;
    intro: string;
    viewProject: string;
    sourceCode: string;
    openProject: string;
    roleLabel: string;
    focusLabel: string;
    proofLabel: string;
    stackLabel: string;
    highlightsLabel: string;
    featuredLabel: string;
    privateProof: string;
    conceptProof: string;
    publishedProof: string;
    requestWalkthrough: string;
    gallery: {
      prev: string;
      next: string;
      goToSlide: string;
      counter: string;
    };
    items: Record<
      string,
      {
        title: string;
        description: string;
        longDescription: string;
        role: string;
        focus: string;
        proofNote: string;
        highlights: string[];
      }
    >;
  };
  experience: {
    kicker: string;
    heading: string;
    present: string;
    highlightsLabel: string;
    items: Record<
      string,
      { company: string; role: string; description: string; highlights: string[] }
    >;
  };
  contact: {
    kicker: string;
    heading: string;
    subtitle: string;
    availability: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    hiddenField: string;
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    form: {
      errorRequired: string;
      errorEmail: string;
      success: string;
      errorGeneric: string;
    };
  };
  footer: {
    backToTop: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    home: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  he: {
    meta: {
      title: "אור כהן | מפתח Full-Stack",
      description:
        "תיק עבודות של אור כהן — מפתח פול סטאק עם 5 שנות ניסיון בפיתוח בצבא, ובמקביל פרויקטים אישיים בווב ובמובייל עם React, React Native, Node.js ו-Jenkins.",
    },
    skipToContent: "דלג לתוכן הראשי",
    nav: {
      main: "ניווט ראשי",
      mobile: "ניווט במובייל",
      about: "אודות",
      skills: "מיומנויות",
      projects: "פרויקטים",
      experience: "ניסיון",
      contact: "יצירת קשר",
      resume: "קורות חיים",
      openMenu: "פתח תפריט",
      closeMenu: "סגור תפריט",
    },
    language: {
      label: "שפה",
      he: "עברית",
      en: "English",
    },
    hero: {
      kicker: "מפתח תוכנה שבונה מוצרים מקצה לקצה",
      tagline:
        "חמש שנות ניסיון בפיתוח בצבא, ובמקביל עבודה על פרויקטים אישיים בווב, במובייל, וגם בכל מה שקשור ל-AI, אג'נטים ו-skills.",
      viewWork: "לצפייה בפרויקטים",
      getInTouch: "דברו איתי",
    },
    about: {
      kicker: "01. היכרות",
      heading: "קצת עליי",
      p1:
        "אני מפתח פול סטאק עם חמש שנות ניסיון בפיתוח בצבא. רוב העבודה שלי שם הייתה על Angular, ובמקביל בבית בניתי פרויקטים אישיים עם React ו-React Native.",
      p2:
        "מעבר לפיתוח, אני מבין טוב גם בעבודה עם כלי AI, Claude, Codex, בניית אג'נטים, ובניית skills. אני יודע לקחת רעיון, לפרק אותו נכון, ולבנות ממנו משהו שעובד באמת.",
      stats: {
        years: "שנות ניסיון",
        projects: "פרויקטים אישיים",
        stack: "Frontend / Backend",
        unit: "יחידת אופק, חיל האוויר",
      },
      imageAlt: "אור כהן — מפתח Full-Stack",
    },
    skills: {
      kicker: "02. יכולות",
      heading: "טכנולוגיות שאני עובד איתן",
      subtitle:
        "אלה הכלים שאני באמת עובד איתם, גם בפיתוח בצבא וגם בפרויקטים האישיים.",
      categories: {
        frontend: "צד לקוח",
        backend: "צד שרת",
        devops: "DevOps",
        tools: "כלים",
      },
    },
    projects: {
      kicker: "03. עבודות",
      heading: "פרויקטים נבחרים",
      intro:
        "אני מעדיף להציג פרויקטים כמו שהם. איפה יש צילומי מסך אמיתיים אני מראה אותם, ואיפה אין דמו ציבורי אני אומר את זה ישירות.",
      viewProject: "לצפייה בפרויקט",
      sourceCode: "קוד מקור",
      openProject: "פתח פרויקט",
      roleLabel: "מה עשיתי",
      focusLabel: "על מה שמתי דגש",
      proofLabel: "מה אפשר לראות",
      stackLabel: "סטאק",
      highlightsLabel: "מה יש במוצר",
      featuredLabel: "פרויקט מרכזי",
      privateProof: "מוצר פרטי",
      conceptProof: "פרויקט אישי / קונספט",
      publishedProof: "זמין בחנויות",
      requestWalkthrough: "אם צריך, אפשר לעבור על זה יחד בשיחה.",
      gallery: {
        prev: "תמונה קודמת",
        next: "תמונה הבאה",
        goToSlide: "עבור לתמונה",
        counter: "{current} / {total}",
      },
      items: {
        smartshift: {
          title: "SmartShift",
          description:
            "מערכת לניהול משמרות עם שיבוץ, אילוצים וסוגי תפקידים.",
          longDescription:
            "המערכת נבנתה סביב צורך תפעולי אמיתי: לרכז זמינות, אילוצים ותפקידים במקום אחד, ולעזור למי שמכין משמרות לעבוד יותר מסודר ויותר מהר.",
          role: "אפיון, פיתוח full-stack ובניית המסכים המרכזיים.",
          focus: "לפתור בעיית שיבוץ אמיתית בלי לסבך את המשתמש.",
          proofNote:
            "המערכת פרטית, לכן מוצגים כאן צילומי מסך ולא דמו פתוח.",
          highlights: [
            "שיבוץ משמרות עם אילוצים",
            "תמיכה בכמה סוגי תפקידים",
            "ממשק פשוט יחסית למערכת מורכבת",
          ],
        },
        playsmart: {
          title: "PlaySmart",
          description:
            "מערכת לבחירת הרכב לפי נתונים, כושר וזמינות שחקנים.",
          longDescription:
            "זה פרויקט אישי שמנסה לקחת נתונים על שחקנים, כושר וזמינות, ולהפוך אותם לכלי שעוזר לקבל החלטה לפני משחק.",
          role: "הגדרת הרעיון, full-stack ובניית הזרימה המרכזית.",
          focus: "להפוך נתונים למשהו שקל להבין ולעבוד איתו.",
          proofNote:
            "כרגע זה מוצג כפרויקט אישי ולא כמערכת ציבורית פעילה.",
          highlights: [
            "שקלול נתונים על שחקנים",
            "התייחסות לזמינות ולכושר",
            "מסך ברור לקבלת החלטה",
          ],
        },
        sportzone: {
          title: "SportZone",
          description:
            "אפליקציה לאוהדי ספורט עם פיד, מעקב וקהילה.",
          longDescription:
            "הפרויקט הזה בודק איך בונים חוויית מובייל סביב תוכן וקהילה: פידים, פרופילים, קבוצות ושחקנים במקום אחד.",
          role: "פיתוח mobile-first ובניית המבנה הראשי של האפליקציה.",
          focus: "לבנות אפליקציה שקל לחזור אליה דרך תוכן וקהילה.",
          proofNote:
            "זה פרויקט אישי, ואין כרגע גרסה ציבורית פתוחה.",
          highlights: [
            "פיד אישי ופידים לפי קבוצה",
            "פרופילי משתמשים",
            "מבנה שמחבר תוכן ומעקב",
          ],
        },
        "poop-bags": {
          title: "Poop Bags",
          description:
            "אפליקציה קהילתית לבעלי כלבים עם מיקומים, עדכונים ומפה.",
          longDescription:
            "זה רעיון למוצר קטן אבל שימושי: לראות איפה יש תחנות שקיות, לעדכן מהשטח, ולעשות את זה דרך ממשק פשוט במובייל.",
          role: "הגדרת ה-MVP, flow של המוצר, וחיבור בין מפה לתוכן.",
          focus: "לקחת צורך קטן ויומיומי ולבנות סביבו מוצר ברור.",
          proofNote:
            "כרגע זה מוצג כפרויקט אישי ברמת MVP.",
          highlights: [
            "מפה עם מיקומים",
            "עדכונים קהילתיים",
            "MVP פשוט וברור",
          ],
        },
        "zvi-kadocs": {
          title: "DocMatch",
          description:
            "אפליקציה פנימית שעוזרת לעשות סדר בין מספרי תעודות לבין הדוח שמגיע בסוף החודש.",
          longDescription:
            "בנייתי את האפליקציה הזאת עבור אבא שלי כדי לחסוך עבודה ידנית. במהלך החודש הוא רושם את מספרי התעודות שהוא עובד איתם, ובסוף החודש מעלה את קובץ ה-PDF שהוא מקבל מהעבודה. המערכת משווה בין הרשימות ועוזרת לזהות התאמות, חוסרים, ומה קיים בצד אחד ולא בצד השני.",
          role: "אפיון הצורך, פיתוח המערכת ובניית תהליך ההשוואה.",
          focus: "לחסוך עבודה ידנית ולעשות סדר בתהליך חודשי שחוזר על עצמו.",
          proofNote:
            "זה כלי פנימי שנבנה לשימוש אמיתי, ולכן כרגע אין לו דמו ציבורי.",
          highlights: [
            "שמירה מסודרת של מספרי תעודות",
            "העלאת PDF והשוואה מול הרשימה שנשמרה",
            "זיהוי חסרים, התאמות וחריגות",
          ],
        },
        shalachti: {
          title: "שלחתי",
          description:
            "מערכת עם שתי אפליקציות: אחת לנהגים ואחת ללקוחות, סביב יצירה ובחירה של משלוחים.",
          longDescription:
            "זה פרויקט שבנוי כשתי אפליקציות נפרדות: 'שלחתי נהגים' ו'שלחתי לקוחות'. הנהגים יכולים לראות משלוחים זמינים, לבחור משלוח, לראות פרטים רלוונטיים וליצור קשר. בצד השני, הלקוחות יכולים לפתוח משלוחים ולנהל את התהליך. לפי מה שסיפרת, האפליקציות זמינות גם ב-App Store וגם ב-Google Play.",
          role: "אפיון, פיתוח האפליקציות, ובניית הזרימה לשני סוגי המשתמשים.",
          focus: "לבנות מוצר ברור שמחבר בין מי שמפרסם משלוח לבין הנהג שלוקח אותו.",
          proofNote:
            "האפליקציות זמינות בחנויות, וצילומי מסך יצורפו בהמשך.",
          highlights: [
            "אפליקציה לנהגים ואפליקציה ללקוחות",
            "צפייה במשלוחים זמינים ובחירת משלוח",
            "יצירת משלוחים וניהול התהליך מצד הלקוח",
          ],
        },
      },
    },
    experience: {
      kicker: "04. מסלול",
      heading: "ניסיון מקצועי",
      present: "היום",
      highlightsLabel: "דגשים",
      items: {
        "idf-ofek": {
          company: 'צה"ל',
          role: "מפתח Full-Stack",
          description:
            "בצבא עבדתי על מערכות פנימיות עם אחריות אמיתית, דרישות יציבות, ומשתמשים שבאמת עובדים עם המערכת ביום-יום.",
          highlights: [
            "עבודה שוטפת על Angular",
            "פיתוח full-stack סביב מערכות פנימיות",
            "עבודה עם Jenkins ו-CI/CD",
          ],
        },
      },
    },
    contact: {
      kicker: "05. קשר",
      heading: "בואו נעבוד יחד",
      subtitle:
        "אם יש לכם פרויקט, רעיון, או תפקיד רלוונטי, אפשר לשלוח הודעה.",
      availability:
        "עדיף לכתוב בקצרה מה אתם בונים, באיזה שלב אתם נמצאים, ואיך אני יכול לעזור.",
      name: "שם",
      email: "אימייל",
      message: "הודעה",
      send: "שלח הודעה",
      sending: "שולח...",
      hiddenField: "השאר ריק",
      placeholders: {
        name: "ישראל ישראלי",
        email: "you@example.com",
        message: "ספרו לי על הפרויקט שלכם...",
      },
      form: {
        errorRequired: "יש למלא את כל השדות.",
        errorEmail: "נא להזין כתובת אימייל תקינה.",
        success: "ההודעה נשלחה בהצלחה! אחזור אליך בקרוב.",
        errorGeneric: "אירעה שגיאה. נסה שוב מאוחר יותר, או שלח אימייל ישירות.",
      },
    },
    footer: {
      backToTop: "חזרה למעלה",
    },
    notFound: {
      title: "404",
      subtitle: "העמוד המבוקש אינו קיים.",
      home: "חזרה לדף הבית",
    },
  },
  en: {
    meta: {
      title: "Or Cohen | Full-Stack Developer",
      description:
        "Portfolio of Or Cohen — 5 years of military development experience, plus personal projects built with React, React Native, Node.js, and Jenkins.",
    },
    skipToContent: "Skip to main content",
    nav: {
      main: "Main navigation",
      mobile: "Mobile navigation",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    language: {
      label: "Language",
      he: "עברית",
      en: "English",
    },
    hero: {
      kicker: "Software developer building products end to end",
      tagline:
        "5 years of development experience in the military, alongside personal web and mobile projects and hands-on work with AI tools, agents, and skills.",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
    },
    about: {
      kicker: "01. Discovery",
      heading: "About Me",
      p1:
        "I'm a full-stack developer with 5 years of development experience in the military. Most of my work there was frontend with Angular, and at home I built personal projects with React and React Native.",
      p2:
        "Beyond product development, I'm also strong in AI workflows, Claude, Codex, agent building, and skill creation. I know how to take an idea, break it down well, and turn it into something that actually works.",
      stats: {
        years: "Years Experience",
        projects: "Personal Projects",
        stack: "Frontend / Backend",
        unit: "Ofek Unit, Air Force",
      },
      imageAlt: "Or Cohen — Full-Stack Developer",
    },
    skills: {
      kicker: "02. Capabilities",
      heading: "Technologies I Actually Use",
      subtitle:
        "These are the tools I actually worked with, both in military development and in personal projects.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps",
        tools: "Tools",
      },
    },
    projects: {
      kicker: "03. Showcase",
      heading: "Featured Projects",
      intro:
        "I prefer to show projects as they are. Where I have real screenshots, I show them. Where there is no public demo, I say that directly.",
      viewProject: "View Project",
      sourceCode: "Source Code",
      openProject: "Open project",
      roleLabel: "My part",
      focusLabel: "Main focus",
      proofLabel: "What you can see",
      stackLabel: "Stack",
      highlightsLabel: "Inside the product",
      featuredLabel: "Main project",
      privateProof: "Private product",
      conceptProof: "Personal project / concept",
      publishedProof: "Published app",
      requestWalkthrough: "I can walk through it in a conversation if needed.",
      gallery: {
        prev: "Previous image",
        next: "Next image",
        goToSlide: "Go to image",
        counter: "{current} / {total}",
      },
      items: {
        smartshift: {
          title: "SmartShift",
          description:
            "A shift management system with scheduling, constraints, and role-based assignments.",
          longDescription:
            "This project was built around a real operational need: putting availability, roles, and constraints in one place so the person building shifts can work faster and with less friction.",
          role: "Planning, full-stack development, and the main product screens.",
          focus: "Solving a real scheduling problem without making the product feel complicated.",
          proofNote:
            "The product is private, so this section uses screenshots instead of a public demo.",
          highlights: [
            "Scheduling with constraints",
            "Support for multiple role types",
            "A UI that stays clear under operational pressure",
          ],
        },
        playsmart: {
          title: "PlaySmart",
          description:
            "A product for choosing lineups based on player data, fitness, and availability.",
          longDescription:
            "This personal project started from a simple idea: take player data, fitness state, and availability, and turn them into something useful before a match.",
          role: "Defining the product, building the flow, and implementing the full-stack side.",
          focus: "Making data easier to act on.",
          proofNote:
            "Right now this is shown as a personal project rather than a live public system.",
          highlights: [
            "Player data in one place",
            "Availability and fitness context",
            "A simple decision-oriented flow",
          ],
        },
        sportzone: {
          title: "SportZone",
          description:
            "A sports app built around content, follow flows, and community.",
          longDescription:
            "This was a mobile-first idea for sports fans: feeds, profiles, follow flows, and a simple community layer around teams and players.",
          role: "Mobile-oriented development and the main app structure.",
          focus: "Keeping the app clear while still making it feel social.",
          proofNote:
            "This is a personal project, and there is no public build at the moment.",
          highlights: [
            "Feeds and follow flows",
            "User profiles",
            "A simple content-and-community structure",
          ],
        },
        "poop-bags": {
          title: "Poop Bags",
          description:
            "A small community utility for dog owners with locations, updates, and a map.",
          longDescription:
            "This started from a very practical daily-use idea: show where bag stations are, let people update each other, and keep the product simple enough to use quickly.",
          role: "Defining the MVP, shaping the flow, and connecting the map with the content.",
          focus: "Taking a small everyday problem and making it useful as a product.",
          proofNote:
            "This is currently presented as an MVP-level personal project.",
          highlights: [
            "Map-based locations",
            "Lightweight community updates",
            "A simple MVP structure",
          ],
        },
        "zvi-kadocs": {
          title: "DocMatch",
          description:
            "An internal app that helps organize document numbers against the monthly PDF report.",
          longDescription:
            "I built this app for my father to reduce manual monthly work. During the month he records the document numbers he works with, and at the end of the month he uploads the PDF file he receives from work. The system compares the two sides and helps identify matches, missing items, and anything that exists on one side but not the other.",
          role: "Understanding the workflow, building the app, and implementing the comparison flow.",
          focus: "Saving manual work in a recurring monthly process.",
          proofNote:
            "This is an internal-use tool, so there is no public demo at the moment.",
          highlights: [
            "Structured tracking of document numbers",
            "PDF upload and comparison against the saved list",
            "Finding mismatches, missing items, and overlaps",
          ],
        },
        shalachti: {
          title: "Shalachti",
          description:
            "A delivery workflow built as two apps: one for drivers and one for customers.",
          longDescription:
            "This project includes two separate apps: 'Shalachti Drivers' and 'Shalachti Customers'. Drivers can browse available deliveries, choose one, see the relevant contact details, and continue from there. On the customer side, users can create deliveries and manage the process. Based on what you shared, the apps are available on both the App Store and Google Play.",
          role: "Planning the product, building the apps, and shaping the flow for both user types.",
          focus: "Making the delivery flow clear for both drivers and customers.",
          proofNote:
            "The apps are published in the stores, and screenshots will be added later.",
          highlights: [
            "Separate app for drivers and app for customers",
            "Viewing and choosing available deliveries",
            "Creating deliveries and managing them on the customer side",
          ],
        },
      },
    },
    experience: {
      kicker: "04. Journey",
      heading: "Professional Experience",
      present: "Present",
      highlightsLabel: "Highlights",
      items: {
        "idf-ofek": {
          company: "IDF",
          role: "Full-Stack Developer",
          description:
            "In the military I worked on internal systems with real responsibility, real users, and no room for vague solutions.",
          highlights: [
            "Day-to-day Angular development",
            "Full-stack work around internal systems",
            "Jenkins and CI/CD as part of the workflow",
          ],
        },
      },
    },
    contact: {
      kicker: "05. Connection",
      heading: "Let's Work Together",
      subtitle:
        "If you have a project, a relevant role, or something worth talking about, send a message.",
      availability:
        "The best message is short and clear: what you're building, what stage you're in, and where I can help.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      hiddenField: "Leave this empty",
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        message: "Tell me about your project...",
      },
      form: {
        errorRequired: "All fields are required.",
        errorEmail: "Please enter a valid email address.",
        success: "Message sent successfully! I'll get back to you soon.",
        errorGeneric:
          "Something went wrong. Please try again or email me directly.",
      },
    },
    footer: {
      backToTop: "Back to top",
    },
    notFound: {
      title: "404",
      subtitle: "This page doesn't exist.",
      home: "Go Home",
    },
  },
};
