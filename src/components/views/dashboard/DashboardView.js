import React from  'react';
import { Card,Col, Row , Avatar} from 'antd';



export default function DashboardView(props){
    const { Meta } = Card;
    const entries = props.entries;
    const listEntries = entries.map( (entrie,index) =>
             <Col xs={16} sm={16} md={12} lg={12} xl={8}  key={index} span={8}>
                <Card 
                    style={{ width: 300 }}
                    cover={
                        <img
                          alt="example"
                          src={entrie.src}
                        />
                      }
                      actions={ entrie.actions }
                      
                 >
                    <Meta
                     title={ entrie.title } 
                     description={entrie.description}
                    />    
                </Card> 
             </Col>
    );
    return(
        <div className="site-card-wrapper" >
               <Row gutter={16}>
                    { listEntries }
               </Row>
        </div>
     
    )
}