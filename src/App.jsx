import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const dia_calculado = 1000 * 60 * 60 * 24;


  function calculateTime(){
    const fechaActual = new Date();

    const fechaFutura = new Date('2025-08-15T22:49:30');

    const diferenciaTiempo = fechaFutura - fechaActual;

    // Convertir milisegundos a días, horas, minutos y segundos
    const dias = Math.floor(diferenciaTiempo / dia_calculado);
    const horas = Math.floor((diferenciaTiempo % dia_calculado) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenciaTiempo % (1000 * 60)) / 1000);

    let numMeses = dias / 30;
    setMonths(Math.floor(numMeses));

    let calculo_dias = Math.floor((numMeses - months)*30);
    setDays(calculo_dias);
    
    setHour(horas);
    
    setMinutes(minutos);
    
    setSeconds(segundos);





    // console.log("mes number: " + fechaActual.getMonth());
    // console.log("hora number: " + fechaActual.getHours());
    // console.log("minuto number: " + fechaActual.getMinutes());
    // console.log("segundo number: " + fechaActual.getSeconds());

    // Mostrar el tiempo restante
    // console.log(`Tiempo restante: ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`);
  }
  
  useEffect(() => {
    
    calculateTime(); 

  })

  setInterval(() => {
    if(hour === 0){
      setHour(23);
    }
    setHour(hour - 1);
  }, 3600000)

  setInterval(() => {
    if(minutes === 0){
      setMinutes(59);
    }
    setMinutes(minutes - 1);
  },60000);

  setInterval(() => {
    if(seconds === 0){
      setSeconds(59);
    }
      setSeconds(seconds - 1);
  },1000);

  return (
    <>
      <h1>Count down now</h1>
      <p>
        {months} meses {days} días {hour < 10 ? `0${hour}` : hour} horas {minutes < 10 ? `0${minutes}` : minutes} minutos {seconds < 10 ? `0${seconds}` : seconds} segundos
      </p>
    </>
  )
}

export default App
