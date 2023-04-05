import { FC } from "react";

interface IIconPropStype {
    name: string;
}

interface IIconMap {
    [key: string]: FC
}

export type { IIconPropStype, IIconMap }