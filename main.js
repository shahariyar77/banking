
document.getElementById('submit-button').addEventListener('click',function(){
    // get email
    const userEmailField=document.getElementById('user-email');
    const userEmail=userEmailField.value;
    console.log(userEmail)

    // get pasword
    const userPaswordField=document.getElementById('user-pasword');
    const userPasword=userPaswordField.value;
    console.log(userPasword);

    // validation checker
    if(userEmail=='nafis@gmail.com'&& userPasword=='12345'){
        window.location.href="banking.html"
    }

})