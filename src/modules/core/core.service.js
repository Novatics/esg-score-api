import classifier from "../classifier";
import scorer from "../scorer";
import openFinanceClient from '../../clients/openfinance.client';

function calculateCustomerScore(customerId) {
  const classifiedEvents = classifier.service.classifyEvents([{id: 1}]);
  openFinanceClient.getTransactions('595.080.896-84', '69665991-da55-4aac-a1f2-32d23daba8fe');
  return classifiedEvents.map(e => scorer.service.scoreEvent(e));
}

export default {
  calculateCustomerScore,
}