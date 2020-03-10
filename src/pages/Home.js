import React from 'react'
import Fixture from '../component/Fixture'
import './Home.scss'
import { Tab,Row,Col,Nav, Table, Container, Carousel} from 'react-bootstrap'
const axios = require('axios');

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            api : null
        }
    }

    componentDidMount(){
        this.getData(524)
    }

    getData(id) {
        axios({
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/"+ id +"/next/10",
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "48d6676eccmsh9d52433974ae7c9p1ec430jsne298d5e23f00"
            },
            params: {
                timezone: "Asia/Seoul"
            }
        })
            .then(response => {
                this.setState({api: response.data, loading: false})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    changeLeague= (id) => {
        this.setState({loading : true,api : null})
        this.getData(id)
    }

    render(){
        const { api,loading } = this.state
        return(
        <Container >
            <h2>Fixtures</h2>
                <Row className='justfy-content-md-center'>
                    <Col md={12}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="524"  onSelect={(k)=>this.changeLeague(k)}>
                    <Row className='justfy-content-md-center'>
                        <Col md={12}>
                        <Nav variant="tabs" className="flex-row">
                            <Nav.Item>
                            <Nav.Link eventKey="524">Premier League</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="775">Laliga</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="754">BundesLiga</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="525">League 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="891">Seria A</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="524">
                                <Row>
                                    <Col md={12}>
                                        <Carousel slide indicators>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(0,4).map((data,i)=>(
                                            <Col md={3}><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(4,8).map((data,i)=>(
                                            <Col md={3}><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                                {api &&( loading ? <p>loading</p> : 
                                                api.api.fixtures.slice(8,10).map((data,i)=>(
                                                <Col><Fixture fixture={data}/></Col>)))}
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="775">
                            <Row>
                                    <Col md={12}>
                                        <Carousel>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(0,4).map((data,i)=>(
                                            <Col><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(4,8).map((data,i)=>(
                                            <Col><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                                {api &&( loading ? <p>loading</p> : 
                                                api.api.fixtures.slice(8,10).map((data,i)=>(
                                                <Col><Fixture fixture={data}/></Col>)))}
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="754">
                            <Row>
                                    <Col md={12}>
                                        <Carousel>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(0,4).map((data,i)=>(
                                            <Col><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(4,8).map((data,i)=>(
                                            <Col><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                                {api &&( loading ? <p>loading</p> : 
                                                api.api.fixtures.slice(8,10).map((data,i)=>(
                                                <Col><Fixture fixture={data}/></Col>)))}
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="525">
                            <Row>
                                    <Col md={12}>
                                        <Carousel>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(0,4).map((data,i)=>(
                                            <Col><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(4,8).map((data,i)=>(
                                            <Col><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                                {api &&( loading ? <p>loading</p> : 
                                                api.api.fixtures.slice(8,10).map((data,i)=>(
                                                <Col><Fixture fixture={data}/></Col>)))}
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Tab.Pane>   
                            <Tab.Pane eventKey="891">
                            <Row>
                                    <Col md={12}>
                                        <Carousel indicators>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(0,4).map((data,i)=>(
                                            <Col><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                            {api &&( loading ? <p>loading</p> : 
                                            api.api.fixtures.slice(4,8).map((data,i)=>(
                                            <Col><Fixture fixture={data}/></Col>)))}
                                            </Row>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Row>
                                                {api &&( loading ? <p>loading</p> : 
                                                api.api.fixtures.slice(8,10).map((data,i)=>(
                                                <Col><Fixture fixture={data}/></Col>)))}
                                                </Row>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                    </Col>
                </Row>
        </Container>
        )
    }
}
export default Home