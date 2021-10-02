function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', moveIn);
    gradientElement.addEventListener('mouseout', moveOut);
    

    function moveIn(event){
        let gradient = Math.trunc(event.offsetX / (event.target.clientWidth - 1) * 100);
        document.getElementById('result').textContent = gradient + '%';
    }
    function moveOut(event){
        document.getElementById('result').textContent = '';
    }
}