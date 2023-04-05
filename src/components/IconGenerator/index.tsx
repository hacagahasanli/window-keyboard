import { window_key_svg, backspace_key_svg, arrow_control_svg } from "assets/icons"
import { RotatedArrow, ArrowContainer } from "components/UI/global-styled-components"
import { FC } from "react"
import { IIconPropStype, IIconMap } from "./IIconGenerator"

const WindowKey = () => <img src={window_key_svg} alt="window_key" />

const BackspaceKey = () => <img src={backspace_key_svg} alt="backspace_key" />

const ArrowLeft = () => (
    <ArrowContainer deg={0}>
        <RotatedArrow src={arrow_control_svg} alt="arrow_control" />
    </ArrowContainer>
)
const ArrowTop = () => (
    <ArrowContainer deg={90}>
        <RotatedArrow src={arrow_control_svg} alt="arrow_control" />
    </ArrowContainer>
)
const ArrowRight = () => (
    <ArrowContainer deg={180}>
        <RotatedArrow src={arrow_control_svg} alt="arrow_control" />
    </ArrowContainer>
)
const ArrowBottom = () => (
    <ArrowContainer deg={270}>
        <RotatedArrow src={arrow_control_svg} alt="arrow_control" />
    </ArrowContainer>
)

export const Icon: FC<IIconPropStype> = ({ name }) => {
    const icons: IIconMap = {
        "windowKey": WindowKey,
        "backspaceKey": BackspaceKey,
        "arrowLeft": ArrowLeft,
        "arrowRight": ArrowRight,
        "arrowTop": ArrowTop,
        "arrowBottom": ArrowBottom,
    }
    const IconComponent = icons[name]

    return <IconComponent />
}