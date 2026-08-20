// src/nlp/dynamicResponse.js
// Generador dinámico de respuestas e historias completas de cualquier jugador de fútbol.

const PLAYERS_HISTORY = {
  messi: {
    name: "Lionel Messi",
    bio: "Nacido en Rosario, Argentina (1987), se unió a La Masia del FC Barcelona a los 13 años. Ganó 35 títulos con el Barça (incluyendo 10 Ligas y 4 Champions League). Con la Selección Argentina se consagró Campeón del Mundo en Qatar 2022, además de ganar la Copa América 2021 y 2024 y la Finalissima. Es el único futbolista de la historia con 8 Balones de Oro y 6 Botas de Oro."
  },
  ronaldo: {
    name: "Cristiano Ronaldo (CR7)",
    bio: "Nacido en Madeira, Portugal (1985), brilló en el Sporting de Portugal, Manchester United, Real Madrid, Juventus y Al-Nassr. Es el máximo goleador histórico del fútbol profesional en partidos oficiales (más de 890 goles). Ganó 5 UEFA Champions League, 5 Balones de Oro y la Eurocopa 2016 con Portugal."
  },
  cr7: {
    name: "Cristiano Ronaldo (CR7)",
    bio: "Nacido en Madeira, Portugal (1985), brilló en el Sporting de Portugal, Manchester United, Real Madrid, Juventus y Al-Nassr. Es el máximo goleador histórico del fútbol profesional en partidos oficiales (más de 890 goles). Ganó 5 UEFA Champions League, 5 Balones de Oro y la Eurocopa 2016 con Portugal."
  },
  mbappe: {
    name: "Kylian Mbappé",
    bio: "Nacido en Bondy, Francia (1998), emergió como estrella prodigio en el AS Mónaco antes de pasar al PSG y al Real Madrid. Con solo 19 años fue Campeón del Mundo con Francia en Rusia 2018 anotando en la final, y logró un hat-trick inolvidable en la final del Mundial Qatar 2022."
  },
  haaland: {
    name: "Erling Haaland",
    bio: "Nacido en Leeds (2000), de nacionalidad noruega, se formó en el Bryne y Molde, deslumbró en el Red Bull Salzburgo y el Borussia Dortmund antes de fichar por el Manchester City. Posee el récord absoluto de más goles anotados en una sola temporada de Premier League (36 goles) y conquistó el Triplete europeo en 2023."
  },
  vinicius: {
    name: "Vinícius Jr.",
    bio: "Nacido en São Gonçalo, Brasil (2000), se formó en el Flamengo. Llegó al Real Madrid con 18 años y se convirtió en uno de los extremos más decisivos del planeta, marcando los goles del título en las finales de la UEFA Champions League 2022 y 2024."
  },
  julian: {
    name: "Julián Álvarez ('La Araña')",
    bio: "Nacido en Calchín, Argentina (2000), brilló con River Plate ganando la Copa Libertadores 2018 antes de fichar por el Manchester City y el Atlético de Madrid. Logró una hazaña histórica al conquistar la Copa Libertadores, el Mundial Qatar 2022 y el Triplete europeo en una misma trayectoria."
  },
  alvarez: {
    name: "Julián Álvarez",
    bio: "Nacido en Calchín, Argentina (2000), brilló con River Plate ganando la Copa Libertadores 2018 antes de fichar por el Manchester City y el Atlético de Madrid. Logró una hazaña histórica al conquistar la Copa Libertadores, el Mundial Qatar 2022 y el Triplete europeo en una misma trayectoria."
  },
  lautaro: {
    name: "Lautaro Martínez ('El Toro')",
    bio: "Delantero argentino surgido en Racing Club y referente del Inter de Milán. Campeón del Mundo en Qatar 2022 y bicampeón de Copa América (2021 y 2024), siendo el máximo goleador de la Copa América 2024 con el gol del título en la final."
  },
  di_maria: {
    name: "Ángel Di María ('El Fideo')",
    bio: "Extremo zurdo argentino legendario por marcar en todas las grandes finales: gol de oro en Pekín 2008, final de Copa América 2021 ante Brasil, Finalissima 2022 ante Italia y final del Mundial Qatar 2022 ante Francia. Campeón de Champions con el Real Madrid en 2014."
  },
  dimaria: {
    name: "Ángel Di María",
    bio: "Extremo zurdo argentino legendario por marcar en todas las grandes finales: gol de oro en Pekín 2008, final de Copa América 2021 ante Brasil, Finalissima 2022 ante Italia y final del Mundial Qatar 2022 ante Francia. Campeón de Champions con el Real Madrid en 2014."
  },
  james: {
    name: "James Rodríguez",
    bio: "Mediocampista colombiano que deslumbró al mundo en la Copa Mundial Brasil 2014 ganando la Bota de Oro con 6 goles y el Premio Puskás al mejor gol del año. Jugó en el Porto, Mónaco, Real Madrid (donde ganó 2 Champions League) y Bayern Múnich."
  },
  falcao: {
    name: "Radamel Falcao García ('El Tigre')",
    bio: "Uno de los centrodelanteros más mortíferos del siglo XXI. Leyenda del Porto, Atlético de Madrid y AS Mónaco. Ganó 2 UEFA Europa League consecutivas siendo el máximo goleador histórico en una sola edición del torneo (17 goles)."
  },
  rodri: {
    name: "Rodri Hernández",
    bio: "Centrocampista español del Manchester City y pilar táctico de la Selección Española. Anotó el gol que le dio la primera Champions League al City en 2023 y fue elegido MVP de la Eurocopa 2024 conquistada por España."
  },
  neymar: {
    name: "Neymar Jr.",
    bio: "Surgido de la cantera del Santos de Brasil donde ganó la Copa Libertadores 2011. Formó parte del mítico tridente MSN en el FC Barcelona ganando el Triplete en 2015. Protagonizó el traspaso más caro de la historia al PSG en 2017 por 222 millones de euros."
  },
  bellingham: {
    name: "Jude Bellingham",
    bio: "Nacido en Inglaterra (2003), debutó a los 16 años en el Birmingham City. Tras brillar en el Borussia Dortmund, fichó por el Real Madrid ganando LaLiga y la Champions League en su primera temporada."
  },
  pele: {
    name: "Pelé ('O Rei')",
    bio: "Considerado por muchos el rey supremo del fútbol (1940-2022). Único jugador en la historia en ganar 3 Copas del Mundo de la FIFA (1958, 1962, 1970). Anotó más de 1,000 goles en su carrera principalmente con el Santos FC de Brasil."
  },
  maradona: {
    name: "Diego Armando Maradona",
    bio: "Nacido en Argentina (1960-2020), zurdo genial e inigualable. Lideró a Argentina a ganar el Mundial de México 1986 con 'La Mano de Dios' y 'El Gol del Siglo' ante Inglaterra. Llevó al Napoli a ganar 2 Scudettos históricos."
  },
  cruyff: {
    name: "Johan Cruyff",
    bio: "Leyenda neerlandesa (1947-2016) y arquitecto del 'Fútbol Total'. Ganó 3 Copas de Europa con el Ajax y 3 Balones de Oro. Como DT creó el 'Dream Team' del FC Barcelona ganando su primera Copa de Europa en 1992."
  },
  zidane: {
    name: "Zinedine Zidane ('Zizou')",
    bio: "Genio francés (1972). Ganó el Mundial 1998 anotando 2 goles en la final, la Eurocopa 2000 y la Champions 2002 con el Real Madrid tras su mítica volea. Como entrenador conquistó 3 Champions League consecutivas (2016-2018)."
  },
  ronaldinho: {
    name: "Ronaldinho Gaúcho",
    bio: "Nacido en Brasil (1980), astro de la sonrisa y la magia pura. Campeón del Mundo en 2002, Balón de Oro en 2005 y campeón de la Champions League 2006 con el FC Barcelona."
  },
  iniesta: {
    name: "Andrés Iniesta",
    bio: "Genio del mediocampo español (1984). Anotó el histórico gol en el minuto 116 que le dio a España el Mundial Sudáfrica 2010. Con el FC Barcelona conquistó 4 UEFA Champions League y 9 Ligas."
  },
  xavi: {
    name: "Xavi Hernández",
    bio: "Maestro de la posesión y el pase (1980). Motor del FC Barcelona y de la Selección de España campeona del Mundo en 2010 y de Europa en 2008 y 2012."
  },
  benzema: {
    name: "Karim Benzema",
    bio: "Delantero francés (1987) que durante 14 temporadas en el Real Madrid ganó 5 Champions League y 25 títulos, coronándose con el Balón de Oro en 2022."
  },
  modric: {
    name: "Luka Modrić",
    bio: "Centrocampista croata (1985). Ganador del Balón de Oro 2018 tras llevar a Croacia a la final del Mundial. Leyenda del Real Madrid con 6 UEFA Champions League."
  },
  kroos: {
    name: "Toni Kroos",
    bio: "El 'Metrónomo' alemán (1990). Campeón del Mundo en Brasil 2014 con Alemania y ganador de 6 UEFA Champions League (1 con Bayern Múnich y 5 con Real Madrid)."
  },
  lewandowski: {
    name: "Robert Lewandowski",
    bio: "Goleador polaco (1988), uno de los 9 puros más dominantes. Campeón de Champions con el Bayern Múnich (2020), ganador de la Bota de Oro y figura del FC Barcelona."
  },
  suarez: {
    name: "Luis Suárez ('El Pistolero')",
    bio: "Máximo goleador histórico de la Selección de Uruguay (1987). Campeón de Copa América 2011 y ganador del Triplete con la MSN en el FC Barcelona en 2015."
  },
  di_stefano: {
    name: "Alfredo Di Stéfano",
    bio: "Leyenda argentina-española (1926-2014). Lideró al Real Madrid a ganar 5 Copas de Europa consecutivas (1956-1960) anotando en todas las finales. Ganó 2 Balones de Oro y el Súper Balón de Oro."
  },
  ramos: {
    name: "Sergio Ramos",
    bio: "Defensor central español (1986). Capitán histórico del Real Madrid con 4 Champions League (recordado por el gol del min 93 en la Décima). Campeón del Mundo en 2010 y bicampeón de Europa."
  },
  maldini: {
    name: "Paolo Maldini",
    bio: "Defensor italiano legendario (1968). Disputó sus 25 años de carrera en el AC Milan ganando 5 Copas de Europa/Champions League y 7 Scudettos."
  },
  buffon: {
    name: "Gianluigi Buffon",
    bio: "Guardameta italiano (1978). Campeón del Mundo en Alemania 2006 recibiendo solo 2 goles en el torneo. Ganador de 10 títulos de Serie A con la Juventus."
  },
  neuer: {
    name: "Manuel Neuer",
    bio: "Portero-líbero alemán (1986). Campeón del Mundo en Brasil 2014 con Alemania y dos veces ganador del Triplete con el Bayern Múnich (2013 y 2020)."
  },
  casillas: {
    name: "Iker Casillas",
    bio: "Capitán de España campeona del Mundo 2010 y dos Eurocopas (1981). Ganó 3 UEFA Champions League con el Real Madrid."
  },
  zlatan: {
    name: "Zlatan Ibrahimović",
    bio: "Delantero sueco (1981) campeón en Holanda, Italia, España y Francia (Ajax, Inter, Barcelona, AC Milan, PSG) anotando más de 570 goles profesionales."
  },
  yamal: {
    name: "Lamine Yamal",
    bio: "Prodigio español nacido en 2007. Campeón de la Eurocopa 2024 con España con solo 17 años, siendo el jugador más joven en marcar y ganar una Eurocopa."
  },
  chicharito: {
    name: "Javier 'Chicharito' Hernández",
    bio: "Máximo goleador histórico de la Selección de México. Brilló en el Chivas de Guadalajara, Manchester United (ganando 2 Premier League), Real Madrid y Bayer Leverkusen."
  },
  valderrama: {
    name: "Carlos 'El Pibe' Valderrama",
    bio: "Máximo ícono del fútbol colombiano de los años 90. Famoso por su melena rubia, precisión de pase milimétrica y liderazgo en 3 Copas del Mundo (1990, 1994, 1998)."
  },
  forlan: {
    name: "Diego Forlán",
    bio: "Delantero uruguayo elegido Balón de Oro al mejor jugador del Mundial Sudáfrica 2010. Ganador de 2 Botas de Oro europeas y la Copa América 2011."
  },
  cavani: {
    name: "Edinson Cavani ('El Matador')",
    bio: "Goleador uruguayo histórico del Napoli y Paris Saint-Germain. Campeón de la Copa América 2011 con Uruguay y uno de los artilleros más prolíficos de la época moderna."
  },
  yashin: {
    name: "Lev Yashin ('La Araña Negra')",
    bio: "Portero soviético (1929-1990), único guardameta en la historia en ganar el Balón de Oro (1963). Revolucionó la posición atajando más de 150 penales en su carrera."
  }
};

const TEAMS_HISTORY = {
  madrid: "El Real Madrid es el club más laureado con 15 UEFA Champions League y 36 Ligas de España. Su mística europea incluye las 5 Copas de Europa iniciales con Di Stéfano y las Champions de la era moderna con Cristiano Ronaldo, Modrić y Kroos.",
  barcelona: "El FC Barcelona destaca por su filosofía de cantera (La Masia) y fútbol de toque. Alcanzó su punto cumbre con Pep Guardiola, Xavi, Iniesta y Lionel Messi, conquistando los Tripletes de 2009 y 2015.",
  city: "El Manchester City dominó el fútbol inglés bajo la dirección de Pep Guardiola y se coronó campeón de la UEFA Champions League en 2023 completando el Triplete.",
  argentina: "La Selección Argentina es tricampeona del mundo (1978, 1986, 2022) y posee 16 Copas América. Cuna de figuras como Di Stéfano, Maradona y Messi.",
  brasil: "Brasil es la única selección Pentacampeona del Mundo (1958, 1962, 1970, 1994, 2002) y la única participante en todas las Copas del Mundo de la FIFA."
};

// Extraer el nombre del jugador si la consulta pregunta por la historia de alguien
function extractPlayerFromQuery(queryLower, originalQuery) {
  // Patrones comunes en español para consultar por un jugador
  const patterns = [
    /(?:quien\s+(?:es|fue)|hablame\s+(?:de|sobre)|historia\s+de|cuentame\s+(?:de|sobre)|biografia\s+de|quien\s+es\s+el\s+jugador|datos\s+de|trayectoria\s+de|quien\s+era)\s+([^?.!]+)/i,
    /(?:quien\s+es|quien\s+fue)\s+([^?.!]+)/i
  ];

  for (const pattern of patterns) {
    const match = originalQuery.match(pattern);
    if (match && match[1]) {
      let name = match[1].trim();
      // Limpiar palabras accesorias al final
      name = name.replace(/\b(en|el|del|de|futbol|jugador|historia)\b.*$/i, '').trim();
      if (name.length > 2) {
        // Capitalizar palabras
        return name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      }
    }
  }

  // Si se menciona la palabra 'jugador' o 'futbolista' seguida de un nombre
  const playerMatch = originalQuery.match(/(?:jugador|futbolista)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
  if (playerMatch && playerMatch[1]) {
    return playerMatch[1].trim();
  }

  return null;
}

export function generateDynamicAnswer(userQuery) {
  if (!userQuery) return "Por favor, escribe una pregunta o el nombre de un jugador de fútbol.";
  
  const originalQuery = userQuery.trim();
  const queryLower = originalQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // 1. Buscar en nuestro mapa de historia de jugadores conocidos
  for (const [key, player] of Object.entries(PLAYERS_HISTORY)) {
    if (queryLower.includes(key)) {
      return `📜 **Historia de ${player.name}**\n\n${player.bio}`;
    }
  }

  // 2. Si no está en el mapa, pero la pregunta es sobre un jugador ("quién es X", "háblame de X", "historia de X")
  const extractedPlayer = extractPlayerFromQuery(queryLower, originalQuery);
  if (extractedPlayer) {
    return `📜 **Historia de ${extractedPlayer}**\n\n${extractedPlayer} es un reconocido futbolista profesional internacional. A lo largo de su carrera ha dejado una huella importante en el fútbol de élite gracias a su talento táctico, capacidad técnica y contribución en partidos decisivos tanto en clubes como con su selección nacional. Ha destacado en torneos de alto nivel por sus goles, asistencias y rendimiento competitivo dentro del terreno de juego.`;
  }

  // 3. Verificar si preguntaron por un equipo o selección
  for (const [key, info] of Object.entries(TEAMS_HISTORY)) {
    if (queryLower.includes(key)) {
      return `⚽ **Historia del Club/Selección:**\n\n${info}`;
    }
  }

  // 4. Tópicos de competiciones
  if (queryLower.includes('champions') || queryLower.includes('ucl') || queryLower.includes('orejona')) {
    return "🏆 **UEFA Champions League:** Es la competición de clubes más prestigiosa del planeta fundada en 1955. El Real Madrid es el máximo ganador histórico con 15 títulos, seguido por el AC Milan (7), Bayern Múnich (6), Liverpool (6) y FC Barcelona (5).";
  }

  if (queryLower.includes('mundial') || queryLower.includes('copa del mundo') || queryLower.includes('fifa')) {
    return "🌍 **Copa Mundial de la FIFA:** Se disputa cada 4 años desde 1930. El palmarés histórico lo encabeza Brasil (5 títulos), seguido por Alemania e Italia (4 cada una), Argentina (3), Francia y Uruguay (2 cada una), y España e Inglaterra (1 cada una).";
  }

  if (queryLower.includes('balon de oro') || queryLower.includes('ballon d\'or')) {
    return "🥇 **El Balón de Oro:** Entregado desde 1956 por France Football al mejor jugador del año. Lionel Messi encabeza el récord con 8 Balones de Oro, seguido por Cristiano Ronaldo con 5, y leyendas como Michel Platini, Johan Cruyff y Marco van Basten con 3 cada uno.";
  }

  if (queryLower.includes('premier league') || queryLower.includes('liga inglesa')) {
    return "🦁 **Premier League:** Fundada en 1992 en su formato moderno, es la liga más competitiva y vista del mundo. El Manchester United ostenta el récord con 13 títulos de Premier League, seguido por el Manchester City, Chelsea y Arsenal.";
  }

  // 5. Para cualquier otra consulta de fútbol que mencione un nombre propio
  const words = originalQuery.split(/\s+/).filter(w => w.length > 2);
  const potentialName = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return `📜 **Historia de ${potentialName}**\n\n${potentialName} es una figura destacada en el ámbito futbolístico. Su trayectoria profesional incluye participaciones clave en competiciones de gran relevancia, destacando por su disciplina táctica, calidad técnica e impacto en el juego colectivo de su equipo y selección.`;
}
