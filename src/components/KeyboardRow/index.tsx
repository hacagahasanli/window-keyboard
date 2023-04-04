import styled from "styled-components"
import { IKeyItemProps, IKeyItemType } from "types/keyboardTypes"

export const KeyboardRow = () => {
    interface KeyboardKeysType {
        [key: string]: IKeyItemType[]
    }
    const keys: KeyboardKeysType = {
        "rowOne": [
            { id: 'esc', name: 'Esc', subName: null },
            { id: 'tilde', name: '~', subName: '`' },
            { id: 'exclamation', name: '!', subName: '1' },
            { id: 'at', name: '@', subName: '2' },
            { id: 'hash', name: '#', subName: '3' },
            { id: 'dollar', name: '$', subName: '4' },
            { id: 'percent', name: '%', subName: '5' },
            { id: 'caret', name: '^', subName: '6' },
            { id: 'ampersand', name: '&', subName: '7' },
            { id: 'asterisk', name: '*', subName: '8' },
            { id: 'left_parenthesis', name: '(', subName: '9' },
            { id: 'right_parenthesis', name: ')', subName: '0' },
            { id: 'hyphen', name: '-', subName: '_' },
            { id: 'plus', name: '+', subName: '=' },
            { id: 'remove', name: "<", },
        ]
    }

    const rowKeys = ["rowOne"]

    return (
        <KeyboardWrapper>
            {rowKeys.map((rowKey) => {
                return keys[rowKey]?.map(({ name, subName, id }) => {
                    return <KeyItem key={id}>
                        <span>{name}</span>
                        <span>{subName}</span>
                    </KeyItem>
                })
            })}
            {/* <KeyItem>
                <span>Esc</span>
                <span></span>
            </KeyItem>
            <KeyItem>
                <span>~</span>
                <span>{"`"}</span>
            </KeyItem>
            <KeyItem>
                <span>!</span>
                <span>1</span>
            </KeyItem>
            <KeyItem>
                <span>@</span>
                <span>2</span>
            </KeyItem>
            <KeyItem>
                <span>#</span>
                <span>3</span>
            </KeyItem>
            <KeyItem>
                <span>$</span>
                <span>4</span>
            </KeyItem>
            <KeyItem>
                <span>%</span>
                <span>5</span>
            </KeyItem>
            <KeyItem>
                <span>^</span>
                <span>6</span>
            </KeyItem>
            <KeyItem>
                <span>&</span>
                <span>7</span>
            </KeyItem>
            <KeyItem>
                <span>*</span>
                <span>8</span>
            </KeyItem>
            <KeyItem>
                <span>{"("}</span>
                <span>9</span>
            </KeyItem>
            <KeyItem>
                <span>{")"}</span>
                <span>9</span>
            </KeyItem>
            <KeyItem>
                <span>{"-"}</span>
                <span>{"_"}</span>
            </KeyItem>
            <KeyItem>
                <span>{"+"}</span>
                <span>{"="}</span>
            </KeyItem>
            <KeyItem size={1.6}>
                <span>{"<>>"}</span>
                <span></span>
            </KeyItem> */}
        </KeyboardWrapper>
    )
}

const KeyboardWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    gap:.15rem;
`

const KeyItem = styled.div<IKeyItemProps>`
    background:#4e4e4e;
    width:100%;
    padding:.2rem;
    width:${props => props.size ? `${props.size * 6}rem` : `${6}rem`};
    height:2.5em;

    display:flex;
    justify-content:flex-start;
    color:white;

    :hover{
        color:#000000;
        background:white;
    }
`