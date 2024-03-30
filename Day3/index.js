var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function () {
    var countries = JSON.parse(xhr.responseText);
    countries.forEach(element => {
        console.log(countries.name.common + ":" + Country.flag);  
    });
        
});
xhr.send();


