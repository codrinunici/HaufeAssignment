const Hapi = require('@hapi/hapi');
const Mongoose = require('mongoose');

const server = Hapi.server({
    port: 4000,
    host: 'localhost'
});

const connection = Mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true});

const init = async () => {
    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
const salutationSchema = new Mongoose.Schema({
    salutation: String
});
const GreetingsModel = Mongoose.model("greeting", salutationSchema);

server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method: "POST",
    path: "/greeting",
    handler: async (request, h) => {
        try {
            let salutation = new GreetingsModel({salutation: request.payload.salutation});
            let result = await salutation.save();
            return h.response(result);
        } catch (error) {
            return h.response(error.message).code(300);
        }
    }
});

server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method: "GET",
    path: "/",
    handler: async (request, h) => {
        try {
            return Mongoose.connection.readyState === 1 ? h.response("That Mongo fella is still with us") : h.response("Mongo's DOWN");
        } catch (error) {
            return h.response(error.message).code(300);
        }
    }
});
