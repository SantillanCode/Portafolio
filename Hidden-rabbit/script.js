window.onload = function mostrarMensaje() {
    alert(`¡Bienvenido a Hidden Rabbit! 
    Para jugar sigue las siguientes instrucciones: 
    1) Debes seleccionar todos los conejos antes de que se escondan
       y recuerda que solo tienes un minuto para ganar. 
       Mucha suerte!!! 
    2) Haz clic en el botón 'Continuar'.`);
}


function contarCheckbox() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let contador = 0;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            contador++;
        }
    }
    
    if (contador === checkboxes.length) {
      alert('Felicidades ganaste!')
      clearInterval(interval);
    }
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', contarCheckbox);
});

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            alert("¡Perdiste!");
        }
    }, 1000);
}

function time() {
    const duration = 60; // tiempo en segundos
    const display = document.querySelector('#timer');
    startTimer(duration, display);

    let resetBtn = document.querySelector('#reset-btn');
    resetBtn.addEventListener('click', function() {
        clearInterval(interval);
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach( checkbox => {
        checkbox.checked = false; // deseleccionar todas las casillas
        });
        startTimer(duration, display);
    });

    
};

time();

