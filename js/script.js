// MTM6302 — Week 3: Adopt a Tiny Monster
// Write one checkpoint at a time. Save and refresh to see your changes.

// 1. Change document.title.
document.title = "My AC Monster Adoption Center"
console.log(document.title)
// 2. Select the name and mood. Change their textContent.
const monsterName = document.getElementById("monster-name")
const moodText = document.querySelector("#monster-mood")
const energyText = document.querySelector("#monster-energy")
const monsterImage = document.querySelector("#monster-image")
const monsterCard = document.querySelector("#monster-card")
const messageText = document.querySelector("#monster-message")
const certificate = document.querySelector("#certificate")
const certificateName = document.querySelector("#certificate-name")

// 3. Explore the snack list using children, firstElementChild,
//    and nextElementSibling. Inspect querySelectorAll() in the console.
const snackList = document.querySelector("#snack-list")
const firstSnack = snackList.firstElementChild
const secondSnack = firstSnack.nextElementSibling
const thirdSnack = secondSnack.nextElementSibling

console.log(snackList.children)
console.log(document.querySelector(".snack"))
console.log(document.querySelectorAll(".snack"))

monsterName.textContent = "ZipCoszniak"
moodText.textContent = "Just Zippin' Around."

firstSnack.textContent = "Gorganzola"
secondSnack.textContent = "Garbonzo Beans"
thirdSnack.textContent = "Gazpacho"

// 4. Read/change image attributes, reveal the certificate,
//    and experiment with classList.add(), remove(), and toggle().
console.log(monsterImage.getAttribute("src"))
monsterImage.setAttribute("src", "assets/happy.svg")
monsterImage.setAttribute("alt", "A happy funny little guy")

monsterCard.classList.add("is-happy")
monsterCard.classList.remove("is-happy")


console.log(monsterCard.classList)



// 5. Use an energy number and if / else if / else to choose a mood.
let energy = 20

energyText.textContent = energy

function getMood(energy){
    if(energy < 30){
        return "Sleepy Sheepy"
    }else if (energy < 70){
        return "Inspector Gadget"
    }else{
        return "Ready for Ronked"
    }
}

function feedMonster(amount){
    energy = energy + amount
    if(energy > 100){
        energy = 100
        console.log("Energy is already full")
    }else if(energy < 0){
        energy = 0
        console.log("Energy is already empty")
    }
    updateMonster()
}

function updateMonster(){
    const mood = getMood(energy)
    moodText.textContent = mood
    energyText.textContent = energy

    monsterCard.classList.remove("is-sleepy", "is-hungry", "is-happy")

    if (energy < 30){
        monsterCard.classList.add("is-sleepy")
        monsterImage.setAttribute("src", "assets/sleepy.svg")
        monsterImage.setAttribute("alt", "A sleepy green monster with eyes closed")
        messageText.textContent = "Currently buffering. Please super soldiers."
    }else if (energy < 70){
        monsterCard.classList.add("is-hungry")
        monsterImage.setAttribute("src", "assets/hungry.svg")
        monsterImage.setAttribute("alt", "A green monster looking at user with curious expression")
        messageText.textContent = "Smells your food and wants it."
    }else{
        monsterCard.classList.add("is-happy")
        monsterImage.setAttribute("src", "assets/happy.svg")
        monsterImage.setAttribute("alt", "A happy little green monster.")
        messageText.textContent = "Happy and ready for ronked."
    }

}

function playMonster(amount){
    energy = energy - amount
    // energy -= amount **alternate method for writing this, also works for +
    if(energy > 100){
        energy = 100
        console.log("Energy is already full")
    }else if(energy < 0){
        energy = 0
        console.log("Energy is already empty")
    }
    updateMonster()
}

function renameMonster(name){
    monsterName.textContent = name
    certificateName.textContent = name
    document.title += " - "  + name
}

function adoptMonster(){
    certificate.removeAttribute("hidden")
    certificateName.textContent = monsterName.textContent
}

function toggleParty(){
    monsterCard.classList.toggle("party-mode")
}

function resetMonster(){
    energy = 20
    renameMonster("ZipCoszniak")
    monsterCard.classList.remove("party-mode")
    updateMonster()
}

resetMonster()
// 6. Put display updates in updateMonster(). Add feedMonster(amount).

// 7. Extract getMood(energy), which returns a string.


// 8. Add your own messages. Test energy values 0, 29, 30, 69, 70, 100.
