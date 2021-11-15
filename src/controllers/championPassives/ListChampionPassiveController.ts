import { Request, Response } from "express";
import { ListChampionPassivesService } from "../../services/championPassives/ListChampionPassivesService";

class ListChampionPassivesController {
    
    async handle(request: Request, response: Response) {

        const listChampionPassivesService = new ListChampionPassivesService();
        
        const listChampionPassives = await listChampionPassivesService.execute();

        return response.json(listChampionPassives);
    }
}

export { ListChampionPassivesController };