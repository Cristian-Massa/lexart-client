import React from "react";

export interface Button{
    label: string,
    disablied?: boolean,
    onClick: (e: React.MouseEvent<HTMLButtonElement>)=> void
}