
const url = "https://api.discountapi.com/v2/deals?api_key=fjzmgJbc&category_slugs=%22dental%22";

fetch(url)
.then(function(response){
    return response.json();
})
.then(function (dental) {
    let dentalTitle = dental.deals[0].deal.title;
    let dentalTitleVar = document.createElement('p');
    
    dentalTitleVar.innerHTML = dentalTitle;
    let body = document.querySelector('body');
    body.appendChild(dentalTitleVar);
    console.log(dental);

    
    let dentalURL = dental.deals[0].deal.url;
    let dentalURLVar = document.createElement('p');
    
    dentalURLVar.innerHTML = dentalURL;
    let body = document.querySelector('body');
    body.appendChild(dentalURLVar);
    console.log(dental);
})
