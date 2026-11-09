import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div id="container">
        <div id="con1">
            logo
        </div>
        <div id="con2">
        <Link to={"/add"}></Link>
        </div>
    </div>
  )
}

export default Navbar