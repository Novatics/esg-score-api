import express from 'express';
import coreController from './core.controller';
import mocker from '../../helpers/mocker';

const router = express.Router();

router.get('/scores/:customerId', coreController.getUserScore);

router.get('/mock', (req, res) => res.send(mocker.getAccountTransactions("595.080.896-84", "69665991-da55-4aac-a1f2-32d23daba8fe", "dc728105-74a5-47fe-b18c-23a6c855ed30")));

export default router;