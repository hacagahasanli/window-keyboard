interface IKeyClickedHook {
    subName?: string | null;
    name: string;
    capsClicked: boolean;
    shiftClicked: boolean;
    id: string;
}

interface IKeyBoardSelector {
    keyboard: {
        joinedValue: string;
    }
}


export type { IKeyClickedHook, IKeyBoardSelector }