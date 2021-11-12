import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";

class DeleteChampionService {

  async execute(id: string) {
    const championsRepositories = new ChampionsRepositories();

    const champion = await championsRepositories.findOne(id);

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