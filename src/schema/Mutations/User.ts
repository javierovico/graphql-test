import {GraphQLString} from "graphql";
import {GraphQLFieldConfig} from "graphql/type/definition";
import {Users} from "../../Entities/Users";
import {UserType} from "../typeDefs/User";
import bcrypt from 'bcryptjs'

interface ICreateUser {
  name: string,
  username: string,
  password: string,
}

export const CREATE_USER: GraphQLFieldConfig<string, string, any> = {
  type: UserType,
  args: {
    name: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  async resolve(a, user) {
    user.password = await bcrypt.hash(user.password, 10)
    await Users.insert(user);
    console.log({user})
    return user
  }
}
