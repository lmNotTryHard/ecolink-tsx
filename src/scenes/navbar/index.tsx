import { useState } from "react";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage
    ? "w-4/5 top-5 rounded-xl"
    : "top-0 w-full rounded-none";

  return (
    <nav>
      {/* DESKTOP MENU MODAL */}
      <motion.div
        className={`transition-all duration-300 ${navbarBackground}  ${flexBetween} bg-green-900 fixed left-0 right-0 mx-auto z-30 py-4`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          ease: "easeIn",
        }}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <h1 className="text-xl text-neutral-50">
              Eco<span className="text-lime-500">Link</span>
            </h1>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} gap-4 text-[14px]`}>
                <Link
                  label="Главная"
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  label="Как это Выглядит"
                  page="HowItLooks"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  label="О нас"
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  label="Контакты"
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <button className="py-2 px-4 rounded-full font-semibold text-[13px] text-white bg-[#194D5A] transition shadow-md hover:-translate-y-[2px] hover:shadow-xl">
                  Перейти
                </button>
              </div>
            ) : (
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <FaBars className="h-5 w-5 text-white" />
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          className="fixed right-0 bottom-0 z-30 h-screen w-3/4 xs:w-1/2 sm:w-2/5 backdrop-blur-lg backdrop-brightness-50"
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-8 pt-28">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FaXmark className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col items-center justify-center gap-10 text-2xl">
            <Link
              label="Главная"
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              label="Как это выглядит"
              page="HowItLooks"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              label="О нас"
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              label="Контакты"
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
