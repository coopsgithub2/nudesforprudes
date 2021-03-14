function getimage(){

    var randomimages = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg","12.gif","13.jpeg"]
    var randomint = parseInt((Math.random()*(randomimages.length)))
    console.log(randomint)
    return randomimages[randomint]
}
var newimg = document.createElement("img")
newimg.src = getimage()
console.log(getimage())
document.body.appendChild(newimg);

