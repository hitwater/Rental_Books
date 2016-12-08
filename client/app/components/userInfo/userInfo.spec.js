import UserInfoModule from './userInfo'
import UserInfoController from './userInfo.controller';
import UserInfoComponent from './userInfo.component';
import UserInfoTemplate from './userInfo.html';

describe('UserInfo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserInfoModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserInfoController();
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
      expect(UserInfoTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserInfoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserInfoTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserInfoController);
      });
  });
});
