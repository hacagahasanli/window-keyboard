import { window_key_svg, backspace_key_svg } from "assets/icons"
import { FC } from "react"

interface IIconPropStype {
    name: string
}

interface IIconMap {
    [key: string]: FC
}

const WindowKey = () => <img src={window_key_svg} alt="window_key" />

const BackspaceKey = () => <img src={backspace_key_svg} alt="backspace_key" />

export const Icon: FC<IIconPropStype> = ({ name }) => {
    const icons: IIconMap = {
        "windowKey": WindowKey,
        "backspaceKey": BackspaceKey
    }
    const IconC = icons[name]

    return <IconC />
}