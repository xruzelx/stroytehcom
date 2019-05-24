import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import '../Service-Build/style.css';
import '../Main/style.css';


class ServicePavilion extends Component {
    render() {
       return(
        <div>
            <div className="main-container mt-4 mb-4">
                <h2 className="ff-semi fs-24 mb-4">Некапитальные постройки: беседки, вольеры, парники</h2>
                <div className="d-flex">
                    <div className="services-left-block">
                        <div className="services-build-main-img">
                            <img src="/static/media/background.6aa84429.jpg" />
                        </div>
                        <p className="mt-3 fs-16">
                            Наша компания выполняет строительные работы различной сложности в Чувашской республике. Мы сотрудничаем с поставщиками и производителями строительных материалов. Осуществляем возведение нестандартных домов, коттеджей. Занимаемся прокладкой инженерных сетей и выполняем многие другие виды работ. Оставьте заявку на сайте или свяжитесь с менеджерами о телефону для получения полной информации.
                        </p>
                        <h2 className="mt-4 fs-20 ff-semi mb-3">Прайс лист на работы</h2>
                        <div className="d-flex flex-column services-table">
                            <div className="d-flex services-table-head">
                                <div className="w-75">
                                    Услуга
                                </div>
                                <div className="w-25">
                                    Цена
                                </div>
                            </div>
                            <div className="d-flex services-table-row">
                                <div className="w-75">
                                    Забор из профлиста
                                </div>
                                <div className="w-25">
                                    2000 руб.
                                </div>
                            </div>
                            <div className="d-flex services-table-row">
                                <div className="w-75">
                                    Забор из профлиста
                                </div>
                                <div className="w-25">
                                    2000 руб.
                                </div>
                            </div>
                        </div>
                        <h2 className="mt-4 fs-20 ff-semi mb-3">Примеры работ</h2>
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
                    <div className="services-right-block">
                        <div className="d-flex flex-column services-right-block-nav w-100">
                            <p className="mb-0 ff-semi">Услуги</p>
                            <NavLink to="/service/build/" className="fs-15">Строительство бань, домов, капитальных строений</NavLink>
                            <NavLink to="/service/facade/" className="fs-15">Фасадные работы: отделка, утепление, ремонт</NavLink>
                            <NavLink to="/service/roof/" className="fs-15">Кровельные работы: отстропил до водостока</NavLink>
                            <NavLink to="/service/finish/" className="fs-15">Отделочные работы: от пола до потолка</NavLink>
                            <NavLink to="/service/pavilion/" className="fs-15">Некапитальные постройки: беседки, вольеры, парники</NavLink>
                            <NavLink to="/service/base/" className="fs-15">Строительные работы на участке: фундаменты, заборы</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
       )
    }
}


export default ServicePavilion