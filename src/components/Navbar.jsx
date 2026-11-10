import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div id="container">
        <div id="con1">
            logo
        </div>
        <div id="con2">
        <Link to={"/addData"}>Add</Link>
        <Link to={'/viewData'}>View</Link>
        </div>
    </div>
  )
}

export default Navbar