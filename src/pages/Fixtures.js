import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Accordion, Card, Container,Jumbotron,Row,Col} from 'react-bootstrap'
import Fixture from '../component/Fixture'
import './Fixtures.scss'
import {FaAngleLeft,FaAngleRight, FaRegCalendarAlt} from 'react-icons/fa'
const axios = require('axios');
const leagues = [{name: "PremierLeague",id: 524}, {name: "Laliga",id: 775}, {
        name: "BundesLiga",
        id: 754
    }, {
        name: "Legue 1",
        id: 525
    }, {
        name: "Seria A",
        id: 891
    }, {
        name: "Campions League",
        id: 520
    }
]


class Fixtures extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fixtures : null,
            date : new Date(),
            dateNow : null,
            num : 0
        }
    }

    componentDidMount(){
        const date = new Date()
        const dateNow = date.getYear() + 1900  + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        this.setState({dateNow})
        this.getData(524,dateNow)
    }

    getData(id,date) {
        axios({
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/" + id + "/" + date,
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
                this.setState({fixtures: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleChange = date => {
        var dateNow = date.getYear() + 1900+ '-' + (date.getMonth() + 1) +'-' + date.getDate()
        this.setState({
            date,
          dateNow: dateNow
        });
        this.getData(leagues[this.state.num].id,dateNow)
      };

    onLeagueChane = (num) => {
        if(num === 1){
            if(this.state.num + num === 5){
            this.getData(leagues[0].id,this.state.dateNow)
            this.setState({num : 0})
        }
            else{
            this.getData(leagues[this.state.num+num].id,this.state.dateNow)
            this.setState({num : this.state.num+num})
    
        }
        }
        else if(num === -1){
            if(this.state.num + num === -1){
            this.getData(leagues[4].id,this.state.dateNow)
            this.setState({num : 4})
            }
            else{
            this.getData(leagues[this.state.num+num].id,this.state.dateNow)
            this.setState({num : this.state.num+num})
        }
        }

    }

    render(){
        const {num,fixtures} = this.state
        return(
            <div className="fixtures">
                    <Row className='justify-content-md-center align-item-md-center header'>
                        <Col md={1}>
                            <FaAngleLeft className='cusicon' onClick={()=> this.onLeagueChane(-1)}/>
                        </Col>
                        <Col md={2}>

                        <p>{leagues[num].name}</p>
                        </Col>
                        <Col md={1}>
                            <FaAngleRight onClick={()=>this.onLeagueChane(1)}/>
                        </Col>
                        <Col md='auto'>
                        <FaRegCalendarAlt size={22}/>

                        <DatePicker
                        selected={this.state.date}
                        onChange={this.handleChange}
                        value={this.state.date}
                        dateFormat='yyyy-MM-dd'
                        className="datepicker"
                    />
                    </Col>
                    </Row>
                <div className='fixture'>
                <Accordion className='accordion'>
                    {fixtures && 
                        fixtures.api.fixtures.map((fixture,i) => (
                        <Row>
                            <Col md={12}>
                                <Card >
                                    <Card.Header  className='card header'>
                                    <Accordion.Toggle as={Button} variant='button' eventKey={i} onClick={()=> this.setState({fixtureid : fixture.fixture_id})}>  
                                            <table>
                                                <tr>
                                                    <td>
                                                    <img src={fixture.homeTeam.logo} className="fixture logo"/>
                                                    </td>
                                                    <td>
                                                    <p>{fixture.homeTeam.team_name} vs {fixture.awayTeam.team_name}</p>
                                                    </td>
                                                    <td>
                                                    <img src={fixture.awayTeam.logo} className="fixture logo"/>
                                                </td>
                                                </tr>
                                            </table>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={i}>
                                    <Card.Body>
                                            <Fixture fixture={fixture}/>
                                            <a href={`/fixtures/` + fixture.fixture_id}>더보기</a>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                        </Col>
                        </Row>
                        ))
                        }
                </Accordion>
                </div>
            </div>
        )
    }
}

export default Fixtures