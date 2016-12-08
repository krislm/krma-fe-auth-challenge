!function(){"use strict";angular.module("krma-fe-auth-challenge",["DEBUG_ENV","API_ENDPOINTS","APPLICATION_SETTINGS","ui.router","angular-loading-bar","angulartics","ngStorage","angulartics.google.analytics","nCore","nCore.nMessages","mm.foundation","ngAnimate","ngSanitize","ngTouch","ngStorage","config","application","index","firebase","login","admins","shared","register","user","squares"])}(),function(){"use strict";function configure(DEBUG_ENV,$logProvider,$stateProvider,$urlRouterProvider,$locationProvider,cfpLoadingBarProvider,$httpProvider,nMessagesProvider){var firebaseConfig={apiKey:"AIzaSyANVZSxqb__e8p98E6DaXbXrmYXwkjndIk",authDomain:"authchallenge.firebaseapp.com",databaseURL:"https://authchallenge.firebaseio.com",storageBucket:"authchallenge.appspot.com",messagingSenderId:"818571446557"};firebase.initializeApp(firebaseConfig),nMessagesProvider.configure({verticalPosition:"top",horizontalPosition:"right"}),$logProvider.debugEnabled&&DEBUG_ENV?$logProvider.debugEnabled(!0):$logProvider.debugEnabled(!1),cfpLoadingBarProvider.includeSpinner=!1,cfpLoadingBarProvider.latencyThreshold=100,$locationProvider.html5Mode(!0),$urlRouterProvider.otherwise("/404"),$stateProvider.state("application.notfound",{url:"/404",views:{"application@":{templateUrl:"404.html"}}}).state("error",{url:"/503",views:{"application@":{templateUrl:"503.html"}}})}configure.$inject=["DEBUG_ENV","$logProvider","$stateProvider","$urlRouterProvider","$locationProvider","cfpLoadingBarProvider","$httpProvider","nMessagesProvider"];var core=angular.module("config",["DEBUG_ENV","APPLICATION_SETTINGS","angular-loading-bar","cgBusy"]);core.value("cgBusyDefaults",{message:"Loading Stuff",backdrop:!0,templateUrl:"../common/core/loadingindicator/loadingindicator.template.html"}),core.config(configure)}(),function(){"use strict";function run($state,$rootScope,$localStorage,UserService){$rootScope.$storage=$localStorage,$localStorage["user-token"]&&(UserService.userToken=$localStorage["user-token"]),$localStorage.user&&(UserService.user=$localStorage.user)}run.$inject=["$state","$rootScope","$localStorage","UserService"],angular.module("krma-fe-auth-challenge").run(run)}(),function(){"use strict";angular.module("API_ENDPOINTS",[]).constant("API_ENDPOINTS",{root:"api/"})}(),function(){"use strict";angular.module("APPLICATION_SETTINGS",[]).constant("APPLICATION_SETTINGS",{nStack:{appId:"",apiKey:""}})}(),function(){"use strict";angular.module("application",[])}(),function(){"use strict";angular.module("application").config(["$stateProvider",function($stateProvider){var Application={name:"application","abstract":!0,views:{"root@":{templateUrl:"modules/_application/application.template.html",controller:"Application",controllerAs:"application"}}};$stateProvider.state(Application)}])}(),function(){"use strict";function Application(UserService,$state){function activate(){}function logout(){UserService.logoutUser().then(function(){$state.go("application.index"),vm.loggedOut=!0})}function debugUser(){UserService.debugSetUser("user").then(function(user){$state.go("application.shared")})}function debbugAdmin(){UserService.debugSetUser("admin").then(function(user){$state.go("application.admins")})}var vm=this;vm.debugUser=debugUser,vm.debugAdmin=debbugAdmin,vm.logout=logout,activate()}Application.$inject=["UserService","$state"],angular.module("application").controller("Application",Application)}(),function(){"use strict";angular.module("index",[])}(),function(){"use strict";angular.module("index").config(["$stateProvider",function($stateProvider){var Index={name:"application.index",url:"/",views:{"application@application":{templateUrl:"modules/index/index.template.html",controller:"Index",controllerAs:"index"}}};$stateProvider.state(Index)}])}(),function(){"use strict";function Index(){function activate(){}activate()}angular.module("index").controller("Index",Index)}(),function(){"use strict";angular.module("login",[])}(),function(){"use strict";angular.module("login").config(["$stateProvider",function($stateProvider){var Login={name:"application.login",url:"/login",views:{"application@application":{templateUrl:"modules/login/login.template.html",controller:"LoginController",controllerAs:"login"}}};$stateProvider.state(Login)}])}(),function(){"use strict";function LoginController($state,UserService,nMessages){function activate(){}function loginWithFacebook(){UserService.authenticateUserWithFacebook().then(function(data){var admin=!1;admin?$state.go("applicetion.admins"):$state.go("application.shared")})["catch"](function(error){console.log(error),nMessages.create({type:"alert",content:error.message,dismissButton:!0,dismissButtonHtml:"&times",dismissOnClick:!0})})}function login(){UserService.authenticateUser({email:vm.email,password:vm.password}).then(function(data){var admin=!1;admin?$state.go("applicetion.admins"):$state.go("application.shared")})["catch"](function(error){console.log(error),nMessages.create({type:"alert",content:error.message,dismissButton:!0,dismissButtonHtml:"&times",dismissOnClick:!0})})}var vm=this;vm.loginWithFacebook=loginWithFacebook,vm.login=login,activate()}LoginController.$inject=["$state","UserService","nMessages"],angular.module("login").controller("LoginController",LoginController)}(),function(){"use strict";angular.module("admins",[])}(),function(){"use strict";angular.module("admins").config(["$stateProvider",function($stateProvider){var Admins={name:"application.admins",url:"/admins",views:{"application@application":{templateUrl:"modules/admins/admins.template.html",controller:"AdminsController",controllerAs:"admins"}},resolve:{user:function(UserService){return UserService.user}}};$stateProvider.state(Admins)}])}(),function(){"use strict";function AdminsController(user){function activate(){console.log("user: ",user)}var vm=this;vm.user=user,activate()}AdminsController.$inject=["user"],angular.module("admins").controller("AdminsController",AdminsController)}(),function(){"use strict";angular.module("shared",[])}(),function(){"use strict";angular.module("shared").config(["$stateProvider",function($stateProvider){var Shared={name:"application.shared",url:"/shared",views:{"application@application":{templateUrl:"modules/shared/shared.template.html",controller:"SharedController",controllerAs:"shared"}},resolve:{user:function(UserService){return UserService.user}}};$stateProvider.state(Shared)}])}(),function(){"use strict";function SharedController(user){function activate(){console.log("user: ",user)}var vm=this;vm.user=user,activate()}SharedController.$inject=["user"],angular.module("shared").controller("SharedController",SharedController)}(),function(){"use strict";angular.module("register",[])}(),function(){"use strict";angular.module("register").config(["$stateProvider",function($stateProvider){var Register={name:"application.register",url:"/register",views:{"application@application":{templateUrl:"modules/register/register.template.html",controller:"RegisterController",controllerAs:"register"}}};$stateProvider.state(Register)}])}(),function(){"use strict";function RegisterController($state,UserService,nMessages){function activate(){}function register(){UserService.createUser({name:vm.name,email:vm.email,password:vm.password}).then(function(data){console.log(data),$state.go("application.shared")})["catch"](function(error){console.log(error),nMessages.create({type:"alert",content:error.message,dismissButton:!0,dismissButtonHtml:"&times",dismissOnClick:!0})})}var vm=this;vm.register=register,activate()}RegisterController.$inject=["$state","UserService","nMessages"],angular.module("register").controller("RegisterController",RegisterController)}(),function(){"use strict";angular.module("user",[])}(),function(){"use strict";function User($localStorage,$q,$http,$firebaseAuth){function authenticateUser(user){var deferred=$q.defer();return service.auth.$signInWithEmailAndPassword(user.email,user.password).then(function(firebaseUser){console.log("Signed in as:",firebaseUser),service.user=firebaseUser,deferred.resolve(firebaseUser)})["catch"](function(error){console.log("Authentication failed:",error),deferred.reject(error)}),deferred.promise}function authenticateUserWithFacebook(){var deferred=$q.defer();return service.auth.$signInWithPopup("facebook").then(function(firebaseUser){console.log("Signed in as:",firebaseUser),service.user=firebaseUser,deferred.resolve(firebaseUser)})["catch"](function(error){console.log("Authentication failed:",error),deferred.reject(error)}),deferred.promise}function createUser(user){var deferred=$q.defer();return service.auth.$createUserWithEmailAndPassword(user.email,user.password).then(function(firebaseUser){console.log("Signed in as:",firebaseUser),service.user=firebaseUser,deferred.resolve(firebaseUser)})["catch"](function(error){console.log("Authentication failed:",error),deferred.reject(error)}),deferred.promise}function logoutUser(){var deferred=$q.defer();return service.auth.$signOut().then(function(args){console.log(args),service.user=null,service.userToken=null,deferred.resolve(args),delete $localStorage.user})["catch"](function(error){console.log("UnAuth failed",error),deferred.reject(error)}),deferred.resolve(),deferred.promise}function debugSetUser(role){var deferred=$q.defer();switch(role){case"user":service.user=dummyUser,$localStorage.$default({user:dummyUser}),deferred.resolve(dummyUser);break;case"admin":service.user=dummyAdmin,$localStorage.$default({user:dummyAdmin}),deferred.resolve(dummyAdmin);break;default:service.user=dummyAdmin,$localStorage.$default({user:dummyAdmin}),deferred.resolve(dummyAdmin)}return deferred.promise}var dummyUser={name:"Bob",email:"bob@bob.com",role:"user"},dummyAdmin={name:"Boss Man",email:"boss@man.com",role:"admin"},service={authenticateUser:authenticateUser,authenticateUserWithFacebook:authenticateUserWithFacebook,createUser:createUser,logoutUser:logoutUser,debugSetUser:debugSetUser,user:null,userToken:null,auth:$firebaseAuth()};return service}User.$inject=["$localStorage","$q","$http","$firebaseAuth"],angular.module("user").service("UserService",User)}(),function(){"use strict";angular.module("squares",[])}(),function(){"use strict";function squaresController(){var vm=this;console.log(vm.userRole),vm.squares=[{color:"blue",role:"admin"},{color:"green",role:"admin"},{color:"red",role:"user"},{color:"yellow",role:"user"}]}angular.module("squares").component("squares",{bindings:{userRole:"="},templateUrl:"common/squares/squares.template.html",controller:squaresController,controllerAs:"squares"})}(),angular.module("krma-fe-auth-challenge").run(["$templateCache",function($templateCache){"use strict";$templateCache.put("common/core/loadingindicator/loadingindicator.template.html","<p>This is the loadingIndicator view.</p>"),$templateCache.put("common/squares/squares.template.html",'<div class="square-container">\n    <div class="square color-{{item.color}}" ng-repeat="item in squares.squares" ng-if="squares.userRole==\'admin\' || item.role==\'user\'">\n    </div>\n</div>'),$templateCache.put("modules/_application/application.template.html",'<div class="header">\n    <a ui-sref="application.index">Home</a>\n    <h1>FE Auth Challenge - krma</h1>\n    <button class="button" ng-show="application.loggedOut" ng-click="application.logout()">Logout</button>\n</div>\n<div class="debugger">\n    <button class="button" ng-click="application.debugAdmin()">gogo admin</button>\n    <button class="button" ng-click="application.debugUser()">gogo user</button>\n</div>\n<div class="content" ui-view="application"></div>'),$templateCache.put("modules/admins/admins.template.html",'<div class="row">\n    <div class="columns small-12 medium-6 large-4">\n        <h2>Welcome {{admins.user.name}}</h2>\n        <squares user-role="admins.user.role"></squares>\n    </div>\n</div>\n<div class="row">\n    <div class="columns small-12">\n        <a ui-sref="application.shared">Switch to user view</a>\n    </div>\n</div>'),$templateCache.put("modules/index/index.template.html",'<h2>Landing page</h2>\n<a class="button inverted" ui-sref="application.login">Login</a>\n<a class="button inverted" ui-sref="application.register">Register</a>'),$templateCache.put("modules/login/login.template.html",'<div class="row">\n    <h2>Login</h2>\n    <form name="loginForm" ng-submit="login.login()">\n        <label class="form-element">\n            <span>Email</span>\n            <input type="email" name="loginForm.email" ng-model="login.email">\n        </label> <br>\n        <label class="form-element">\n            <span>Password</span>\n            <input type="password" name="loginForm.password" ng-model="login.password">\n        </label> <br>\n        <label>\n            <span>Remember me</span>\n            <input id="remember" name="loginForm.remember" type="checkbox" class="css-checkbox">\n        </label>\n        <!--<label class="css-label">\n        </label>\n        <input id="remember" name="loginForm.remember" type="checkbox" class="css-checkbox" />-->\n        <input class="button inverted" type="submit" value="Login">\n    </form>\n    <br>\n    <button class="button inverted" ng-click="login.loginWithFacebook()">Login with facebook</button>\n</div>'),$templateCache.put("modules/register/register.template.html",'<div class="row">\n    <h2>Register</h2>\n    <form name="registerForm" ng-submit="register.register()">\n        <label class="form-element">\n            Display name\n            <input type="text" name="registerForm.name" ng-model="register.name">\n        </label> <br>\n        <label class="form-element">\n            Email\n            <input type="email" name="registerForm.email" ng-model="register.email">\n        </label> <br>\n        <label class="form-element">\n            Password\n            <input type="password" name="registerForm.password" ng-model="register.password">\n        </label> <br>\n        <input class="button inverted" type="submit" value="Register">\n    </form>\n</div>'),$templateCache.put("modules/shared/shared.template.html",'<div class="row">\n    <div class="columns small-12 medium-6 large-4">\n        <h2>Welcome {{shared.user.name}}</h2>\n        <squares user-role="shared.user.role"></squares>\n    </div>\n</div>\n\n<div class="row" ng-if="shared.user.role == \'admin\'">\n    <div class="columns small-12">\n        <a ui-sref="application.admins">Back to admin view</a>\n    </div>\n</div>')}]),angular.module("DEBUG_ENV",[]).constant("DEBUG_ENV",!1);