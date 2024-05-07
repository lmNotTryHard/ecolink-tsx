import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import HowItLooks from "./scenes/howItLooks";
import About from "./scenes/about";
// import Pricing from "./scenes/pricing";
import Contact from "./scenes/contact";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app cursor-default">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <HowItLooks setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      {/* <Pricing setSelectedPage={setSelectedPage} /> */}
      <Contact setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
