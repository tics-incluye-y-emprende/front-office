
export const APP_NAME = "Conexión Solidaria";

export const WHATSAPP_PHONE_NUMBER = "1234567890"; // Replace with actual number, e.g., 521XXXXXXXXXX for Mexico
export const DONATION_PREFILLED_MESSAGE = "Hola! Estoy interesado/a en hacer una donación para Conexión Solidaria.";

// Define HOME_PAGE_CONTENT before using it in metadata
const HOME_PAGE_CONTENT_DATA = {
  title: "Bienvenido a Conexión Solidaria",
  subtitle: "Uniendo corazones, transformando vidas.",
  description: "Somos una organización dedicada a crear un impacto positivo en nuestra comunidad a través de la colaboración y el apoyo mutuo. Descubre cómo puedes ser parte del cambio.",
  cta: {
    join: "Únete", // Updated from "Únete como Asociado"
    support: "Apoya", // Updated from "Apoya Emprendimientos"
  },
  features: [
    {
      title: "Proyectos Comunitarios",
      description: "Impulsamos iniciativas locales que generan desarrollo y bienestar.",
      icon: "Users",
      image: "https://placehold.co/600x400.png",
      imageHint: "community project"
    },
    {
      title: "Apoyo Directo",
      description: "Brindamos ayuda tangible a quienes más lo necesitan.",
      icon: "Heart",
      image: "https://placehold.co/600x400.png",
      imageHint: "helping hands"
    },
    {
      title: "Voluntariado",
      description: "Únete a nuestro equipo de voluntarios y marca la diferencia.",
      icon: "Handshake",
      image: "https://placehold.co/600x400.png",
      imageHint: "volunteers group"
    },
  ],
};
export const HOME_PAGE_CONTENT = HOME_PAGE_CONTENT_DATA;


export const ABOUT_US_CONTENT = {
  title: "Sobre Nosotros",
  mission: {
    title: "Nuestra Misión",
    text: "Conectar a personas con oportunidades de ayudar y ser ayudadas, fomentando una cultura de solidaridad y cooperación para construir una sociedad más justa y equitativa.",
    image: "https://placehold.co/600x400.png",
    imageHint: "teamwork collaboration"
  },
  vision: {
    title: "Nuestra Visión",
    text: "Ser un referente en la creación de redes de apoyo solidario, donde cada individuo tenga la oportunidad de alcanzar su máximo potencial y contribuir al bienestar colectivo.",
    image: "https://placehold.co/600x400.png",
    imageHint: "community growth"
  },
  values: [
    { name: "Solidaridad", description: "Actuamos con empatía y compromiso hacia las necesidades de los demás." },
    { name: "Transparencia", description: "Gestionamos nuestros recursos y acciones con honestidad y claridad." },
    { name: "Colaboración", description: "Creemos en el poder de trabajar juntos para lograr un mayor impacto." },
    { name: "Respeto", description: "Valoramos la diversidad y la dignidad de todas las personas." },
  ],
};

export const DONATE_PAGE_CONTENT = { 
  title: "Apoya Nuestra Causa",
  description: "Tu generosidad nos permite continuar con nuestra labor y llegar a más personas. Cada contribución, sin importar el tamaño, hace una gran diferencia.",
  instructions: "Para realizar una donación, por favor contáctanos a través de WhatsApp. Uno de nuestros representantes te guiará en el proceso.",
  image: "https://placehold.co/800x500.png",
  imageHint: "donation impact"
};

export const UNETE_PAGE_CONTENT = {
  title: "Únete a Nosotros",
  slogan: "Tu participación es clave para el cambio.",
  navLinks: [
    { name: "Ser Voluntario", href: "/unete/voluntario" },
    { name: "Ser Asociado", href: "/unete/asociado" },
  ],
  voluntario: {
    title: "Sé Voluntario",
    pageTitle: "Necesitamos Manos Para...",
    description: "Tu tiempo y talento pueden transformar vidas. Descubre las áreas donde puedes colaborar y el impacto que puedes generar como voluntario en nuestra organización.",
    image: "https://placehold.co/600x400.png",
    imageHint: "happy volunteers",
    // Roles data moved to src/lib/data/voluntariado.ts
    cta: {
      text: "Quiero ser Voluntario",
      whatsappMessage: `Hola ${APP_NAME}! Estoy interesado/a en ser voluntario/a.`,
    }
  },
  asociado: {
    title: "Sé Asociado",
    pageTitle: "Fortalece Nuestra Red Solidaria",
    description: "Como asociado, te unes formalmente a nuestra organización, apoyando nuestra misión de manera continua y participando en la toma de decisiones.",
    benefits: [
      "Participación con voz y voto en asambleas generales.",
      "Acceso prioritario e información exclusiva sobre proyectos.",
      "Reconocimiento como miembro activo de la comunidad.",
      "Oportunidad de liderar e impulsar nuevas iniciativas.",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "community meeting",
    cta: {
      text: "Quiero ser Asociado",
      whatsappMessage: `Hola ${APP_NAME}! Estoy interesado/a en ser asociado/a.`,
    }
  },
};

export const APOYA_PAGE_CONTENT = {
  title: "Apoya Nuestra Causa",
  slogan: "Tu contribución impulsa el cambio y la esperanza.",
  navLinks: [
    { name: "Apoyar Emprendimientos", href: "/apoya/emprendimiento" },
    { name: "Hacer una Donación", href: "/apoya/donaciones" },
  ],
  emprendimiento: {
    title: "Catálogo de Emprendimientos",
    description: "Descubre y apoya los proyectos de emprendedores locales. Tu contribución directa les ayuda a crecer y generar un impacto positivo en la comunidad.",
    // Catalog data moved to src/lib/data/emprendimientos.ts
  },
  donaciones: {
    title: "Realiza tu Donación",
    description: "Tu generosidad nos permite continuar nuestra labor. Cada contribución, grande o pequeña, marca una diferencia significativa.",
    fixedAmounts: [
      { amount: 10000, label: '10.000' }, 
      { amount: 50000, label: '50.000' },
      { amount: 200000, label: '200.000' },
    ],
    currencySymbol: '$', 
    customAmountText: "Pedir Link para Monto Personalizado",
    whatsappMessageFixed: (amount: number, currency: string) => `Hola ${APP_NAME}! Quiero hacer una donación de ${currency}${amount.toLocaleString()}.`,
    whatsappMessageCustom: `Hola ${APP_NAME}! Quisiera hacer una donación con un monto personalizado. ¿Podrían enviarme un link de pago?`,
  },
  savings: {
    title: "Nuestro Ahorro Comunitario",
    current: 175000, 
    goal: 500000,     
    goalMessage: "¡Con tu ayuda, alcanzaremos la meta y financiaremos más proyectos!",
    successMessage: "¡Meta alcanzada! Gracias a tu apoyo, seguiremos transformando vidas.",
    piggyImage: "https://placehold.co/300x250.png",
    piggyImageHint: "piggy bank illustration"
  },
};


export const FOOTER_CONTENT = {
  copyright: `© ${new Date().getFullYear()} ${APP_NAME}. Todos los derechos reservados.`,
  socialLinks: [
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "Instagram", href: "#", icon: "Instagram" },
    { name: "Twitter", href: "#", icon: "Twitter" },
  ]
};
