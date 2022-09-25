import transportScorer from "./transport.scorer";
import energyScorer from "./energy.scorer";

function scoreClassifiedTransactions(customer, classifiedTransactions) {
  return {
    transport: transportScorer.score(classifiedTransactions),
    energy: energyScorer.score(customer, classifiedTransactions),
  };
}

export default {
  scoreClassifiedTransactions,
}