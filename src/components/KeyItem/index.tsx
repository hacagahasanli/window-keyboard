import { useDispatch } from "react-redux"
import { addClickedKeyValue, deleteValue } from "store/reducers"
import styled from "styled-components"
import { IKeyItemProps, IKeyItemType } from "types/keyboardTypes"
import { Icon } from ".."
import { validValues } from "constants/index"

export const KeyItem = ({ size, name, subName, c, img, hasImage }: IKeyItemType) => {
    const dispatch = useDispatch()
    const addValue = () => {
        if (validValues.includes(name))
            return dispatch(addClickedKeyValue(name))
        if (name === "backspace")
            return dispatch(deleteValue())
    }

    const currentScript = hasImage && img
        ? <Icon name={img} />
        : <>
            <span>{name}</span>
            <span>{subName}</span>
        </>

    return (
        <StyledKeyItem  {...{ size, c }} onClick={addValue}>
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
