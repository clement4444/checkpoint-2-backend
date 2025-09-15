import { DataSource } from "typeorm";
import Pays from "../entities/Pays";

const dataSource = new DataSource({
    type: "sqlite",
    database: "dataBase.sqlite",
    entities: [Pays],
    synchronize: true,
    logging: ["error"],
    // "query"
});

export default dataSource;