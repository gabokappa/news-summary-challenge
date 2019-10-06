var app =document.getElementById('app');

var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-10-05&to-date=2019-10-05", true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    // console.log(data.response.results);

      data.response.results.forEach(article => {
        var card = document.createElement('div');
        card.setAttribute('class', 'card');

        var h2 = document.createElement('h2');
        h2.textContent = article.webTitle;
        // h2.insertAdjacentHTML('afterbegin', `<a href=${article.webUrl}>`);
        // h2.insertAdjacentHTML('beforeend', '</a>');

      container.appendChild(card);
      card.appendChild(h2);
      });
  };
    // document.getElementById('app').innerHTML =

request.send();

// fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-10-06&to-date=2019-10-06')
//     .then((resp) => resp.json())
//     .then(function(data) {
//             console.log(data);

// TODO 1) Use this url to mock JS functions and what they return
// TODO 2) Try Alyien
