whitehat = document.getElementById("canvas")
color= "Red"

ctx = whitehat.getContext("2d");
ctx.beginPath()
ctx.lineWidth= 2;
ctx.rect(150, 100, 515, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(260, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(365, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(470, 210, 40, 0, 2 * Math.PI);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(313, 245, 40, 0, 2 * Math.PI);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(417, 245, 40, 0, 2 * Math.PI);
ctx.stroke()