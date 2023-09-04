;(function(){

	module.exports = function(){

		function loadNodeModules() {
			_g = {};
			_g.express = require('express');
			_g.app = require('express')();
			_g.bodyParser = require('body-parser');
			_g.http = require('http');
		}

		function loadRoute() {
			var route = require('./Route.js')(_g);
			route.route();
		}

		function loadServer() {
			require('./SocketServer.js')(_g);
		}

		function initialize(){
			var app=_g.app;
			app.set('view engine', 'ejs');
			app.engine('html', require('ejs').renderFile);
			app.use('/assets',_g.express.static(__dirname + '/../assets'));
			app.use(_g.bodyParser.urlencoded({
			    extended: true
			}));
			app.use(_g.bodyParser.json());
		}

		function doInBackend(){
			loadNodeModules();
			initialize();
			loadRoute();
			loadServer();
		}
 
		return {
			doInBackend:doInBackend,
		};
	}

})();

