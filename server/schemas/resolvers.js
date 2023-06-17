const { Users } = require('../models/Users');

const resolvers = {
    Query: {
        viewUsers: async () => {
            return await Users.find();
        }
    }, 

    // Mutation: {
    //     addUsers: async (_, args) => {
    //         const users = await Users.create(args);

    //         return users;
    //     }
    // }
};

module.exports = resolvers;