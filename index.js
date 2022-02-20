function getRandomImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((dog) => dog.json())
    .then(function (dog){
        console.log(dog.message);
        document.querySelector("#dog-image").style.backgroundImage = `url("${dog.message}")`;
    })
}

function getSpecificImage(){
    const name = document.querySelector("#dog-name").value;
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((dog) => dog.json())
    .then(function (dog){
        if (dog.status === "error"){
            alert("woof woof, no dog found :(");
        }
        else{
            console.log(dog.message);
            document.querySelector("#dog-image").style.backgroundImage = `url("${dog.message}")`;
        }
    })
}