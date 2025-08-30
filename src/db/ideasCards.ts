export type CardProps = {
  id: number;
  strip: string;
  img: string;
  alt: string;
  ideas: string[];
  reverse: boolean;
};

export const ideasCards: CardProps[] = [
  {
    id: 1,
    strip: "Momentos especiales",
    img: "gift",
    alt: "Viñeta ofreciendo un regalo",
    ideas: [
      "Parejas",
      "Amigos",
      "Familia",
      "Jubilaciones",
      " Invitaciones a boda",
    ],
    reverse: false,
  },
  {
    id: 2,
    strip: "Eventos y deportes",
    img: "shoes",
    alt: "Viñeta de un zapato con fuego",
    ideas: ["Photocall", "Diplomas", "Carteles", "Viñetas premio"],
    reverse: true,
  },
  {
    id: 3,
    strip: "Divulgacion y formación",
    img: "doctor",
    alt: "Viñeta de Feliz como doctor",
    ideas: ["Educación", "Mensajes sociales", "Proyectos cientificos"],
    reverse: false,
  },
];
