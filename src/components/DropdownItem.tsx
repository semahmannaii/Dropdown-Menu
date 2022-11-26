import { MenuItem } from "../interfaces/MenuItem"

function DropdownItem({ icon, text }: MenuItem) {
  return (
    <li className="dropdown-item ">
      <div className="icon-item">{icon}</div>
      <p>{text}</p>
    </li>
  )
}

export default DropdownItem