import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../repositories/ChampionsRepositories";

class CreateChampionService {

    async createChampion(name: string, role: string, lane: string) {

        const championRepository = getCustomRepository(ChampionsRepositories);

        if (!name || !role || !lane) {
            throw new Error('Missing parameters');
        }

        const champion = await championRepository.create({
            name,
            role,
            lane
        });

        await championRepository.save(champion);

        return champion;
    }
}

export { CreateChampionService };

