import transportClassifier from "./transport.classifier";

const classifiers = [transportClassifier];

function classifyTransactions(transactions) {
  return transactions
    .map(transaction => classifyTransaction(transaction))
    .filter(classifiedTransaction => classifiedTransaction.tags && classifiedTransaction.tags.length);
}

function classifyTransaction(transaction) {
  return classifiers.reduce((prev, curr) => curr.classify(prev), { transaction, tags: [] });
}

export default {
  classifyTransactions,
}