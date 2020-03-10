import React from 'react'
import {Container, Row,Col,Table} from 'react-bootstrap'
import './FixtureInfo.scss'
const axios = require('axios')

export default class FixtureInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fixture :null
        }
    }
    componentDidMount(){
        const { match : { params : {id }}} = this.props
        this.getData(id)
    }

    getData(id) {
        axios({
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v2/fixtures/id/" + id ,
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
                this.setState({fixture: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render(){
        const { fixture} = this.state
        return(
            <div className='info'>
                {this.state.fixture &&
                <Container>
                <Row className='justify-content-md-center align-items-md-center'>
                    <Col md={{span : 'auto' }}>
                        <img className='logo' src={fixture.api.fixtures[0].homeTeam.logo}></img>
                    </Col>
                    <Col md='auto'>
                        <p>{fixture.api.fixtures[0].homeTeam.team_name}</p>
                    </Col>
                    <Col md='auto'>
                        <p>{fixture.api.fixtures[0].awayTeam.team_name}</p>
                    </Col>
                    <Col md='auto'>
                        <img className="logo" src={fixture.api.fixtures[0].awayTeam.logo}></img>
                    </Col>
                </Row>
                <Row className='justify-content-md-center title'>
                    <Col md='auto'>
                    <p>{fixture.api.fixtures[0].event_date}</p>
                    <p>{fixture.api.fixtures[0].venue}</p>
                    </Col>
                </Row>
                {fixture.api.fixtures[0].statusShort === 'FT' &&
                <Row className='justify-content-md-center'>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <td>슈팅 개수 </td>
                                <td>유효 슈팅 </td>
                                <td>파울 </td>
                                <td>코너킥 </td>
                                <td>오프사이드 </td>
                                <td>점유율 </td>
                                <td>세이브 </td>
                                <td>경고 </td>
                                <td>퇴장 </td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                            <td>{fixture.api.fixtures[0].statistics["Total Shots"].home}</td>
                            <td>{fixture.api.fixtures[0].statistics["Shots on Goal"].home}</td>
                            <td>{fixture.api.fixtures[0].statistics["Fouls"].home}</td>
                            <td>{fixture.api.fixtures[0].statistics["Corner Kicks"].home}</td>
                            <td>{fixture.api.fixtures[0].statistics["Offsides"].home}</td>
                            <td>{fixture.api.fixtures[0].statistics["Ball Possession"].home}</td>
                            <td>{fixture.api.fixtures[0].statistics["Goalkeeper Saves"].home}</td>
                            <td>{fixture.api.fixtures[0].statistics["Yellow Cards"].home}</td>
                            <td>{fixture.api.fixtures[0].statistics["Red Cards"].home}</td>
                            </tr>
                            <tr>
                            <td>{fixture.api.fixtures[0].statistics["Total Shots"].away}</td>
                            <td>{fixture.api.fixtures[0].statistics["Shots on Goal"].away}</td>
                            <td>{fixture.api.fixtures[0].statistics["Fouls"].away}</td>
                            <td>{fixture.api.fixtures[0].statistics["Corner Kicks"].away}</td>
                            <td>{fixture.api.fixtures[0].statistics["Offsides"].away}</td>
                            <td>{fixture.api.fixtures[0].statistics["Ball Possession"].away}</td>
                            <td>{fixture.api.fixtures[0].statistics["Goalkeeper Saves"].away}</td>
                            <td>{fixture.api.fixtures[0].statistics["Yellow Cards"].away}</td>
                            <td>{fixture.api.fixtures[0].statistics["Red Cards"].away}</td>  
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                }
                </Container>
                }
            </div>
        )
    }

}