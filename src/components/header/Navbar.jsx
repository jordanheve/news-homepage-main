import PropTypes from "prop-types"
export const Navbar = ({checkValue, setCheckValue}) => {
  return (
    <>
        <nav className={`navbar ${
            checkValue ? "active" : ""
        }`}>
            <ul className="navbar__ul" onClick={() => setCheckValue(false)}>
                <li className="navbar__ul__li">
                    <a href="./#home">Home</a>
                </li>
                <li className="navbar__ul__li">
                    <a href="./#new">New</a> 
                </li>
                <li className="navbar__ul__li">
                    <a href="./#">Popular</a>
                </li>
                <li className="navbar__ul__li">
                    <a href="./#trending">Trending</a> 
                </li>
                <li className="navbar__ul__li">
                    <a href="./#">Categories</a>
                </li>
            </ul>
        </nav>
    </>
  )
}


Navbar.propTypes =  {
    checkValue: PropTypes.any,
    setCheckValue: PropTypes.any
}