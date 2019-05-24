import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Form from '../Form';
import './style.css'


class Main extends Component {
    render() {
       return(
           <div>
               <div className="main_header">
                    <div className="main_header--bg"></div>
                    <div className="main_header-strip--bg"></div>
                    <div className="d-flex main_header-container main-container">
                        <div className="d-flex flex-column main_header-title">
                            <h1 className="ff-bold h1-main-extra">Строительство Вашего дома под ключ</h1>
                            <h2 className="ff-semi h2-main-extra">Возведение жилых и промышленных построек из кирпича или металлоконструкций</h2>
                        </div>
                        <div className="main_header-form">
                            <Form />
                        </div>

                    </div>
               </div>

                <div className="main-body main-container">
                    <h2 className="main-body-h2 ff-semi">О компании</h2>
                    <p className="main-body-info">
                        Строительная компания ООО «СтройТехКом» предлагает организациям и частным лицам широкий комплекс общестроительных подрядных работ, 
                        предоставляет в аренду спецтехнику. Основным направлением деятельности является строительство объектов недвижимости любой сложности, 
                        включая производственные, торговые и промышленные здания.
                    </p>

                    <div className="d-flex flex-column main-boby-plus ff-semi mb-3">
                        <div className="mb-2">Прочные и долговременные партнерские отношения с поставщиками и производителями строительных материалов</div>
                        <div className="mb-2">Активная строительная деятельность в Чебоксарах и республике Чувашия</div>
                        <div className="mb-2">Лицензии и разрешения на проведение широкого спектра строительных работ</div>
                    </div>

                </div>

                <div className="main-body-service">
                    <div className="main-container main-body-service-container">
                        <h2 className="main-body-h2 ff-semi">Наши услуги</h2>
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
                <div className="main-body-project">
                    <div className="main-container main-body-service-container">
                        <h2 className="main-body-h2 ff-semi">Наши проекты</h2>
                        <div className="main-body-project-list d-flex flex-wrap">
                            <div className="project-list-item">
                                <div className="d-flex flex-column h-100 project-list-item-content">
                                    <div className="align-self-end project-list-item-type">Отделочные работы</div>
                                    <div className="d-flex flex-column mt-auto">
                                        <p className="mb-1 fs-16 ff-semi">Внутренняя отделка</p>
                                        <p className="mb-0 fs-14">Проведены отделочные работы </p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-list-item">
                                <div className="d-flex flex-column h-100 project-list-item-content">
                                    <div className="align-self-end project-list-item-type">Отделочные работы</div>
                                    <div className="d-flex flex-column mt-auto">
                                        <p className="mb-1 fs-16 ff-semi">Внутренняя отделка</p>
                                        <p className="mb-0 fs-14">Проведены отделочные работы </p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-list-item">
                                <div className="d-flex flex-column h-100 project-list-item-content">
                                    <div className="align-self-end project-list-item-type">Отделочные работы</div>
                                    <div className="d-flex flex-column mt-auto">
                                        <p className="mb-1 fs-16 ff-semi">Внутренняя отделка</p>
                                        <p className="mb-0 fs-14">Проведены отделочные работы </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


           </div>
           
       )
    }
}


export default Main