function Articles() {
    var articles =[]
}

var bodySummary;
Articles.prototype.getArticle = function(id) {
    fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/${id}?show-fields=body`)
        .then(function (response) {
            response.json().then(function(data) {
                var summary = (data.response.content.fields.body.slice(0, 300));
                return summary;


            })
        })
};