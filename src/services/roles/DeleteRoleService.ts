import { getCustomRepository } from "typeorm";
import { RolesRepositories } from "../../repositories/RolesRepositories";

class DeleteRoleService {

    async execute(slug: string) {

        const rolesRepository = getCustomRepository(RolesRepositories);

        const role = await rolesRepository.find({ slug });

        if (role === undefined) throw new Error("Role not found");
        
        await rolesRepository.delete({ slug });
        
        return role;
    }
}

export { DeleteRoleService };