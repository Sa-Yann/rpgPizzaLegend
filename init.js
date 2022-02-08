// console.log('init.js')

(function () {
    // firsr creating a new instance from the class Overworld
    const overworld = new Overworld({
        // passing the config info that the class expect
        element: document.querySelector('.game_Container')
    });
    //  Seconnd initialising the instacnce with the 
    // instruction passed into the init functionin the class Overwolrd
    overworld.init();


})()