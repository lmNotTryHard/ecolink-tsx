export enum SelectedPage {
  Home = "home",
  HowItLooks = "howitlooks",
  About = "about",
  Contact = "contact",
}

export interface StepType {
  icon: JSX.Element;
  title: string;
  bgShape: string;
  description: string;
}
