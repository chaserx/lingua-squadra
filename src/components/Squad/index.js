import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RepositoryLanguageList from '../RepositoryLanguageList';

 const GET_MAKETIME_TEAM = gql`
    query {
      organization(login: "maketimeinc") {
        name
        avatarUrl(size: 100)
        membersWithRole(first: 100) {
          edges {
            node {
              name
              login
              avatarUrl(size: 25)
              repositories(first:100, privacy:PUBLIC) {
                edges {
                  node {
                    name
                    primaryLanguage {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

class Squad extends Component {
  render(){
    return(
      <Query query={GET_MAKETIME_TEAM}>
         {({ loading, error, data }) => {
           if (loading) return 'Loading...';
           if (error) return `Error! ${error.message}`;

           return (
              <div>
                  <img src={data.organization.avatarUrl} alt=""/>
                  <h1>{data.organization.name}</h1>
                  <hr />
                  <RepositoryLanguageList {...data.organization} />
              </div>
           );
         }}
      </Query>
    );
  }
}

export default Squad;
