const canvas = document.querySelector('#myCanvas');

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let xCoordinate = 2;
    let yCoordinate = 2;
    while (yCoordinate <= canvas.height) {
        if (xCoordinate >= canvas.width) {
            xCoordinate = 2;
            yCoordinate += 20;
        }
        ctx.strokeRect(xCoordinate, yCoordinate, 16, 16);
        xCoordinate += 20;

    }
    console.log(xCoordinate);
    console.log(yCoordinate);
}