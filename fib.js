console.log('fib.js loaded');

(function(){ // wrapping everything within an annonymous function
//var f= '<form name="frm"> '
var f ='<table style="border:solid green 1px">'
f +='<tr><td>Enter the degree</td>'
f +='<td><input type=text name="txt" size=12"></td>'
f +='<td><select name="myoption">'
f +='<option name="Faren" value="Fahrenheit">F</option>'
f +='<option name="Cels" value="Celsius">C</option>'
f +='</select></td>'
f +='<td><input type="button" value="Calculate" onclick="apply()"></td></tr>'
f +='<tr><td>Equal Value</td>'
f +='<td><input type=text name="txt1" size="12" READONLY></td><td></td>'
f +='<td align=right>&copy<a href="https://www.hscripts.com" style="color:#3D366F;text-decoration:none;cursor:pointer;font-size:13px">hscripts.com</a></td></tr>'
f +='</table>'
//f +='</form>'

  //var h = '<h3 style="color:navy">Temp Caclulator</h3>'
  //  h +='<button id="fibButton" type="button" class="btn btn-primary">Generate</button> '
  //  h +='Lenght: <input id="fibLength" size=4 value="20"> '
    //h +='Seed: <input id="fibSeed" size=5 value="0,1"> '
  //  h +='<p id="fibArray" style="color:navy"></p>'
    if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
        sbmApps.render(f)
    }else{ // if fib.js is being called without any help
        var dv = document.createElement('div')
        dv.innerHTML = f
        document.body.appendChild(dv)
    }
    // style
    fibSeed.style.color="blue"
    fibSeed.style.border=0
    fibLength.style.color="blue"
    fibLength.style.border=0
    // fib generator
    var fib = function(n,x){
      var a=frm.myoption.value;
      if(a=="Fahrenheit")
      {
      var val=frm.txt.value;
      var tf=parseInt(val);
      var tc=(5/9)*(tf-32);
      var res=Math.round(tc*Math.pow(10,2))/Math.pow(10,2);
      frm.txt1.value=res+" C";



        if(!n){n=10}
        if(!x){x= [0,1]}
        x.push(parseInt(x.slice(-1))+parseInt(x.slice(-2,-1)))
        if(x.length>n){
            return x
        }else{
            return fib(n,x)
        }
    }
    // generate
    fibButton.onclick=function(){
        var x = fib(parseInt(fibLength.value),JSON.parse('['+fibSeed.value+']'))
        fibArray.textContent=x.join(', ')
        fibSeed.value=x.slice(-2) // reseed
        if(x.slice(-1)[0]>100000000000000000000){
            fibSeed.value='0,1' // if numbers are too big then reset seed
        }
        fibSeed.size=fibSeed.value.length+5 // adjust size of seed input element
    }
    fibSeed.onkeyup=fibLength.onkeyup=function(evt){
        if(evt.keyCode==13){
            fibButton.click()
        }
    }
    //fibSeed.onblur=fibLength.onblur=function(){fibButton.click()}
})()
