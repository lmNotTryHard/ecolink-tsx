import HText from "@/shared/Htext";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import Graph from "@/assets/Graph.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-3/4">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* MAIN HEADER */}
        <div className="w-full flex flex-wrap items-center justify-around">
          {/* HEADINGS */}
          <motion.div
            className="max-[1151px]:text-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <motion.div className="pt-28 text-neutral-800">
              <HText>
                Что такое EcoLink<span></span>
              </HText>
              <div className="pt-10 text-neutral-500 text-[17px] max-w-sm">
                <div>
                  EcoLink предлагает интегрированное решение, связывая сектор
                  общепита и сельское хозяйство через систему переработки
                  биомусора. Мы организуем сбор, транспортировку и переработку
                  биоотходов, превращая их в ценные органические удобрения для
                  казахстанских сельскохозяйственных предприятий.
                </div>
                <div className="pt-8">
                  Таким образом, мы содействуем снижению экологической нагрузки,
                  поддерживаем устойчивое использование ресурсов и способствуем
                  развитию экологически чистого Казахстана.
                </div>
                <button className=" mt-6 py-3 px-8 rounded-full font-semibold text-[13px] text-white bg-lime-600 transition shadow-md hover:-translate-y-[2px] hover:shadow-xl">
                  Перейти
                </button>
              </div>
            </motion.div>
          </motion.div>
          <div>
            <div className="md:relative -bottom-20 right-0 max-w-[30rem] mx-auto max-lg:mt-20">
              <img src={Graph} alt="Graph" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
