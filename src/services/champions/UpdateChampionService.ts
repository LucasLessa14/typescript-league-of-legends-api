import { getCustomRepository } from "typeorm";
import { ChampionsRepositories } from "../../repositories/ChampionsRepositories";
import { PassivesRepositories } from "../../repositories/PassivesRepositories";
import { toSlug } from "../../utils/toSlugUtil";

interface IChampionRequest {
    slug: string;
    name?: string;
    role?: string;
    lane?: string;
    passiveId?: string;
}

class UpdateChampionService {
    async execute({ slug, name, role, lane, passiveId }: IChampionRequest) {

        const championsRepository = getCustomRepository(ChampionsRepositories);

        const champion = await championsRepository.findOne({ where: { slug } });
        
        if (!champion) throw new Error('Champion not found');
        
        if (role) champion.role = role;
        if (lane) champion.lane = lane;
        if (name) {
            champion.name = name;
            champion.slug = toSlug(name);
        }

        if (passiveId) {
            
            const passiveRepository = getCustomRepository(PassivesRepositories);
    
            const passive = await passiveRepository.findOne(passiveId);
    
            if (!passive) throw new Error('Passive not found');

            champion.passive = passive;
        }

        await championsRepository.update(champion.id, champion);

        return champion;
    }
}

export { UpdateChampionService };