const ENERGY_TRANSACTIONS = ['luz', 'água', 'agua', 'gás', 'gas'];

function classify(classifiedTransaction) {
  if (isEnergyTransaction(classifiedTransaction)) {
    return {
      ...classifiedTransaction,
      tags: [...(new Set([...classifiedTransaction.tags, 'energy']))],
    }
  }

  return classifiedTransaction;
}

function isEnergyTransaction(classifiedTransaction) {
  const { transaction } = classifiedTransaction;
  return ENERGY_TRANSACTIONS.includes(transaction.transactionName.toLowerCase());
}

export default {
  classify,
}