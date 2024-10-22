/*

This graph should implement an adjacency list

*/

class Graph {
    constructor() {
        this.adjList = {};
    }

    // Adds a vertex to the adjacency list
    addVertex(v) {
        if (this.adjList[v]) {
            throw new Error('Vertex already exists');
        }

        this.adjList[v] = [];
    }

    // Adds a directed edge from vertex v to vertex w
    addEdge(v, w) {
        if (!this.adjList[v]) {
            throw new Error(`Vertex ${v} does not exist`);
        }
        this.adjList[v].push(w);
    }

    // Implements Breadth-First Search (BFS)
    bfs(startingNode) {
        const visited = {};
        const queue = [startingNode];
        const result = [];

        visited[startingNode] = true;

        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode);

            // Explore all adjacent vertices of the current node
            this.adjList[currentNode].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    // Implements Depth-First Search (DFS)
    dfs(startingNode, visited = {}, result = []) {
        visited[startingNode] = true;
        result.push(startingNode);

        // Explore all adjacent vertices of the current node recursively
        this.adjList[startingNode].forEach(neighbor => {
            if (!visited[neighbor]) {
                this.dfs(neighbor, visited, result);
            }
        });

        return result;
    }

    // Prints the adjacency list
    print() {
        console.log(this.adjList);
    }
}


module.exports = { Graph };

/**
* @example Graph 
    A
 /  |  \
B   D    E
|  /
 C  

*/
