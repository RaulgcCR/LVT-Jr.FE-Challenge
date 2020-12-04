// function to validate if input value is an email
const validateEmail = function (email) {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        return false;
    }
    return true;
} 

// function to make api request. receive parameter to reuse this function on several buttons in different pages and behaviors
const getEmail = function(isResultsPage){
    console.log(isResultsPage);
    const param = document.getElementById("email__search").value;
    if(validateEmail(param)){
        document.getElementById("loader").style.setProperty('display', 'flex');
        document.getElementById("search__section").style.setProperty('display', 'none');
        document.getElementById("main").style.setProperty('display', 'none');
        document.getElementById("email__search").value = '';

        const URL = 'https://ltv-data-api.herokuapp.com/api/v1/records.json';

        $.ajax({
            url: URL,
            data:{ email: param},
            success: function(result){
                if(isResultsPage){
                    setData(result);

                    document.getElementById("email__search").value = '';
                    document.getElementById("loader").style.setProperty('display', 'none');
                    document.getElementById("search__section").style.setProperty('display', 'flex');
                    document.getElementById("main").style.setProperty('display', 'flex');
                } else {
                    document.getElementById("result").value = JSON.stringify(result);
                    document.getElementById("searchForm").submit();
                }
            },
            error: function(err){
                console.error(err);
                if(!isResultsPage){
                    document.getElementById("result").value = JSON.stringify({});
                    document.getElementById("searchForm").submit();
                }  
            }
        });
    } else {
        document.getElementById("email__search").style.setProperty('border', '3px solid red');
        document.getElementById("email__error").style.setProperty('display', 'block');
    }
}