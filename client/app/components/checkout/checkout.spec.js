import CheckoutModule from './checkout'
import CheckoutController from './checkout.controller';
import CheckoutComponent from './checkout.component';
import CheckoutTemplate from './checkout.html';

describe('Checkout', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CheckoutModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CheckoutController();
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
      expect(CheckoutTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CheckoutComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CheckoutTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CheckoutController);
      });
  });
});
