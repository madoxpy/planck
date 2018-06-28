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

    for(var j=0;j<5;j++)
    {
        for(var i=0;i<5;i++)
        {
            var box=world.createBody().setDynamic(); 
            //box.createFixture(pl.Box(0.8,0.8));// tworzy pudelko
            var fd = {};
            fd.friction = 0.0;
            box.createFixture(pl.Circle(0.8),fd);// tworzy kolko
            box.setPosition(Vec2(i,10+j));
        }
    }
    return world;
});