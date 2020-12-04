// function for setting data in html elements to display it.
const setData = function(results){
    if(results && !Array.isArray(results)){
        document.getElementById("number__results").innerText = `1 Result`;
        document.getElementById("help__text").innerText = `Look at the result below to see the details of the person you’re searched for.`;
    
        document.getElementById("name").innerText = `${results.first_name} ${results.last_name}`;
        document.getElementById("description").innerText = `${results.description}`;
        document.getElementById("address").innerText = `${results.address}`;
        document.getElementById("phone__numbers").innerText = results.phone_numbers.map((phone) => `${phone}\n`).join('');
        document.getElementById("email").innerText = `${results.email}`;
        document.getElementById("relatives").innerText = results.relatives.map((relative) => `${relative}\n`).join('');

        document.getElementById("result__card").style.setProperty('display', 'flex');
    } else {
        document.getElementById("number__results").innerText = `0 Results`;
        document.getElementById("help__text").innerText = `Try starting a new search below`;
        
        document.getElementById("result__card").style.setProperty('display', 'none');
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const results = JSON.parse(urlParams.get('result'));    // get the data sent from index.html form through url

setData(results);
