import PropTypes from "prop-types"
import './HamburgerMenu.css'
export const HamburgerMenu = ({setCheckValue, checkValue}) => {
  return (
    <>
        <label className='hamburger-menu'>
            <input 
            type="checkbox" 
            className='hamburger-menu__input'  
            onChange={() => (
            setCheckValue(!checkValue)
            )} 
            checked={checkValue}/>
            <div className="hamburger-menu__bar"></div>
            <div className="hamburger-menu__bar"></div>
        </label>
    </>
  )
}

HamburgerMenu.propTypes =  {
    setCheckValue: PropTypes.func,
    checkValue: PropTypes.bool
}