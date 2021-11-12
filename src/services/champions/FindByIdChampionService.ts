import { getCustomRepository } from 'typeorm';
import { ChampionsRepositories } from '../../repositories/ChampionsRepositories';

class FindByIdChampionService {

    public async execute(id: string) {
        const championRepository = getCustomRepository(ChampionsRepositories);

        const champion = await championRepository.findOne(id);

        if (!champion) {
            throw new Error('Champion not found');
        }
        
        return champion;
    }
}

export { FindByIdChampionService };