
function validateform() {
    var correct_way=/^[A-Z a-z]+$/;
    var a =document.getElementById("fname").value;
    if (a=="") {
        document.getElementById ("message").innerHTML="**please fill user name";
        return false;
    }
    if (a.length<3) {
        document.getElementById ("message").innerHTML="**User name must have be 3 characters";
        return false;
    }
    if (a.length>20) {
        document.getElementById ("message").innerHTML="**User name must have be less than 20 characters";
        return false;
    }
    if (a.match (correct_way)) {
        true;
    }
        else{
            document.getElementById ("message").innerHTML="**only alpabets are allowed";
            return false;
        }
   


    var b =document.myform.email.value;
    if (b=="") {
        document.getElementById ("message1").innerHTML="**please fill email";
        return false;
    }
    if (b.indexOf ('@')<=0) {
        document.getElementById("message1").innerHTML="**invalid @ position";
        return false;
    }
    if ((b.charAt(b.length-4)!='.') && (b.charAt(b.length)!='.')) {
        document.getElementById("message1").innerHTML="**invalid position at 3 & 4";
        return false;
    }

    var c=document.myform.pnumber.value;
    if (c=="") {
        document.getElementById ("message2").innerHTML="**please fill phone number";
        return false;
    }
    if (c=="") {
        document.getElementById ("message2").innerHTML="**Please fill the mobile number";
        return false;
    }
    if (isNaN(c)) {
        document.getElementById("message2").innerHTML="**only numbers allowed";
        return false;
    }
    if (c.length <10 ) {
        document.getElementById ("message2").innerHTML="**mobile numbers must be 10 digits";
        return false;

    }

    var d=document.myform.masg.value;
    if (d=="") {
        document.getElementById ("message3").innerHTML="**please fill message";
    
        return false;
    }
    if (d.length<10) {
        document.getElementById("message3").innerHTML="**message must be 10 characters";
        return false;
    }


    }
