import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Estado para la fecha objetivo
  const [targetDate, setTargetDate] = useState(null);
  const [targetDate2, setTargetDate2] = useState(null);

  // Estado para la cuenta regresiva
  const [timeRemaining, setTimeRemaining] = useState({});
  const [timeRemaining2, setTimeRemaining2] = useState({});

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
    const difference2 = targetDate2 - now;

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

    if (difference2 <= 0) {
      setTimeRemaining2({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      const days = Math.floor(difference2 / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference2 / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference2 / (1000 * 60)) % 60);
      const seconds = Math.floor((difference2 / 1000) % 60);

      setTimeRemaining2({ days, hours, minutes, seconds });
    }
  };

  // Actualizar la cuenta regresiva cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
        setTargetDate(new Date("2025-02-13T18:46"));
        setTargetDate2(new Date("2025-02-01T00:00"));
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, [targetDate,targetDate2]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Cuenta Regresiva</h1>
      {/* <label htmlFor="datetime">Selecciona la fecha y hora objetivo:</label>
      <input
        id="datetime"
        type="datetime-local"
        onChange={handleDateChange}
        style={{ margin: "10px" }}
      /> */}
      {targetDate && (
        <div>
          <h2>Tiempo Restante</h2>
          <p>
            {timeRemaining.days} días, {timeRemaining.hours} horas,{" "}
            {timeRemaining.minutes} minutos, {timeRemaining.seconds} segundos
          </p>
          <p>
            {timeRemaining2.days} días, {timeRemaining2.hours} horas,{" "}
            {timeRemaining2.minutes} minutos, {timeRemaining2.seconds} segundos
          </p>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
