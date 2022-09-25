import transactionsMock from '../mock-data/transactions.json';
import customersMock from '../mock-data/mock-customers.json';

function getAccountTransactions(customerId, organizationId, accountId) {
  const filteredTransactions = transactionsMock.filter(t =>
      t.customerId === customerId &&
      t.organizationId === organizationId &&
      t.accountId === accountId);
  return filteredTransactions;
}

function getAccountCreditCardTransactions(customerId, organizationId, creditCardAccountId) {
  const filteredTransactions = transactionsMock.filter(t =>
    t.customerId === customerId &&
    t.organizationId === organizationId &&
    t.creditCardAccountId === creditCardAccountId);
  return filteredTransactions;
}

function getCustomer(customerId) {
  return customersMock.datas.find(c => c.customerId === customerId);
}

export default {
  getAccountTransactions,
  getAccountCreditCardTransactions,
  getCustomer,
}