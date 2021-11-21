import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";
// import { ChampionPassiveRepositories } from "../../repositories/ChampionPassiveRepositories";

interface IChampionRequest {
    name: string;
    role: string;
    lane: string;
    // passiveId?: string;
}

class CreateChampionService {

    async execute({ name, role, lane }: IChampionRequest) {

        const championRepository = getCustomRepository(ChampionsRepositories);

        if (!name || !role || !lane) throw new Error('Missing parameters');

        const champion = { name, role, lane };

        const championAlreadyExists = await championRepository.findOne({ name });

        if (championAlreadyExists) throw new Error('Champion already exists');

        const createChampion = championRepository.create(champion);

        await championRepository.save(createChampion);

        return champion;
    }
}

export { CreateChampionService };

