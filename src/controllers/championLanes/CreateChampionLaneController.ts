import { CreateChampionLaneService } from '../../services/championLanes/CreateChampionLaneService';
import { Request, Response } from 'express';

class CreateChampionLaneController {

    async handle(request: Request, response: Response) {

        const { name } = request.body;

        const createLane = new CreateChampionLaneService();

        const lane = await createLane.execute(name);

        return response.json(lane);
    }
}

export { CreateChampionLaneController };