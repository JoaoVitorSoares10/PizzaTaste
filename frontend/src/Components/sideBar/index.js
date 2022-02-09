import React from 'react'
import './sideBar.css'

export default function SideBar(props){  
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <a href="/" className={props.activePedidos}>
                        <span className="icon"><i className="fas fa-home"></i></span>
                        <span className="item">Pedidos</span>
                    </a>
                </li>
                <li>
                    <a href="/register" className={props.activeNovos}>
                        <span className="icon"><i class="fas fa-plus"></i></span>
                        <span className="item">Adicionar</span>
                    </a>
                </li>
                <li>
                    <a href="/orderDelivered" className={props.activeEntregues}>
                        <span className="icon"><i class="far fa-check-circle"></i></span>
                        <span className="item">Realizados</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}