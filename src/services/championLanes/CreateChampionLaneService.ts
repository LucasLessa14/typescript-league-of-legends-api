import { getCustomRepository } from "typeorm";
import { ChampionLaneRepositories } from "../../repositories/ChampionLaneRepositories";

class CreateChampionLaneService {
    
    async execute(name: string) {

        const championLaneRepositories = getCustomRepository(ChampionLaneRepositories);

        if (!name) {
            throw new Error('Name is required');
        }
        
        const championLane = championLaneRepositories.create({ name });

        await championLaneRepositories.save(championLane);

        return championLane;

    }
}

export { CreateChampionLaneService };