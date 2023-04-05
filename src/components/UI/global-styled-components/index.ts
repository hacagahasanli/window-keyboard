import styled from "styled-components";
interface IRotateArrow {
    deg?: number | null | undefined
}

export const RotatedArrow = styled.img<IRotateArrow>`
    transform:${({ deg }) => `rotate(${deg}deg)`}
`