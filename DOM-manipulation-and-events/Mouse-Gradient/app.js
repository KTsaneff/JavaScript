function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    const output = document.getElementById('result');

    function onMove(ev){
        const box  = ev.target;

        const offset = Math.floor(ev.offsetX/box.offsetWidth * 100);
        output.textContent = `${offset}%`;
    }
}