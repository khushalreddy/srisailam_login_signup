import React from 'react'
import google from '../../logos/google.png'
import apple from '../../logos/apple.png'
import email from '../../logos/email.png'
import location from "../../logos/location.png"
import browser from '../../logos/browser.png'
import phone from '../../logos/phone.png'
import printer from '../../logos/printer.png'
import footerbottom from '../../logos/footerbottom.png'
const Footer = () => {
  return (
    <div className='footer-m'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <p>Download Mobile App</p>
                <div>
                    <img src={google} alt="google app" />
                    <img src={apple} alt="apple app" style={{marginLeft:'10px',marginRight:'10px'}} />
                </div>
                </div>
                <div className='footer-top-right'>
                    <p>Subscribe Newsletter</p>
                    <div className='subscribeddd'>
                    <div className='subscribe'>
                    <img src={email} alt = "email logo" />
                    <input type="text" maxLength="30" placeholder='Email Address' style={{textTransform:'none'}} />
                    </div>
                </div>
                

            </div>
        </div>
        <div className='footer-middle'>
            <footer className='sd-footer-middle-f'>
                <div className='footer-container'>
                    <div  style={{display:'flex', flexDirection:'row', paddingTop:'2%' ,justifyContent:'space-evenly',textAlign:'initial', backgroundColor: 'rgb(239, 239, 239)'}}>
                        <div className='list-body'>
                        <h5 className="text">About</h5>
                        <ul className="list-unstyled"><li><a className="text-dark"> Overview</a></li><li><a className="text-dark">The Temple</a></li><li><a className="text-dark">The Temple Story</a></li><li><a className="text-dark">General Information</a></li></ul>
                        </div>
                        <div className='list-body'>
                        <h5 className="text ">Sevas &amp; Darshanam </h5>
                        <ul className="list-unstyled"><li><a className="text-dark"> Overview</a></li><li><a className="text-dark">Darshanam </a></li><li><a className="text-dark">Paroksha Seva</a></li><li><a className="text-dark">Pratyaksha Seva </a></li></ul>
                        </div>
                        <div className='list-body'>
                        <h5 className="text ">Donations </h5>
                        <ul className="list-unstyled"><li><a className="text-dark"> Overview</a></li><li><a className="text-dark">e-Hundi </a></li><li><a className="text-dark">AnnaPrasadam Trust</a></li><li><a className="text-dark">Aagama Patasala Trust </a></li><li><a className="text-dark">GoSamrakshana Trust </a></li><li><a className="text-dark">Pranadana Trust </a></li><li><a className="text-dark">Srisaila TV</a></li><li><a className="text-dark">Swachh Srisailam </a></li></ul>
                        </div>
                        <div className='list-body'>
                        <h5 className="text ">Online Booking </h5>
                        <ul className="list-unstyled"><li><a className="text-dark"> Overview</a></li><li><a className="text-dark">Pratyaksha Seva Booking </a></li><li><a className="text-dark">Paroksha Seva Booking</a></li><li><a className="text-dark">Darshanam Tickets </a></li><li><a className="text-dark">Donations </a></li><li><a className="text-dark">Accommodation</a></li><li><a className="text-dark">Publications</a></li></ul>
                        </div>
                        <div className='list-body'>
                        <h5 className="text ">Media Room </h5>
                        <ul className="list-unstyled"><li><a className="text-dark"> Overview</a></li><li><a className="text-dark">Media Kit </a></li><li><a className="text-dark">Gallery</a></li><li><a className="text-dark">Whats New </a></li><li><a className="text-dark">Press </a></li><li><a className="text-dark">Tenders</a></li><li><a className="text-dark">RTI Act</a></li></ul>
                        </div>
                        <div className='list-body'>
                        <h5 className="text ">Support </h5>
                        <ul className="list-unstyled"><li><a className="text-dark"> Overview</a></li><li><a className="text-dark">FAQs </a></li><li><a className="text-dark">Facilties to Pilgrims</a></li><li><a className="text-dark">Connectivity </a></li><li><a className="text-dark">Contact</a></li><li><a className="text-dark">Tenders</a></li><li><a className="text-dark">RTI Act</a></li></ul>
                        </div>
                    </div>
                   
                </div>
                <div className='bottom-additional-footer' >
                        <div className='left'>
                            <p>
                                <img src={location}  alt="location" style={{paddingLeft:'1px'}}/>
                                Srisaila Devasthanam
                            </p>
                            <p className='leftpp'>
                            Srisailam - 518101, Kurnool (Dist.), Andhra Pradesh, India.
                            </p>
                        </div>
                        <div className='middle'>
                            <p>
                                <img src={email} alt="email" className='sep' />
                                endow-eosri@gov.in
                            </p>
                            <p>
                                <img src={browser} alt="browser" className='sep' />
                                www.srisailadevasthanam.org
                            </p>
                        </div>
                        <div className='right'>
                            <p>
                                <img src={phone} alt="phone" className='sep'/>
                                +91-8333901351
                            </p>
                            <p>
                                <img src ={printer} alt="printer" className='sep'/>
                                +91-8524-287126
                            </p>
                        </div>
                        </div>
                        <div className='visitors-count'>
                            <div className='left'>
                            <p> Total Visitors</p>
                            </div>
                            <div className='right'>
                                <p> Today Visitors</p>
                            </div>
                        </div>
                        <div className='footer-bottom'>
                            <img src={footerbottom}  />
                        </div>


            </footer>
        </div>
    </div>
  )
}

export default Footer