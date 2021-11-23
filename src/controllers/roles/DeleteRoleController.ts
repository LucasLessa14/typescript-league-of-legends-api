import { Request, Response } from 'express';
import { DeleteRoleService } from '../../services/roles/DeleteRoleService';

class DeleteRoleController {

    async handle(request: Request, response: Response) {

        const { slug } = request.params;

        const deleteRole = new DeleteRoleService();

        const role = await deleteRole.execute(slug);

        return response.json({ message: 'Role deleted', role });
    }
}

export { DeleteRoleController };