import coreService from "./core.service";

async function getUserScore(req, res) {
  const score = await coreService.calculateCustomerScore();
  res.send(score);
}

export default {
  getUserScore,
}