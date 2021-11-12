import { getCustomRepository } from "typeorm";
import { ChampionRoleRepositories } from "../../repositories/ChampionRoleRepositories";

class DeleteChampionRoleService {

    async execute(id: string) {

        const championRolesRepository = getCustomRepository(ChampionRoleRepositories);

        const championRole = await championRolesRepository.find({ id });

        if (championRole === undefined) throw new Error("Champion Role not found");

        try {
            await championRolesRepository.delete(id);
            
            return championRole;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export { DeleteChampionRoleService };