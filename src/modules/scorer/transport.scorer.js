const NEGATIVE_TRANSPORT_BEHAVIOR = ['estacionamento','pedágio', 'pedagio', 'combustível', 'combustivel', 'ipva'];
const POSITIVE_BEHAVIOR = ['passagem de ônibus', 'passagem de onibus'];

function score(classifiedTransactions) {
  let score = 10;
  const transportTransactions = classifiedTransactions
    .filter(transaction => transaction.tags && transaction.tags.includes('transport'));

  // TO-DO Implement math model to calculate impact based on transport behavior
  for (const transportTransaction of transportTransactions) {
    const { transaction: { transactionName } } = transportTransaction;
    if (NEGATIVE_TRANSPORT_BEHAVIOR.includes(transactionName.toLowerCase())) {
      score += -1;
      break;
    }
    if (POSITIVE_BEHAVIOR.includes(transactionName.toLowerCase())) {
      score += 1;
    }
  }

  return score;
}

export default {
  score,
}