import {GraphQLBoolean, GraphQLID, GraphQLList} from "graphql";
import {Users} from "../../Entities/Users";
import {UserType} from "../typeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  async resolve() {
    return await Users.find()
  }
}

export const GET_USER = {
  type: UserType,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(_: any, args: any) {
    return await Users.findOne({where: [{id: args.id}]})
  }
}

export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(_: any, args: any) {
    return !!(await Users.delete(args.id)).affected
  }
}

export const UPDATE_USER = {
  type: GraphQLBoolean,
  args: {
    id: {type: GraphQLID},
    name: {type: GraphQLID},
    username: {type: GraphQLID},
    password: {type: GraphQLID}
  },
  async resolve(_: any, {id, name, username, password} : any) {
    const userFound = await Users.findOneBy({id})
    console.log(userFound)
    return false
  }
}
