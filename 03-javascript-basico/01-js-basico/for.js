var estudiantes = ["María", "Pablo", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);  
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//estudiante (en singular) es el index del grupo (estuduantes)

for(var i = 0; i < estudiantes.length; i++){
  saludarEstudiantes(estudiantes[i]);
}

//Casi siempre el for ocupa una variable i : for(var i = 0;)...