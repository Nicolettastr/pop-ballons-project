// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = [ 'green', 'red', 'yellow', 'blue', 'orange',
                  'purple', 'pink', 'green', 'yellow', 'blue',
                  'orange', 'red', 'blue', 'pink', 'purple',
                  'yellow', 'green', 'purple', 'red', 'green'];

// poping a balloon is basically turning his color to null (no color)
let activeBalloons = 20;

const popBalloon = (position) => {
    activeBalloons--
            
    console.log(activeBalloons);
    ballonsMap[position] = null;
    render();
}




const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {

        let ballonClass;

        if(color === null){
            ballonClass = "popped";
        }else{

            ballonClass = "active";
        }
        return `<div class="balloon ${ballonClass}" style="background: ${color}" onClick ="popBalloon(${position});" ></div>`; // <--- render each balloon
    });


    document.querySelector("#balloon-count").innerHTML = ballons.filter(b => b !== null).length; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();