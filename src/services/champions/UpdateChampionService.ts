import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";
import { ChampionPassiveRepositories } from "../../repositories/ChampionPassiveRepositories";

interface IChampionRequest {
    id: string;
    name?: string;
    role?: string;
    lane?: string;
    passiveId?: string;
}
class UpdateChampionService {
    public async execute({id, name, role, lane, passiveId}: IChampionRequest) {

        const championRepository = getCustomRepository(ChampionsRepositories);

        const champion = await championRepository.findOne(id);
        
        if (!champion) throw new Error('Champion not found');

        if (name && champion.name != name) champion.name = name;

        if (role && champion.role != role) champion.role = role;

        if (lane && champion.lane != lane) champion.lane = lane;

        if (passiveId) {
            
            const passiveRepository = getCustomRepository(ChampionPassiveRepositories);
    
            const passive = await passiveRepository.findOne(passiveId);

            console.log(passive);
    
            if (!passive) throw new Error('Passive not found');

            champion.passive = passive;
        }

        try {
            const updateChampion = await championRepository.update(id, champion);

            return champion;

        } catch (error) {
            throw new Error('Champion not found');
        }
    }
}

export { UpdateChampionService };