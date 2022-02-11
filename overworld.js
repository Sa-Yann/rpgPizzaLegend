// console.log('overworld.js')

class Overworld {
    // Draw some image tags into the canvas
    constructor(config){
        // passing an element to Overworld to operate on
        // extractin element out of config
        // in our case grabbing the element having the class .game_Container
        this.element = config.element;
        // from the element we grab the canvas
        this.canvas = this.element.querySelector('.game_Canvas');
        // we drawing from the canvas context 
        // so we attach the 2 methods that we willgo and get our methodes from
        // this will give acces to lot sof the drawing methods that exist in canvas 
        this.ctx =  this.canvas.getContext('2d');
        this.map = null;
    }

    startGameLoop () {
        // step is the fvt that needs to run every single frame. 
        // frame is the excrat piece from the teh Stripe class , 
        // the stripe piece that is being seen in the game
        const step = () => {
            // console.log('testing steping');
            // requesting to keep calling evry single frame to check for animation changes
            // requestAnimationFrame is a methode that automatically recall 60 times per second
            
            // !!!!!!!! step(placed like here under would make the computer crash cause the step function 
            // would fire consecutevly that s why  we use requestAnimationFrame to live another execution in between to step 
            // and allow the computer to handle the loop
            //  // step() // // 

            //  Clear the blur effect
            this.ctx.clearRect(0 ,0, this.canvas.width, this.canvas.height)


            // first drawing the floor layer
            this.map.drawLowerImage(this.ctx)

            // then we wonna draw our game objects
            Object.values(this.map.gameObjects).forEach(object => {
                // creating a characters move on the x axe
                // object.x += 0.002,
                object.sprite.draw(this.ctx)
            })

            // then the upper layer
            this.map.drawUpperImage(this.ctx)

            requestAnimationFrame(() => {
                // the web browser take to recall the step function for us when ever a new frame is presented
                step();
            })
        }
        step();
    } 

    init() {
        

        // Creating our template game environment by instanciating one of the Overworld_Map 
        this.map = new Overworld_Map(window.Overword_Maps_Container.DemoRoom)

        // checking if function step is looping as wanted
        this.startGameLoop();



        // //////  // unnecessary code when cause creating the all rooms and content 
        // //////  // is handled by the class OverworldMap.js
        // //  // DRAWING CODE BY ORDER OF SUPERPOSITION FLOUR THEN CARACTERS
        // // console.log('hello from the Overworld', this)
        // // 1: creating a new image variable
        // const flour_Image = new Image();
        // // console.log("file: overworld.js ~ line 22 ~ init ~ image", image)

        // // 2: asssigning a source to the image variable created
        // flour_Image.src = "/images/maps/DemoLower.png";

        // //  3 when the image is fully downlaied ( image.onLoad )
        // // we copy this image to our canvas with as argument the image, the top 0 and left 0
        // flour_Image.onload = () => {
        //     // using the this.ctx(the canvas context) we draw the image to the canvas
        //     this.ctx.drawImage(flour_Image,0,0)
        // };

        // // creating instances form GameObject to create some Game objects
        // const hero = new GameObject({
        //     x: 5,
        //     y: 6,
        //     // no source needed cause this charcter is the default sprite sheet 
        //     // we define as default in the constructor of the class GameObject
        //     // srcShadow: '/images/characters/shadow.png',
        //     shadowNeeded: true,
        // })

        // const npc1hero = new GameObject({
        //     x: 7,
        //     y: 9,
        //     src: '/images/characters/people/npc1.png',
        //     // srcShadow: '/images/characters/shadow.png',
        //     shadowNeeded: true,
        // })

        

        // // making the created charaters appear on the canvas
        // // setTimeOut used around teh draw fct execution request to allow the time neede for the images to be loaded
        // setTimeout(() => {
        //     hero.sprite.draw(this.ctx); // drawing in the the canvas (this.ctx) the sprite hero
        //     npc1hero.sprite.draw(this.ctx) // sprite is the sinstance form Sprote define in the class GameObject
        // },2000)
        
        
        
        
        
        
        // // STARTING CODE TO GET THE FIRST STRIPES FROM CAHARCATERS AND SHADOW LOADED ON TOP OF THE MAP
        // // drawing the shadow of caractere on top of the floorImage
        // const shasow_Image = new Image();

        // shasow_Image.src = "/images/characters/shadow.png"
        // // // positioning the character on top 0 left 0
        // // const xCutOrigin = 0
        // // const yCutOrigin = 0
        // const xCutOrigin_Shdw = 5
        // const yCutOrigin_Shdw  = 4
        // shasow_Image.onload = () => {
        //     this.ctx.drawImage(
        //         shasow_Image,
        //         // cutting the first sprite top left squqre
        //         0, // Top Full Sprite 
        //         0, // Left Full Sprite
        //         32, // whidth sprite unit size 32px that is being cut
        //         32, // height
        //         xCutOrigin_Shdw  * 16 - 8, //xCasePosition case are 16 width and height
        //         yCutOrigin_Shdw  * 16 - 16, //CasePosition
        //         32, // size of the rendering sprite  32 is 100% dWidth
        //         32
        //         )
        // }

        // // drawing the caractere on top of the floorImage
        // const hero_Image = new Image();

        // hero_Image.src = "/images/characters/people/hero.png"
        // // // positioning the character on top 0 left 0
        // // const xCutOrigin = 0
        // // const yCutOrigin = 0
        // const xCutOrigin = 5
        // const yCutOrigin = 4
        // hero_Image.onload = () => {
        //     this.ctx.drawImage(
        //         hero_Image,
        //         // cutting the first sprite top left squqre
        //         0, // Top Full Sprite 
        //         0, // Left Full Sprite
        //         32, // whidth sprite unit size 32px that is being cut
        //         32, // height
        //         xCutOrigin * 16 - 8,
        //         yCutOrigin * 16 - 16,
        //         32, // size of the rendering sprite  32 is 100%
        //         32
        //         )
        // }

        
        
    }

}