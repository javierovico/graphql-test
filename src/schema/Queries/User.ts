import {GraphQLBoolean, GraphQLID, GraphQLList} from "graphql";
import {Users} from "../../Entities/Users";
import {UserType} from "../typeDefs/User";
import {GraphQLFieldConfig} from "graphql/type/definition";


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

export const UPDATE_USER: GraphQLFieldConfig<any,any> = {
  type: GraphQLBoolean,
  args: {
    id: {type: GraphQLID},
    name: {type: GraphQLID},
    username: {type: GraphQLID},
    password: {type: GraphQLID}
  },
  async resolve(_: any, arg) {
    const {id, name, username, password} = arg
    const userFound = await Users.findOneBy({id})
    console.log(userFound)
    return false
  }
}
