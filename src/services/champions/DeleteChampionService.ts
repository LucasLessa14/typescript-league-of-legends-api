import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";

class DeleteChampionService {

  async execute(id: string) {
    const championsRepositories = getCustomRepository(ChampionsRepositories);

    const champion = await championsRepositories.findOne(id);
    
    console.log(champion);

    if (!champion) {
        throw new Error('Champion not found');
    }

    try {
        await championsRepositories.delete(id);

        return champion;

    } catch (err) {

        throw new Error(err.message);
    }

  }
}

export { DeleteChampionService };