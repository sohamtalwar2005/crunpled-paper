class Platform {

    constructor(){
    var platform_options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(500,200,400,20,platform_options)
    World.add(world,this.body);
}

display(){
    fill("white")
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,300,20);
}
}