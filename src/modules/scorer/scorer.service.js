import transportScorer from "./transport.scorer";
import energyScorer from "./energy.scorer";

function scoreClassifiedTransactions(customerIdentification, classifiedTransactions) {
  return {
    transport: transportScorer.score(classifiedTransactions),
    energy: energyScorer.score(customerIdentification, classifiedTransactions),
  };
}

export default {
  scoreClassifiedTransactions,
}