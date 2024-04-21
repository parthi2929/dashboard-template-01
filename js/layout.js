document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    loadHTMLComponent('templates/head.html', document.head),
    loadHTMLComponent('templates/navbar.html', document.querySelector('.navbar')),
    loadHTMLComponent('templates/sidebar.html', document.querySelector('.sidebar')),
    // loadHTMLComponent('footer.html', document.querySelector('footer')),

  ]).then(() => {
    console.log('All components loaded successfully.');

  }).catch(error => {
    console.error('Failed to load all components:', error);
  });
});

async function loadHTMLComponent(filePath, element) {
  try {
    const response = await fetch(filePath);
    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error('Error loading the HTML component:', error);
  }
}


// function updateMainContent() {
//   const main = document.querySelector('main');
//   const pathname = window.location.pathname;

//   if (pathname.includes('index.html')) {
//     main.innerHTML = `<h1 class="h2">Dashboard</h1><canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>`;
//   } else if (pathname.includes('yearlyGraph.html')) {
//     main.innerHTML = `<h1 class="h2">Yearly Graph</h1><canvas class="my-4 w-100" id="otherChart" width="900" height="380"></canvas>`;
//   }
// }
