import React, { Component } from 'react';

class SummaryStats extends Component {
  componentWillMount() {
    // console.log(this.props.membersWithRole)
  }

  _numberOfPeople() {
    return this.props.membersWithRole.edges.length
  }

  _numberOfRepos() {
    let repoCount = 0

    for (const member_edge of this.props.membersWithRole.edges) {
      if (member_edge.node.repositories) {
        repoCount += member_edge.node.repositories.edges.length
      }
    }

    return repoCount;
  }

  render() {
    return(
      <div className="text-center">
        This organization has {this._numberOfPeople()} people with {this._numberOfRepos()} repositories.
      </div>
    )
  }
}

export default SummaryStats;
