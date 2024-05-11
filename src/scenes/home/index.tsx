import { SelectedPage, StepType } from "@/shared/types";
import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";

import Wave1 from "@/assets/wave-static-01.svg";
import Wave2 from "@/assets/wave-static-02.svg";
import HText from "@/shared/Htext";
import Step from "./Step";

import HomeImg from "@/assets/Home.png";

// ICONS & SHAPES
import { FaStore } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { PiFarmFill } from "react-icons/pi";

import Shape1 from "@/assets/organic-shape-01.svg";
import Shape2 from "@/assets/organic-shape-02.svg";
import Shape3 from "@/assets/organic-shape-03.svg";

const Steps: Array<StepType> = [
  {
    icon: <FaStore className="h-16 w-16 text-white" />,
    title: "Сотрудничество с общепитом",
    bgShape: Shape1,
    description:
      "Мы устанавливаем партнерские отношения с ресторанами, кафе и другими заведениями для организации сбора биомусора.",
  },
  {
    icon: <TbTruckDelivery className="h-16 w-16 text-white" />,
    title: "Сбор и транспортировка",
    bgShape: Shape2,
    description:
      "занимается регулярным сбором биомусора от партнеров его транспортировкой и дальнейшей переработки в готовые биологически чистые продукты в виде кормов и удобрения",
  },
  {
    icon: <PiFarmFill className="h-16 w-16 text-white" />,
    title: "Использование в сельском хозяйстве",
    bgShape: Shape3,
    description:
      "Полученные корма и удобрения используются для улучшения почвы тем самым увеличения урожая и кормления животных чистым и полезным кормом на сельскохозяйственных участках.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-lime-500 to-green-800 gap-16 bg-gray-20 py-10 pb-0"
    >
      {/* MAIN */}

      <div className="relative w-full h-screen">
        <motion.div
          className="mx-auto w-4/6 items-center justify-center md:flex md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* MAIN HEADER */}
          <div className="z-10 mt-32 w-full">
            {/* HEADINGS */}
            <motion.div
              className="md:-mt-20 max-md:text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="relative font-semibold">
                <div className="max-xs:text-2xl text-3xl text-neutral-300">
                  Биомусор
                </div>
                <div className="max-xs:text-4xl text-6xl text-neutral-50">
                  сила для скота и почвы!
                </div>
              </div>
            </motion.div>

            {/* ACTIONS */}
            <motion.div
              className="mt-8 flex items-center max-md:justify-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Узнать больше
              </ActionButton>
            </motion.div>
          </div>

          {/* IMAGE */}
          <div
            className="flex basis-3/4 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
          >
            <img src={HomeImg} alt="sampleimg" />
          </div>
        </motion.div>

        {/* VECTORS */}
        <div className="max-md">
          <img className="absolute bottom-0 z-10" src={Wave1} alt="" />
          <img className="absolute bottom-0 z-0" src={Wave2} alt="" />
        </div>
      </div>

      {/* HOW IT WORKS? */}

      <div className="bg-white w-full max-[900px]:h-full h-screen flex flex-col justify-start items-center">
        <motion.div
          className=" mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>Как это работает?</HText>
        </motion.div>

        {/* STEPS */}
        <motion.div
          className="max-[900px]:mt-0 max-[900px]:mb-16 mt-20 items-center justify-center gap-12 min-[900px]:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {Steps.map((step: StepType) => (
            <Step
              key={step.title}
              icon={step.icon}
              title={step.title}
              bgShape={step.bgShape}
              description={step.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
