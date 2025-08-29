const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode =  `#${randomNumber.toString(16)}`
    const body = document.getElementById("body");
    body.style.backgroundColor = randomCode;
    const code = document.getElementById("code");
    code.innerText = randomCode;
}

//event call
 let btn = document.getElementById("btn");
 btn.addEventListener("click",
    getColor
)
// intial call
getColor();

