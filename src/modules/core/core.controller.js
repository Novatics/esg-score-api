import coreService from "./core.service";

async function getUserScore(req, res) {
  const { customerId } = req.params;
  
  try {
    const score = await coreService.calculateCustomerScore(customerId);
    res.send(score);
  } catch (e) {
    if (e.message === 'Customer not found') {
      res.status(404).send('Customer not found');
    } else {
      res.status(400).send('Unknow error');
    }
  }
}

export default {
  getUserScore,
}