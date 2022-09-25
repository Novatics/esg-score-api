import avgConsumptionPerState from '../../mock-data/average-consumption-per-state.json';

const ENERGY_TRANSACTIONS = ['luz', 'agua', 'gás'];

function score(customer, classifiedTransactions) {
  const energyTransactions = classifiedTransactions
    .filter(transaction => transaction.tags && transaction.tags.includes('energy'));
  const customerState = getCustomerState(customer);
  const custEnergyAvgConsumption = [];
  for (const classifiedTransaction of energyTransactions) {
    const { transaction } = classifiedTransaction;
    if (ENERGY_TRANSACTIONS.includes(transaction.transactionName.toLowerCase())) {      
      const stateAvgConsumption = getStateAvgConsumption(customerState, transaction.transactionName);
      const transactionAvg = calculateTransactionEnergyAvg(stateAvgConsumption, transaction);
      custEnergyAvgConsumption.push(transactionAvg);
    }
  }

  const avgScorePct = custEnergyAvgConsumption.reduce((prev, curr) => prev + curr, 0) / custEnergyAvgConsumption.length;
  return ((avgScorePct + 1) / 2) * 10;
}

function getCustomerState(customer) {
  const { contacts: { postalAddresses } } = customer;
  const mainAddress = postalAddresses.find(addr => addr.isMain);
  return mainAddress ? mainAddress.countrySubDivision : null;
}

function getStateAvgConsumption(state, type) {
  return avgConsumptionPerState.find(avg =>
    avg.transaction_type.toLowerCase() === type.toLowerCase() &&
    avg.state.toLowerCase() === state.toLowerCase());
}

function calculateTransactionEnergyAvg(stateAvgConsumption, transaction) {
  const consumptionDiff = stateAvgConsumption.average - transaction.amount;
  return consumptionDiff / stateAvgConsumption.average;
}

export default {
  score,
}