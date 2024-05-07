import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="w-full mx-auto font-montserrat text-4xl font-medium text-neutral-900">
      {children}
    </h1>
  );
};

export default HText;
