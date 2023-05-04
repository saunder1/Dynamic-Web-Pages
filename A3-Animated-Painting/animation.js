let painting;

document.addEventListener('click', event => {
    painting = event.target;
    painting.style.pointerEvents = 'none'; // Ignore pointer events for the clicked element
});

document.addEventListener('mousemove', event => {
    if (painting) {
        // Get the center point of the "painting" div
        const paintingRect = painting.getBoundingClientRect();
        const paintingCenterX = paintingRect.left + paintingRect.width / 2;
        const paintingCenterY = paintingRect.top + paintingRect.height / 2;

        // Get the position of the mouse relative to the center point of the "painting" div
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const deltaX = mouseX - paintingCenterX;
        const deltaY = mouseY - paintingCenterY;

        // Calculate the angle in radians using the arctangent function
        const angleRadians = Math.atan2(deltaY, deltaX);

        painting.style.transform = `rotate(${angleRadians}rad)`;
    }
});

document.addEventListener('mouseup', () => {
    if (painting) {
        painting.style.pointerEvents = 'auto'; // Enable pointer events for the clicked element
        painting = null;
    }
});
