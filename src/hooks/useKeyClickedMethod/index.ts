import { validValues } from "constants/index"
import { useDispatch } from "react-redux"
import { addClickedKeyValue, capsClickHandler, deleteValue, shiftClickHandler } from "store/reducers"

interface IKeyClickedHook {
    subName?: string | null;
    name: string;
    capsClicked: boolean;
    shiftClicked: boolean;
    id: string;
    dispatch: any;
}

export const useKeyClickedMethod = () => {
    const clickedHandler = ({ id, subName, name, capsClicked, shiftClicked, dispatch }: IKeyClickedHook) => {
        if (validValues.includes(name))
            return dispatch(addClickedKeyValue({ subName, name, capsClicked, shiftClicked }))
        if (id === "backspace")
            return dispatch(deleteValue())
        if (id === "caps-lock")
            return dispatch(capsClickHandler())
        if (id === "shift1" || id === "shift2")
            return dispatch(shiftClickHandler())
    }

    return { clickedHandler }
}