
var temp=0;
var temp1=0;
var temp2=0;
var temp3=0;
var tank1X =140;
 var tank1Y = 331;
 var tank2X =940;
 var tank2Y = 331;
var tank1 = new Image();
var tank2 = new Image();

  tank1.src = "./Graphics/tank1.png";
  tank2.src = "./Graphics/tank2.png";

var score1=0,score2=0;
var i=0;

function myfunction(){
    field.start();
    	
        field.context.drawImage(tank1, tank1X, tank1Y, 100, 50);

        console.log("WORKING");

        field.context.drawImage(tank2, tank2X, tank2Y, 100, 50);

}


   var field = {
        canvas : document.createElement("canvas"),
        start : function(){
        
        this.canvas.width = 1300;
        this.canvas.height = 550;
        
        this.context = this.canvas.getContext("2d");         
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        }
     
    }

function movea(moveAmount){
if(parseInt(moveAmount)>=0)
{ 
   temp++;
     if(temp==parseInt(moveAmount)){
     tank1X=tank1X+1;
   }
     else{
      tank1X=tank1X-1;
      temp=parseInt(moveAmount);
     }  
  }
  else{     temp1--;
    
     if(temp1==parseInt(moveAmount))
    tank1X=tank1X-1;
   
     else{
      tank1X=tank1X+1;
      temp1=parseInt(moveAmount);


      
     } 
    

  }
    ctx.clearRect(0,0,field.canvas.width,field.canvas.height);
      ctx.drawImage(tank1,tank1X, tank1Y, 100, 50);
      ctx.drawImage(tank2,tank2X, tank2Y, 100, 50);
}


function moveb(moveAmount){
if(parseInt(moveAmount)>=0)
{ 
   temp2++;
     if(temp2==parseInt(moveAmount)){
     tank2X=tank2X+1;
   }
     else{
      tank2X=tank2X-1;
      temp2=parseInt(moveAmount);
     }  
  }
  else{     temp3--;
    
     if(temp3==parseInt(moveAmount))
    tank2X=tank2X-1;
   
     else{
      tank2X=tank2X+1;
      temp3=parseInt(moveAmount);


      
     } 
    

  }
    ctx.clearRect(0,0,field.canvas.width,field.canvas.height);
      ctx.drawImage(tank1,tank1X, tank1Y, 100, 50);
      ctx.drawImage(tank2,tank2X, tank2Y, 100, 50);
}


function play1(){if(i%2==0){
 var ang=document.getElementById('angle1').value;
    var vel=document.getElementById('velocity1').value;
       
    var angle=Math.PI*ang/180;
    var a= tank1X+50;
    var b= tank1Y;
    var c=a+(50* Math.cos(angle));
    var d=b-(50* Math.sin(angle));
    var e=vel*Math.sin(angle);    
    var id=setInterval(draw,34);
    function draw(){
      ctx=field.context; 
      ctx.clearRect(0,0,field.canvas.width,field.canvas.height);
      ctx.drawImage(tank1,tank1X, tank1Y, 100, 50);
      ctx.drawImage(tank2,tank2X, tank2Y, 100, 50);
      ctx.beginPath();
      ctx.arc(c,d,2,0,Math.PI*2);
     
      ctx.stroke();
      if((c>tank1X-1 && c<tank1X+100) && (d>tank1Y)||(c>tank2X)&& (c<tank2X+100) && (d>tank2Y)){      
      clearInterval(id);
      scorea(c);
    }
      else{
      c=c+vel*Math.cos(angle);
      d=d-e;
      e=e-0.5;
      if(d>=381){
      clearInterval(id);
      scorea(c);
    }
    }
  } i++;
}
}ctx.drawImage(tank1,tank1X, tank1Y, 100, 50);
ctx.drawImage(tank2,tank2X, tank2Y, 100, 50);


function play2(){
if(i%2!=0){
    var ang=document.getElementById('angle2').value;
    var vel=document.getElementById('velocity2').value;
       
    var angle=Math.PI*ang/180;
    var a= tank2X+50;
    var b= tank2Y;
    var c=a-(50* Math.cos(angle));
    var d=b-(50* Math.sin(angle));
    var e=vel*Math.sin(angle);    
    var id=setInterval(draw,34);
    function draw(){

      ctx.clearRect(0,0,field.canvas.width,field.canvas.height);
      ctx.drawImage(tank1,tank1X, tank1Y, 100, 50);
      ctx.drawImage(tank2,tank2X, tank2Y, 100, 50);
      ctx=field.context;            
      ctx.beginPath();
      ctx.arc(c,d,2,0,Math.PI*2);
      ctx.stroke();
      if((c>tank1X-1 && c<tank1X+100) && (d>tank1Y)||(c>tank2X)&& (c<tank2X+100) && (d>tank2Y)){      
      clearInterval(id);
      scoreb(c);
    }
      else{
      c=c-vel*Math.cos(angle);
      d=d-e;
      e=e-0.5;
      if(d>=381){
      clearInterval(id);
      scoreb(c);
    }
    }
  } 
         i++;
  

 }  
}

  function scorea(attackRange){
       if((attackRange>tank2X+10) &&(attackRange<tank2X+100-10))
       score1+=40;     
    
       else if(attackRange>=tank1X&&attackRange<=tank1X+100)
       score1-=10;
       else if(attackRange==tank1X+100/2)
       score1+=50;
       else if((attackRange>tank2X) &&(attackRange<tank2X+100))
       score1+=10;
     else
      score1+=0;
       document.getElementById("p1score").value=score1;
       if(i==10)
  { i=0;
     score1=0;
    score2=0;
    if(score1>score2)
    alert("Game over: Player A won");
    else if(score1<score2)
      alert("Game over: Player B won");
    else
     alert("Game Over: There is a tie") 
    

 }
    } 
  function scoreb(attackRange){
       if((attackRange>tank1X+10) &&(attackRange<tank1X+100-10))
       score2+=40;     
    
       else if(attackRange>=tank2X&&attackRange<=tank2X+100)
       score2=score2-10;
       else if(attackRange==tank1X+100/2)
       score2+=50;
       else if(attackRange>=tank1X&&attackRange<=tank1X+100)
       score2+=10;
     else
      score2+=0;
       document.getElementById("p2score").value=score2;
       if(i==10)
  { i=0;
    score1=0;
    score2=0;
    if(score1>score2)
    alert("Game over: Player A won");
    else if(score1<score2)
      alert("Game over: Player B won");
    else
     alert("Game Over: It is a tie") 
    

 }
   } 













