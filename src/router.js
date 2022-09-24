import express from 'express';
import core from './modules/core';

const router = express.Router();
router.use('/', core.router);

export default router;