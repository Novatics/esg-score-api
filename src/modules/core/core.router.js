import express from 'express';
import coreController from './core.controller';

const router = express.Router();

router.get('/scores/:customerId', coreController.getUserScore);

export default router;