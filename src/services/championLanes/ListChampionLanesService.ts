import { getCustomRepository } from "typeorm";
import { ChampionLaneRepositories } from "../../repositories/ChampionLaneRepositories";

class ListChampionLanesService {
    async execute() {

        const championLanesRepository = getCustomRepository(ChampionLaneRepositories);

        const championLanes = await championLanesRepository.find();

        return championLanes;
    }
}

export { ListChampionLanesService };