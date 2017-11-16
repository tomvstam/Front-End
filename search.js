var searchField = document.querySelector('#search');
var articles = document.querySelectorAll('article');
var noresults = document.querySelector('.noresults');

console.log('hoi');

searchField.addEventListener('input', function(e) {
    var searchQuery = e.target.value;
    var searchQueryLowerCase = searchQuery.toLowerCase();
    var results = 0;    

    articles.forEach(function(article) {
        var heading = article.querySelector('.title');

        if (heading) {
            var title = article.querySelector('.title').innerHTML;
            var titleLowerCase = title.toLowerCase();
    
            article.classList.add('hide');
            noresults.classList.add('hide');            
    
            if (titleLowerCase.indexOf(searchQueryLowerCase) >= 0) {
                article.classList.remove('hide');
    
                results++
            }
    
            if (results === 0) {
                noresults.classList.remove('hide');
            }
        }
    })
});