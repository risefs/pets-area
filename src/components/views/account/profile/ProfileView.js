import React from 'react';
import { List, Typography, Divider } from 'antd';
import { Row, Col } from 'antd';

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 14 },
  };

const { Text,Title  } = Typography;

const data = [{
  'name':'Ricardo',
  'lastname':'Sequeira'
}];


export default function ProfileView(){
    return(
        <List
        size="large"
        header={<div>Mi Perfil</div>}
        footer={<div>Edit</div>}
        bordered
        dataSource={ data }
         renderItem={ item => (
             <div> 
               <Row>
                 <Col>
                    <Title level={4} >Nombre:</Title > {item.name} 
                 </Col>
               </Row>
             </div>
         ) }
        // renderItem={item => <List.Item>{item.name}</List.Item> }
      />
    )
}