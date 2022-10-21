const datas = document.querySelector(".form-login").addEventListener("submit", x=>{
    x.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    if(!email || !password){
        console.error("Do you forget anything!");
    }else{
        console.log("Login successfully");
    }
})