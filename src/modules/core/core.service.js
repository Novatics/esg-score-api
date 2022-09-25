import classifier from "../classifier";
import scorer from "../scorer";
import openFinanceClient from '../../clients/openfinance.client';

async function calculateCustomerScore(customerId) {
  const customer = await openFinanceClient.getCustomer('595.080.896-84', '69665991-da55-4aac-a1f2-32d23daba8fe');
  const transactions = await openFinanceClient.getTransactions('595.080.896-84', '69665991-da55-4aac-a1f2-32d23daba8fe');
  const classifiedTransactions = classifier.service.classifyTransactions(transactions);
  const score = scorer.service.scoreClassifiedTransactions(customer, classifiedTransactions);

  return score;
}

export default {
  calculateCustomerScore,
}