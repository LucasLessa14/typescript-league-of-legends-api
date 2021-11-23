import { getCustomRepository } from "typeorm";
import { toSlug } from "../../utils/toSlugUtil";
import { RolesRepositories } from "../../repositories/RolesRepositories";

class CreateRoleService {
    
    async execute(name: string) {

        const rolesRepositories = getCustomRepository(RolesRepositories);

        if (!name) throw new Error('Name is required');

        const validated = await rolesRepositories.findOne({ where: { name } });

        if (validated) throw new Error('Role name already exists');
        
        const roles = rolesRepositories.create({
            name,
            slug: toSlug(name)
        });

        await rolesRepositories.save(roles);

        return roles;
    }
}

export { CreateRoleService };