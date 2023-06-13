function calcularDistanciaInterpolacion(cotaP1, cotaP2, distanciaP1P2, cotaInterpolacion) {
    // Calcular la diferencia de cotas
    let diferenciaCota = cotaP2 - cotaP1;
  
    // Calcular la razón entre la diferencia de cotas y la distancia entre los puntos
    let razon = diferenciaCota / distanciaP1P2;
  
    // Calcular la distancia de interpolación
    let distanciaInterpolacion = (cotaInterpolacion - cotaP1) / razon;
  
    return distanciaInterpolacion;
  }
  
  function calcularYMostrarDistanciaInterpolacion() {
    var cotaP1 = parseFloat(document.getElementById("cotaP1").value);
    var cotaP2 = parseFloat(document.getElementById("cotaP2").value);
    var distanciaP1P2 = parseFloat(document.getElementById("distanciaP1P2").value);
    var cotaInterpolacion = parseFloat(document.getElementById("cotaInterpolacion").value);
  
    var distanciaInterpolacion = calcularDistanciaInterpolacion(cotaP1, cotaP2, distanciaP1P2, cotaInterpolacion);
  
    document.getElementById("resultado").innerHTML = "La distancia interpolada para una cota de " + cotaInterpolacion + " metros es " + distanciaInterpolacion + " centimetros (medir desde el punto1).";
  }
  