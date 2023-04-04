import styled from "styled-components"
import { KeyboardKeysType } from "types/keyboardTypes"
import { v4 } from "uuid"
import { KeyItem } from "components/KeyItem"

export const KeyboardRow = () => {
    const keys: KeyboardKeysType = {
        "rowOne": [
            { id: 'esc', name: 'Esc' },
            { id: 'tilde', name: '~', subName: '`', c: "g" },
            { id: 'exclamation', name: '!', subName: '1', c: "g" },
            { id: 'at', name: '@', subName: '2', c: "g" },
            { id: 'hash', name: '#', subName: '3', c: "g" },
            { id: 'dollar', name: '$', subName: '4', c: "g" },
            { id: 'percent', name: '%', subName: '5', c: "g" },
            { id: 'caret', name: '^', subName: '6', c: "g" },
            { id: 'ampersand', name: '&', subName: '7', c: "g" },
            { id: 'asterisk', name: '*', subName: '8', c: "g" },
            { id: 'left_parenthesis', name: '(', subName: '9', c: "g" },
            { id: 'right_parenthesis', name: ')', subName: '0', c: "g" },
            { id: 'hyphen', name: '-', subName: '_', c: "g" },
            { id: 'plus', name: '+', subName: '=', c: "g" },
            { id: 'delete', name: "<", size: 1.6 },
        ],
        "rowTwo": [
            { id: "tab", name: "Tab", size: 1.6 },
            { id: "q", name: "q" },
            { id: "w", name: "w" },
            { id: "e", name: "e" },
            { id: "r", name: "r" },
            { id: "t", name: "t" },
            { id: "y", name: "y" },
            { id: "u", name: "u" },
            { id: "i", name: "i" },
            { id: "o", name: "o" },
            { id: "p", name: "p" },
            { id: "right-open-bracket", name: '{', subName: "[", c: "g" },
            { id: "left-open-bracket", name: '}', subName: "]", c: "g" },
            { id: "slash-pipe", name: "|", subName: "\\", c: "g" },
            { id: "delete", name: "Del" },
        ],
        "rowThree": [
            { id: "caps-lock", name: "Caps", size: 2.1 },
            { id: "a", name: "a" },
            { id: "s", name: "s" },
            { id: "d", name: "d" },
            { id: "f", name: "f" },
            { id: "g", name: "g" },
            { id: "h", name: "h" },
            { id: "j", name: "j" },
            { id: "k", name: "k" },
            { id: "l", name: "l" },
            { id: "semicolon", name: ":", subName: ";", c: "g" },
            { id: "double-quote", name: '"', subName: "'", c: "g" },
            { id: "enter", name: "Enter", size: 2.75 },
        ],
        "rowFour": [
            { id: "shift", name: "Shift", size: 2.73 },
            { id: "z", name: "z" },
            { id: "x", name: "x" },
            { id: "c", name: "c" },
            { id: "v", name: "v" },
            { id: "b", name: "b" },
            { id: "n", name: "n" },
            { id: "m", name: "m" },
            { id: "<", name: "<", subName: "," },
            { id: ">", name: ">", subName: "." },
            { id: "?", name: "?", subName: "/" },
            { id: "^", name: "^" },
            { id: "shift", name: "Shift", size: 2.14 }
        ],
        "rowFive": [
            { id: "fn", name: "Fn" },
            { id: "ctrl1", name: "Ctrl" },
            { id: "w", name: "W" },
            { id: "alt1", name: "Alt" },
            { id: "space", name: "spacec", size: 6.10 },
            { id: "alt2", name: "Alt" },
            { id: "ctrl2", name: "Ctrl" },
            { id: "<>", name: "<>" },
            { id: "l", name: "L" },
            { id: ">", name: ">" },
            { id: "ic", name: "IC" }
        ]
    }

    const rowKeys = ["rowOne", "rowTwo", "rowThree", "rowFour", "rowFive"]

    return (
        <>
            {rowKeys.map((rowKey) => {
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
    width:100%;
    gap:.15rem;
`
