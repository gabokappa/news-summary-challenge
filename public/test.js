var request = new XMLHttpRequest();
request.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body", true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data.response.content.fields.body);

    document.getElementById('app').innerHTML = data.response.content.fields.body

}
request.send();
