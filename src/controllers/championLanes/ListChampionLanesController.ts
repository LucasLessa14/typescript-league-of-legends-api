import { Request, Response } from "express";
import { ListChampionLanesService } from "../../services/championLanes/ListChampionLanesService";

class ListChampionLanesController {
    
    async handle(request: Request, response: Response) {

        const listChampionLanesService = new ListChampionLanesService();
        
        const listChampionLanes = await listChampionLanesService.execute();

        return response.json(listChampionLanes);
  }
}

export { ListChampionLanesController };