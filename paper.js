class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.175			
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
	
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
            imageMode(CENTER);
            image(this.image,0, 0);
			pop()
			
	}

}