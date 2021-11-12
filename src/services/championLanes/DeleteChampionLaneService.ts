import { getCustomRepository } from "typeorm";
import { ChampionLaneRepositories } from "../../repositories/ChampionLaneRepositories";

class DeleteChampionLaneService {

    async execute(id: string) {

        const championLanesRepository = getCustomRepository(ChampionLaneRepositories);

        const championLane = await championLanesRepository.find({ id });

        if (championLane === undefined) throw new Error("Champion Lane not found");

        try {
            await championLanesRepository.delete(id);
            
            return championLane;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export { DeleteChampionLaneService };