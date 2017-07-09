import AltInstance from 'lib/AltInstance';
import Actions     from 'actions/AddNewTaskForm';

class AddNewTaskFormStore {
  constructor() {
    this.validationError = '';
    this.content = '';
    this.submittable = false;

    let { changeContent, clearForm } = Actions;
    this.bindListeners({
      change: changeContent,
      clear: clearForm });
  }

  change(newContent) {
    console.log('lollo');
    let validationError = this.validate(newContent),
        submittable     = validationError.length === 0;

    this.setState({ validationError,
                    content: newContent,
                    submittable });
  }

  clear() { this.setState({ validationError: '',
                                content: '',
                                submittable: false }); }

  validate(newContent) {
    return (newContent.length > 3) ? '' : 'Task content have to be longer than 3 characters.';
  }
}

export default AltInstance.createStore(AddNewTaskFormStore, 'AddNewTaskFormStore');