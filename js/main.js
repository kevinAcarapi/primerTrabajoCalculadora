window.addEventListener('load', inicio); // Creó el evento "load" (que se activa al cargar el %100 la pagína) e invoco el contenido de la función "iniciar"

alert(" INSTRUCIONES: \n # CON LA TECLA 'C' Y/O CON EL BOTON 'C' SE BORRA TODO EL CONTENIDO \n # AL PRESIONAR UNA TECLA, ESTAR SEGURO DE NO APRETAR UNA QUE NO CORRESPONDA PARA LA OPERACIÓN, PORQUE TE MOSTRARA ALERTA \n # CON EL TECLADO 'ENTER' Y/O EL BOTON '=' TE MUESTRA EL RESULTADO")

function inicio(){ // Defino la función.
    let button = document.querySelectorAll('button'); // Obtengo los elementos botones y se crea un array.
    let pantalla = document.getElementById('pantalla'); // Obtengo el el elemento con el ID pantalla

    for(let i = 0; i < button.length; i++) { // Creó una iteración con el largo del array de los botones
        button[i].addEventListener('click', function() { // Creó un evento click, que solo se activa si el usuario hace click en alguno de los botones que esta iterando.
            //console.log(button[i].innerHTML);
            if(button[i].textContent === "=") { //Condión -> Ingresa si el usuario hace click en el boton que tiene el contenido "=".
                let resultado= eval(pantalla.textContent); // Creó una variable que obtiene la función eval con una operacion que el usuario ingreso.
                pantalla.textContent = resultado; // Muestro el resultado de esa operación en la pantalla.
            } else if(button[i].textContent === "C") { // Condición -> Ingresa si el usuario hace click en el boton que tiene el contenido "C".
                pantalla.textContent= " " // Cambia el contenido de la pantalla por un espacio vacío.
            } else { // Caso contrario -> Ingresa si el usuario no hace click en el boton "=" ni en el boton "C".
                pantalla.textContent += button[i].textContent; // Agrega a la pantalla el contenido del boton que el usuario hace click.
            }
        }); 
    }
};

function desdeTeclado(e){ // Defino la función con el parametro "e".
    let codigo = e.charCode; // Llama a la propiedad charCode, el cual es el codigo numerico de esa letra presionada. Por ej: "2" == 50
    let caracter = String.fromCharCode(codigo); // Convierte ese codigo numerico de charCOde en un string, el cual sería la tecla presionada!. Por ejmeplo: 50 == "2"
    let posibles_caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","+","-","*","/",]; // Crea una variable del tipo array
    if (codigo == 13) { // Condición -> Sí el usuario apreta la tecla "ENTER" ingresa en la siguiente linea.
        pantalla.textContent = eval(pantalla.textContent) // Evalua la operación que el usuario ingreso desde el teclado.
    } else if (codigo == 99 || codigo == 67) { // Condición -> Sí el usuario presiona la tecla "C" o "c", ingresa en la siguiente linea.
        pantalla.textContent = " " // Borra el contenido de la pantalla.
    } else if(posibles_caracteres.includes(caracter)){ // Condición -> Sí el usuario presiona una tecla que este incorporada en el array de la variable "condicion", ingresa en la siguiente linea.
        pantalla.textContent += caracter // Agrega el contenido de la tecla presionada en la pantalla.
    } else { // -> Condición que se ejecutara en caso de no cumplirse las anteriores.
        alert('POR FAVOR PRESIONE LOS BOTONES DEL 0 AL 9 Y LOS SIGNOS +, -, *, / PARA REALIZAR UNA OPERACIÓN') // Se muestra alerta.
        desdeTeclado() // Se llama la función a si misma en caso de que no haya seguido las instrucciones y vuelve a ejecutar el código.
    }
};
    
document.addEventListener('keypress', desdeTeclado); // Creó el evento "keypress" (que se activa al apretar el teclado) en el documento html e invoco el contenido que esta en la función "desdeTeclado".
