class GameObject {
    // on object config allows us to be more flexible rergarding 
    // the amout of properties that can be inside of the config object 
    // and not restricted by a strict amount of argument 
    // type class GameObject(value1, value2, value3,..) { }
    constructor(config) {
        // origin position of the image
         this.x = config.x || 0;
         this.y = config.y || 0;
        //  creating the sprite concept that wil,l contain/capture  
        // the info of the appearance of what the game shoyld look like
        
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || '/images/characters/people/hero.png',
            shadowNeeded: config.shadowNeeded,
            srcShadow : config.srcShadow || '/images/characters/shadow.png',
            
        });
    }
}