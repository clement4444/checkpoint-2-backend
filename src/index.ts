import "reflect-metadata";
import dotenv from "dotenv";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import dataSource from "./config/db";
import { startStandaloneServer } from "@apollo/server/standalone";
import PaysResolvers from "./resolvers/PaysResolvers";

dotenv.config();

const port = Number(process.env.SERVEUR_PORT) || 3000;

async function startServer() {
    await dataSource.initialize();

    const schema = await buildSchema({
        resolvers: [PaysResolvers],
    });

    const apolloServer = new ApolloServer({ schema });

    const { url } = await startStandaloneServer(apolloServer, {
        listen: { port }
    });
    console.info(`🚀 Serveur démarré sur ${url}`);
}
startServer();