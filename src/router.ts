import express from 'express';

const router = express.Router();

import { championsRoutes } from './routes/championsRoutes';
import { lanesRoutes } from './routes/lanesRoutes';
import { rotesRoutes } from './routes/rolesRoutes';
import { passivesRoutes } from './routes/passivesRoutes';
import { skillsRoutes } from './routes/skillsRoutes';

router.use('/champions', championsRoutes);
router.use('/lanes', lanesRoutes);
router.use('/roles', rotesRoutes);
router.use('/passives', passivesRoutes);
router.use('/skills', skillsRoutes);

export { router };