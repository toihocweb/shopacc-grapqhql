import React, { Component, Fragment } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'


const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
});


const GET_DATAS = gql`
{
	test{
    message
  }
}
`;
class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Query query={GET_DATAS}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>loading...</p>
                        if (error) return <p>{`Error! ${error.message}`}</p>
                        return (
                            <Fragment>
                                <h1>{data.test.message}</h1>
                            </Fragment>
                        )
                    }}
                </Query>
            </ApolloProvider>
        )
    }
}

export default App
