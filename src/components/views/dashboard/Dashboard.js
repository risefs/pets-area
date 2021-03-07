import React from 'react'
import DashboardView from './DashboardView'


import {PlusCircleOutlined,
        UnorderedListOutlined ,
        InfoCircleOutlined,
        CalendarOutlined
    } from '@ant-design/icons';



class Dashboard extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            entries:[
                {
                    title:'Agendate',
                    path:'#',
                    description:'Reserva tu turno ahora!!',
                    src:'https://image.freepik.com/foto-gratis/calendar-event-planner-ocupado_34936-290.jpg',
                    actions:[
                        <PlusCircleOutlined key="agendate"/>,
                        <CalendarOutlined key="calendar"/>
                    ]
                },
                {
                    title:'Mis mascotas',
                    path:'#',
                    description:'¿Nuevo integrante a la familia?',
                    src:'https://image.freepik.com/foto-gratis/perro-rubio-pelo-corto-mirando-al-suelo_1194-1079.jpg',
                    actions:[
                        <PlusCircleOutlined key="add"/> ,
                        <UnorderedListOutlined key="list"/>
                    ]
                },
                {
                    title:'Fashion Pets',
                    path:'#',
                    description:'Tenemos los mejores looks para tu mascota',
                    src:'https://image.freepik.com/foto-gratis/schnauzer-cachorro-manos-diferentes-herramientas-peluqueria-aisladas-blanco_174814-92.jpg',
                    actions:[
                        <InfoCircleOutlined key="3"/>
                    ]
                }
            ]
        }
    }

render(){
    return(
            <DashboardView entries={this.state.entries} />
    )
}
}


export default Dashboard