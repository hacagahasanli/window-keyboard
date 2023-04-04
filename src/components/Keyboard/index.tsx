import { FC } from "react"
import styled from "styled-components"
import { KeyboardRow } from '../KeyboardRow/index';
import { TextArea } from "components/TextArea";

const Keyboard: FC = () => {
    return (
        <KeyboardContainer>
            <TextArea />
            <KeyboardRow />
        </KeyboardContainer>
    )
}

const KeyboardContainer = styled.div`
     display:flex;
     justify-content:center;
     flex-direction:column;
     gap:2rem;
     max-width:1180px;
     min-height:100%;
     background: RGB(26, 26, 26);
     margin:0 auto;
     display:flex;
     padding:0.2rem;
     border-radius:3px;
     flex-direction:column;
     gap:.15rem;
     justify-content:center;
     align-items:center;
     font-family: 'Segoe UI', sans-serif;
     font-weight:600;
`

export { Keyboard }