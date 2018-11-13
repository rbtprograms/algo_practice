from collections import deque

graph = {}
graph['you'] = ['Easton', 'Arthur', 'Injoong']
graph['Easton'] = ['Kevin', 'Sarah']
graph['Arthur'] = ['Marty', 'Robyn']
graph['Injoong'] = ['Mariah', 'Antreo']
graph['Kevin'] = []
graph['Sarah'] = []
graph['Marty'] = []
graph['Robyn'] = []
graph['Mariah'] = []
graph['Antreo'] = []

def search(name):
    search_queue = deque()
    search_queue += graph[name]
    searched = []

    def person_is_seller(name):
        return name[-1] == 'h'

    while search_queue:
        person = search_queue.popleft()
        if not person in searched:
            if(person_is_seller(person)):
                print(person + 'is a mango seller!')
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    return False