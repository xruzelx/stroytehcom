import React, {Component} from 'react'
import './style.css'



class Header extends Component {
    render() {
       return(
        <div className='d-flex align-items-center header main-container'>
            <div className="header-logo"></div>
            <div className="header-contacts">
                <div className="d-flex align-items-center">
                    <i className="header-contacts-icon mr-2">
                        <span className="i-phone"></span>
                    </i>
                    <span className="fs-21">тел. 8 800 200 31 32</span>
                </div>
                <div className="flex-column header-contacts-extra">
                    <div className="d-flex align-items-center mb-2">
                        <i className="header-contacts-icon--small mr-2">
                            <span className="i-mail"></span>
                        </i>
                        <span className="fs-16">example@mail.com</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="header-contacts-icon--small mr-2">
                            <span className="i-location"></span>
                        </i>
                        <span className="fs-16">Чебоксары, Текстильщиков 8/16</span>
                    </div>
                </div>
            </div>
        </div>
                              
           
       )
    }
}


export default Header