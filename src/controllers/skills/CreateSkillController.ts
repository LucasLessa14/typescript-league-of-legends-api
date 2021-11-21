import { Request, Response } from "express";
import { CreateSkillService } from "../../services/skills/CreateSkillService";

interface ISkillRequest {
    name: string;
    description: string;
    cooldown: string;
    cost: string;
    range: string;
    letter: string;
    urlImageSkill: string;
    championName: string;
}

class CreateSkillController {

    async handle(req: Request, res: Response) {

        const { name, description, cooldown, cost, range, letter, urlImageSkill, championName } = req.body as ISkillRequest;

        const createSkillService = new CreateSkillService();

        const skill = await createSkillService.execute({
            name,
            description,
            cooldown,
            cost,
            range,
            letter,
            urlImageSkill,
            championName
        });

        return res.json(skill);
    }
}

export { CreateSkillController };