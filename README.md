## Karger's Minimum Cut Algorithm

This is a simple JavaScript implementation of [Karger's algorithm](https://en.wikipedia.org/wiki/Karger's_algorithm) to find the minimum cut of a graph.

### Usage

Replace `example.txt` with an adjacency list representing your undirected graph. Each line represents a node on the graph. The string on the line represents the label of the node, and each subsequent string represents the label of a connected node. The strings must be separated with tabs.

Run `node index.js` and the application will compute cuts of the graph and display the number of crossing edges, as well as the minimum number of crossing edges found.
