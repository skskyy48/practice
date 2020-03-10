import React from 'react'
import {Table, Container, Button} from 'react-bootstrap'
import './Leagues.scss'
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
}
]


class Leauges extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            leagueTable : null
        }
    }

    componentDidMount(){
        this.getData(524)
    }

    getData(id) {
        axios({
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v2/leagueTable/" + id,
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
                this.setState({leagueTable: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render(){
        const { leagueTable} = this.state
        return(
            <div className="leagues">
                <p>Leauges</p>
                <div className="leagueButton">
                    {leagues.map((data,i) => (
                        <Button 
                                variant='light'
                                onClick={() => this.getData(data.id)}
                        >
                            {data.name}
                        </Button>
                    ))}
                </div>
                <Table className="table">
                    <thead>
                        <tr>
                            <td>순위</td>
                            <td></td>
                            <td>팀</td>
                            <td>경기수</td>
                            <td>승리</td>
                            <td>무승부</td>
                            <td>패배</td>
                            <td>승점</td>
                        </tr>
                    </thead>
                    <tbody>
                {leagueTable && 
                    leagueTable.api.standings[0].map((data,i) => (
                        <tr>
                            <td>{data.rank}</td>
                            <td><img src={data.logo} style={{height : 30, width : 30}}/></td>
                            <td><a href={`team/` + data.team_id}>{data.teamName}</a></td>
                            <td>{data.all.matchsPlayed}</td>
                            <td>{data.all.win}</td>
                            <td>{data.all.draw}</td>
                            <td>{data.all.lose}</td>
                            <td>{data.points}</td>
                        </tr>
                    ))
                }
                </tbody>
                </Table>
            </div>
        )
    }}

export default Leauges