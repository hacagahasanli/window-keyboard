export interface AddClickedKeyValueAction {
    type: string;
    payload: {
        name: string;
        capsClicked?: boolean;
        shiftClicked?: boolean;
        subName?: string | null;
        text?: string | null;
    };
}
