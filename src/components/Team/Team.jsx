import React from 'react'
import { PageContainer } from '../../GlobalStyles'
import TeamHeader from './TeamHeader'
import TeamRanks from './TeamRanks'
import TeamRoster from './TeamRoster'
import TeamMatches from './TeamMatches'
import TeamTournaments from './TeamTournaments'

class Team extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <PageContainer>
                <TeamHeader />
                <TeamRanks />
                <TeamRoster/>
                <TeamMatches />
                <TeamTournaments />
            </PageContainer>
        )
    }
}

export default Team