import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";


class ListChampionsService {

    async execute(){

        const championsRepository = getCustomRepository(ChampionsRepositories);

        const champions = await championsRepository.find();

        return champions;
    }
}

export { ListChampionsService };