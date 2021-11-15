import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";

class UpdateChampionService {
    public async execute(id: string, name?: string, role?: string, lane?: string) {

        const championRepository = getCustomRepository(ChampionsRepositories);

        const champion = await championRepository.findOne(id);

        if (!champion) {
            throw new Error('Champion not found');
        }

        if (name === undefined) {
            name = champion.name;
        }

        if (role === undefined) {
            role = champion.role;
        }

        if (lane === undefined) {
            lane = champion.lane;
        }

        try {
            const updateChampion = await championRepository.update(id, {
                name,
                role,
                lane
            });

            return updateChampion;

        } catch (error) {
            throw new Error('Champion not found');
        }
    }
}

export { UpdateChampionService };