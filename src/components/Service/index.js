import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './style.css'
import '../Main/style.css'


class Service extends Component {
    render() {
       return(
        <div>
            <div className="main-container mt-4 mb-4">
                <h2 className="ff-semi fs-24">Наши услуги</h2>
            </div>
            <div className="main-container main-body-service-container mb-4">
                
                <div className="main-body-service-list d-flex flex-wrap">
                    <div className="service-list-item d-flex">
                        <div className="d-flex flex-column mt-auto service-list-item-content">
                            <p className="ff-semi">Строительство бань, домов, капитальных строений</p>
                            <NavLink to="/service/build/" className="btn main-form-button navlink-btn">Подробнее</NavLink>
                        </div>
                    </div>
                    <div className="service-list-item d-flex">
                        <div className="d-flex flex-column mt-auto service-list-item-content">
                            <p className="ff-semi">Фасадные работы: отделка, утепление, ремонт</p>
                            <NavLink to="/service/facade/" className="btn main-form-button navlink-btn">Подробнее</NavLink>
                        </div>
                    </div>
                    <div className="service-list-item d-flex">
                        <div className="d-flex flex-column mt-auto service-list-item-content">
                            <p className="ff-semi">Кровельные работы: отстропил до водостока</p>
                            <NavLink to="/service/roof/" className="btn main-form-button navlink-btn">Подробнее</NavLink>
                        </div>
                    </div>
                    <div className="service-list-item d-flex">
                        <div className="d-flex flex-column mt-auto service-list-item-content">
                            <p className="ff-semi">Отделочные работы: от пола до потолка</p>
                            <NavLink to="/service/finish/" className="btn main-form-button navlink-btn">Подробнее</NavLink>
                        </div>
                    </div>
                    <div className="service-list-item d-flex">
                        <div className="d-flex flex-column mt-auto service-list-item-content">
                            <p className="ff-semi">Некапитальные постройки: беседки, вольеры, парники</p>
                            <NavLink to="/service/pavilion/" className="btn main-form-button navlink-btn">Подробнее</NavLink>
                        </div>
                    </div>
                    <div className="service-list-item d-flex">
                        <div className="d-flex flex-column mt-auto service-list-item-content">
                            <p className="ff-semi">Строительные работы на участке: фундаменты, заборы</p>
                            <NavLink to="/service/base/" className="btn main-form-button navlink-btn">Подробнее</NavLink>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
       )
    }
}


export default Service