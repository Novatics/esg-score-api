import transactionsMock from '../mock-data/transactions.json';

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

export default {
  getAccountTransactions,
  getAccountCreditCardTransactions,
}