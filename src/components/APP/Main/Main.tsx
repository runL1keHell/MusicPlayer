import React from "react";

type MainType = {
    children?: React.ReactNode;
    className?: string;
};


export const Main = ({className, children}: MainType) => {
    return (
        <main className={className}>
            {children}
        </main>
    )
}