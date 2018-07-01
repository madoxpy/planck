planck.testbed('Apply Force', function(testbed) {
    testbed.y = -20;
  
    var pl = planck, Vec2 = pl.Vec2, Transform = pl.Transform;
  
    var world = new pl.World();
  
    world.setGravity(Vec2(0.0, 0.0));
  
    var ground = world.createBody(Vec2(0.0, 20.0));
  
    var wallFD = {};
    wallFD.density = 0.0;
    wallFD.restitution = 0.4;

    ground.createFixture(pl.Edge(Vec2(-50.0, -20), Vec2(-50.0, 25.0)), wallFD);
    ground.createFixture(pl.Edge(Vec2(50.0, -20.0), Vec2(50.0, 25.0)), wallFD);
    ground.createFixture(pl.Edge(Vec2(-50.0, 25.0), Vec2(50.0, 25.0)), wallFD);
    ground.createFixture(pl.Edge(Vec2(-50.0, -20.0), Vec2(50.0, -20.0)), wallFD);

    var xf1=new Transform();
    xf1.q.set(0.3524*Math.PI);
    xf1.p.set(xf1.q.getXAxis());
    var xf2=new Transform();
    xf2.q.set(-0.3524*Math.PI);
    xf2.p.set(Vec2.neg(xf2.q.getXAxis()));

    var poly1=pl.Polygon(Transform.mul(xf1,[Vec2(-1.0,0.0),Vec2(1.0,0.0),Vec2(0.0,0.5)]));
    var poly2=pl.Polygon(Transform.mul(xf2,[Vec2(-1.0,0.0),Vec2(1.0,0.0),Vec2(0.0,0.5)]));

    var jet=world.createBody({type:'dynamic',angularDamping:2.0,linearDumping:1.5,position:Vec2(0.0,2.0),angle:Math.PI,allowSleep:false});
    jet.createFixture(poly1,2.0);
    jet.createFixture(poly2,2.0);
    jet.render = {fill: "#ff0000", stroke: "#ff0000"}

    for (var i=0;i<2000;i++)
    {
        var box = world.createBody().setDynamic();
        box.createFixture(pl.Circle(0.5));
        box.setPosition(Vec2(pl.Math.random(-50,50),pl.Math.random(-20+20,25+20)));
        box.setMassData({mass:1,center:Vec2(),I:1});
        box.render = {fill: "#0000ff", stroke: "#0000ff"}

    }

    testbed.step=function(){
        if (testbed.activeKeys.right && !testbed.activeKeys.left)
        {
            jet.applyAngularImpulse(-0.2,true);
        }
        else if (!testbed.activeKeys.right && testbed.activeKeys.left)
        {
            jet.applyAngularImpulse(0.2,true);

        }

        if (testbed.activeKeys.up)
        {
            var f = jet.getWorldVector(Vec2(0,-1));
            var p = jet.getWorldPoint(Vec2(0,2));
            jet.applyLinearImpulse(f,p,true);
            
        }
    };



    return world;
});