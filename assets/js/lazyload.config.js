(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
		 			name: 'lead',
		 			files: [
		 				"./controller/rootcontroller.js",
		 				"./assets/css/reset.css",
		 				"./assets/css/lead1.css"
		 			]
		 		},

		 		{
		 			name: 'login',
		 			files: [
		 				"./controller/loginController.js",
		 				"./assets/css/reset.css",
		 				"./assets/css/login.css"
		 			]
		 		},

		 		{
		 			name: 'home',
		 			files: [
		 				"./controller/homeController.js",
		 				"./assets/css/login.css",
		 				"./assets/css/home.css"
		 			]
		 		},

		 		{
		 			name: 'zhuce',
		 			files: [
		 				"./controller/zhuceController.js",
		 			]
		 		},

		 		{
		 			name: 'class',
		 			files: [
		 				"./controller/classController.js",
		 				"./assets/css/home.css",
		 				"./assets/css/class.css"
		 			]
		 		},

		 		{
		 			name: 'comment',
		 			files: [
		 				"./controller/commentController.js",
		 				"./assets/css/order.css",
		 				"./assets/css/comment.css"
		 			]
		 		},

		 		{
		 			name: 'details',
		 			files: [
		 				"./controller/detailsController.js",
		 				"./assets/css/reset.css",
		 				"./assets/css/order.css",
		 				"./assets/css/details.css"
		 			]
		 		},

		 		{
		 			name: 'fahuo',
		 			files: [
		 				"./controller/fahuoController.js",
		 				"./assets/css/fahuo.css"
		 			]
		 		},

		 		{
		 			name: 'order',
		 			files: [
		 				"./controller/orderController.js",
		 				"./assets/css/order.css"
		 			]
		 		},

		 		{
		 			name: 'pay',
		 			files: [
		 				"./controller/payController.js",
		 				".assets/css/order.css",
		 				".assets/css/comment.css",
		 				".assets/css/pay.css"
		 			]
		 		},

		 		{
		 			name: 'personcenter',
		 			files: [
		 				"./controller/personcenterController.js",
		 				"./assets/css/personcenter.css"
		 			]
		 		},

		 		{
		 			name: 'receiving',
		 			files: [
		 				"./controller/receivingController.js",
		 				"./assets/css/order.css",
		 				"./assets/css/receiving.css"
		 			]
		 		},

		 		{
		 			name: 'setting',
		 			files: [
		 				"./controller/settingController.js",
		 				"./assets/css/setting.css"
		 			]
		 		},

		 		{
		 			name: 'shop',
		 			files: [
		 				"./controller/shopController.js",
		 				"./assets/css/shop.css"
		 			]
		 		},

		 		{
		 			name: 'start',
		 			files: [
		 				"./controller/startController.js"
		 			]
		 		},

		 		{
		 			name: 'tuikaun',
		 			files: [
		 				"./controller/tuikuanController.js",
		 				"./assets/css/tuikuan.css",
		 				"./assets/css/order.css"
		 			]
		 		},

		 		{
		 			name: 'wait',
		 			files: [
		 				"./controller/waitController.js",
		 				"./assets/css/wait.css",
		 			]
		 		},

		 		{
		 			name: 'xingxi',
		 			files: [
		 				"./controller/xingxiController.js"
		 			]
		 		},

		 		{
		 			name: 'footer',
		 			files: [
		 				"./controller/footerController.js"
		 			]
		 		},

		 		
		 		

	 		]
 		});
	}]);
	
})();