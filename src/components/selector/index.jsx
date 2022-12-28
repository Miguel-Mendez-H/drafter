import React, { useEffect } from "react";
import { useState } from "react";

import agentDefault from "../agents/hooks";

import "./styles.css";

const TeamSelector = (props) => {
  let dataTeamA = props.props.Team_A;
  let dataTeamB = props.props.Team_B;

  let [team_A, setTeamA] = useState([]);
  let [team_B, setTeamB] = useState([]);

  useEffect(() => {
    function getTeams() {
      setTeamA(dataTeamA);
      setTeamB(dataTeamB);
    }
    getTeams();
  }, [setTeamA, dataTeamA, dataTeamB]);

  function destructuringTeams(array) {
    if (typeof team_A !== "undefined") {
      let dataDestructured = array.map(function (agent, index) {
        let infoTeamA = {};
        infoTeamA.id = index;
        infoTeamA.logo = agent.displayIcon;
        infoTeamA.name = agent.displayName;
        return infoTeamA;
      });
      return dataDestructured;
    }
  }

  let teamAToDisplay = destructuringTeams(team_A);
  console.log(teamAToDisplay);

  let teamBToDisplay = destructuringTeams(team_B);
  console.log(teamBToDisplay);

  return (
    <div className="cointainerSelector">
      <div className="draft-Row">
        <div className="flex-draftBar">
          <div className="Teams">
            {typeof teamAToDisplay !== "undefined" ? (
              teamAToDisplay.map((agent) => (
                <div key={agent.name} className="flex-item-green"> <img className="logoIm" src={agent.logo} alt="logo" /> </div>
              ))
            ) : (
              <div className="flex-item-green">...</div>
            )}
          </div>
          <div className="separatorTeams" />
          <div className="Teams">
            {typeof teamBToDisplay !== "undefined" ? (
              teamBToDisplay.map((agent) => (
                <div key={agent.name} className="flex-item-red"> <img className="logoIm" src={agent.logo} alt="logo" /> </div>
              ))
            ) : (
              <div className="flex-item-red">...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TeamSelector };
