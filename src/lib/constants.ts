export const APP_NAME = "Conexión Solidaria";

export const WHATSAPP_PHONE_NUMBER = "1234567890"; // Replace with actual number, e.g., 521XXXXXXXXXX for Mexico
export const DONATION_PREFILLED_MESSAGE = "Hola! Estoy interesado/a en hacer una donación para Conexión Solidaria.";

export const HOME_PAGE_CONTENT = {
  title: "Bienvenido a Conexión Solidaria",
  subtitle: "Uniendo corazones, transformando vidas.",
  description: "Somos una organización dedicada a crear un impacto positivo en nuestra comunidad a través de la colaboración y el apoyo mutuo. Descubre cómo puedes ser parte del cambio.",
  cta: {
    join: "Únete", // Changed from donate
    support: "Apoya", // Changed from learnMore
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

export const FOOTER_CONTENT = {
  copyright: `© ${new Date().getFullYear()} ${APP_NAME}. Todos los derechos reservados.`,
  socialLinks: [
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "Instagram", href: "#", icon: "Instagram" },
    { name: "Twitter", href: "#", icon: "Twitter" },
  ]
};
