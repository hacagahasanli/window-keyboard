import styled from "styled-components"
import { v4 } from "uuid"
import { KeyItem } from ".."
import { keys } from "constants/index"
import { useSelector, useDispatch } from 'react-redux';
import { addwholeValueToReducer } from "store/reducers";
import { useEffect } from "react";
interface IKeyBoardSelector {
    keyboard: {
        allKeyValues: string[];
        joinedValue: string;
        typedValue: string[];
    }
}

export const KeyboardRow = () => {
    const dispatch = useDispatch()
    const { allKeyValues, joinedValue, typedValue } = useSelector((state: IKeyBoardSelector) => state.keyboard)

    if (joinedValue === "ctrlc")
        navigator.clipboard.writeText(typedValue.join(""));

    useEffect(() => {
        dispatch(addwholeValueToReducer())
    }, [])

    return (
        <>
            {allKeyValues?.map((rowKey: string) => {
                return <KeyboardWrapper key={v4()}>
                    {keys[rowKey]?.map(({ id, ...rest }) => {
                        return (
                            <KeyItem key={id} {...rest} {...{ id }} />
                        )
                    })}
                </KeyboardWrapper>
            })}
        </>
    )
}

const KeyboardWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    width:100%;
    gap:.15rem;
`
