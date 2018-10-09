let slider = document.querySelector('#slider');
let polozenieSlidera = 0;
let czyAnimowac = true;

slider.addEventListener('mouseenter',zatrzymajUruchomSlider);
slider.addEventListener('mouseleave',zatrzymajUruchomSlider);
slider.addEventListener('click',powiekszZdjecie);


function zatrzymajUruchomSlider(e) {
    czyAnimowac = !czyAnimowac;
    if(czyAnimowac)
    {
        animacja();
    }
}

function animacja() {
    if(czyAnimowac){
        polozenieSlidera--;
        slider.style.left = `${polozenieSlidera}px`;
        requestAnimationFrame(animacja);
    }
}

animacja();