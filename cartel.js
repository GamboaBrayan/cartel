const canvas = document.getElementById('cartel');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#812081';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = '#000000';
ctx.font = '48px Arial';
ctx.textAlign = 'center';
ctx.fillText('Cada momento contigo', canvas.width / 2, 100);
ctx.fillText('es increíble y un recuerdo muy bonito', canvas.width / 2, 160);


function drawHeart(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
    ctx.bezierCurveTo(x - size, y + size / 2, x, y + size, x, y + size * 1.5);
    ctx.bezierCurveTo(x, y + size, x + size, y + size / 2, x + size, y);
    ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
    ctx.closePath();
    ctx.fillStyle = '#ff6666';
    ctx.fill();
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = '#ffff66';
    ctx.fill();
}

drawHeart(100, 500, 20);
drawHeart(900, 500, 20);
drawHeart(200, 450, 15);
drawHeart(800, 450, 15);

drawStar(150, 100, 5, 20, 10);
drawStar(850, 100, 5, 20, 10);
drawStar(300, 50, 5, 15, 7.5);
drawStar(700, 50, 5, 15, 7.5);

function drawPolaroid(x, y, width, height, src) {
    const img = new Image();
    img.src = src;
    img.onload = function() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x - 10, y - 10, width + 20, height + 40);
        ctx.drawImage(img, x, y, width, height);
        ctx.fillStyle = '#000000';
        ctx.font = '18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('US', x + width / 2, y + height + 25);
        ctx.fillText('US', x + width / 2, y + height + 25);
    };
}

drawPolaroid(100, 200, 150, 150, 'imgs/us1.jpg');
drawPolaroid(750, 200, 150, 150, 'imgs/us2.jpg'); 
drawPolaroid(405, 390, 200, 200, 'imgs/us3.jpg'); 

ctx.fillStyle = '#000000';
ctx.font = '36px Arial';
ctx.textAlign = 'center';
ctx.fillText('Te quiero mucho y espero que pasemos muchos', canvas.width / 2, 675);
ctx.fillText('momentos juntos amor.', canvas.width / 2, 725);