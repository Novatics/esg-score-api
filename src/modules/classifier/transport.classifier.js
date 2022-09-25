const TRANSPORT_TRANSACTIONS = [
  'estacionamento','pedágio', 'pedagio', 'combustível', 'combustivel', 'aplicativo de transporte',
  'taxi', 'passagem de ônibus', 'passagem de onibus', 'transporte'
];

function classify(classifiedTransaction) {
  if (isTransportTransaction(classifiedTransaction)) {
    return {
      ...classifiedTransaction,
      tags: [...(new Set([...classifiedTransaction.tags, 'transport']))],
    }
  }

  return classifiedTransaction;
}

function isTransportTransaction(classifiedTransaction) {
  const { transaction } = classifiedTransaction;
  return TRANSPORT_TRANSACTIONS.includes(transaction.transactionName.toLowerCase());
}

export default {
  classify,
}