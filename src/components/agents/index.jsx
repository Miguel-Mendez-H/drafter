import { useEffect, useState} from "react"

import './styles.css'

import getAgents from "../../services/connection"
import { CardDefault } from "../card"
import agentDefault from "./hooks"

const DisplayAgents = () => {
    console.log(agentDefault)
    let [agents, setAgents] = useState(agentDefault)
    console.log(agents)

    useEffect(() => {
    async function fetchingAgents() {
        let agentsToDisplay = await getAgents()
        setAgents(agentsToDisplay)
    }
    fetchingAgents()
},[setAgents])  //missin Dependency: When u use a Var or Funct that are outside of useeffect


    return (
        <main>
            <div className="containerAgents">
            <CardDefault props={agents}></CardDefault>
            </div>
        </main>
    )
 }
export default DisplayAgents