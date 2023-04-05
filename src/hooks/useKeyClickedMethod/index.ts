import { validValues } from "constants/index"
import { useDispatch } from "react-redux"
import { addAnyKey, addClickedKeyValue, capsClickHandler, deleteValue, pasteValue, shiftClickHandler } from "store/reducers"
import { IKeyClickedHook } from "./IUseKeyClicked"

export const useKeyClickedMethod = () => {
    const dispatch = useDispatch()

    const clickedHandler = async ({ id, subName, name, capsClicked, shiftClicked }: IKeyClickedHook) => {
        dispatch(addAnyKey(name))
        const texts = await navigator.clipboard.readText()

        if (validValues.includes(name))
            return dispatch(addClickedKeyValue({ subName, name, capsClicked, shiftClicked, texts }))

        switch (id) {
            case "delete":
            case "delete_all":
                return dispatch(deleteValue({ type: id }))
            case "caps-lock":
                return dispatch(capsClickHandler())
            case "shift1":
            case "shift2":
                return dispatch(shiftClickHandler())
        }
    }

    return { clickedHandler }
}