import React from "react";

type Props = {
  label: string;
};

const MobileMenuItem: React.FC<Props> = ({ label }) => {
  return (
    <div className="px-3 text-center text-white text-sm hover:underline">
      {label}
    </div>
  );
};

export default MobileMenuItem;
