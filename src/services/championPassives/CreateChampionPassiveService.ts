import { getCustomRepository } from "typeorm";
import { ChampionPassiveRepositories } from "../../repositories/ChampionPassiveRepositories";

class CreateChampionPassiveService {
    
    async execute(name: string, description: string, urlImage: string) {

        const championPassiveRepositories = getCustomRepository(ChampionPassiveRepositories);

        if (!name) throw new Error('Name is required');
        
        const championPassive = championPassiveRepositories.create({ name, description, urlImage });

        await championPassiveRepositories.save(championPassive);

        return championPassive;
    }
}

export { CreateChampionPassiveService };