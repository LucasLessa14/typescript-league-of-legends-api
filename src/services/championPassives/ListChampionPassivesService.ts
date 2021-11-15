import { getCustomRepository } from "typeorm";
import { ChampionPassiveRepositories } from "../../repositories/ChampionPassiveRepositories";

class ListChampionPassivesService {
    async execute() {

        const championPassivesRepository = getCustomRepository(ChampionPassiveRepositories);

        const championPassives = await championPassivesRepository.find();

        return championPassives;
    }
}

export { ListChampionPassivesService };