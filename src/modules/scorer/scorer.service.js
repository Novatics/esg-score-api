function scoreEvent(classifiedEvent) {
  return {
    ...classifiedEvent,
    score_tag: ['energy'],
    score: 1
  };
}

export default {
  scoreEvent,
}