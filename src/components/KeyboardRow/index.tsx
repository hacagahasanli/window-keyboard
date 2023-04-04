import styled from "styled-components"
import { v4 } from "uuid"
import { KeyItem } from ".."
import { keys, rowKeys } from "constants/index"

export const KeyboardRow = () => {
    return (
        <>
            {rowKeys.map((rowKey) => {
                return <KeyboardWrapper key={v4()}>
                    {keys[rowKey]?.map(({ id, ...rest }) => {
                        return (
                            <KeyItem
                                onMouseDown={() => { }}
                                onMouseUp={() => { }}
                                key={id}
                                {...rest}
                                {...{ id }}
                            />
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
    width:100%;
    gap:.15rem;
`
