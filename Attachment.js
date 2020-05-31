class Attachment{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB;
        this.Attachment = Constraint.create(options);
        World.add(world,this.Attachment);
        }   
        fly(){
            this.Attachment.bodyA=null;
        }
        display(){
            if(this.Attachment.bodyA){
            var pointA = this.Attachment.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }