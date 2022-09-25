import classifier from "../classifier";
import scorer from "../scorer";
import openFinanceClient from '../../clients/openfinance.client';

const defaultOrganizationId = '69665991-da55-4aac-a1f2-32d23daba8fe';

async function calculateCustomerScore(customerId) {
  const customer = await openFinanceClient.getCustomer(customerId, defaultOrganizationId);
  
  if (!customer) {
    throw new Error("Customer not found");
  }

  const transactions = await openFinanceClient.getTransactions(customerId, defaultOrganizationId);
  const classifiedTransactions = classifier.service.classifyTransactions(transactions);
  const score = scorer.service.scoreClassifiedTransactions(customer, classifiedTransactions);

  return score;
}

export default {
  calculateCustomerScore,
}