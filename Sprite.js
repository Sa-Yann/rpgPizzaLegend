class Sprite {
    constructor(config) {

        // // Building the image into the Canvas
        this.image = new Image();
        this.image.src =  config.src;
        this.image.onload = () => {
            console.log("file: Sprite.js ~ line 8 ~ constructor ~ onload", onload)
            // the image should be drawn only if it's entirely loaded
            this.isLoaded = true
        }

        //  // Building the shadow
        this.shadow = new Image(); // => balise <img src=""/>
        this.shadowNeeded = config.shadowNeeded;
        // console.log("file: Sprite.js ~ line 16 ~ constructor ~ this.shadowNeeded", this.shadowNeeded)
        if(this.shadowNeeded) {
            this.shadow.src = config.srcShadow;
            // console.log("file: Sprite.js ~ line 18 ~ constructor ~ this.shadow.src", this.shadow.src)
        }
        this.shadow.onload = () => {
            this.isLoadedShadow = true
        }
        



        // // Configuring Animation and initial State
        // considering a sprite is composed of 16 sqaure frames
        // considering a frame is a pair of position going from 0 to 3 on x and y
        this.animation = config.anumation || {
            // every animation has a key as it s name and value refereing 
            // to the animation process
            // idel means inactif: it s the default anumation as static
            idelDown: [ 
                [0,0]
            ],
            // wallDown: [
            //     [0,0],[1,0],[2,0],[3,0]
            // ]
        }
        // capturing the actual T zero animation state
        // setting up current animation to the idleDown state in case there s no rntAnim
        this.currentAnimation = config.currentAnimation || "idelDown";
        this.currentAnimationFrame = 0;

        // Reference to game object , the function that created the sprite clone
        this.fullSpriteObject =  config.gameObject
    }

    // // building a draw function:
    draw(ctx) {
        const x = this.fullSpriteObject.x * 16 - 8;
        const y = this.fullSpriteObject.y * 16 - 16;

        // this.isLoaded make sure the image is loaded before trying to place it 
        // check setTimeOut use around teh draw fct execution request to allow the time neede for the images to be loaded
        this.isLoaded && ctx.drawImage(
            this.image,
            0,0, //Top,Left full sprite origine position
            32,32, // frame size 
            x,y, // acturla position of the used frame between 0 and 7 in our case
            32,32 // scale 32,32 represeting ratio = 1
        )
        this.isLoadedShadow && ctx.drawImage(
            this.shadow,
            0,0,
            32,32,
            x,y,
            32,32
        )
    }

}