import UUID        from 'node-uuid';
import Immutable   from 'immutable';
import AltInstance from 'lib/AltInstance';

class TodoListActions {
  addTask(content) { 
    console.log('add task');
    return Immutable.fromJS({ id: UUID.v4(), content }); 
  }
  removeTask(taskID) { this.dispatch(taskID); }
}

export default AltInstance.createActions(TodoListActions);