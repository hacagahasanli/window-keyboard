import { window_key_svg, backspace_key_svg, arrow_control_svg } from "assets/icons"
import { RotatedArrow } from "components/UI/global-styled-components"
import { FC } from "react"

interface IIconPropStype {
    name: string;
}

interface IIconMap {
    [key: string]: FC
}

const WindowKey = () => <img src={window_key_svg} alt="window_key" />

const BackspaceKey = () => <img src={backspace_key_svg} alt="backspace_key" />

const ArrowLeft = () => <RotatedArrow deg={0} src={arrow_control_svg} alt="arrow_control" />
const ArrowTop = () => <RotatedArrow deg={90} src={arrow_control_svg} alt="arrow_control" />
const ArrowRight = () => <RotatedArrow deg={180} src={arrow_control_svg} alt="arrow_control" />
const ArrowBottom = () => <RotatedArrow deg={270} src={arrow_control_svg} alt="arrow_control" />

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