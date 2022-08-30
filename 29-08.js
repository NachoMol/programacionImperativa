const prompt = require("prompt-sync")({ sigint: true });

console.log('Bienvenida a la prueba secreta... ¿nerviosa?');

let nombreYApellido = prompt('Comencemos con la prueba... Ingrese su nombre y apellido: ');

if (nombreYApellido === 'Josefina Irumberri'){
    let tituloRealeza = prompt('¿Cual es tu titulo oficial (de la realeza :P)?: ')
    if(tituloRealeza === 'Princesa Intergalactica'){
        let fechaConocimos = prompt('Que día nos pusimos de novios (dd/mm/aaaa)?: ')
        if(fechaConocimos === '27/08/2021'){
            let teAmo = prompt('Quien dijo te amo primero? yo/vos: ' )
            if(teAmo === 'yo'){
                console.log('.........')
                prompt('Presione enter');
                console.log('Si pasaste la prueba, significa que sos Jose, el amor de mi vida.');
                console.log('Gracias por acompañarme en cada día de nuestras vidas.')
                console.log('Gracias por el amor, el cariño, el apoyo que me das con todo, gracias por los mates bien cebados, por los saltitos de alegría en momentos random del día.')
                console.log('En fin, gracias por vivir, por soñar y por hacerme tan feliz cada dia.')
                console.log('Nunca dudes de vos, porque sos la persona mas especial del mundo y por mejorar tanto cada día, buscando siempre superarte y no bajando los brazos')
                console.log('Alegras cualquier ambiente y a cualquier persona con tu espiritu.')
                console.log('Te amo muchisimo,')
                console.log('Tu amorchito');
            }else{
                console.log('FALSO. INTENTE DE NUEVO')
            }
        }else{
            console.log('FALSO. INTENTE DE NUEVO')
        }
    }else{
        console.log('FALSO. INTENTE DE NUEVO')
    }
}else{
    console.log('FALSO. INTENTE DE NUEVO')
}
