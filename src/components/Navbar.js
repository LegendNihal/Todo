import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

const Navbar = () => {
    const [showNavRight, setShowNavRight] = useState(false);
    return ( 
        <MDBNavbar expand='lg' light bgColor='dark'>
            <MDBContainer fluid className='m-3 px-5'>
                <MDBNavbarToggler
                type='button'
                data-target='#navbarRightAlignExample'
                aria-controls='navbarRightAlignExample'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavRight(!showNavRight)}
                >
                <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBNavbarBrand tag="span" className='mb-0 h1 mx-5'>
                        <Link id="RouterNavLink" to='/'>
                            <div className="text-white">Grocery List</div>
                        </Link>
                </MDBNavbarBrand>

                <MDBCollapse navbar show={showNavRight}>
                <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0 mx-5'>
                    <MDBNavbarItem className='mx-3'>
                            <Link id="RouterNavLink" to='/about' className='link-light'>About</Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem className='mx-3'>
                            <Link id="RouterNavLink" to='/contact' className='link-light'>Contact</Link>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
     );
}
 
export default Navbar;