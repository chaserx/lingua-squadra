import React, { Component } from 'react';

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

  // how do we want to display data
  // bar graph; pie graph; ; just a series of rectangles
  // there's an intersting dotmatrix plot
  // https://arpitnarechania.github.io/d3-dotmatrix/
  // if we do the dotmatrix thing, we'll need to reformat the data that's in
  // state as the data set
  //  { group: "MakeTimeInc" ,category: "Ruby", count: 42},

  render() {
    return(
      <div>
        Hello from RepositoryLanguageList
        <p>{this._display_results_text()}</p>
      </div>
    )
  }
}

export default RepositoryLanguageList;
