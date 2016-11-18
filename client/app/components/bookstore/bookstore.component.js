import template from './bookstore.html';
import controller from './bookstore.controller';
import './bookstore.styl';

controller.$inject = ['$scope', '$DataService'];


let bookstoreComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default bookstoreComponent;
