import { UpdateRoleService } from '../../services/roles/UpdateRoleService';
import { Request, Response } from 'express';

class UpdateRoleController {

    async handle(request: Request, response: Response) {

        const { name } = request.body;
        const { slug } = request.params;

        const updateRole = new UpdateRoleService();

        const role = await updateRole.execute(slug, name);
        
        return response.json(role);
    }
}

export { UpdateRoleController };