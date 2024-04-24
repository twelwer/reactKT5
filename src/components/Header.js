import { Link } from "react-router-dom"
function Header(){
  return(
    <div className="header">
    <div className="menu_wrapper">
      <Link to={'/'}>
        Home
      </Link>
      <Link to={'/contacts'}>
        Contacts
      </Link>
        </div>
    </div>
    )
}
export default Header