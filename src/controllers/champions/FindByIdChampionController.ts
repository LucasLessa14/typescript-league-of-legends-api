import { Request, Response } from 'express';
import { FindByIdChampionService } from '../../services/champions/FindByIdChampionService';

class FindByIdChampionController {

  public async handle(request: Request, response: Response): Promise<Response> {
    
    const { id } = request.params;

    const findByIdChampionService = new FindByIdChampionService();

    const champion = await findByIdChampionService.execute(id);
    
    return response.json(champion);

  }

}

export { FindByIdChampionController };