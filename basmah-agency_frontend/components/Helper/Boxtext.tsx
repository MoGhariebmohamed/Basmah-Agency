import React from "react";

type Props = {
    children: React.ReactNode;
};

const Boxtext = ({ children } : Props) => {
    return (
        <h1 className="border-4 px-10 w-fit round-lg bg-[#0097b2] text-blue-950 text-xl font-bold">
            {children}
        </h1>
    );
};

export default Boxtext;