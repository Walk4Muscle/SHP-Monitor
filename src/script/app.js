let app = require('angular').module('app', [
  require('./controller'), require('./service'), require('./directive'), require('./filter'), require('./app.route.js'), require('./app.constant.js')
])
.run(($rootScope,CONST)=>{
	$rootScope.CONST = CONST;
}) 