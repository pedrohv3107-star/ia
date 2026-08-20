// src/nlp/dynamicResponse.js
// Generador dinámico de respuestas futbolísticas inteligentes cuando la consulta no está en el dataset de Q&A.

const PLAYERS_KNOWLEDGE = {
  messi: "Lionel Messi es ampliamente considerado uno de los mejores futbolistas de la historia. Ha ganado 8 Balones de Oro, la Copa del Mundo Qatar 2022 con Argentina, 4 UEFA Champions League y más de 40 títulos oficiales en su carrera.",
  ronaldo: "Cristiano Ronaldo (CR7) es el máximo goleador histórico del fútbol profesional en partidos oficiales (más de 850 goles). Posee 5 Balones de Oro, 5 UEFA Champions League y una Eurocopa con Portugal.",
  mbappe: "Kylian Mbappé es uno de los delanteros más desequilibrantes del mundo por su velocidad explosiva y definición. Fue campeón del mundo en Rusia 2018 con Francia marcando en la final y anotó un hat-trick en la final de Qatar 2022.",
  haaland: "Erling Haaland es un androide del gol en la delantera. Rompió el récord de más goles en una sola temporada de Premier League y fue pilar del triplete del Manchester City en 2022/23.",
  vinicius: "Vinícius Jr. se ha consolidado como una de las estrellas más electrizantes del fútbol mundial, siendo decisivo para el Real Madrid con sus desbordes y goles en finales de la Champions League.",
  bellingham: "Jude Bellingham destaca por su llegada al área, madurez táctica e impacto ofensivo deslumbrante desde su llegada al fútbol de máxima élite.",
  pele: "Pelé ('O Rei') es la leyenda eterna del fútbol brasileño y el único jugador en la historia en ganar 3 Copas del Mundo (1958, 1962, 1970). Marca un antes y un después en este deporte.",
  maradona: "Diego Armando Maradona es un ícono inmortal del fútbol. Con su genialidad en el Mundial de México 1986 ('La Mano de Dios' y 'El Gol del Siglo' ante Inglaterra) lideró a Argentina a su segundo título mundial.",
  cruyff: "Johan Cruyff revolucionó el fútbol tanto como jugador (líder de la 'Naranja Mecánica') como técnico con la filosofía del 'Fútbol Total' en el Ajax y el Barcelona.",
  zidane: "Zinedine Zidane es un maestro de la elegancia y la visión de juego. Ganó el Mundial 1998, la Euro 2000, la Champions con su inolvidable volea en 2002 y como DT conquistó 3 Champions consecutivas con el Real Madrid.",
};

const TEAMS_KNOWLEDGE = {
  madrid: "El Real Madrid Club de Fútbol es el club más laureado en la historia de la UEFA Champions League, habiendo conquistado más de 14 copas europeas y dominado el fútbol continental en múltiples épocas.",
  barcelona: "El FC Barcelona es famoso por su estilo de juego basado en la posesión y el toque ('tiki-taka') alcanzando su época dorada bajo el mando de Pep Guardiola y el tridente histórico con Lionel Messi.",
  city: "El Manchester City, bajo la dirección táctica de Pep Guardiola, ha establecido una hegemonía en el fútbol inglés y conquistó su ansiada UEFA Champions League en 2023 completando un histórico triplete.",
  argentina: "La Selección de Argentina es tricampeona del mundo (1978, 1986, 2022) y ha alzado múltiples Copas América, destacando leyendas internacionales como Mario Kempes, Diego Maradona y Lionel Messi.",
  brasil: "La Selección de Brasil ('La Canarinha') es la máxima ganadora de Copas del Mundo en la historia de la FIFA con 5 títulos (1958, 1962, 1970, 1994, 2002).",
};

export function generateDynamicAnswer(userQuery) {
  if (!userQuery) return "Por favor, escribe una pregunta sobre fútbol.";
  
  const queryLower = userQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // 1. Detectar jugadores
  for (const [key, info] of Object.entries(PLAYERS_KNOWLEDGE)) {
    if (queryLower.includes(key)) {
      return `${info} ¿Te gustaría conocer más sobre sus números o su trayectoria en clubes?`;
    }
  }

  // 2. Detectar equipos
  for (const [key, info] of Object.entries(TEAMS_KNOWLEDGE)) {
    if (queryLower.includes(key)) {
      return `${info} ¿Deseas consultar datos de algún jugador en específico o títulos conquistados?`;
    }
  }

  // 3. Consultas sobre Balón de Oro / Goleadores
  if (queryLower.includes('balon de oro') || queryLower.includes('ballon d\'or')) {
    return "El Balón de Oro es el premio individual más prestigioso del fútbol entregado por la revista France Football. Lionel Messi posee el récord histórico con 8 galardones, seguido por Cristiano Ronaldo con 5.";
  }

  // 4. Consultas sobre la Champions League
  if (queryLower.includes('champions') || queryLower.includes('orejona') || queryLower.includes('ucl')) {
    return "La UEFA Champions League es la competición de clubes más prestigiosa del mundo. El Real Madrid encabeza el palmarés histórico, seguido por clubes como el AC Milan, Bayern Múnich y Liverpool.";
  }

  // 5. Consultas sobre el Mundial / FIFA World Cup
  if (queryLower.includes('mundial') || queryLower.includes('copa del mundo') || queryLower.includes('fifa')) {
    return "La Copa Mundial de la FIFA es la máxima cita del fútbol internacional que se celebra cada 4 años. Brasil lidera con 5 títulos, seguida por Alemania e Italia con 4 cada una, y Argentina con 3.";
  }

  // 6. Consultas sobre reglas (fuera de juego, VAR, penal)
  if (queryLower.includes('fuera de juego') || queryLower.includes('offsides')) {
    return "El fuera de juego se señala cuando un atacante se encuentra más cerca de la línea de meta contraria que el balón y el penúltimo adversario en el momento en que se le pasa el balón a él.";
  }

  if (queryLower.includes('var')) {
    return "El Asistente de Video de Arbitraje (VAR) se introdujo para corregir errores claros en 4 situaciones decisivas: goles, penaltis, tarjetas rojas directas e identificación de jugadores.";
  }

  // 7. Respuesta analítica general construida dinámicamente según la consulta
  const words = userQuery.trim().split(/\s+/);
  const keywordStr = words.slice(0, 5).join(' ');

  return `Respecto a "${keywordStr}...", es un tema fascinante dentro del fútbol. Mi análisis táctico y estadístico indica que es un aspecto determinante en la dinámica de juego actual. ¿Podrías ser más específico con el nombre del equipo, jugador o torneo que deseas consultar?`;
}
