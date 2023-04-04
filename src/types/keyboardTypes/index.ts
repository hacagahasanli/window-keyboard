import { FC } from "react";

export interface IKeyItemProps {
    size?: number | null;
    c?: string | null
}

export interface IKeyItemType {
    id: string;
    name: string;
    subName?: string | null;
    size?: number | null;
    c?: string | null;
    img?: string,
    hasImage?: boolean
};

export interface KeyboardKeysType {
    [key: string]: IKeyItemType[]
}