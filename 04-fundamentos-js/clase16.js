var signo = prompt(`¿Cuál es tu signo?`)

switch (signo) {
    case 'Piscis':
    case 'piscis':
        console.log('Para alcanzar sus logros, sepa que la clave es organizarse y no dejar que los objetivos que están en su mente, se diluyan ante cualquier estímulo negativo.')
        break
    case 'Aries':
    case 'aries':
        console.log('Siempre que se deje guiar por la voz de la intuición y la sabiduría interior, podrá abandonar todos los temores que lo atormentan día a día en su vida.')
        break
    case 'Tauro':
    case 'tauro':
        console.log('Empiece confiar más en usted, de lo contrario, los esfuerzos y metas se verán limitados por la inseguridad que lo invade naturalmente en su vida.')
        break
    case 'Géminis':
    case 'Geminis':
    case 'géminis':
    case 'geminis':
        console.log('Su natural diplomacia hará que todo su equipo de trabajo recurra a usted. Todos saben que siempre está dispuesto a dar buenas soluciones.')
        break
    case 'Cáncer':
    case 'cáncer':
    case 'Cancer':
    case 'cancer':
        console.log('Tenga en cuenta las situaciones y no sea tan cruel con los demás. Comprenda que no hay que juzgar a todos de la misma forma. Sea más permisivo.')
        break
    case 'Leo':
    case 'leo':
        console.log('En estos momento, sepa que deberá mantenerse precavido en todo los sentidos ya que podrían aparecer personas envidiosas que intenten retardar su éxito.')
        break
    case 'Virgo':
    case 'virgo':
        console.log('En esta jornada despertará teniendo una dosis extra de energía, la cual lo ayudará a realizar rápidamente todas sus obligaciones teniendo resultados positivos.')
        break
    case 'Libra':
    case 'libra':
        console.log('No cometa un error por su impaciencia, relájese y conseguirá lo que se propone. Evite que la pena invada su corazón y no pueda pensar correctamente.')
        break
    case 'Escorpio':
    case 'escorpio':
        console.log('Permita que su intuición lo guíe en todos los caminos que deba transitar. Lo ayudará a detectar de inmediato si alguien intenta perjudicarlo.')
        break
    case 'Sagitario':
    case 'sagitario':
        console.log('Será un momento donde tendrá que detener un poco la marcha. Intente realizar una mirada hacia su interior y retome el camino de manera consciente.')
        break
    case 'Capricornio':
    case 'capricornio':
        console.log('Si hoy siente que las obligaciones lo superan más de lo que esperaba, procure no desesperarse. Extreme la prudencia y todo se acomodará de a poco.')
        break
    case 'Acuario':
    case 'acuario':
        console.log('Para alcanzar sus logros, sepa que la clave es organizarse y no dejar que los objetivos que están en su mente, se diluyan ante cualquier estímulo negativo.')
        break
    default:
        console.log('No es un signo zodiacal válido')
        break
}