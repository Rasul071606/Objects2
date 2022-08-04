let animeContainer = document.getElementById("anime_container")


let naruto = {
    name: "Naruto",
    bestCharacter: "Sasuke",
    img: "images/NARUTO.jpg",
    ability: function(){
        let narutoSpeech = new Audio("sound/NarutoSpeech.mp3")
        narutoSpeech.play();
        document.body.style.backgroundColor="lightgray"
    }
}

let luffy = {
    name: "Luffy",
    bestCharacter: "Luffy",
    img: "images/ONE PIECE.png",
    ability: function(){
        let luffySound = new Audio("sound/LuffyGomuGomu.mp3")
        luffySound.play()
        document.body.style.backgroundColor="red"
    }
}

let ichigo = {
    name: "Ichigo",
    bestCharacter: "Aizen",
    img: "images/BLEACH.jpg",
    ability: function(){
        let ichigoSound = new Audio("sound/Ichigo Bankai.mp3")
        ichigoSound.play()
        document.body.style.backgroundColor="purple"
    }
}




let animeArray=[naruto, luffy, ichigo]

for(let i = 0; i<animeArray.length; i ++){

    let newDiv = document.createElement("div");
    let newHeader = document.createElement("h1")

    newHeader.innerHTML=animeArray[i].name

    newDiv.appendChild(newHeader)

    let newImg = document.createElement("img")
    newImg.src = animeArray[i].img
    newDiv.appendChild(newImg)

    let newP = document.createElement("p")
    newP.innerHTML="Best character: "+ animeArray[i].bestCharacter
    newDiv.appendChild(newP)

    let newButton = document.createElement("button");
    newButton.innerHTML = "Surprise"
    newDiv.appendChild(newButton)

    newButton.onclick=animeArray[i].ability


    animeContainer.appendChild(newDiv)
}