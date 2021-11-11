import { CreateChampionRoleService } from '../../services/championRoles/CreateChampionRolesService';
import { Request, Response } from 'express';

class ChampionRoleController {

    handle(req: Request, res: Response) {

        try {
            const { name } = req.body;

            const createChampionRole = new CreateChampionRoleService();

            const championRole = createChampionRole.execute(name);

            return res.json(championRole);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export { ChampionRoleController };