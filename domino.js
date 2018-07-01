planck.testbed("Domino",function(testbed)
{
    var pl = planck;
    var Vec2 = pl.Vec2;

    var COLORS = [
        {fill: '#ffdd00', stroke: '#ffdd00'},
        {fill: '#ff3300', stroke: '#ff3300'},
        {fill: '#662200', stroke: '#662200'},
        {fill: '#ff8800', stroke: '#ff8800'},
        {fill: '#00bb11', stroke: '#00bb11'},
        {fill: '#9900ff', stroke: '#9900ff'},
        {fill: '#0077ff', stroke: '#0077ff'},
        {fill: '#007700', stroke: '#007700'},
        {fill: '#0000ff', stroke: '#0000ff'},
        {fill: '#0007f0', stroke: '#0007f0'},
        {fill: '#1077ff', stroke: '#1077ff'}

      ];

    var world = pl.World(Vec2(0,-10));

    //world.setGravity(Vec2(0,-1));

    var ground = world.createBody();
    ground.createFixture(pl.Edge(Vec2(-140,-15),Vec2(140,-15)),0.0);


    for (var i=0;i<10;i++)
    {
        var box = world.createBody().setDynamic();
        box.createFixture(pl.Box(0.5,5));
        box.setPosition(Vec2(5*i,-10));
        box.setMassData({mass : 1,center : Vec2(),I : 1});
        box.render=COLORS[i];
    }


    var inc = world.createBody();
    inc.createFixture(pl.Edge(Vec2(-100,0),Vec2(-10,-15)),0.0);

    
    var ball = world.createBody().setDynamic();
    ball.createFixture(pl.Circle(7));
    ball.setPosition(Vec2(-50,0));
    ball.setMassData({mass : 1,center : Vec2(),I : 1});
    ball.render = {fill: "#ffffff", stroke: "#aaaaaa"};






    return world;
});