import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';
import Paper from '@material-ui/core/Paper';

const TodosQuery = gql`
  {
    todos {
      id
      text
      complete
    }
  }
`;

class App extends Component {
  render() {
    const {
      data: {loading, todos},
    } = this.props;

    if (loading) {
      return null;
    }

    return (
      <Paper elevation={1}>
        <div>
          {todos.map(todo => (
            <div>{todo.text}</div>
          ))}
        </div>
      </Paper>
    );
  }
}

// export default App;
export default graphql(TodosQuery)(App);
