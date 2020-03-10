import React from 'react'
import './Fixture.scss'

const Fixture = ({fixture}) => {
    return(
        <div className="fixture">
            <div className="fixture team">
                <div className="fixture team_info">
                    <a href={`team/` + fixture.homeTeam.team_id}>
                    <img src={fixture.homeTeam.logo} className="fixture logo"/>
                    <p>{fixture.homeTeam.team_name}</p>
                    </a>
                </div>
                {fixture.statusShort === 'FT' ? <h6>{fixture.goalsHomeTeam} vs {fixture.goalsHomeTeam} </h6> : <h6> vs </h6>}
                <div className="fixture team_info">

                    <a href={`team/` + fixture.awayTeam.team_id}>
                    <img src={fixture.awayTeam.logo} className="fixture logo"/>
                    <p>{fixture.awayTeam.team_name}</p>
                    </a>
                </div>
            </div>
            <div className="fixture fixture_info">
                <p>{fixture.event_date.toString().slice(0,10)}</p>
                <p>{fixture.venue}</p>
            </div>
        </div>
    )
}

export default Fixture;