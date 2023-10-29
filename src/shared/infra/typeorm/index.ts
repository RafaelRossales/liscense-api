import { DataSource } from "typeorm";
import { CreateCompany1698100949484 } from "./migrations/1698100949484-CreateCompany";
import { CreateLiscense1698102036287 } from "./migrations/1698102036287-CreateLiscense";

export const dataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "mydatabase",
  entities: [],
  migrations: [CreateCompany1698100949484, CreateLiscense1698102036287],
});
