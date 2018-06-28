function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showdate()
{
    var time = new Date();
    document.write("<div id=\"time\">",time.getHours(),":",time.getMinutes(),":",time.getSeconds(),"</div>");

}


var i=0;
while (i<1)
{
    showdate();

    i++;
}