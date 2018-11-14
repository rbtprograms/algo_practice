const graph = {}
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

module.exports = breadthFirstSearch = name => {
    //using the last letter of their name is just a simple way to test the algorithm
    const personIsSeller = _name => _name[_name.length - 1] === 'h';
    let search_queue = [], searched = {};
    search_queue.push(...graph[name]);
    
    while(search_queue.length) {
        let person = search_queue.splice(0, 1)[0];
        if(!searched[person]) {
            if(personIsSeller(person)) {
                return {
                    found: true,
                    name: person
                };
            }
            else {
                search_queue.push(...graph[person]);
                searched[person] = true;
            }
        }
    }
    return {
        found: false,
        name: null
    };
}