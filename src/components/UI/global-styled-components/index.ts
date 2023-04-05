import styled from "styled-components";
interface IRotateArrow {
    deg?: number | null | undefined
}

export const RotatedArrow = styled.img`
    padding-bottom:1.3rem;
`

export const ArrowContainer = styled.div<IRotateArrow>`
    transform:${({ deg }) => `rotate(${deg}deg)`};
    max-width:40px;
    position:relative;
`