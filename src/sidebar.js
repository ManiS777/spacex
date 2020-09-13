import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import queryString from 'query-string'
import { withRouter } from 'react-router-dom'

class Sidebar extends React.Component {
    constructor() {
        super()
    }

    itemClick = (item) => {
        let params = queryString.parse(this.props.location.search);
        params.launch_year = item
        this.props.history.push(`/?${queryString.stringify(params)}`)
    }

    trueLaunch = () => {
        let params = queryString.parse(this.props.location.search);
        params.launch_success = true;
        this.props.history.push(`/?${queryString.stringify(params)}`)
    }
    falseLaunch = () => {
        let params = queryString.parse(this.props.location.search);
        params.launch_success = false;
        this.props.history.push(`/?${queryString.stringify(params)}`)
    }
    trueLanding = () => {
        let params = queryString.parse(this.props.location.search);
        console.log("++++++++++++++++++++++++++", params)
        // params.rocket.first_stage.cores[0].land_success = true;
        // this.props.history.push(`/?${queryString.stringify(params)}`)
    }
    falseLanding = () => {
        let params = queryString.parse(this.props.location.search);
        params.rocket.first_stage.cores[0].land_success = false;
        this.props.history.push(`/?${queryString.stringify(params)}`)
    }

    render() {
        // let a = [];
        // this.props.data
        //     .forEach((i) => {
        //         if (!a.includes(i.launch_year))
        //             a.push(i.launch_year);
        //     })
        return (
            <div >
                Filters <br />
            Launch Year
                <Row>

                    {this.props.data.map((item) => {
                        return (
                            <Col xs={6}>

                                <Button className="sidebar-year" onClick={() => this.itemClick(item)}>{item}</Button>

                            </Col>
                        )
                    })}

                </Row>
                <br />
                Successful Launch

                <Row>
                    <Col>

                        <Button className="sidebar-year" onClick={() => this.trueLaunch()}>True</Button>
                    </Col>
                    <Col>

                        <Button className="sidebar-year" onClick={() => this.falseLaunch()}>False</Button>
                    </Col>


                </Row>
                <br />
                Successful Landing

                <Row>
                    <Col>

                        <Button className="sidebar-year" onClick={() => this.trueLaunch()}>True</Button>
                    </Col>
                    <Col>

                        <Button className="sidebar-year" onClick={() => this.falseLaunch()}>False</Button>
                    </Col>


                </Row>
            </div>

        )
    }
}

export default withRouter(Sidebar);