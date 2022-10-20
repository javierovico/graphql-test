import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    }
})