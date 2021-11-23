import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";

class DeleteChampionService {

  async execute(slug: string) {
    const championsRepositories = getCustomRepository(ChampionsRepositories);

    const champion = await championsRepositories.findOne({ where: { slug } });

    if (!champion) throw new Error('Champion not found');

    await championsRepositories.delete(champion.id);

    return champion;
  }
}

export { DeleteChampionService };