canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
carwidth=100
carheight=200

background_image = "parkingLot.jpg"
greencar_image = "car2.png"
carx=10
cary=10
function add() {
	backgroundimagetag=new Image()
	backgroundimagetag.onload=uploadBackground
	backgroundimagetag.src=background_image
	carimagetag=new Image()
    carimagetag.onload=uploadgreencar
    carimagetag.src=greencar_image
	}


function uploadBackground() {
	ctx.drawImage(backgroundimagetag,0,0,canvas.width,canvas.height)

}


function uploadgreencar() {
	ctx.drawImage(carimagetag,carx,cary,carwidth,carheight)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(cary>0){
        cary=cary-10
        console.log("carx="+carx+"cary="+cary)
         uploadBackground()
         uploadgreencar()
    }
}

function down()
{
	if(cary<=500){
        cary=cary+10
        console.log("carx="+carx+"cary="+cary)
         uploadBackground()
         uploadgreencar()
    }
}

function left()
{
	if(carx>0){
        carx=carx-10
        console.log("carx="+carx+"cary="+cary)
         uploadBackground()
         uploadgreencar()
    }
}

function right()
{
	if(carx<=700){
        carx=carx+10
        console.log("carx="+carx+"cary="+cary)
         uploadBackground()
         uploagreencar()
    }
}
