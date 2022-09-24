
let searchKeyWords = document.getElementsByTagName("p");
let data = new URLSearchParams(location.search).get('search-text');

searchKeyWords[0].textContent += data;