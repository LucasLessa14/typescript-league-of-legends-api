import express from 'express';

import { CreateSkillController } from '../controllers/skills/CreateSkillController';
import { ListSkillsByChampionController } from '../controllers/skills/ListSkillsByChampionController';

const skillsRoutes = express.Router();

const createSkillsController = new CreateSkillController();
const listSkillsByChampionController = new ListSkillsByChampionController();

skillsRoutes.post('/', createSkillsController.handle);
skillsRoutes.get('/:championName', listSkillsByChampionController.handle);

export { skillsRoutes };