import React, {Component} from 'react'
import './style.css'


class Footer extends Component {
    render() {
       return(
           <div className="footer d-flex pt-3 pb-3 mt-auto">
               <div className='main-container d-flex'>
                    <div className="footer-logo"></div>
                    <div className="d-flex footer-contact">
                        <div className="mr-3 fs-15 ff-semi footer-contact-label">
                            Контакты
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center">
                                <i className="footer-contacts-icon mr-2">
                                    <span className="i-phone"></span>
                                </i>
                                <span>example@mail.ru</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="footer-contacts-icon mr-2">
                                    <span className="i-mail"></span>
                                </i>
                                <span>8 (8352) 23 80 40</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="footer-contacts-icon mr-2">
                                    <span className="i-vk"></span>
                                </i>
                                <span>vk.com/club156081657</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="footer-contacts-icon mr-2">
                                    <span className="i-location"></span>
                                </i>
                                <span>Чебоксары, Текстильщиков 8/16</span>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           
       )
    }
}


export default Footer