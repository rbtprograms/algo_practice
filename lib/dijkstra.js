const findLowestCostNode = (costs, processed) => {
  return Object.keys(costs).reduce((lowest, node) => {
    if(lowest === null || costs[node] < costs[lowest]) {
      if(!processed.includes(node)) {
        lowest = node;
      }
    }
    return lowest
  }, null);
};

module.exports = dijkstra = graph => {
  
  const costs = Object.assign({ finish: Infinity }, graph.start);

  const parents = { finish: null };
  for(let i in graph.start) {
    parents[i] = 'start';
  }

  const processed = [];

  let node = findLowestCostNode(costs, processed);

  while(node) {
    let cost = costs[node];
    let children = graph[node];
    for(let j in children) {
      let newCost = cost + children[j];
      if(!costs[j]) {
        costs[j] = newCost;
        parents[j] = node;
      }
      if(costs[j] > newCost) {
        costs[j] = newCost;
        parents[j] = node;
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }

  let optimalPath = ['finish'];
  let parent = parents.finish;
  while(parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }
  optimalPath.reverse();

  const results = {
    distance: costs.finish,
    path: optimalPath
  };

  return results;
};

