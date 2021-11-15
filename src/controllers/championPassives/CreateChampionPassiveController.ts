import { CreateChampionPassiveService } from '../../services/championPassives/CreateChampionPassiveService';
import { Request, Response } from 'express';

class CreateChampionPassiveController {

    async handle(req: Request, res: Response) {

        try {
            const { name, description, urlImage } = req.body;

            const createChampionPassive = new CreateChampionPassiveService();

            const championPassive = await createChampionPassive.execute(name, description, urlImage);

            return res.json(championPassive);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
 
export { CreateChampionPassiveController };