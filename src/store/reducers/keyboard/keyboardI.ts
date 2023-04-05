interface IDeleteAction {
    type: string;
    payload: {
        type: string
    }
}
interface IAnyAction {
    type: string;
    payload: string;
}

interface AddClickedKeyValueAction {
    type: string;
    payload: {
        name: string;
        capsClicked?: boolean;
        shiftClicked?: boolean;
        subName?: string | null;
        texts?: string | null;
    };
}


export type { IAnyAction, IDeleteAction, AddClickedKeyValueAction }