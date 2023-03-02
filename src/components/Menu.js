
import { useContext } from "react"
import RestaurantContext from "../Contexts/RestaurantContext"
const Menu = ({
  collapsible, entities, name, perRow, subTitle, type, widgets
}) => {

  const { menuSelected, setMenuSelected } = useContext(RestaurantContext)

  let MenuClass = "flex justify-end mt-3 mb-3 pr-10 cursor-pointer"
  let TextClass = "text-md font-semibold"

  if (menuSelected === name) {
    MenuClass += " border-r-4 border-rose-600"
    TextClass += " text-rose-600"
  }

  // final render, if their is some entities.
  if (entities?.length || widgets?.length) {
    return (
      <div className={MenuClass} onClick={() => setMenuSelected(name)}>
        <span className={TextClass}>{name}</span>
      </div>
    )
  } else {
    // console.log("menu don't require => ", name)
  }
}
export default Menu