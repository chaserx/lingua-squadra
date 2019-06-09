import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RepositoryLanguageList from '../RepositoryLanguageList';
import SummaryStats from '../SummaryStats';

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

            // console.log(data)
           return (
              <div>
                  <img className="image-center" src={data.organization.avatarUrl} alt=""/>
                  <h1 className="text-center">{data.organization.name}</h1>
                  <hr />
                  <SummaryStats {...data.organization} />
                  <RepositoryLanguageList {...data.organization} />
              </div>
           );
         }}
      </Query>
    );
  }
}

export default Squad;
