describe('my first babe step', function() {

	it('login to webportal', function() {
		browser.get('https://t2membersnew.bluekc.com/login').then(function() {
			browser.sleep(5000);
		});

	})

	it('should add a todo', function() {

		browser.get('https://angularjs.org');

		browser.get('http://juliemr.github.io/protractor-demo/').then(
				function() {
					console.log("last step to execute.");
				})

	});

})