import React from 'react';
import { Layout } from 'antd';

import MenuComponent from '.././layout/menu/MenuComponent';
import Dasboard from '../dashboard/Dashboard';
import ContactoView from '../contacto/ContactoView';
import Profile from '../account/profile/Profile';

import logo from '../../../assets/huellaLogo.png';
import {
    Switch,
    Route
} from "react-router-dom";


const { Sider, Header, Content } = Layout;


class LayoutComponent extends React.Component {

    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="header" >
                    <div className="logo" style={{ display: 'flex' }}  >
                        <img style={{ height: '60px', width: '70px', padding: '5px' }} src={logo} />
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <MenuComponent style={{ height: '100%', borderRight: 0 }} />
                    </Sider>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {/* <Dasboard/>
                                <ContactoView/> */}
                        <Switch>
                            <Route component={Dasboard} path={"/inicio"} />
                            <Route component={ContactoView} path={"/contacto"} />
                            <Route component={Profile} path={"/cuenta"} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default LayoutComponent;