import { Icon } from ".."
import { useDispatch, useSelector } from 'react-redux';
import { IKeyItemProps, IKeyItemType } from "types/keyboardTypes"
import { validValues } from "constants/index"
import styled from "styled-components"
import {
    addClickedKeyValue,
    deleteValue,
    capsClickHandler,
    shiftClickHandler
} from "store/reducers"

interface IKeyClickedSelector {
    keyClicked: {
        capsClicked: boolean;
        shiftClicked: boolean;
    }
}

export const KeyItem = ({ id, size, name, subName, c, img, hasImage }: IKeyItemType) => {
    const dispatch = useDispatch()
    const { capsClicked, shiftClicked } = useSelector((state: IKeyClickedSelector) => state.keyClicked)

    const addValue = () => {
        if (validValues.includes(name))
            return dispatch(addClickedKeyValue({ name, capsClicked, shiftClicked }))
        if (name === "backspace")
            return dispatch(deleteValue())
        if (id === "caps-lock")
            return dispatch(capsClickHandler())
        if (id === "shift1" || id === "shift2")
            return dispatch(shiftClickHandler())
    }

    const isUpperCasedValue = capsClicked && validValues.includes(name)

    const currentScript = hasImage && img
        ? <Icon name={img} />
        : <>
            <span>{name}</span>
            <span>{subName}</span>
        </>

    return (
        <StyledKeyItem  {...{ size, c, isUpperCasedValue }} onClick={addValue}>
            {currentScript}
        </StyledKeyItem >
    )
}

const StyledKeyItem = styled.div<IKeyItemProps>`
    background:#4e4e4e;
    width:100%;
    padding:.2rem;
    width:${props => props.size ? `${props.size * 6}rem` : `${6}rem`};
    height:2.5em;
    display:flex;
    justify-content:space-between;
    color:white;
    text-transform:${(({ isUpperCasedValue }) => isUpperCasedValue && 'uppercase')};

    span{
        width:50%;
    }

    :hover{
        color:#000000;
        background:white;
    }

    span:first-child{
        color:${({ c }) => c ? "#c1c1c1" : null};
    }

    span:nth-child(2){
        position:relative;
        top:1rem;
    }
`
