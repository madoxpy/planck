planck.testbed('Race', function(testbed) {

    var pl = planck, Vec2 = pl.Vec2, Transform = pl.Transform;
  
    var world = new pl.World();


    world.setGravity(Vec2(0,0));
    testbed.background="#000000";

    var bar = world.createBody()
    bar.createFixture(pl.Edge(Vec2(-55,-20),Vec2(-55,40),{density:0,restitution:0.4}));
    bar.createFixture(pl.Edge(Vec2(55,-20),Vec2(55,40),{density:0,restitution:0.4}));
    bar.createFixture(pl.Edge(Vec2(-55,40),Vec2(55,40),{density:0,restitution:0.4}));
    bar.createFixture(pl.Edge(Vec2(-55,-20),Vec2(55,-20),{density:0,restitution:0.4}));


var j=-10

for (var i=-45;i<55;i=i+10)
{
    bar.createFixture(pl.Edge(Vec2(i,-20+j),Vec2(i,40+j),{density:0,restitution:0.4}));
        bar.createFixture(pl.Edge(Vec2(i,-20+j),Vec2(i,40+j),{density:0,restitution:0.4}));

    if (j==10) 
    {
        j=-10;
        bar.createFixture(pl.Edge(Vec2(i,35),Vec2(i-5,40),{density:0,restitution:0.4}));
        bar.createFixture(pl.Edge(Vec2(i,35),Vec2(i+5,40),{density:0,restitution:0.4}));

    }
    else 
    {
        j=10;
        bar.createFixture(pl.Edge(Vec2(i,-15),Vec2(i-5,-20),{density:0,restitution:0.4}));
        bar.createFixture(pl.Edge(Vec2(i,-15),Vec2(i+5,-20),{density:0,restitution:0.4}));

    }
}

for (var i=0;i<100;i++)
{
    var ball = world.createBody().setDynamic();
    ball.createFixture(pl.Circle(0.5));
    ball.setPosition(Vec2(pl.Math.random(-55,55),pl.Math.random(-20,40)));
    ball.render={fill:"#0000ff", stroke:"#0000ff"};
    ball.setMassData({mass:1,center:Vec2(),I:1});
}



var tri1=pl.Polygon([Vec2(-1,0),Vec2(0,2),Vec2(0,0.5)]);
var tri2=pl.Polygon([Vec2(1,0),Vec2(0,2),Vec2(0,0.5)]);
var ship1=world.createBody({type : 'dynamic',angularDumping:2.0,linearDumping:0.3,position:Vec2(-50,-17)});
ship1.createFixture(tri1,2.0);
ship1.createFixture(tri2,2.0);
ship1.render={fill:"#ff0000", stroke:"#ff0000"};

var ship2=world.createBody({type : 'dynamic',angularDumping:2.0,linearDumping:0.3,position:Vec2(-52,-17)});
ship2.createFixture(tri1,2.0);
ship2.createFixture(tri2,2.0);
ship2.render={fill:"#00ff00", stroke:"#00ff00"};


testbed.step=function()
{

    if (testbed.activeKeys.right && !testbed.activeKeys.left)
    {
        ship1.applyAngularImpulse(-0.1,true);
    }
    else if (!testbed.activeKeys.right && testbed.activeKeys.left)
    {
        ship1.applyAngularImpulse(0.1,true);

    }

    if (testbed.activeKeys.up)
    {
        var f = ship1.getWorldVector(Vec2(0,1));
        var p = ship1.getWorldPoint(Vec2(0,2));
        ship1.applyLinearImpulse(f,p,true);
        
    }

    if (testbed.activeKeys['J'] && !testbed.activeKeys['G'])
    {
        ship2.applyAngularImpulse(-0.1,true);
    }
    else if (!testbed.activeKeys['J'] && testbed.activeKeys['G'])
    {
        ship2.applyAngularImpulse(0.1,true);

    }

    if (testbed.activeKeys['Y'])
    {
        var f = ship2.getWorldVector(Vec2(0,1));
        var p = ship2.getWorldPoint(Vec2(0,2));
        ship2.applyLinearImpulse(f,p,true);
        
    }



};

    
    return world;
});