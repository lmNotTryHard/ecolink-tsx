import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
  return (
    <section id="pricing" className="bg-green-600 gap-16 bg-gray-20 py-10 pb-0">
      {/* MAIN */}

      <div className="relative w-full h-screen">
        <motion.div
          className="mx-auto w-4/6 items-center justify-center md:flex md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}
        ></motion.div>
      </div>
    </section>
  );
};

export default Pricing;
