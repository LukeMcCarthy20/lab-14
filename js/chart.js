'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */



// Most of this is from Craig... 
let newState = new AppState();
newState.loadItems();
console.log(newState);
console.log(newState.allProducts);


function renderChart() {
  let dataObjectsName = [];
  let dataObjectsData = [];
  if (newState) {
    console.log(newState.allProducts.length);
    for (let i = 0; i < newState.allProducts.length; i++) {
      console.log(newState.allProducts[i].name);
      dataObjectsName.push(newState.allProducts[i].name);
      dataObjectsData.push(newState.allProducts[i].timesClicked);
    }
  }
  new Chart(canvasElem, {
    type: 'bar',
    data: {
      labels: dataObjectsName,
      datasets: [{
        label: '# of Votes',
        data: dataObjectsData,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}

renderChart();