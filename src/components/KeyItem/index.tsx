import { Icon } from ".."
import { useSelector } from 'react-redux';
import { IKeyItemProps, IKeyItemType, IKeyNameProp } from "types/keyboardTypes"
import { validValues } from "constants/index"
import styled, { css } from "styled-components"
import { useKeyClickedMethod } from "hooks";
import { IKeyClickedSelector } from "./IKeyItem"


export const KeyItem = ({ id, size, name, subName, c, img, hasImage }: IKeyItemType) => {
    const { capsClicked, shiftClicked } = useSelector((state: IKeyClickedSelector) => state.keyClicked)
    const { clickedHandler } = useKeyClickedMethod()

    const addValue = () => {
        clickedHandler({ id, subName, name, capsClicked, shiftClicked })
    }

    const isUpperCasedValue = capsClicked && validValues.includes(name)

    const isActive = !(!subName) && shiftClicked

    const currentScript = hasImage && img
        ? <Icon name={img} />
        : <>
            <NameField {...{ c, isActive }}>{name}</NameField>
            <SubNameField {...{ subName, isActive }}>{subName}</SubNameField>
        </>

    return (
        <StyledKeyItem  {...{ size, isUpperCasedValue }} onClick={addValue}>
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
    position:relative;

    span{
        width:50%;
    }

    :hover{
        color:#000000;
        background:white;
    }

`

const NameField = styled.span<IKeyNameProp>`
    padding:.1rem;
    font-size:1rem;
    color:${({ c }) => c ? "#c1c1c1" : null};
    ${({ isActive }) => isActive && css`
            color:white;
            font-size:1.2rem;
    `};
`

const SubNameField = styled.span<IKeyNameProp>`
    ${({ subName }) => !subName ? null : css`
            position:absolute;
            bottom:0.3rem;
            right:0;
    `};
    font-size:1.2rem;
    ${({ isActive }) => isActive && css`
            color:#c1c1c1;
            font-size:1rem;
    `};
`
