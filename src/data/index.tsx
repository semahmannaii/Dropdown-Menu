import { FaUserAlt, FaInfoCircle, FaSignOutAlt } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { MenuItem } from "../interfaces/MenuItem"

export const data: MenuItem[] = [
    {
        icon: <FaUserAlt />,
        text: "Account"
    },
    {
        icon: <IoMdSettings />,
        text: "Setting"
    },
    {
        icon: <FaInfoCircle />,
        text: "Help"
    },
    {
        icon: <FaSignOutAlt />,
        text: "Sign Out"
    }
]