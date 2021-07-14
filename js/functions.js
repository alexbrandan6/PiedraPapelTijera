// La piedra (1) aplasta la tijera (3). (Gana la piedra)
// La tijera (3) corta el papel (2). (Gana la tijera)
// El papel (2) envuelve la piedra (1). (Gana el papel)


$(document).ready(function() {
    
    $('[id$=lblTexto]').text("Dale al botón de empezar");

});

function startGame(){

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const selectedNumber = $('input[name=inlineRadioOptions]:checked').val();

    if(selectedNumber != undefined){
        mostrarContricante(randomNumber);
        verificarResultado(randomNumber, selectedNumber);
    }else{
        $('[id$=lblResultado]').text('Seleccioná una opción');
    }

}

function mostrarContricante(randomNumber){

    switch (randomNumber) {
        case 1:
            $('[id$=lblTexto]').text('Piedra');
            break;

        case 2:
            $('[id$=lblTexto]').text('Papel');
            break;

        case 3:
            $('[id$=lblTexto]').text('Tijera');
            break;
    }
    
}

function verificarResultado(randomNumber, selectedNumber){

    switch (selectedNumber) {
        case "1":
            if (randomNumber == 1) {
                $('[id$=lblResultado]').text('Empate');
            } else {
                if (randomNumber == 2) {
                    $('[id$=lblResultado]').text('Perdiste');
                } else {
                    $('[id$=lblResultado]').text('Ganaste');
                }
            }
            break;

        case "2":
            if (randomNumber == 2) {
                $('[id$=lblResultado]').text('Empate');
            } else {
                if (randomNumber == 1) {
                    $('[id$=lblResultado]').text('Ganaste');
                } else {
                    $('[id$=lblResultado]').text('Perdiste');
                }
            }
            break;

        case "3":
            if (randomNumber == 3) {
                $('[id$=lblResultado]').text('Empate');
            } else {
                if (randomNumber == 1) {
                    $('[id$=lblResultado]').text('Perdiste');
                } else {
                    $('[id$=lblResultado]').text('Ganaste');
                }
            }
            break;

    }

}