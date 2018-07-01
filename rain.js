planck.testbed("Domino",function(testbed)
{
    var pl = planck;
    var Vec2 = pl.Vec2;

    var world = pl.World(Vec2(0,-10));

    var ground = world.createBody();
    ground.createFixture(pl.Edge(Vec2(-140,-15),Vec2(140,-15)),0.0);

    var inc = world.createBody();
    inc.createFixture(pl.Edge(Vec2(-100,100),Vec2(-10,-15)),0.0);
    var inc = world.createBody();
    inc.createFixture(pl.Edge(Vec2(100,100),Vec2(10,-15)),0.0);

    var particles=200;

    for (var i = 0;i<particles;i++)
    {
        var raindrop = world.createBody().setDynamic();
        var fd ={};
        fd.friction = 0.0001;
        raindrop.createFixture(pl.Circle(0.7),fd);
        raindrop.setPosition(Vec2(pl.Math.random(-60,60),pl.Math.random(50,100)));
        raindrop.setMassData({mass : 1,center : Vec2(), I:1});
        var r = parseInt(pl.Math.random(100,255)).toString(16);
        var g = parseInt(pl.Math.random(100,255)).toString(16);
        var b = parseInt(pl.Math.random(100,255)).toString(16);
        raindrop.render={fill:"#"+r+g+b, stroke: "#"+r+g+b};
    }

    for (var i=0;i<2;i++)
    {
        var box = world.createBody().setDynamic();
        var fdb = {};
        fdb.friction = 0.0001;
        box.createFixture(pl.Box(2,5),fdb);
        box.setPosition(Vec2(-4+8*i,200));
        box.setMassData({mass : 50,center:Vec2(),I:1});
    }

    return world;
});