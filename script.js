
// Function to assign colors based on provider
function color(provider) {
    switch (provider) {
        case 'FRB': return 'lightblue';
        case 'JPM': return 'lightgreen';
        case 'BFS': return 'lightcoral';
        case 'Comerica': return 'lightyellow';
        case 'PNC/USBank': return 'lightpurple';
        case 'USBank': return 'orange';
        case 'PNC': return 'pink';
        case 'Citi': return 'lightgrey';
        case 'VariousFAs': return 'lightcyan';
        default: return 'gray';
    }
}

// Combine all nodes
let nodes = [];
for (const [provider, providerNodes] of Object.entries(providers)) {
    providerNodes.forEach(node => {
        nodes.push({ data: { ...node, color: color(provider) } });
    });
}

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: {
        nodes: nodes,
        edges: edges
    },
    style: [
        {
            selector: 'node',
            style: {
                'background-color': 'data(color)',
                'label': 'data(label)',
                'text-wrap': 'wrap',
                'text-max-width': '100px',  // Adjust the max width if needed
                'shape': 'roundrectangle',
                'width': '150px', // Fixed width for consistency
                'height': '60px', // Fixed height for consistency
                'padding': '10px',
                'box-sizing': 'border-box',
                'font-size': '12px',  // Adjust font size as needed
                'text-valign': 'center',
                'text-halign': 'center',
                'border-width': '1px',
                'border-color': '#ccc',
                'border-radius': '5px'
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 2,
                'line-color': '#ccc'
            }
        }
    ],
    layout: {
        name: 'breadthfirst',
        directed: true,
        padding: 10
    }
});

// Update node colors based on provider
cy.nodes().forEach(function(node) {
    node.style('background-color', node.data('color'));
});


function changeLayout() {
    const layoutName = document.getElementById('layout-select').value;
    let layoutOptions = {
        name: layoutName,
        padding: 10
    };

    switch (layoutName) {
        case 'grid':
            layoutOptions = { ...layoutOptions, rows: 5 };
            break;
        case 'concentric':
            layoutOptions = { ...layoutOptions, minNodeSpacing: 50 };
            break;
        case 'breadthfirst':
            layoutOptions = { ...layoutOptions, directed: true };
            break;
        case 'cose':
            layoutOptions = {
                ...layoutOptions,
                idealEdgeLength: 100,
                nodeOverlap: 20,
                refresh: 20,
                fit: true,
                padding: 30,
                randomize: false,
                componentSpacing: 100,
                nodeRepulsion: 400000,
                edgeElasticity: 100,
                nestingFactor: 5,
                gravity: 80,
                numIter: 1000,
                initialTemp: 200,
                coolingFactor: 0.95,
                minTemp: 1.0
            };
            break;
        case 'preset':
            layoutOptions = { ...layoutOptions, positions: { node1: { x: 100, y: 100 }, node2: { x: 200, y: 200 } } };
            break;
        default:
            break;
    }

    cy.layout(layoutOptions).run();
}

function exportAsImage() {
    const png64 = cy.png({  }); // Increase the scale to get a higher resolution image
    const link = document.createElement('a');
    link.href = png64;
    link.download = 'graph.png';
    link.click();
  
}

// Function to save the current layout to a file
function saveLayout() {
    const positions = {};
    cy.nodes().forEach(node => {
        positions[node.id()] = {
            x: node.position('x'),
            y: node.position('y')
        };
    });
    const jsonString = JSON.stringify(positions);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'layout.json';
    link.click();
}

// Function to restore the layout from a file
function restoreLayout(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const positions = JSON.parse(e.target.result);
            cy.layout({
                name: 'preset',
                positions: positions
            }).run();
        };
        reader.readAsText(file);
    }
}

function resetLayout() {
    cy.layout({ name: 'grid', rows: 5 }).run();
}
