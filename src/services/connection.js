
const getAgents = async () => {
    try {
        const callApi = await fetch('https://valorant-api.com/v1/agents')
        const data = await callApi.json()
        let data1 = data.data
        let agentData = data1.filter(agent => agent.isPlayableCharacter === true) // delete repeted sova in api
            .map(function (agent, index) {
            let infoAgent = {}
            
            infoAgent.id = index
            infoAgent.displayName = agent.displayName
            infoAgent.fullPortrait = agent.fullPortrait
            infoAgent.background = agent.background
            infoAgent.displayIcon = agent.displayIcon
            
            infoAgent.role = agent.role.displayName
            infoAgent.roleIcon = agent.role.displayIcon

            //abilities
            infoAgent.abilitie1 = agent.abilities[0].displayName
            infoAgent.abilitie2 = agent.abilities[1].displayName
            infoAgent.abilitie3 = agent.abilities[2].displayName
            infoAgent.abilitie4 = agent.abilities[3].displayName
            infoAgent.abilitie1Icon = agent.abilities[0].displayIcon
            infoAgent.abilitie2Icon = agent.abilities[1].displayIcon
            infoAgent.abilitie3Icon = agent.abilities[2].displayIcon
            infoAgent.abilitie4Icon = agent.abilities[3].displayIcon
            infoAgent.team = ""
            
            return infoAgent
        })
        return agentData
        
    } catch (error) {
        console.log(error)
    }
}

export default getAgents
