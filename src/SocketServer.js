

;(()=>{

    module.exports = (_g) => {
        
        const app = _g.app;
        const http = _g.http;
        const server = http.createServer(app);
        const { Server } = require("socket.io");
        const io = new Server(server, {
            cors: {
                origin:'*'
            }
        }); 


        io.on('connection', (s) => {

            console.log(`${s.id} is connected.`);

        });


        server.listen(3001, () => {
            console.log('socket server is listening on *:3001');
        });

    }


})();