import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu';
import { Navbar } from './Navbar';
export const Header = () => {
    const [checkValue, setCheckValue] = useState(false)
  return (
    <>
        <header className='header'>
            <img src={logo} alt='logo' className='header__logo'/>
        <Navbar checkValue={checkValue} setCheckValue={setCheckValue}/>
        <HamburgerMenu setCheckValue={setCheckValue} checkValue={checkValue}/>
        </header>
        <div className={`filtro ${
            checkValue ? "active" : ""
        }`} onClick={() => setCheckValue(false)}></div>
    </>
  )
}
