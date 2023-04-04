export interface IKeyItemProps {
    size?: number | null;
    c?: string | null;
    isUpperCasedValue?:boolean;
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