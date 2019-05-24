import React, {Component} from 'react'
import Form from '../Form';
import './style.css'


class Contact extends Component {
    render() {
        
       return(
           <div className="mt-4 mb-4 main-container">
            <h1 className="contact-h2 ff-semi">Контакты</h1>
            <div className="d-flex contact-contain">
                <div className="d-flex flex-column contact-info mt-3">
                    <div className="mb-3">example@mail.ru</div>
                    <div className="mb-3">8 (8352) 23 80 40</div>
                    <div className="mb-3">vk.com/club156081657</div>
                    <div>Чебоксары, Текстильщиков 8/16</div>
                </div>
                <div className="contact-form">
                    <Form />
                </div>
            </div>
            <div className="mt-4">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4f5be3af51aaf3640ba868dcde4b2710aa7675078a30bb51f80f52f97da37f55&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
            </div>
           </div>
       )
    }
}


export default Contact