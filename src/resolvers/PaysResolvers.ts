import { Query, Resolver, Field, InputType, Mutation, Arg } from "type-graphql";
import Pays from "../entities/Pays";

@InputType()
class NewPaysInput {
    @Field()
    code: string;

    @Field()
    nom: string;

    @Field()
    emodji: string;

    @Field()
    continent: string;
}

@Resolver(Pays)
export default class PaysResolvers {
    @Query(() => [Pays])
    async GetAllPays() {
        //récupère tout les pays
        const allPays = Pays.find()

        // renvoir tous les pays
        return allPays;
    }

    @Query(() => [Pays])
    async GetPaysByCode(@Arg("code") code: string) {
        //récupère le pays avec son code
        const allPays = Pays.find({ where: { code: code } })

        // renvoir le pays
        return allPays;
    }

    @Query(() => [Pays])
    async GetPaysByContinent(@Arg("contient") contient: string) {
        //récupère le pays avec son code
        const allPays = Pays.find({ where: { continent: contient } })

        // renvoir le pays
        return allPays;
    }

    @Mutation(() => String)
    async NewPays(@Arg("data") data: NewPaysInput) {
        // crée le nouveux pays
        const paysCree = Pays.create(data)

        // enregister le nouveux pays
        await paysCree.save()

        // return le token
        return "Pays crée avec sucèes";
    }

    @Mutation(() => String)
    async NewMultiPays(@Arg("data", () => [NewPaysInput]) data: NewPaysInput[]) {
        for (const pays of data) {
            // crée le nouveux pays
            const paysCree = Pays.create(pays)
            // enregister le nouveux pays
            await paysCree.save()
        }

        // return le token
        return `${data.length} pays crée avec sucèes`;
    }
}