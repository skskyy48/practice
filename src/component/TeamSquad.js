import React from 'react'
import {ListGroup} from 'react-bootstrap'
import './TeamSquad.scss'

const TeamSquad = ({players}) => {
    return(
            <ListGroup>
            {players.map((player,i)=> (
                <ListGroup.Item className='player-info'>
                    <p>{player.player_name}</p>
                    <p>{player.position} </p>
                    <p>{player.birth_date} </p>
                </ListGroup.Item>
            ))}
            </ListGroup>
    )

}

export default TeamSquad