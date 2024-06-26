function switchoff() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switchstatus").textContent = "Switched Off"
    document.getElementById("offswitch").style.backgroundColor = "grey"
    document.getElementById("onswitch").style.backgroundColor = "green"
}

function switchon() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switchstatus").textContent = "Switched On"
    document.getElementById("onswitch").style.backgroundColor = "grey"
    document.getElementById("offswitch").style.backgroundColor = "red"
}