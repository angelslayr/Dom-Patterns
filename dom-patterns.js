function showPattern() {
    const colorsArr = ['fuchsia', 'MediumOrchid', 'BlueViolet', 'aqua', 'MediumSlateBlue', 'blue'];

    let topPosition = 25;
    let leftPositon = 25;
    let width = 500;
    let height = 500;
    

    while (width > 50) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement('div');

        newDiv.style.top = topPosition  + 'px';
        newDiv.style.left = leftPositon + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];

        document.body.appendChild(newDiv);
        topPosition += 10;
        leftPositon += 10;
        width -= 20;
        height -= 20; 
    }

}