import {createConnection} from "typeorm";

export const connectDB = async () => {
  await createConnection({
    type: 'mysql',
    username: 'root',
    password: 'putamadre',
    port: 3306,
    host: 'localhost',
    database: 'node_test',
    entities: [],
    synchronize: false,
    ssl: false
  })
}
