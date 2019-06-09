import React, { Component } from 'react';
import BarChart from '../BarChart';

class RepositoryLanguageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languages: { Ruby: 0, Python: 0, JavaScript: 0, undefined: 0 }
    }
  }

  componentDidMount() {
    // console.log(this.props)
    this._languages_by_repo();
  }

  _update_language_state(lang_hash) {
    this.setState({
      languages: lang_hash
    })
  }

  _languages_by_repo() {
    let languages = []
    let OrganizationMemberEdges = this.props.membersWithRole.edges
     for (const organization_member_edge of OrganizationMemberEdges) {
        for(const repository_edge of organization_member_edge.node.repositories.edges) {
            languages.push(repository_edge.node.primaryLanguage && repository_edge.node.primaryLanguage.name)
        }
     }
     var counts = {};
     languages.forEach(function(lang) { counts[lang] = (counts[lang] || 0)+1; });
     this._update_language_state(counts);
     // console.log("counts:", counts);
  }

  _display_results_text() {
    let str = ""
    for (let [lang, count] of Object.entries(this.state.languages)) {
      str += `${lang}: ${count}  `
    }

    return(
      str
    )
  }

  _format_results_for_d3() {
    let data = []
    for (let [lang, count] of Object.entries(this.state.languages)) {
      data.push({x: lang, y: count})
    }
    return data;
  }

  render() {
    return(
      <div>
        <BarChart data={this._format_results_for_d3()} />
      </div>
    )
  }
}

export default RepositoryLanguageList;
