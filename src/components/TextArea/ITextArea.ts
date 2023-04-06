interface IKeyClickedSelector {
    keyClicked: {
        capsClicked: boolean;
    }
}
interface IKeyBoardSelector {
    keyboard: {
        typedValue: string[];
    }
}

export type { IKeyClickedSelector, IKeyBoardSelector }