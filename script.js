const canvas = document.getElementById('drawing-board');
const clearBtn = document.getElementById('clear');
const ctx = canvas.getContext('2d');
const stroke = document.getElementById("stroke")
const lineWidthElement = document.getElementById("lineWidth")

//Set the Width and Height of the Canvas
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.lineWidth = lineWidthElement.value;
ctx.lineCap = 'round';

let isPainting = false;

clearBtn.addEventListener('click', e => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

stroke.addEventListener('change', e => {
    
    ctx.strokeStyle = stroke.value
    
});

lineWidthElement.addEventListener('change', function(){
    ctx.lineWidth = lineWidthElement.value
})


const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY);
    ctx.stroke(); //Starts a stroke from where the user is clicking based on the "lineTo"
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true; 
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;

    ctx.beginPath(); //Ends the current stroke and gets ready for a new one.
});

canvas.addEventListener('mousemove', draw);
