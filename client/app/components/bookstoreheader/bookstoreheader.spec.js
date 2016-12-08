import BookstoreheaderModule from './bookstoreheader'
import BookstoreheaderController from './bookstoreheader.controller';
import BookstoreheaderComponent from './bookstoreheader.component';
import BookstoreheaderTemplate from './bookstoreheader.html';

describe('Bookstoreheader', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BookstoreheaderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BookstoreheaderController();
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
      expect(BookstoreheaderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BookstoreheaderComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BookstoreheaderTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BookstoreheaderController);
      });
  });
});
