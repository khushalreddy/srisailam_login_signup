import React from 'react'
import PropTypes from 'prop-types';
import logo from '../../logos/logo.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../layout/main.css'
const NavbarPage = ({ title, icon }) => {
  return (
    <div className='nav-bar'>
      <Nav className="justify-content-end" activeKey="/home">
        <div className='signinnerdiv'>
          <div className='right-nav'>
            <Nav.Item as="li">
              <Nav.Link className='signin' eventKey="link-2" href="/login">SIGN IN/SIGN UP</Nav.Link>
            </Nav.Item>
          </div>
        </div>
      </Nav>
      <div className='mainset' style={{display:'flex !important'}}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbarr'>
      <Navbar.Brand href="#home">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
           
          </Navbar.Brand>
          <Navbar.Brand className="leftsidebar" href="/">Sri Bhramaramba
            <br />
            Mallikarjuna Swamy Varla
            <br />
            Devasthanam</Navbar.Brand>
        <Container>
          
         
            
           
            <div className='right-list'>
              <div className='top-list'>
                <Nav>
                  <Nav.Link href="#deets">Volunteer</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Shop
                  </Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <i className="fas fa-shopping-cart"></i>
                  </Nav.Link>

                  <Nav.Link eventKey={2} href="#memes">
                    <i className="fa fa-search"></i>
                  </Nav.Link>
                </Nav>
              </div>
              <div className='bottom-list'>
                <Nav>
                  <div className='primary-button'>
                    <NavDropdown title="About" id="collasible-nav-dropdown" className='firstdropdown'>
                      <NavDropdown.Item className="dropdown-list" href="/about">Overview</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.2">The Temple</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.3">The Temple Story</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.4">General Information</NavDropdown.Item>
                    </NavDropdown>

                  </div>
                  <div className='primary-button'>
                    <NavDropdown title="Sevas and Darshan" id="collasible-nav-dropdown" className='seconddropdown'>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.1">Overview</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.2">Darshanam</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.3">Pratyaksha Seva</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.4">Paroksha Seva</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className='primary-button'>
                    <NavDropdown title="Donations" id="collasible-nav-dropdown" className='seconddropdown'>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.1">Overview</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.2">e-Hundi</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.3">AnnaPrasadam Trust</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.4">Pranadana Trust</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.4">Srisaila TV</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-list" href="#action/3.4">Swachh Srisailam</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                 
                </Nav>
              </div>

            </div>

         
        </Container>
      </Navbar>
      </div>
    </div>

  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Srisaila Devasthanam',
  icon: logo
}

export default NavbarPage