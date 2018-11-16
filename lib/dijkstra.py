graph = {}
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2

graph['a'] = {}
graph['a']['end'] = 1

graph['b'] = {}
graph['b']['a'] = 3
graph['b']['end'] = 5

graph['end'] = {}

infinity = float('inf')
costs = {}
costs['a'] = 6
costs['b'] = 2
costs['end'] = infinity

parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['end'] = None

processed = []

def findLowestCostNode(costs):
  lowestCost = float('inf')
  lowestCostNode = None
  for node in costs:
    cost = costs[node]
    if cost < lowestCost and node not in processed:
      lowestCost = cost
      lowestCostNode = node
  return lowestCostNode
  
node = findLowestCostNode(costs)
while node is not None:
  cost = costs[node]
  neighbors = graph[node]
  for n in neighbors.keys():
    newCost = cost + neighbors[n]
    if costs[n] > newCost:
      costs[n] = newCost
      parents[n] = node
  processed.append(node)
  node = findLowestCostNode(costs)