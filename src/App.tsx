import { useState, useEffect, useRef } from "react"
import { FaReact } from "react-icons/fa"
import DropdownItem from "./components/DropdownItem"
import { data } from "./data"

function App() {
  const [menu, setMenu] = useState(false)

  let menuRef: any = useRef()

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <div className="container" ref={menuRef}>
      <div onClick={() => setMenu(!menu)}>
        <FaReact className="dropdown-icon" />
      </div>
      <div className={`dropdown-menu ${menu ? "active" : "hidden"}`}>
        <h4>Semah Mannaii</h4>
        <ul>
          {data.map((item) => (
            <DropdownItem icon={item.icon} text={item.text} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App