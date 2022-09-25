import transportScorer from "./transport.scorer";

function scoreClassifiedTransactions(classifiedTransactions) {
  return {
    transport: transportScorer.score(classifiedTransactions),
  };
}

export default {
  scoreClassifiedTransactions,
}