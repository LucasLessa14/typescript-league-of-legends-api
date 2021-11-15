import { Request, Response } from 'express';
import { DeleteChampionLaneService } from '../../services/championLanes/DeleteChampionLaneService';

class DeleteChampionLaneController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const deleteChampionLane = new DeleteChampionLaneService();

        await deleteChampionLane.execute(id);

        return response.json({ message: 'Lane deleted' });
    }
}

export { DeleteChampionLaneController };