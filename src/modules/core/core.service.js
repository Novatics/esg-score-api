import classifier from "../classifier";
import scorer from "../scorer";

function calculateCustomerScore(customerId) {
  const classifiedEvents = classifier.service.classifyEvents([{id: 1}]);
  return classifiedEvents.map(e => scorer.service.scoreEvent(e));
}

export default {
  calculateCustomerScore,
}