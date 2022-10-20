import {createConnection} from "typeorm";
import {Users} from "./Entities/Users";

export const connectDB = async () => {
  await createConnection({
    type: 'mysql',
    username: 'userCron',
    password: 'us4rCr0n',
    port: 3306,
    host: '172.30.2.234',
    database: 'node_test',
    entities: [Users],
    synchronize: true,
    ssl: false
  })
}
