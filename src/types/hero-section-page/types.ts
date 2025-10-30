type ButtonStyle = "primary" | "secondary";

export type ButtonConfig = {
  text: string;
  style: ButtonStyle;
};

export type HeroContent = {
  bg: string;
  overlay?: string;
  titleDesktop: React.ReactNode;
  titleMobile: string;
  descriptionDesktop: string;
  descriptionMobile: string;
  buttonsDesktop: ButtonConfig[];
  buttonsMobile: ButtonConfig[];
  note?: string;
};
