import React from "react";

type Props = {
    children: React.ReactNode;
};

const Boxtext = ({ children } : Props) => {
    return (
        <h1 className="border-2 px-4 w-fit round-lg bg-blue-200 text-[#ea580c] font-bold">
            {children}
        </h1>
    );
};

export default Boxtext;