import React from "react";
import "./styles.css" 
import  Teams from "../../globals/globals"

export const CardDefault = (props) => {
  console.log("displayig a Card");
  let data = props.props;
  let TeamToSelect = Teams
  return (
    <div className="container">
      <div className="selectorRow">
      <select className="selectorTeam" id="teamSelector">
        <option value="0">Select a team</option>
        <option value="1">{TeamToSelect.TEAM_A}</option>
        <option value="2">{TeamToSelect.TEAM_B}</option>
      </select>
      </div>
    <div className="container-Cards">
      {
        data.map((agentToDisplay) =>(
        <div key={agentToDisplay.displayName} className="card" style={{cursor:'pointer'}}>
          <img className="backgroundAgent" src={agentToDisplay.background} alt="backgroundAgent" />
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
            <br />
            <p>/Selected by team: {agentToDisplay.team}</p>
          </div>
        </div>
        ))}
    </div>
    </div>
  );
};
