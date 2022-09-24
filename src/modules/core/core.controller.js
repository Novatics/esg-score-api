import coreService from "./core.service";

function getUserScore(req, res) {
  res.send(coreService.calculateCustomerScore());
}

export default {
  getUserScore,
}