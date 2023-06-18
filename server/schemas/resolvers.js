const Player = require('../models')

const resolvers = {
    Query: {
        viewPlayers: async () => {
            return await Player.find();
        }
    },
    Mutation: {
        createPlayer: async (_, args) => {
            const player = await Player.create(args);

            return player;

        }
    }
}

module.exports = resolvers;