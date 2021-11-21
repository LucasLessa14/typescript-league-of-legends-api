import { getCustomRepository } from 'typeorm';
import { ChampionsRepositories } from '../../repositories/ChampionsRepositories';

class FindByNameChampionService {

    public async execute(championName: string) {
        const championRepository = getCustomRepository(ChampionsRepositories);

        const champion = await championRepository.findOne({
            where: {
                name: championName
            }
        });

        if (!champion) throw new Error('Champion not found');
        
        return champion;
    }
}

export { FindByNameChampionService };