import React from 'react';
import MenuView from './MenuView';

import {
    HomeOutlined,
    CalendarOutlined,
    CommentOutlined ,
    UserOutlined,
    SettingOutlined,
    TeamOutlined
   
  } from '@ant-design/icons';

class MenuComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            menuItems : [
                {
                    name:'Inicio',
                    icon: <HomeOutlined/>,
                    path:'inicio'

                },
                {
                    name:'Turnos',
                    icon: <CalendarOutlined />,
                    path:'turnos'
                },
                {
                    name:'Contacto',
                    icon:<CommentOutlined />,
                    path:'contacto'
                },
                {
                    name:'Mi Cuenta',
                    icon:<UserOutlined />,
                    path:'cuenta'
                },
                {
                    name:'Administracion',
                    subMenu:[
                        {
                            name:'Clientes',
                            icon:<TeamOutlined />,
                            path:'clientes'
                        }
                    ],
                    icon:<SettingOutlined />,
                    path:'admin'
                }
            ]

        }
    }


    render(){
        return(
                <MenuView items={this.state.menuItems}  />
        )
    }

}

export default MenuComponent;