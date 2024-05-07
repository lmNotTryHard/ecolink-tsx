import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import HText from "@/shared/Htext";
import Pc from "@/assets/Pc.png";
import Tablet from "@/assets/tablet.png";
import Phone from "@/assets/Phone.png";
import Wave3 from "@/assets/bg-shape-mask-down.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const HowItLooks = ({ setSelectedPage }: Props) => {
  const [currentImage, setCurrentImage] = useState(1);

  const handleImageChange = (imageNumber: number) => {
    setCurrentImage(imageNumber);
  };

  const isActive = (buttonNumber: number) => {
    return currentImage === buttonNumber
      ? "transition-all border-b-[3px] border-green-600"
      : "transition-all border-b-[3px] border-transparent";
  };

  return (
    <section id="howitlooks" className="bg-[#EDEDED] h-full">
      <motion.div className="relative w-full h-full flex flex-col justify-start items-center text-center">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.HowItLooks)}
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>Как это Выглядит?</HText>
          <p className="text-neutral-400 mt-2">
            Узнайте как выглядит наш проект на разных устройствах
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 sm:gap-8 mt-20 text-xl text-neutral-900">
          <button
            className={`${isActive(1)}`}
            onClick={() => handleImageChange(1)}
          >
            Компьютер
          </button>
          <button
            className={`${isActive(2)}`}
            onClick={() => handleImageChange(2)}
          >
            Планшет
          </button>
          <button
            className={`${isActive(3)}`}
            onClick={() => handleImageChange(3)}
          >
            Телефон
          </button>
        </div>
        <div>
          {currentImage === 1 && (
            <img
              className="absolute bottom-5 left-0 right-0 mx-auto h-1/2"
              src={Pc}
              alt="Компьютер"
            />
          )}
          {currentImage === 2 && (
            <img
              className="absolute bottom-5 left-0 right-0 mx-auto h-1/2"
              src={Tablet}
              alt="Планшет"
            />
          )}
          {currentImage === 3 && (
            <img
              className="absolute bottom-5 left-0 right-0 mx-auto h-1/2"
              src={Phone}
              alt="Телефон"
            />
          )}
        </div>
        <div className="absolute bottom-0">
          <img src={Wave3} alt="Wave3" />
        </div>
      </motion.div>
    </section>
  );
};

export default HowItLooks;
