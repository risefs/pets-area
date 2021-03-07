import React from 'react';
import { Menu } from 'antd';

import { Link } from "react-router-dom";

const { SubMenu } = Menu;

export default function MenuView(props){
    const menus = props.items;
    let   menuPrint;
    // const listMenu = menus.map( (menu,index) =>  <Menu.Item key={index} icon={menu.icon} >
    //                                                     {menu.name}
    //                                              <Link to={menu.path}></Link>
    //                                              </Menu.Item> 
    //                                               );

    const listMenu = menus.map(function(menu,index){
    
          if(!!menu.subMenu){
            const subMenu = menu.subMenu;
            menuPrint = <SubMenu key={index} icon={menu.icon} title={menu.name} >
                           {
                                subMenu.map(function (submenu,idx) {
                                    return <Menu.Item icon={submenu.icon}  key={submenu.path}>
                                            {submenu.name}
                                            <Link to={submenu.path}></Link>
                                           </Menu.Item>
                                })
                            }
                        </SubMenu>;

          }else{
                menuPrint = <Menu.Item key={index} icon={menu.icon} >
                                {menu.name}
                                <Link to={menu.path}></Link>
                            </Menu.Item> ;
          }
          
          return menuPrint;
    })

    return(
              <Menu style={{ height: '100%', borderRight: 0 }}  defaultSelectedKeys={['1']} mode="inline">
               { listMenu } 
              </Menu>
    )
}

