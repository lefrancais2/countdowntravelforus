import { useState, useEffect } from "react";

const CountdownTimer = ({fecha}) => {
  // Estado para la fecha objetivo
  const [targetDate, setTargetDate] = useState(null);

  // Estado para la cuenta regresiva
  const [timeRemaining, setTimeRemaining] = useState({});

  // Manejar cambios en los campos de fecha y hora
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setTargetDate(new Date(selectedDate));
  };

  // Calcular el tiempo restante
  const calculateTimeRemaining = () => {
    if (!targetDate) return;

    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      setTimeRemaining({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    }
  };

  // Actualizar la cuenta regresiva cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
        // setTargetDate(new Date("2025-02-13T18:46"));
        // setTargetDate2(new Date("2025-02-01T00:00"));
        setTargetDate(new Date(fecha));
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, [targetDate,fecha]);

  return (
    <>
      {/* <label htmlFor="datetime">Selecciona la fecha y hora objetivo:</label>
      <input
        id="datetime"
        type="datetime-local"
        onChange={handleDateChange}
        style={{ margin: "10px" }}
      /> */}
      {targetDate  && targetDate > new Date() && (
        <div>
          
          <p>
            {timeRemaining.days} días, {timeRemaining.hours} horas,{" "}
            {timeRemaining.minutes} minutos, {timeRemaining.seconds} segundos
          </p>
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
