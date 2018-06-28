planck.testbed("klocki",function(testbed)
{
    var pl =planck;
    var Vec2 = pl.Vec2;

    var world = pl.World(Vec2(0,-10));

    var bar=world.createBody();
    bar.createFixture(pl.Edge(Vec2(-40,-15),Vec2(40,-15))); // tworzy podloge

    var bar=world.createBody();
    bar.createFixture(pl.Edge(Vec2(-40,30),Vec2(40, 30))); // tworzy sufit

    var bar=world.createBody();
    bar.createFixture(pl.Edge(Vec2(-40,-15),Vec2(-40, 30))); // tworzy sciana

    var bar=world.createBody();
    bar.createFixture(pl.Edge(Vec2(40,-15),Vec2(40, 30))); // tworzy sciana

    var bar=world.createBody();
    bar.createFixture(pl.Edge(Vec2(-40,-0),Vec2(40, -15))); // tworzy rownie


    var fd={};
    fd.density=20.0;
    fd.friction = 0.2;

    var pbox=world.createBody(); 
    pbox.createFixture(pl.Box(0.8,0.5),fd);
    pbox.setPosition(Vec2(-1,11));

    var jd={};
    jd.collideConnected=false;

    for(var i=0;i<10;i++)
    {
        var box=world.createBody().setDynamic(); 
        box.createFixture(pl.Circle(0.5),fd);// tworzy pudelko
        box.setPosition(Vec2(-1,10-i));
        world.createJoint(pl.RevoluteJoint(jd,pbox,box,Vec2(-1,10-i+0.4)))
        pbox=box;
    }

    return world;
});