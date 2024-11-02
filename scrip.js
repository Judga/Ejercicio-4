function calcularPrima(salarioMensual, diasTrabajados, ausenciasInjustificadas, mesesTrabajados) {
   
    let primaBase = calcularPrimaBase(salarioMensual);
  
   
    let primaConDeducciones = calcularPrimaConDeducciones(primaBase, ausenciasInjustificadas);
  
   
    let primaFinal = calcularPrimaProporcional(primaConDeducciones, diasTrabajados, mesesTrabajados);
  
   
    return primaFinal;
  }
  
  function calcularPrimaBase(salarioMensual) {
    return salarioMensual * 0.30; 
  }
  
  function calcularPrimaConDeducciones(primaBase, ausenciasInjustificadas) {
    if (ausenciasInjustificadas > 5) {
      let porcentajeDeduccion = 0.10; 
      return primaBase * (1 - porcentajeDeduccion);
    } else {
      return primaBase;
    }
  }
  
  function calcularPrimaProporcional(primaConDeducciones, diasTrabajados, mesesTrabajados) {
    if (mesesTrabajados < 6) {
      let diasTotalesMes = 30; 
      return primaConDeducciones * ((diasTrabajados / (diasTotalesMes * mesesTrabajados)));
    } else {
      return primaConDeducciones;
    }
  }
  
  

  let entradaA = prompt("Por favor ingrese su salario mensual")
  let salarioMensual = entradaA;
  let entradaB = prompt("Por favor ingrese los dias trabajados")
  let diasTrabajados = entradaB;
  let entradaC = prompt("Por favor ingrese la cantidad de faltas injustificadas")
  let ausenciasInjustificadas = entradaC;
  let entradaD = prompt("Por favor ingrese la cantidad de meses trabajados")
  let mesesTrabajados = entradaD;
  

  let prima = calcularPrima(salarioMensual, diasTrabajados, ausenciasInjustificadas, mesesTrabajados);
  

  console.log("Prima final: " + prima);