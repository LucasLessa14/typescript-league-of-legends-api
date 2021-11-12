import { Request, Response } from 'express';
import { DeleteChampionRoleService } from '../../services/championRoles/DeleteChampionRoleService';

class DeleteChampionRoleController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const deleteChampionRole = new DeleteChampionRoleService();

        await deleteChampionRole.execute(id);

        return response.json({ message: 'Role deleted' });
    }
}

export { DeleteChampionRoleController };