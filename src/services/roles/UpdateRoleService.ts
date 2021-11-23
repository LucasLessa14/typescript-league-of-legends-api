import { getCustomRepository } from "typeorm";
import { RolesRepositories } from "../../repositories/RolesRepositories";
import { toSlug } from "../../utils/toSlugUtil";

class UpdateRoleService {
    public async execute(slug: string, name: string) {
        
        const rolesRepositories = getCustomRepository(RolesRepositories);
        
        const role = await rolesRepositories.findOne({ where: { slug } });
        
        if (!role) throw new Error('Role not found');
        
        if (!name) throw new Error('Role name is required');

        const validated = await rolesRepositories.findOne({ where: { name } });

        if (validated) throw new Error('Role name already exists');
        
        role.name = name;
        role.slug = toSlug(name);
        
        await rolesRepositories.update(role.id, role);
        
        return role;
    }
}

export { UpdateRoleService };