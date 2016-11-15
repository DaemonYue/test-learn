function parabola(ele, end){
    var a = 1/1000;
    var speed = 16;

    var eleRect = ele.getBoundingClientRect();
    var endRect = end.getBoundingClientRect();

    var x1 = eleRect.left + eleRect.width/2;
    var y1 = eleRect.top + eleRect.height/2;

    var x2 = endRect.left + endRect.width/2;
    var y2 = endRect.top + endRect.height/2;

    var b = 200;
    var c = y1 - x1*x1 - b*x1;

    var curTime = 0;
    var duration = Math.ceil((x2 - x1) / speed);

    var moveId = requestAnimationFrame(move);

    function move() {
        if(curTime <= duration){
            var moveX = Tween.Quad.easeInOut(curTime, x1, x2 - x1, duration);
            var nextY = a*moveX*moveX + b*moveX + c;
console.log(nextY)
            ele.style.left = moveX + 'px';
            ele.style.top = nextY + 'px';

            curTime++;
            requestAnimationFrame(move)
        }else{
            console.log('done')
            return;
        }
    }
}