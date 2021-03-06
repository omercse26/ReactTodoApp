require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Grid, Row, ListGroup } from 'react-bootstrap';
import TodoListStore            from 'stores/TodoList';
import TodoListTask             from 'components/TodoListTask';
import AddNewTaskFormI          from 'components/AddNewTaskForm';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    //let { shouldComponentUpdate } = React.addons.PureRenderMixin;

    //this.shouldComponentUpdate    = shouldComponentUpdate.bind(this);
    this.state                    = { tasks: TodoListStore.getState() };
    this.listChanged              = this.listChanged.bind(this);
  }

  componentDidMount()    { TodoListStore.listen(this.listChanged); }
  componentWillUnmount() { TodoListStore.unlisten(this.listChanged); }

  listChanged(taskList)  { this.setState({ tasks: taskList }); }

  render() {
    let {tasks} = this.state;

    return (
      <Grid>
        <Row>
          <h1>Tasks:</h1>
          <ListGroup>
            {tasks.map(task =>
              <TodoListTask key={task.get('id')} task={task} />
             ).toJS()}
          </ListGroup>
          <h2>Add new task:</h2>
          <AddNewTaskFormI />
        </Row>
      </Grid>
    );
  }
}

//export default AppComponent;
export default TodoList;