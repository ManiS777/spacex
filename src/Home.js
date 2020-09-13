import React from 'react';
import { Card, Container, Row, CardColumns, Navbar , Col} from 'react-bootstrap';
import Sidebar from "./sidebar";
import './Home.css';

export default props => {
    return (
        
        <div className="parent">
            <div className="sidebar">
                <Sidebar data={props.sidebarData}/>
            </div>
            <Container className="custom-container">
                <Row>
                        {props.data.map(flight =>
                        <Col sm={12} md={6} lg={3}>
                            <Card style={{ width: '12rem', height: '25rem' }}>
                                <Card.Img style={{ height: '10rem' }} variant="top" src={flight.links.flickr_images[0] || "https://img.icons8.com/ios/452/no-image.png"} />
                                <Card.Body>
                                    <Card.Title>{flight.mission_name}</Card.Title>
                                    <Card.Text>
                                        <p>Mission Ids: <span class='text-muted'>{flight.mission_id[0]}</span></p>
                                        <p>Launch Year: <span class='text-muted'>{flight.launch_year}</span></p>
                                        <p>Successfull Launch: <span class='text-muted'>{flight.launch_success ? "True" : "False"}</span></p>
                                        <p>Successfull Landing: <span class='text-muted'>{flight.rocket.first_stage.cores.land_success}</span></p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        )}
            
                </Row>
            </Container>
            {/* <Navbar sticky="bottom">
                <Container>
                    <Navbar.Brand href="#">Kumar Mani Shankar</Navbar.Brand>
                </Container>
            </Navbar> */}
        </div>
        
    );
};