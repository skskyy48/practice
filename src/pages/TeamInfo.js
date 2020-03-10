import React from 'react'
import {Container, Jumbotron} from 'react-bootstrap'
import './TeamInfo.scss'
import TeamSquad from '../component/TeamSquad'
const axios = require('axios')

export default class TeamInfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            team : null,
            players : null
        }
    }

    componentDidMount(){
        const { match : { params : {id }}} = this.props
        this.getData(id)
        this.getTeamSquad(id)
    }


    getData(id) {
        axios({
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v2/teams/team/" + id ,
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
                this.setState({team: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getTeamSquad(id){
        axios({
            method:"GET",
            url:"https://api-football-v1.p.rapidapi.com/v2/players/squad/"+id+"/2019-2020",
            headers:{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
            "x-rapidapi-key":"48d6676eccmsh9d52433974ae7c9p1ec430jsne298d5e23f00"},
            params : {
                timezone : "Asia/Seoul"
              } 
            })
            .then(response=>{
              this.setState({players : response.data})
            })
            .catch((error)=>{
              console.log(error)
            })
    }

    render(){
        const {team,players} = this.state
        return(
            <div className='info'>
                {this.state.team &&
                <Jumbotron className='header' style={{backgroundImage : `url(${team.api.teams[0].logo})`}} >
                    <Container className='header-info'>
                        <h1>{team.api.teams[0].name}</h1>
                        <p>city : {team.api.teams[0].venue_city}</p>
                        <p>venue : {team.api.teams[0].venue_name}</p>
                        <p>capacity : {team.api.teams[0].venue_capacity}</p>
                    </Container>
                </Jumbotron>}
                {players && <TeamSquad players={players.api.players}/>}

            </div>
        )
    }
}