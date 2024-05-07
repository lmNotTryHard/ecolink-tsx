import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  label: string;
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ label, page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-neutral-200" : "text-neutral-400"
      }
			transition duration-500 font-medium hover:text-neutral-300
			`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {label}
      <div
        className={`${selectedPage === lowerCasePage ? "text-black" : ""}
				transition
			`}
      ></div>
    </AnchorLink>
  );
};

export default Link;
