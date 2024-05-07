import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-full px-5 py-4 bg-neutral-50 font-bold shadow-md transition hover:-translate-y-[2px] hover:shadow-xl"
      onClick={() => setSelectedPage(SelectedPage.About)}
      href={`#${SelectedPage.About}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
