import React from "react";
import {useState } from "react";

import "./styles.css" 

import {TeamSelector, handleTeamSelector} from "../selector";

let countA = 0
let countB = 0

export const CardDefault = (props) => {

  let full_team = 5   // move to globals
  

  // getting data
  let agents = props.props

  //Handles Events

  let [selectedAgent, setTeamAgent] = useState({});

  let [teamsToDisplay, setTeamsToDisplay] = useState({})

  function handleAgentCardClick(event){
      let idAgentClicked = parseInt(event.currentTarget.id) // When use currentTarget, it get the element where it attachment
      let result = agents.find(agent => agent.id === idAgentClicked)
      
      // In valorant, the team can be use the same agents and max 5...
      if (selectedTeam === 'Team A' && countA < full_team) {
        result.teamA = true
      } else if (selectedTeam === 'Team B' && countB < full_team){
        result.teamB = true
      }

      // Use fulter team to agroup agents with the true condition on .TeamA or .TeamB
        let filterTeams = {}
        filterTeams.Team_A = agents.filter(agent => agent.teamA === true)
        filterTeams.Team_B = agents.filter(agent => agent.teamB === true)

        if (selectedTeam === 'Team A') {
            setTeamsToDisplay(filterTeams)
            countA++
          }
        if (selectedTeam === 'Team B'){
          setTeamsToDisplay(filterTeams)
          countB++
        }
  }

  let [selectedTeam, setTeam] = useState("");

  function handleTeamSelector (event) {
    let team = event.target.value
    setTeam(team)
  }

  return (
    <>
      <div className="selectorTeam-Row">
        <select className="selectorTeam" id="teamSelector" value={selectedTeam} onChange={handleTeamSelector}>
          <option value="0">Select a team</option>
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
        </select>
      </div>

    <TeamSelector props = {teamsToDisplay}></TeamSelector>
    
    <div className="container">
    <div className="container-Cards">
      {
        agents.map((agentToDisplay) =>(
        <div id={agentToDisplay.id} key={agentToDisplay.displayName} className="card" style={{cursor:'pointer'}} onClick={handleAgentCardClick}>
          <img className="backgroundAgent" src={agentToDisplay.background} alt="backgroundAgent"/>
          <img className="imageAgent" src={agentToDisplay.fullPortrait} alt="valorantAgent" />
          <div className="container">
            <p>/Name</p>
            <h1>{agentToDisplay.displayName}</h1>
            <br />
            <p>/Rol</p>
            <h1>{agentToDisplay.role}</h1>
            <br />
            <p>/abilities</p>
            <div className="agentAbilities">
              <img className="abilitie" src={agentToDisplay.abilitie1Icon} alt={agentToDisplay.abilitie1} />
              <img className="abilitie" src={agentToDisplay.abilitie2Icon} alt={agentToDisplay.abilitie2} />
              <img className="abilitie" src={agentToDisplay.abilitie3Icon} alt={agentToDisplay.abilitie3} />
              <img className="abilitie" src={agentToDisplay.abilitie4Icon} alt={agentToDisplay.abilitie4} />
            </div>
          </div>
        </div>
        ))}
    </div>
    </div>
    </>
  );
};
