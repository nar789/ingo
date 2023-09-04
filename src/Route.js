;(function(){
	module.exports=function(_g){

		var app = _g.app;

		function route(){
			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			//1. enetry point
			app.listen(3000,function(){
			  console.log('Bingo Server listen on *:3000');
			});
		}

		return {
			route:route,
		};
	}

})();



