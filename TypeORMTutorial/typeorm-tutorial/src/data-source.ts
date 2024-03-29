import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root", // in case of no password, set it to undefined, or delete this row
    database: "infrend2024_typeorm",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
});
