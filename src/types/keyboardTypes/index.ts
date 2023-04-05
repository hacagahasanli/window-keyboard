export interface IKeyItemProps {
    size?: number | null;
    isUpperCasedValue?: boolean;
}

export interface IKeyNameProp {
    isActive?: boolean;
    c?: string | null;
    subName?: string | null;
    name?: string | null;
}

export interface IKeyItemType {
    id: string;
    name: string;
    subName?: string | null;
    size?: number | null;
    c?: string | null;
    img?: string,
    hasImage?: boolean,
    type?: string | null,
    onMouseDown?: () => void;
    onMouseUp?: () => void;
};

export interface KeyboardKeysType {
    [key: string]: IKeyItemType[]
}