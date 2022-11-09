
function GetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
    return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
    }
    return null;
    }
    function SetCookie (name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    document.cookie = name + "=" + escape (value) +
    ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
    ((path == null) ? "" : ("; path=" + path)) +
    ((domain == null) ? "" : ("; domain=" + domain)) +
    ((secure == true) ? "; secure" : "");
    }
    function DeleteCookie (name) {
    var exp = new Date();
    exp.setTime (exp.getTime() - 1);
    var cval = GetCookie (name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
    }

    var expDays = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
    var sub = document.getElementById("amount")
    var newSub = document.getElementById("newSub")


    function amt(){
    var count = GetCookie('test cookie')
    if(count == null) {
    SetCookie('test cookie','1')
    var text = document.createTextNode("You have visited 1 number of times")
    sub.appendChild(text)
    return 1
    }
    else {
    var newcount = parseInt(count) + 1;
    DeleteCookie('test cookie')
    SetCookie('test cookie',newcount,exp)
    var text = document.createTextNode("You have visited " + newcount + " number of times")
    sub.appendChild(text)
    return newcount
       }
       
    }

    function getCookieVal(offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
    }
    amt();


function randomImg(){
    console.log("Media Monks Cookie Challenge by Sophia Orlando!")
    const ballLinks = ["./assets/blueBall.png", "./assets/redBall.png"]
    const randomBall = ballLinks.sort(function(){return Math.random() - 0.5})
    const ballEl = randomBall.pop()
    choosenImage = ballEl;
    balls.src = choosenImage;
    balls.id = choosenImage;

    console.log(choosenImage)
        return choosenImage
}

function redBallImg(ball){
    rImg = ball
    balls.src = rImg
}

function blueBallImg(ball){
    bbImg = ball
    balls.src = bbImg
    }


var redSub = document.getElementById("redAmount")
var blueSub = document.getElementById("blueAmount")
var otherBlueSub = document.getElementById("otherBlueAmount")
var otherRedSub = document.getElementById("otherRedAmount")
var getImage = document.getElementById("balls")




    function ballShown(){

        const ballCtn = GetCookie("ballCtn")
        const redBall = GetCookie("redBall")
        const blueBall = GetCookie("blueBall")
        // const ballLinks = ["./assets/blueBall.png", "./assets/redBall.png"]
        // const randomBall = ballLinks.sort(function(){return Math.random() - 0.5})
        // const ballEl = randomBall.pop()
        const holder = randomImg()

         if(ballCtn == null && holder == "./assets/redBall.png"){
            SetCookie('ballCtn','1')
            SetCookie('redBall', '1')
            SetCookie('blueBall', "0")
            var redText = document.createTextNode("You have seen the red ball 1 number of times")
            redSub.appendChild(redText)
            var altBlueText = document.createTextNode("You have seen the blue ball 0 number of times")
            otherBlueSub.appendChild(altBlueText)

            return 1

        } 
        else if (ballCtn == null && holder == "./assets/blueBall.png" ){
            SetCookie('ballCtn','1')
            SetCookie('blueBall', '1')
            SetCookie('redBall', '0')
            var blueText = document.createTextNode("You have seen the blue ball 1 number of times")
            blueSub.appendChild(blueText)
            var altRedText = document.createTextNode("You have seen the red ball 0 number of times")
            otherRedSub.appendChild(altRedText)

            return 1

        } if (ballCtn != null && holder == "./assets/redBall.png") {
            const newBallCtn = parseInt(ballCtn) + 1;
            const newRedCtn = parseInt(redBall) + 1;
            const newBlueCtn2 = parseInt(blueBall) + 0;

            DeleteCookie('ballCtn')
            DeleteCookie('redBall')
            DeleteCookie('blueBall')
            SetCookie("ballCtn", newBallCtn, exp)
            SetCookie("redBall", newRedCtn, exp)
            SetCookie("blueBall", newBlueCtn2, exp)
            var redText2 = document.createTextNode("You have seen the red ball "+ newRedCtn+" number of times")
            redSub.appendChild(redText2)
            var blueAltText = document.createTextNode("You have seen the blue ball "+ newBlueCtn2+" number of times")
            otherBlueSub.appendChild(blueAltText)
            redBallImg("./assets/redBall.png");

            return newRedCtn

        } if (ballCtn != null && holder == "./assets/blueBall.png" ){
            const newBallCtn = parseInt(ballCtn) + 1;
            const newBlueCtn = parseInt(blueBall) + 1;
            const newRedCtn2 = parseInt(redBall) + 0;
            DeleteCookie('ballCtn')
            DeleteCookie('blueBall')
            DeleteCookie('redBall')
            SetCookie("ballCtn", newBallCtn, exp)
            SetCookie("blueBall", newBlueCtn, exp)
            SetCookie("redBall", newRedCtn2, exp)
            var blueText2 = document.createTextNode("You have seen the blue ball "+ newBlueCtn+" number of times")
            blueSub.appendChild(blueText2)
            var altRedText2 = document.createTextNode("You have seen the red ball "+ newRedCtn2 + " number of times")
            otherRedSub.appendChild(altRedText2)
            blueBallImg("./assets/blueBall.png");
         
            return newBlueCtn
        } 

        return ;
    }
    ballShown();




 