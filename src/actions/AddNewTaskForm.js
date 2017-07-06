import AltInstance from 'lib/AltInstance';

class AddNewTaskFormActions {
  changeContent(content) {
    this.dispatch(content);
  }

  clearForm() {
    this.dispatch();
  }
}

export default AltInstance.createActions(AddNewTaskFormActions);