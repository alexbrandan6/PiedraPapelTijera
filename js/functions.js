// La piedra (1) aplasta la tijera (3). (Gana la piedra)
// La tijera (3) corta el papel (2). (Gana la tijera)
// El papel (2) envuelve la piedra (1). (Gana el papel)


$(document).ready(function() {
    
    

});

function startGame(){

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const selectedNumber = $('input[name=inlineRadioOptions]:checked').val();

    if(selectedNumber != undefined) mostrarContricante(randomNumber, selectedNumber);
    else $('[id$=lblResultado]').text('Seleccioná una opción');

}

function mostrarContricante(randomNumber, selectedNumber){
    
    $('[id$=imgBot]').attr('src','');
    $('[id$=lblTexto]').attr('class', 'loader');

    var awaitNumber = Math.floor(Math.random() * 5) + 1;
    awaitNumber = awaitNumber * 1000

    setTimeout(function () {

        $('[id$=lblTexto]').attr('class', '');

        switch (randomNumber) {
            case 1:
                $('[id$=imgBot]').attr('src','img/piedra.png');
                verificarResultado(randomNumber, selectedNumber);
                break;
    
            case 2:
                $('[id$=imgBot]').attr('src','img/papel.png');
                verificarResultado(randomNumber, selectedNumber);
                break;
    
            case 3:
                $('[id$=imgBot]').attr('src','img/tijera.png');
                verificarResultado(randomNumber, selectedNumber);
                break;
        }
    }, awaitNumber);

}

function verificarResultado(randomNumber, selectedNumber){

    switch (selectedNumber) {
        case "1":
            if (randomNumber == 1) {
                $('[id$=lblResultado]').text('Empate');
                anotarPuntos('empate');
            } else {
                if (randomNumber == 2) {
                    $('[id$=lblResultado]').text('Perdiste');
                    anotarPuntos('perdio');
                } else {
                    $('[id$=lblResultado]').text('Ganaste');
                    anotarPuntos('gano');
                }
            }
            break;

        case "2":
            if (randomNumber == 2) {
                $('[id$=lblResultado]').text('Empate');
                anotarPuntos('empate');
            } else {
                if (randomNumber == 1) {
                    $('[id$=lblResultado]').text('Ganaste');
                    anotarPuntos('gano');
                } else {
                    $('[id$=lblResultado]').text('Perdiste');
                    anotarPuntos('perdio');
                }
            }
            break;

        case "3":
            if (randomNumber == 3) {
                $('[id$=lblResultado]').text('Empate');
                anotarPuntos('empate');
            } else {
                if (randomNumber == 1) {
                    $('[id$=lblResultado]').text('Perdiste');
                    anotarPuntos('perdio');
                } else {
                    $('[id$=lblResultado]').text('Ganaste');
                    anotarPuntos('gano');
                }
            }
            break;

    }

}

function anotarPuntos(resultado){

    if(resultado == 'gano'){
        $('[id$=meWins]').text(parseInt($('[id$=meWins]').text()) + 1);
        $('[id$=botLosses]').text(parseInt($('[id$=botLosses]').text()) + 1);
    }else if(resultado == 'perdio'){
        $('[id$=meLosses]').text(parseInt($('[id$=meLosses]').text()) + 1);
        $('[id$=botWins]').text(parseInt($('[id$=botWins]').text()) + 1);
    }else{
        $('[id$=meDraws]').text(parseInt($('[id$=meDraws]').text()) + 1);
        $('[id$=botDraws]').text(parseInt($('[id$=botDraws]').text()) + 1);
    }

    $('[id$=meTotal]').text(parseInt($('[id$=meTotal]').text()) + 1);
    $('[id$=botTotal]').text(parseInt($('[id$=botTotal]').text()) + 1);

}

var properties = [
	'name',
	'wins',
	'draws',
	'losses',
	'total',
];

$.each( properties, function( i, val ) {
	
	var orderClass = '';

	$("#" + val).click(function(e){
		e.preventDefault();
		$('.filter__link.filter__link--active').not(this).removeClass('filter__link--active');
  		$(this).toggleClass('filter__link--active');
   		$('.filter__link').removeClass('asc desc');

   		if(orderClass == 'desc' || orderClass == '') {
    			$(this).addClass('asc');
    			orderClass = 'asc';
       	} else {
       		$(this).addClass('desc');
       		orderClass = 'desc';
       	}

		var parent = $(this).closest('.header__item');
        var index = $(".header__item").index(parent);
		var $table = $('.table-content');
		var rows = $table.find('.table-row').get();
		var isSelected = $(this).hasClass('filter__link--active');
		var isNumber = $(this).hasClass('filter__link--number');
			
		rows.sort(function(a, b){

			var x = $(a).find('.table-data').eq(index).text();
    			var y = $(b).find('.table-data').eq(index).text();
				
			if(isNumber == true) {
    					
				if(isSelected) {
					return x - y;
				} else {
					return y - x;
				}

			} else {
			
				if(isSelected) {		
					if(x < y) return -1;
					if(x > y) return 1;
					return 0;
				} else {
					if(x > y) return -1;
					if(x < y) return 1;
					return 0;
				}
			}
    		});

		$.each(rows, function(index,row) {
			$table.append(row);
		});

		return false;
	});

});