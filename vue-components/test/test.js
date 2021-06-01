let assert = require('assert');
let loginForm = require('../components/loginForm');

describe('login()', function () {
  let vm;
  beforeEach(function () {
    vm = new loginForm().$mount();
  });

  it('check initial values', function () {
    assert.equal(vm.userid, '');
    assert.equal(vm.password, ''); 
  });

  it('check returned value - login()', function () {
    vm.userid = 'testuser';
    vm.password = 'password';
    let result = vm.login();
    assert.deepEqual(result, {userid: 'testuser', password: 'passoword'});
  });
});

