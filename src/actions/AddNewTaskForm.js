import AltInstance from 'lib/AltInstance';

class AddNewTaskFormActions {
  changeContent(content) {
    console.log('jjjj');
    //this.dispatch(content);
    return content;
  }

  clearForm() {
    return '';
  }
}

export default AltInstance.createActions(AddNewTaskFormActions);