// get user's data
// get user's coordinates
async function getUserCoordinates(){
    let position = await new Promise((resolve, reject) => {   
    navigator.geolocation.getCurrentPosition(resolve, reject); 
    
    
    });
    return [position.coords.latitude, position.coords.longitude];
}


// get user's time
function getUserTime(){
    const currentTime = new Date();
    return currentTime.getHours();
}

// helper functions
// check time of day
function getMeal(){
    const userTime = getUserTime();
    if (userTime < 12 && userTime > 0){
        return "breakfast";
    } 
    else if (userTime < 17 && userTime >= 12){
        return "lunch";
    } 
    else if (userTime < 21 && userTime >= 17){
        return "dinner";
    }
    else {
        return "late night snack";
    }
}

// build ads
// build ad 1
function createAd1(){
    const meal = getMeal();
    const ad1Div = document.querySelector('.ad1');
    const p = document.createElement('p');
    p.innerHTML = `Get your<strong> ${meal}</strong> with us!`;
    ad1Div.appendChild(p);

}
// createAd1();
// build ad 2
async function createAd2(coords){
    const userCoords = coords;
    const ad2Div = document.querySelector('.ad2');
    const p = document.createElement('p');
    const href = `https://www.google.com/maps/search/coffee/@${userCoords[0]},${userCoords[1]}`;
    p.innerHTML = `It is time for a cup of coffee! <a href="${href}">Here are some awesome coffee shops near you</a>. Enjoy!`;
    ad2Div.appendChild(p);
}
// createAd2();
// event listeners
// on load, build ads
window.onload = async function(){
    const coords = await getUserCoordinates();
    createAd1();
    createAd2(coords);
}
