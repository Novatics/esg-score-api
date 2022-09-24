import axios from "axios";

async function getTransactions(customerId, organizationId) {
  let transactions = [];
  
  const accounts = await getAccounts(customerId, organizationId);
  for (const account of accounts) {
    const { accountId } = account;
    const accountTransactions = await getAccountTransactions(customerId, organizationId, accountId);
    transactions = [...transactions, ...accountTransactions];
  }

  const creditCards = await getCreditCards(customerId, organizationId);
  for (const creditCard of creditCards) {
    const { creditCardAccountId } = creditCard;
    const creditCardTransactions = await getAccountCreditCardTransactions(customerId, organizationId, creditCardAccountId);
    transactions = [...transactions, ...creditCardTransactions];
  }

  return transactions;
}

async function getAccountTransactions(customerId, organizationId, accountId) {
  const { data: { data: transactions } } = await axios({
    method: "get",
    url: `https://challenge.hackathonbtg.com/accounts/v1/accounts/${accountId}/transactions`,
    headers: { 
      organizationId,
      customerId,
    }
  });

  return transactions;
}

async function getAccountCreditCardTransactions(customerId, organizationId, creditCardAccountId) {
  const { data: { data: transactions } } = await axios({
    method: 'get',
    url: `https://challenge.hackathonbtg.com/credit-cards-accounts/v1/accounts/${creditCardAccountId}/transactions`,
    headers: { 
      organizationId,
      customerId,
    }
  });

  return transactions;
}

async function getAccounts(customerId, organizationId) {
  const { data: { data } } = await axios({
    method: 'get',
    url: 'https://challenge.hackathonbtg.com/accounts/v1/accounts',
    headers: { 
      organizationId,
      customerId,
    }
  });

  return data;
}

async function getCreditCards(customerId, organizationId) {
  const { data: { data } } = await axios({
    method: 'get',
    url: 'https://challenge.hackathonbtg.com/credit-cards-accounts/v1/accounts',
    headers: { 
      organizationId,
      customerId,
    }
  });

  return data;
}

export default {
  getTransactions,
}