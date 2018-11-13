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
    const personIsSeller = name => name[-1] === 'h';
    let search_queue = [], searched = [];
    search_queue.push(...graph[name]);
    console.log(graph);
    console.log('**SEARCHqUEUE**', search_queue);
    
    while(search_queue.length) {
        let person = search_queue.splice(0, 1);
        if(!searched.includes(person)) {
            if(personIsSeller(person)) {
                console.log(`Success! You found someone: ${person}`);
                return true;
            }
            else {
                search_queue.push(...graph[name]);
                searched.push(person);
            }
        }
    }
    return false;
}