function go_back(){
    window.location.replace("index2.html");
}

function validate(){
    var fname= document.getElementById('fname').value;
    var email= document.getElementById('email').value;
    var adr= document.getElementById('adr').value;
    var city= document.getElementById('city').value;
    var state= document.getElementById('state').value;
    var zip= document.getElementById('zip').value;
    var cname= document.getElementById('cname').value;
    var ccnum= document.getElementById('ccnum').value;
    var expmonth= document.getElementById('expmonth').value;
    var expyear= document.getElementById('expyear').value;
    var cvv= document.getElementById('cvv').value;
    if(fname == "")
    {
        alert("please type your full name");
    }else if (email == ""){
       alert("pleae type your email id");
    }else if (email.search("@") == -1 || email.search(".com") == -1){
        alert("please type correct email id")
    }
    else if (adr == ""){
        alert("pleae type your delivery address");
    }else if (city == ""){
        alert("pleae type your city name");
    }else if (state == ""){
        alert("pleae type your state name");
    }else if (zip == ""){
        alert("pleae type your pincode");
    }else if (zip.length <6){
        alert("pin code length should be equal to 6");
    }else if (zip < 1){
        alert("pin code cannot be zero or negative");
    }
    else if (cname == ""){
        alert("pleae type the name in your card");
    }else if (ccnum == ""){
        alert("pleae type card number");
    }else if (ccnum.length != 16){
        alert("card number should contain 16 digits");
    }else if (expmonth == ""){
        alert("please type card expiry month");
    }else if ( expmonth.length != 2 || expmonth > 12 || expmonth < 1)
    {
        alert("please type correct expiry month");
    }
    else if (expyear == ""){
        alert("pleae type your card expiry year");
    }else if (expyear < 2021 || expyear > 2050){
        alert("expiry year should be between 2021 and 2050")
    }
    else if (cvv == ""){
        alert("pleae type card cvv");
    }else if (cvv < 1 || cvv.length > 3){
        alert("pleae type correct card cvv");
    }
    else{
        window.location.replace("index4.html");
    }
    

}