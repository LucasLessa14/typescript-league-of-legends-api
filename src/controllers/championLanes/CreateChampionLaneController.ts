import { CreateChampionLaneService } from '../../services/championLanes/CreateChampionLaneService';
import { Request, Response } from 'express';

class CreateChampionLaneController {

    handle(req: Request, res: Response) {

        try {
            const { name } = req.body;

            const createChampionLane = new CreateChampionLaneService();

            const championLane = createChampionLane.execute(name);

            return res.json(championLane);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export { CreateChampionLaneController };