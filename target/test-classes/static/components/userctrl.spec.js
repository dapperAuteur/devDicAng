/**
 * 
 */
describe('UserCtrl', function() {
	
	beforeEach(module('myApp'));
	
	it('should display users name', inject(function($controller) {
		var scope = {};
		var ctrl = $controller('UserCtrl', {$scope: scope});
		
		expect(scope.user).toBe('Anthony');
	}));
});