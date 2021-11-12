import { CreateChampionLaneService } from '../../services/championLanes/CreateChampionLaneService';
import { Request, Response } from 'express';

class CreateChampionLaneController {

    handle(request: Request, response: Response) {

        try {
            const { name } = request.body;

            const createChampionLane = new CreateChampionLaneService();

            const championLane = createChampionLane.execute(name);

            return response.json(championLane);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export { CreateChampionLaneController };