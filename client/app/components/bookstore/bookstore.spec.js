import BookstoreModule from './bookstore'
import BookstoreController from './bookstore.controller';
import BookstoreComponent from './bookstore.component';
import BookstoreTemplate from './bookstore.html';

describe('Bookstore', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BookstoreModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BookstoreController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BookstoreTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BookstoreComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BookstoreTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BookstoreController);
      });
  });
});
