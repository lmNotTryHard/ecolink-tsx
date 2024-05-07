import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

type Props = {
  icon: JSX.Element;
  title: string;
  bgShape: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Feature = ({ icon, bgShape, title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="px-5 text-center max-[900px]:mx-auto max-[900px]:w-4/5 md:w-2/6 max-md:max-w-96"
    >
      <div className="relative mb-4 flex justify-center max-md:justify-center max-[900px]:pt-16">
        <img src={bgShape} alt="shape" />
        <div className="absolute p-4">{icon}</div>
      </div>

      <h4 className="font-bold text-lg text-neutral-900">{title}</h4>
      <p className="mt-3 text-neutral-500">{description}</p>
    </motion.div>
  );
};

export default Feature;
