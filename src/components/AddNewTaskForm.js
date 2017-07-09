import React                 from 'react';
import { FormGroup, InputGroup, FormControl, Button }     from 'react-bootstrap';
import AddNewTaskFormActions from 'actions/AddNewTaskForm';
import TodoListActions       from 'actions/TodoList';

import AddNewTaskFormStore   from 'stores/AddNewTaskForm';

class AddNewTaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = AddNewTaskFormStore.getState();
    this.formChanged = this.formChanged.bind(this);
    this.validationClass = this.validationClass.bind(this);
    this.submit = this.submit.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  componentDidMount()    { AddNewTaskFormStore.listen(this.formChanged); }
  componentWillUnmount() { AddNewTaskFormStore.unlisten(this.formChanged); }

  formChanged(formState) { this.setState(formState); }
  changeContent(ev)      { console.log("changed content"); AddNewTaskFormActions.changeContent(ev.target.value); }
  submit(ev) {
    ev.preventDefault();
   // if(!this.state.submittable) { return; }

    TodoListActions.addTask(this.state.content);
    AddNewTaskFormActions.clearForm();
  }

  validationClass() {
    return {
      true: 'error',
      false: undefined
    }[!!this.state.validationError.length];
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <FormGroup>
            <FormControl key="taskContent"
                    type="text"
                    value={this.state.content}
                    onChange={this.changeContent} />
        </FormGroup>
        <Button key="submitButton" type="submit"
                bsStyle="primary"> Submit </Button>
      </form>
    );
  }
}

export default AddNewTaskForm;