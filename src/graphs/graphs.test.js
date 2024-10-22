const { Graph } = require('./graphs.js');

const graph = new Graph();

describe('graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'C');

    it('creates an adjacency list', () => {
        const adjList = graph.adjList;
        expect(adjList).toEqual({
            A: ['B', 'D', 'E'],
            B: ['C'],
            C: [],
            D: ['C'],
            E: [],
        });
    });

    it('performs BFS', () => {
        const path = graph.bfs('A');
        expect(path).toEqual(['A', 'B', 'D', 'E', 'C']);
    });

    it('performs DFS', () => {
        const path = graph.dfs('A');
        expect(path).toEqual(['A', 'B', 'C', 'D', 'E']);
    });
});
