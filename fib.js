console.log('fib.js loaded');

(function(){ // wrapping everything within an annonymous function
    var h = '<h3 style="color:navy">Fibonacci generator</h3>'
    h +='<button id="fibButton" type="button" class="btn btn-primary">Generate</button> '
    h +='LengthTest: <input id="fibLength" size=4 value="20"> '
    h +='SeedTest: <input id="fibSeed" size=5 value="0,1"> '
    h +='<p id="fibArray" style="color:navy"></p>'
    if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
        sbmApps.render(h)
    }else{ // if fib.js is being called without any help
        var dv = document.createElement('div')
        dv.innerHTML = h
        document.body.appendChild(dv)
    }
    // style
    fibSeed.style.color="blue"
    fibSeed.style.border=0
    fibLength.style.color="blue"
    fibLength.style.border=0
    // fib generator

    
    //fibSeed.onblur=fibLength.onblur=function(){fibButton.click()}
})()
