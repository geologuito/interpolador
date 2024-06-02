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
  let cotaP1 = parseFloat(document.getElementById("cotaP1").value);
  let cotaP2 = parseFloat(document.getElementById("cotaP2").value);
  let distanciaP1P2 = parseFloat(document.getElementById("distanciaP1P2").value);
  let cotaInterpolacion = parseFloat(document.getElementById("cotaInterpolacion").value);

  let distanciaInterpolacion = calcularDistanciaInterpolacion(cotaP1, cotaP2, distanciaP1P2, cotaInterpolacion);

  //verifico que no haya inputs vacios
  let mensaje = (!isNaN(distanciaInterpolacion))
    ? `La distancia interpolada para una cota de ${cotaInterpolacion} metros es  ${distanciaInterpolacion} centimetros (midiendo desde el punto1).`
    : `por favor ingrese los datos correctamente`

  document.getElementById("resultado").innerHTML = mensaje

}
