import styled from "styled-components"
import { useSelector } from "react-redux"

interface IKeyBoardSelector {
    keyboard: {
        typedValue: string[];
    }
}

export const TextArea = () => {
    const { typedValue } = useSelector((state: IKeyBoardSelector) => state.keyboard)

    return (
        <TextAreaWrapper>
            <StyledTextArea name="typed_value" id="typed_value" rows={4} readOnly value={typedValue.join("")}></StyledTextArea>
        </TextAreaWrapper>
    )
}

const TextAreaWrapper = styled.div`
    width: 100%;
    padding: 0;
`
const StyledTextArea = styled.textarea`
    margin:0;
    padding:0;
    width:100%;
    font-size:3.1rem;
    min-height:60px;
    max-height:120px;
    :focus,:focus-visible{
        border:none;
        outline:none;
    }
`