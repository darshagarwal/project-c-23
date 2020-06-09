class Triangle{
     constructor(x,y,width,height,){
        var position = {
            isStatic : true
        }
        this.body = Bodies.triangle(100,100,80,200,120,200);
        
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

        display(){
            var pos = this.body.position;
            rectMode(CENTER);
            fill(255);
           // rect(pos.x,pos.y,this.width,this.height);
        }

};
