
let notasCurso = [];

function guardar() {
  let nombreAlumno = document.getElementById('nombreAlumno').value;
  let nota1 = parseFloat(document.getElementById('nota1').value);
  let nota2 = parseFloat(document.getElementById('nota2').value);
  let nota3 = parseFloat(document.getElementById('nota3').value);

  if (nombreAlumno && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    notasCurso.push({ nombre: nombreAlumno, notas: [nota1, nota2, nota3] });
    alert('Datos guardados');
    document.getElementById('formulario').reset();
  } else {
    alert('Por favor, complete todos los campos para guardar los datos');
  }
}

function promCurso() {


  if (notasCurso.length === 0) {
    alert('No hay datos para dar el resultado');
    return;
  }

  let total1 = 0;
  let total2 = 0;
  let total3 = 0;


  notasCurso.forEach(alumno => {
    total1 += alumno.notas[0]
    total2 += alumno.notas[1]
    total3 += alumno.notas[2]

  });




  alert('Resultado:' +  "\nHipotecarios: " + total1 + "\nautomotriz: " + total2 + "\nConsumo: " + total3);
}

function promAlumno() {
  let nombreAlumno = document.getElementById('nombreAlumno').value;
  let nota1 = parseFloat(document.getElementById('nota1').value);
  let nota2 = parseFloat(document.getElementById('nota2').value);
  let nota3 = parseFloat(document.getElementById('nota3').value);



  if (nombreAlumno && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    //let promedio = (nota1 + nota2 + nota3) / 3;
    //alert('El promedio del alumno ' + nombreAlumno + ' es ' + promedio.toFixed(2));
       document.getElementById("resultado").innerText = "\nHipotecario: "+ nota1 + "\nautomotriz: " + nota2 + "\nConsumo: " + nota3;

  } else {
    alert('Por favor, complete todos los campos para el resumen');
  }
}
