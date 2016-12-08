import template from './bookstore.html';
import controller from './bookstore.controller';
import './bookstore.styl';


let bookstoreComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default bookstoreComponent;
