import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";

interface IChampionRequest {
    name: string;
    role: string;
    lane: string;
}

class CreateChampionService {

    async execute({ name, role, lane }: IChampionRequest) {

        const championRepository = getCustomRepository(ChampionsRepositories);

        if (!name || !role || !lane) {
            throw new Error('Missing parameters');
        }

        const championAlreadyExists = await championRepository.findOne({ name });

        if (championAlreadyExists) {
            throw new Error('Champion already exists');
        }

        const champion = championRepository.create({
            name,
            role,
            lane
        });

        await championRepository.save(champion);

        return champion;
    }
}

export { CreateChampionService };

