export const APP_NAME = "Asosiación Incluye y Emprende";

export const WHATSAPP_PHONE_NUMBER = "1234567890"; // Replace with actual number, e.g., 521XXXXXXXXXX for Mexico
export const DONATION_PREFILLED_MESSAGE =
  "Hola! Estoy interesado/a en hacer una donación para Asosiación Incluye y Emprende.";

// Define HOME_PAGE_CONTENT before using it in metadata
const HOME_PAGE_CONTENT_DATA = {
  title: "Asosiación Incluye y Emprende",
  subtitle: "Creando oportunidades, transformando vidas",
  description:
    "La asociación incluye y emprende acompaña y apoya a las personas en condición de discapacidad cognitiva y mental en el fortalecimiento de habilidades diversas para lograr mayor autonomía  y mejorar su calidad de vida.",
  cta: {
    join: "Únete: Voluntario o asociado",
    support: "Apoya: Emprendimiento o donación ",
  },
  features: [
    {
      title: "Psicopedagogía",
      description:
        "Acompañamos el desarrollo físico, psico-educativo y artístico de los beneficiarios mediante el trabajo interdisciplinar.",
      icon: "Users",
      image:
        "https://yodkoojlgixgkrwndgfy.supabase.co/storage/v1/object/public/front-office//psico-pedagogia.png",
      imageHint: "community project",
    },
    {
      title: "Emprendimiento",
      description:
        "Formamos un emprendimiento entre todas las familias y apoyamos los emprendimientos familiares ",
      icon: "Heart",
      image:
        "https://yodkoojlgixgkrwndgfy.supabase.co/storage/v1/object/public/front-office//emprende.png",
      imageHint: "helping hands",
    },
    {
      title: "Orientación vocacional",
      description:
        "Reconocemos las habilidades y competencias individuales para enfocar cada proyecto de vida.",
      icon: "Handshake",
      image:
        "https://yodkoojlgixgkrwndgfy.supabase.co/storage/v1/object/public/front-office//orientacion-vocacional.png",
      imageHint: "volunteers group",
    },
    {
      title: "Gestión de recursos",
      description:
        "Colaboramos para la sostenibilidad de la organización con la gestión de recursos humanos, económicos y físicos.",
      icon: "DollarSign",
      image:
        "https://yodkoojlgixgkrwndgfy.supabase.co/storage/v1/object/public/front-office//sostenibilidad.png",
      imageHint: "volunteers group",
    },
  ],
};
export const HOME_PAGE_CONTENT = HOME_PAGE_CONTENT_DATA;

export const ABOUT_US_CONTENT = {
  title: "Sobre Nosotros",
  mission: {
    title: "Nuestra Misión",
    text: "La asociación incluye y emprende busca mejorar la calidad de vida de las personas en condición de discapacidad cognitiva y mental y sus cuidadores mediante su desarrollo individual integral, brindando acompañamiento desde la educación informal, orientación vocacional, emprendimiento y empleabilidad.",
    image: "https://placehold.co/600x400.png",
    imageHint: "teamwork collaboration",
  },
  vision: {
    title: "Nuestra Visión",
    text: "l 2029 las personas en condición de discapacidad cognitiva y mental y sus cuidadores en la localidad de Suba encontrarán en la ASOCIACIÓN INCLUYE Y EMPRENDE un centro integral para el desarrollo de proyectos de emprendimiento y MiPymes.",
    image: "https://placehold.co/600x400.png",
    imageHint: "community growth",
  },
  values: [
    {
      name: "Inclusión",
      description:
        "Que las personas en condición de discapacidad y sus cuidadores puedan desarrollar su vida en cualquier contexto.",
    },
    {
      name: "Responsabilidad",
      description:
        "Ejecución de los programas sociales con el compromiso institucional y corporativo de contribuir a la defensa de los derechos humanos de la población.",
    },
    {
      name: "Unidad",
      description:
        "Credibilidad en el trabajo en equipo potencializando la sinergia entre profesionales y beneficiarios.",
    },
  ],
};

export const DONATE_PAGE_CONTENT = {
  title: "Apoya Nuestra Causa",
  description:
    "Tu generosidad nos permite continuar con nuestra labor y llegar a más personas. Cada contribución, sin importar el tamaño, hace una gran diferencia.",
  instructions:
    "Para realizar una donación, por favor contáctanos a través de WhatsApp. Uno de nuestros representantes te guiará en el proceso.",
  image: "https://placehold.co/800x500.png",
  imageHint: "donation impact",
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
    description:
      "Tu tiempo y talento pueden transformar vidas. Descubre las áreas donde puedes colaborar y el impacto que puedes generar como voluntario en nuestra organización.",
    image: "https://placehold.co/600x400.png",
    imageHint: "happy volunteers",
    // Roles data moved to src/lib/data/voluntariado.ts
    cta: {
      text: "Quiero ser Voluntario",
      whatsappMessage: `Hola ${APP_NAME}! Estoy interesado/a en ser voluntario/a.`,
    },
  },
  asociado: {
    title: "Sé Asociado",
    pageTitle: "Fortalece Nuestra Red Solidaria",
    description:
      "Como asociado, te unes formalmente a nuestra organización, apoyando nuestra misión de manera continua y participando en la toma de decisiones.",
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
    },
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
    description:
      "Descubre y apoya los proyectos de emprendedores locales. Tu contribución directa les ayuda a crecer y generar un impacto positivo en la comunidad.",
    // Catalog data moved to src/lib/data/emprendimientos.ts
  },
  donaciones: {
    title: "Realiza tu Donación",
    description:
      "Tu generosidad nos permite continuar nuestra labor. Cada contribución, grande o pequeña, marca una diferencia significativa.",
    fixedAmounts: [
      { amount: 10000, label: "10.000" },
      { amount: 50000, label: "50.000" },
      { amount: 200000, label: "200.000" },
    ],
    currencySymbol: "$",
    customAmountText: "Pedir Link para Monto Personalizado",
    whatsappMessageFixed: (amount: number, currency: string) =>
      `Hola ${APP_NAME}! Quiero hacer una donación de ${currency}${amount.toLocaleString()}.`,
    whatsappMessageCustom: `Hola ${APP_NAME}! Quisiera hacer una donación con un monto personalizado. ¿Podrían enviarme un link de pago?`,
  },
  savings: {
    title: "Nuestro Ahorro Comunitario",
    current: 175000,
    goal: 500000,
    goalMessage:
      "¡Con tu ayuda, alcanzaremos la meta y financiaremos más proyectos!",
    successMessage:
      "¡Meta alcanzada! Gracias a tu apoyo, seguiremos transformando vidas.",
    piggyImage: "https://placehold.co/300x250.png",
    piggyImageHint: "piggy bank illustration",
  },
};

export const FOOTER_CONTENT = {
  copyright: `© ${new Date().getFullYear()} ${APP_NAME}. Todos los derechos reservados.`,
  socialLinks: [
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "Instagram", href: "#", icon: "Instagram" },
    { name: "Twitter", href: "#", icon: "Twitter" },
  ],
};
