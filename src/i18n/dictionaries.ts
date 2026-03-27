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
    viewProject: string;
    sourceCode: string;
    openProject: string;
    gallery: {
      prev: string;
      next: string;
      goToSlide: string;
      counter: string;
    };
    items: Record<
      string,
      { title: string; description: string; longDescription: string }
    >;
  };
  experience: {
    kicker: string;
    heading: string;
    present: string;
    items: Record<
      string,
      { company: string; role: string; description: string }
    >;
  };
  testimonials: {
    kicker: string;
    heading: string;
    items: Record<string, { author: string; text: string; roleCompany: string }>;
  };
  contact: {
    kicker: string;
    heading: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
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
        "תיק עבודות של אור כהן — מפתח Full-Stack עם ניסיון של 5+ שנים בבניית אפליקציות ווב ומובייל מודרניות, ממערכות צבאיות ועד פלטפורמות מבוססות AI.",
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
      kicker: "בונים את העתיד הדיגיטלי",
      tagline:
        "מפתח Full-Stack המתמחה באפליקציות ווב בביצועים גבוהים, באפליקציות לנייד וחשיבה ארכיטקטורית.",
      viewWork: "לצפייה בעבודות",
      getInTouch: "בואו נדבר",
    },
    about: {
      kicker: "01. היכרות",
      heading: "קצת עליי",
      p1:
        "אני מפתח ממוקד פתרונות עם תשוקה לחוויות דיגיטליות חלקות. עם 5 שנות ניסיון בפיתוח מערכות קריטיות ביחידת אופק בצה\"ל, אני משלב משמעת, עומק טכני ועין לעיצוב.",
      p2:
        "הגישה שלי מבוססת על קוד נקי, סקיילביליות ואופטימיזציה לביצועים. בין אם מדובר במערכות שיבוץ מורכבות, פלטפורמות מבוססות AI או אפליקציות מובייל — אני נהנה מאתגרים שמשפיעים על העולם האמיתי.",
      stats: {
        years: "שנות ניסיון",
        projects: "פרויקטים",
        stack: "טכנולוגיות",
        unit: 'יחידת "אופק"',
      },
      imageAlt: "אור כהן — מפתח Full-Stack",
    },
    skills: {
      kicker: "02. יכולות",
      heading: "סט הטכנולוגיות",
      subtitle: "ארגז כלים מקיף של טכנולוגיות מודרניות להפיכת רעיונות למציאות.",
      categories: {
        frontend: "צד לקוח",
        backend: "צד שרת",
        devops: "DevOps",
        tools: "כלים",
      },
    },
    projects: {
      kicker: "03. תצוגה",
      heading: "פרויקטים נבחרים",
      viewProject: "לצפייה בפרויקט",
      sourceCode: "קוד מקור",
      openProject: "פתח פרויקט",
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
            "מערכת לניהול משמרות עם שיבוץ אוטומטי, אילוצים וסוגי תפקידים.",
          longDescription:
            "פלטפורמה לניהול משמרות לארגונים מורכבים: שיבוץ אוטומטי תחת אילוצים, תמיכה בסוגי תפקידים שונים ופתרון קונפליקטים — מותאמת לצרכים אמיתיים בקנה מידה גדול.",
        },
        playsmart: {
          title: "PlaySmart",
          description:
            "מערכת AI למאמנים לבחירת הרכב למשחק הבא לפי סטטיסטיקות וכושר נוכחי.",
          longDescription:
            "מסייעת למאמנים לקבל החלטות מבוססות נתונים: ניתוח ביצועי שחקנים, רמת כושר נוכחית והיסטוריה, והמלצות AI להרכב האופטימלי לכל משחק.",
        },
        sportzone: {
          title: "SportZone",
          description:
            "רשת חברתית לאוהדי ספורט — מעקב אחרי קבוצות ושחקנים, פוסטים וקהילה.",
          longDescription:
            "אפליקציה לאוהדים: מעקב אחר קבוצות ושחקנים, פוסטים בפיד אישי או בעמוד קבוצה, ותמיכה בפרופילים פרטיים וחשבונות קבוצה/סלבריטאים.",
        },
        "poop-bags": {
          title: "Poop Bags",
          description:
            "אפליקציה לבעלי כלבים — שיתוף תחנות שקיות, לייקים, תגובות ומפה.",
          longDescription:
            "קהילה לבעלי כלבים: שיתוף מיקומי תחנות שקיות, פוסטים עם לייקים ותגובות, וצפייה בכל התחנות במפה אינטראקטיבית.",
        },
      },
    },
    experience: {
      kicker: "04. מסלול",
      heading: "ניסיון מקצועי",
      present: "היום",
      items: {
        "idf-ofek": {
          company: 'צה"ל — יחידת אופק',
          role: "מפתח Full-Stack",
          description:
            "פיתוח ותחזוקה של מערכות קריטיות ברמת אמינות גבוהה. אפליקציות full-stack עם זרימות נתונים מורכבות, דרישות אבטחה וסביבה דינמית.",
        },
      },
    },
    testimonials: {
      kicker: "05. המלצות",
      heading: "מה אומרים",
      items: {
        "1": {
          author: "James Smith",
          text:
            "אור מפתח יוצא דופן שמבין את האיזון בין קוד נקי ליעדים עסקיים. העבודה שלו על פלטפורמת האנליטיקה שינתה את המשחק.",
          roleCompany: "מנהל טכנולוגיות, Nexus Corp",
        },
        "2": {
          author: "Sarah Chen",
          text:
            "עומק טכני ותשומת לפרטים נדירים. הפרויקט הושלם לפני הזמן ובביצוע מושלם.",
          roleCompany: "מנהלת מוצר, Flow Studio",
        },
        "3": {
          author: "Marcus Reed",
          text:
            "מהנדס רב־תחומי. אור ניהל הכל — מתשתית ענן ועד CSS מדויק.",
          roleCompany: "מהנדס מייסד, Velox",
        },
      },
    },
    contact: {
      kicker: "06. קשר",
      heading: "בואו נעבוד יחד",
      subtitle:
        "יש לכם רעיון לפרויקט או סתם רוצים להגיד שלום? תמיד פתוח להזדמנויות ושיתופי פעולה.",
      name: "שם",
      email: "אימייל",
      message: "הודעה",
      send: "שלח הודעה",
      sending: "שולח...",
      placeholders: {
        name: "ישראל ישראלי",
        email: "you@example.com",
        message: "ספרו לי על הפרויקט...",
      },
      form: {
        errorRequired: "יש למלא את כל השדות.",
        errorEmail: "נא להזין כתובת אימייל תקינה.",
        success: "ההודעה נשלחה בהצלחה! אחזור אליך בקרוב.",
        errorGeneric: "משהו השתבש. נסה שוב או שלח אימייל ישירות.",
      },
    },
    footer: {
      backToTop: "חזרה למעלה",
    },
    notFound: {
      title: "404",
      subtitle: "הדף הזה לא קיים.",
      home: "חזרה לדף הבית",
    },
  },
  en: {
    meta: {
      title: "Or Cohen | Full-Stack Developer",
      description:
        "Portfolio of Or Cohen — a full-stack developer with 5+ years of experience building modern web and mobile applications, from military-grade systems to AI-powered platforms.",
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
      kicker: "Building the Digital Future",
      tagline:
        "Full-Stack Developer specializing in high-performance web applications, mobile apps, and architectural thinking.",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
    },
    about: {
      kicker: "01. Discovery",
      heading: "About Me",
      p1:
        "I'm a solution-oriented developer with a passion for creating seamless digital experiences. With 5 years of experience building mission-critical systems in the IDF's Unit Ofek, I bring a unique combination of discipline, technical depth, and a keen eye for design.",
      p2:
        "My approach is rooted in clean code, scalability, and performance optimization. Whether it's architecting complex scheduling systems, building AI-powered platforms, or crafting pixel-perfect mobile apps, I thrive on solving technical challenges that make a real-world impact.",
      stats: {
        years: "Years Experience",
        projects: "Projects Delivered",
        stack: "Tech Stack Mastery",
        unit: "Unit Ofek",
      },
      imageAlt: "Or Cohen — Full-Stack Developer",
    },
    skills: {
      kicker: "02. Capabilities",
      heading: "Tech Stack",
      subtitle:
        "A comprehensive toolkit of modern technologies I use to bring ideas to life.",
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
      viewProject: "View Project",
      sourceCode: "Source Code",
      openProject: "Open project",
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
            "An intelligent shift management system with automated scheduling, constraints handling, and role-based assignments.",
          longDescription:
            "A comprehensive shift management platform designed for complex organizational needs. Features automatic shift assignment with constraint satisfaction, support for multiple role types, and smart conflict resolution. Built to handle real-world scheduling challenges at scale.",
        },
        playsmart: {
          title: "PlaySmart",
          description:
            "AI-powered coaching assistant that analyzes player statistics and recommends optimal lineups based on current fitness data.",
          longDescription:
            "A system that helps coaches make data-driven decisions for game lineups. Analyzes player performance statistics, current fitness levels, and historical data to provide AI-generated recommendations for the best team composition for each upcoming match.",
        },
        sportzone: {
          title: "SportZone",
          description:
            "A social platform for sports fans to follow teams, players, and connect with fellow supporters through posts and community feeds.",
          longDescription:
            "A social media application tailored for sports enthusiasts. Users can follow their favorite teams and players, create posts on their personal feed or team pages, and engage with a community of like-minded fans. Supports both individual profiles and celebrity/team accounts.",
        },
        "poop-bags": {
          title: "Poop Bags",
          description:
            "A community-driven app for dog owners to share and locate poop bag station locations, with social features and an interactive map.",
          longDescription:
            "A mobile application that creates a community for dog owners. Users can share poop bag station locations, post updates about stations, like and comment on posts, and view all stations on an interactive map. Makes daily dog walks easier for the whole community.",
        },
      },
    },
    experience: {
      kicker: "04. Journey",
      heading: "Professional Experience",
      present: "Present",
      items: {
        "idf-ofek": {
          company: "IDF — Unit Ofek",
          role: "Full-Stack Developer",
          description:
            "Developed and maintained mission-critical military-grade systems. Built full-stack applications handling complex data flows with high reliability and security requirements. Worked in a fast-paced environment delivering solutions for operational needs.",
        },
      },
    },
    testimonials: {
      kicker: "05. Feedback",
      heading: "What People Say",
      items: {
        "1": {
          author: "James Smith",
          text:
            "Or is an exceptional developer who understands the balance between clean code and business objectives. His work on our analytics platform was transformative.",
          roleCompany: "CTO, Nexus Corp",
        },
        "2": {
          author: "Sarah Chen",
          text:
            "The level of technical depth and attention to detail Or brings to the table is rare. He delivered our project ahead of schedule with flawless execution.",
          roleCompany: "Product Manager, Flow Studio",
        },
        "3": {
          author: "Marcus Reed",
          text:
            "A truly versatile engineer. Or handled everything from the complex cloud infrastructure to the pixel-perfect CSS with incredible ease.",
          roleCompany: "Founding Engineer, Velox",
        },
      },
    },
    contact: {
      kicker: "06. Connection",
      heading: "Let's Work Together",
      subtitle:
        "Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
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
