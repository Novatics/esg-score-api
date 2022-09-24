/* classifyEvent JSON
  {
    event: accountTransaction | creditCardTransaction | .....
    tags: []
  }

*/

const classifiers = [classifyEnergyEvent, classifyEnergyHealth];

function classifyEvents(events) {
  return events.map(event => classifyEvent(event));
}

function classifyEvent(event) {
  let classifiedEvent = { event, tags: [] };
  classifiers.forEach(classifier => {
    classifiedEvent = classifier(classifiedEvent);
  })

  return classifiedEvent;
}

function classifyEnergyEvent(classificationEvent) {
  return {
    ...classificationEvent,
    tags: [...(new Set([...classificationEvent.tags, 'energy']))],
  }
}

function classifyEnergyHealth(classificationEvent) {
  return {
    ...classificationEvent,
    tags: [...(new Set([...classificationEvent.tags, 'health']))],
  }
}

export default {
  classifyEvents,
}