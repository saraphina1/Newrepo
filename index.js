let setup   = document.getElementById("setup");
let punchlinebtn = document.getElementById("punchlinebtn")
let punchline = document.getElementsByClassName("punchline")[0];
let resetbtn = document.getElementById("resetbtn");
let jokeimg = document.getElementById("joke-img");
let joke={};

const tellAjoke = () => {
fetch("https://official-joke-api.appspot.com/random_joke")
.then(res => res.json())
.then(data => ((setup.innerHTML= data.setup),(punchlinebtn.style.display = "block"),

(joke=data)
)
)
.catch(err => console.log(err));
};

const tellPunchline = () => {
punchline.innerHTML= joke.punchline;
jokeimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqTmPfBFB_PhSQ7sYvgUnUrG8guwjK0m5Ow&usqp=CAU"
resetbtn.style.display = "block"

};

const tellAnother = () => {
    setup.innerHTML = "";
    punchline.innerHTML= "";
    jokeimg.src="";
    punchlinebtn.style.display= "none";
    resetbtn.style.display = "none";
}
