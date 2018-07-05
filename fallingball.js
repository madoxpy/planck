planck.testbed('Falling ball', function(testbed) {

    var pl = planck, Vec2 = pl.Vec2, Transform = pl.Transform;
  
    var world = new pl.World();

    world.setGravity(Vec2(0,-10));
    testbed.background="#000000";

    var bar = world.createBody();
    bar.createFixture(pl.Edge(Vec2(-55,-150),Vec2(-55,40),{density:0,restitution:0.4}));
    bar.createFixture(pl.Edge(Vec2(55,-150),Vec2(55,40),{density:0,restitution:0.4}));



    var ball = world.createBody().setDynamic();
    ball.createFixture(pl.Circle(2),{restitution:1.0});
    ball.render = {fill: "#00ff00", stroke: "#00ff00"};
    ball.setMassData({mass:1,center:Vec2(),I:0});
    ball.setPosition(Vec2(0,35));




    var j=-10

    for (var i=30;i>-150;i=i-10)
    {
        bar.createFixture(pl.Edge(Vec2(-55+j,i),Vec2(55+j,i),{density:0,restitution:1.0}));

        if (j==10) 
        {
            j=-10;
        }
        else 
        {
            j=10;
        }
    }

    var speed = 0.3;

    testbed.step = function()
    {
        if (testbed.activeKeys.right && !testbed.activeKeys.left)
        {
            ball.setPosition(Vec2(ball.getPosition().x+speed,ball.getPosition().y));
        }
        if (!testbed.activeKeys.right && testbed.activeKeys.left)
        {
            ball.setPosition(Vec2(ball.getPosition().x-speed,ball.getPosition().y));
        }


        if (testbed.activeKeys['S'])
        {
            speed=1.0;
        }
        else
        {
            speed = 0.3;
        }


        testbed.y=-ball.getPosition().y;

    }







    return world;
});