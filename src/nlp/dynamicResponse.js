// src/nlp/dynamicResponse.js
// Generador de respuestas dinámicas multi-tema (Fútbol e Información General)

const PLAYERS_HISTORY = {
  messi: {
    name: "Lionel Messi",
    bio: "Historia de Lionel Messi: Nacido en Rosario, Argentina (1987), se unió a La Masia del FC Barcelona a los 13 años. Ganó 35 títulos con el Barça (incluyendo 10 Ligas y 4 Champions League). Con la Selección Argentina se consagró Campeón del Mundo en Qatar 2022, además de ganar la Copa América 2021 y 2024. Es el único futbolista con 8 Balones de Oro y 6 Botas de Oro."
  },
  ronaldo: {
    name: "Cristiano Ronaldo",
    bio: "Historia de Cristiano Ronaldo: Nacido en Madeira, Portugal (1985), brilló en el Sporting de Portugal, Manchester United, Real Madrid, Juventus y Al-Nassr. Es el máximo goleador histórico del fútbol profesional (más de 890 goles). Ganó 5 UEFA Champions League, 5 Balones de Oro y la Eurocopa 2016 con Portugal."
  },
  cr7: {
    name: "Cristiano Ronaldo (CR7)",
    bio: "Historia de Cristiano Ronaldo: Nacido en Madeira, Portugal (1985), brilló en el Sporting de Portugal, Manchester United, Real Madrid, Juventus y Al-Nassr. Es el máximo goleador histórico del fútbol profesional (más de 890 goles). Ganó 5 UEFA Champions League, 5 Balones de Oro y la Eurocopa 2016 con Portugal."
  },
  mbappe: {
    name: "Kylian Mbappé",
    bio: "Historia de Kylian Mbappé: Nacido en Bondy, Francia (1998), emergió como estrella prodigio en el AS Mónaco antes de pasar al PSG y al Real Madrid. Con solo 19 años fue Campeón del Mundo con Francia en Rusia 2018 y anotó un hat-trick en la final del Mundial Qatar 2022."
  },
  haaland: {
    name: "Erling Haaland",
    bio: "Historia de Erling Haaland: Nacido en Leeds (2000), de nacionalidad noruega, se formó en el Bryne y el Molde, deslumbró en el Red Bull Salzburgo y el Borussia Dortmund antes de fichar por el Manchester City. Posee el récord de más goles anotados en una sola temporada de Premier League (36 goles) y conquistó el Triplete en 2023."
  },
  vinicius: {
    name: "Vinícius Jr.",
    bio: "Historia de Vinícius Jr.: Nacido en São Gonçalo, Brasil (2000), se formó en las categorías inferiores del Flamengo. Llegó al Real Madrid con 18 años y se convirtió en uno de los extremos más decisivos del planeta, anotando los goles de la victoria en las finales de la UEFA Champions League 2022 y 2024."
  },
  neymar: {
    name: "Neymar Jr.",
    bio: "Historia de Neymar Jr.: Surgido de la cantera del Santos de Brasil donde ganó la Copa Libertadores 2011, formó parte del mítico tridente MSN en el FC Barcelona ganando el triplete en 2015. Protagonizó el traspaso más caro de la historia al PSG en 2017 por 222 millones de euros y ganó la medalla de oro olímpica con Brasil en 2016."
  },
  bellingham: {
    name: "Jude Bellingham",
    bio: "Historia de Jude Bellingham: Nacido en Stourbridge, Inglaterra (2003), debutó profesionalmente a los 16 años en el Birmingham City. Tras un exitoso paso por el Borussia Dortmund, fichó por el Real Madrid donde tuvo un impacto goleador inmediato, ganando LaLiga y la Champions League en su primera temporada."
  },
  pele: {
    name: "Pelé (Edson Arantes do Nascimento)",
    bio: "Historia de Pelé: Considerado 'O Rei' (El Rey) del fútbol (1940-2022). Es el único jugador en la historia en ganar 3 Copas del Mundo de la FIFA (Suecia 1958, Chile 1962 y México 1970). Desarrolló casi toda su carrera profesional en el Santos FC de Brasil, anotando más de 1,000 goles en su trayectoria."
  },
  maradona: {
    name: "Diego Armando Maradona",
    bio: "Historia de Diego Maradona: Nacido en Lanús, Argentina (1960-2020), astro zurdo inigualable. Lideró a Argentina a conquistar el Mundial de México 1986, protagonizando la 'Mano de Dios' y 'El Gol del Siglo' ante Inglaterra. En el Napoli italiano se convirtió en leyenda ganando 2 Scudettos históricos."
  },
  cruyff: {
    name: "Johan Cruyff",
    bio: "Historia de Johan Cruyff: Mito neerlandés (1947-2016), referente absoluto del 'Fútbol Total'. Ganó 3 Copas de Europa consecutivas con el Ajax y 3 Balones de Oro. Como entrenador creó el 'Dream Team' del FC Barcelona ganando su primera Copa de Europa en 1992 y sentando las bases del estilo azulgrana."
  },
  zidane: {
    name: "Zinedine Zidane",
    bio: "Historia de Zinedine Zidane: Leyenda francesa nacida en Marsella (1972). Ganó la Copa del Mundo 1998 anotando dos goles en la final, la Eurocopa 2000 y la Champions 2002 con el Real Madrid con una inolvidable volea. Como director técnico hizo historia al ganar 3 Champions League consecutivas (2016, 2017, 2018)."
  },
  ronaldinho: {
    name: "Ronaldinho Gaúcho",
    bio: "Historia de Ronaldinho: Nacido en Porto Alegre, Brasil (1980), mago de la sonrisa y la gambeta. Campeón del Mundo en Corea-Japón 2002, Balón de Oro en 2005 y campeón de la Champions League 2006 con el FC Barcelona, siendo aplaudido de pie por el Santiago Bernabéu."
  },
  iniesta: {
    name: "Andrés Iniesta",
    bio: "Historia de Andrés Iniesta: Genio del mediocampo español nacido en Fuentealbilla (1984). Formado en La Masia, marcó el gol legendario en el minuto 116 que le dio a España su primera Copa del Mundo en Sudáfrica 2010. Con el FC Barcelona conquistó 4 UEFA Champions League y 9 Ligas."
  },
  xavi: {
    name: "Xavi Hernández",
    bio: "Historia de Xavi Hernández: Maestro del pase y la posesión (1980). Motor del mejor Barcelona de la historia y de la Selección Española campeona del Mundo en 2010 y bicampeona de Europa (2008, 2012). Jugó más de 700 partidos con el Barça ganando 25 títulos."
  },
  benzema: {
    name: "Karim Benzema",
    bio: "Historia de Karim Benzema: Delantero francés (1987) surgido del Olympique de Lyon. Durante 14 temporadas en el Real Madrid ganó 5 Champions League y 25 títulos, coronándose con el Balón de Oro en 2022 tras una temporada goleadora memorable."
  },
  modric: {
    name: "Luka Modrić",
    bio: "Historia de Luka Modrić: Centrocampista croata (1985). Ganador del Balón de Oro 2018 tras liderar a Croacia a la final del Mundial de Rusia 2018. Leyenda del Real Madrid con 6 UEFA Champions League en su palmarés."
  },
  kroos: {
    name: "Toni Kroos",
    bio: "Historia de Toni Kroos: El 'Metrónomo' alemán (1990). Campeón del Mundo en Brasil 2014 con Alemania y ganador de 6 UEFA Champions League (1 con Bayern Múnich y 5 con el Real Madrid), retirándose en la cima de su carrera."
  },
  lewandowski: {
    name: "Robert Lewandowski",
    bio: "Historia de Robert Lewandowski: Artillero polaco (1988), uno de los 9 puros más letales del siglo XXI. Ganó la Champions League con el Bayern Múnich (2020) y la Bota de Oro europea en múltiples ocasiones antes de fichar por el FC Barcelona."
  },
  suarez: {
    name: "Luis Suárez",
    bio: "Historia de Luis Suárez: 'El Pistolero' uruguayo (1987). Máximo goleador histórico de la Selección de Uruguay, ganador de la Copa América 2011 y miembro de la MSN en el FC Barcelona con quien conquistó el Triplete en 2015 y la Bota de Oro."
  },
  di_stefano: {
    name: "Alfredo Di Stéfano",
    bio: "Historia de Alfredo Di Stéfano: 'La Saeta Rubia' (1926-2014). Leyenda argentina-española que lideró al Real Madrid a ganar 5 Copas de Europa consecutivas (1956-1960), anotando en las 5 finales. Ganó 2 Balones de Oro y el Súper Balón de Oro."
  },
  ramos: {
    name: "Sergio Ramos",
    bio: "Historia de Sergio Ramos: Defensor central español (1986). Capitán histórico del Real Madrid con 4 Champions League (recordado por el gol del minuto 93 en la Décima). Campeón del Mundo (2010) y bicampeona de Europa con la Selección de España."
  },
  maldini: {
    name: "Paolo Maldini",
    bio: "Historia de Paolo Maldini: 'Il Capitano' del AC Milan (1968). Disputó toda su carrera de 25 años en el Milan ganando 5 Copas de Europa/Champions League y 7 Scudettos. Considerado por muchos el mejor defensor de la historia."
  },
  buffon: {
    name: "Gianluigi Buffon",
    bio: "Historia de Gianluigi Buffon: Legendario guardameta italiano (1978). Campeón del Mundo en Alemania 2006 recibiendo solo 2 goles en todo el torneo. Símbolo absoluto de la Juventus ganando 10 títulos de Serie A."
  },
  neuer: {
    name: "Manuel Neuer",
    bio: "Historia de Manuel Neuer: Portero-líbero alemán (1986) que revolucionó la posición de guardameta. Campeón del Mundo en Brasil 2014 con Alemania y doble ganador del Triplete con el Bayern Múnich (2013 y 2020)."
  },
  casillas: {
    name: "Iker Casillas",
    bio: "Historia de Iker Casillas: 'El Santo' (1981). Capitán histórico de España campeona del Mundo en 2010 y dos Eurocopas. Con el Real Madrid ganó 3 UEFA Champions League disputando más de 700 partidos."
  },
  zlatan: {
    name: "Zlatan Ibrahimović",
    bio: "Historia de Zlatan Ibrahimović: Delantero sueco de personalidad arrolladora (1981). Campeón de liga en Holanda, Italia, España y Francia (Ajax, Inter, Barcelona, AC Milan, PSG). Marcó más de 570 goles en su carrera profesional."
  },
  yamal: {
    name: "Lamine Yamal",
    bio: "Historia de Lamine Yamal: Prodigio español nacido en 2007. Se convirtió en el jugador y goleador más joven en la historia de la Eurocopa, conquistando la Euro 2024 con España con solo 17 años y brillando en el FC Barcelona."
  }
};

const TEAMS_HISTORY = {
  madrid: "El Real Madrid es el club más grande en títulos continentales con 15 Copas de Europa / UEFA Champions League y 36 Ligas de España. Su historia está marcada por la época de Di Stéfano en los años 50 y la era de las Champions modernas con Cristiano Ronaldo, Modric y Kroos.",
  barcelona: "El FC Barcelona fue fundado en 1899 en Cataluña. Su filosofía cambió con Johan Cruyff en los 90 y alcanzó el cenit histórico con el 'Tiki-Taka' de Pep Guardiola, Xavi, Iniesta y Lionel Messi, ganando 2 Tripletes (2009 y 2015).",
  city: "El Manchester City es uno de los clubes más poderosos de la actualidad. Bajo el proyecto de Pep Guardiola dominó la Premier League y alzó el histórico Triplete en 2023 venciendo al Inter en la final de la Champions League.",
  argentina: "La Selección de Fútbol de Argentina ostenta 3 Copas del Mundo (1978, 1986 y 2022) y 16 Copas América. Ha sido la cuna de astros universales de la talla de Alfredo Di Stéfano, Diego Armando Maradona y Lionel Messi.",
  brasil: "Brasil es el 'Pentacampeón' del mundo, siendo la única selección que ha ganado 5 Mundiales de la FIFA (1958, 1962, 1970, 1994, 2002) y la única en clasificar a las 22 ediciones del torneo.",
};

// Generador de respuestas para cualquier otro tema no futbolístico
function generateGeneralKnowledgeAnswer(queryLower, rawQuery) {
  // Ciencia y Naturaleza
  if (queryLower.includes('fotosintesis')) {
    return "La **fotosíntesis** es el proceso químico mediante el cual las plantas, algas y algunas bacterias convierten la luz solar, el dióxido de carbono y el agua en glucosa (energía) y oxígeno. Es fundamental para la vida en la Tierra ya que produce el oxígeno que respiramos.";
  }
  if (queryLower.includes('gravedad') || queryLower.includes('einstein') || queryLower.includes('newton')) {
    return "La **gravedad** es la fuerza de atracción entre los objetos con masa. Isaac Newton formuló la ley de la gravitación universal, mientras que Albert Einstein explicó en la Relatividad General que la gravedad es la curvatura del espacio-tiempo causada por la masa de los cuerpos.";
  }
  if (queryLower.includes('agua') || queryLower.includes('h2o')) {
    return "El **agua (H₂O)** es una molécula compuesta por dos átomos de hidrógeno y uno de oxígeno. Es indispensable para la vida, cubre aproximadamente el 71% de la superficie terrestre y existe en tres estados: sólido, líquido y gaseoso.";
  }

  // Geografía y Países
  if (queryLower.includes('capital de francia') || queryLower.includes('paris')) {
    return "La capital de Francia es **París**, famosa por su arquitectura, historia, cultura y monumentos icónicos como la Torre Eiffel, el Museo del Louvre y la Catedral de Notre Dame.";
  }
  if (queryLower.includes('capital de españa') || queryLower.includes('madrid ciudad')) {
    return "La capital de España es **Madrid**, el centro político, cultural y financiero del país, famosa por la Gran Vía, el Museo del Prado y el Palacio Real.";
  }
  if (queryLower.includes('continente') || queryLower.includes('paises') || queryLower.includes('oceanos')) {
    return "En la Tierra existen 6 continentes habitados (América, Europa, Asia, África, Oceanía y la Antártida) y 5 grandes océanos (Pacífico, Atlántico, Índico, Ártico y Antártico).";
  }

  // Tecnología, Programación e IA
  if (queryLower.includes('inteligencia artificial') || queryLower.includes('ia') || queryLower.includes('ai')) {
    return "La **Inteligencia Artificial (IA)** es el campo de la informática dedicado a crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como el reconocimiento de voz, la toma de decisiones, la resolución de problemas y el aprendizaje automático (*Machine Learning*).";
  }
  if (queryLower.includes('programacion') || queryLower.includes('codigo') || queryLower.includes('python') || queryLower.includes('javascript') || queryLower.includes('react')) {
    return "La **programación** es el proceso de escribir instrucciones estructuradas en lenguajes como JavaScript, Python o C++ para que una computadora ejecute aplicaciones, sitios web, inteligencia artificial o sistemas operativos.";
  }
  if (queryLower.includes('internet') || queryLower.includes('web') || queryLower.includes('wifi')) {
    return "El **Internet** es una red global de computadoras interconectadas que utilizan el protocolo TCP/IP para compartir información y servicios como páginas web, correos electrónicos, streaming y comunicación en tiempo real.";
  }

  // Historia General
  if (queryLower.includes('segunda guerra mundial') || queryLower.includes('guerra mundial')) {
    return "La **Segunda Guerra Mundial (1939-1945)** fue el conflicto bélico más devastador de la historia humana, enfrentando a los Aliados contra las Potencias del Eje, remodelando el mapa geopolítico mundial y dando origen a la Organización de las Naciones Unidas (ONU).";
  }
  if (queryLower.includes('egipto') || queryLower.includes('piramides')) {
    return "El **Antiguo Egipto** fue una de las civilizaciones más deslumbrantes de la antigüedad a orillas del río Nilo, famosa por sus faraones, jeroglíficos y las majestuosas Pirámides de Guiza construidas hace más de 4,500 años.";
  }

  // Cine, Música y Cultura
  if (queryLower.includes('musica') || queryLower.includes('cancion') || queryLower.includes('rock') || queryLower.includes('pop')) {
    return "La **música** es el arte de combinar los sonidos y silencios respetando la melodía, la armonía y el ritmo. A lo largo de la historia ha evolucionado desde la música clásica hasta géneros modernos como el rock, pop, hip-hop y la música electrónica.";
  }
  if (queryLower.includes('cine') || queryLower.includes('pelicula') || queryLower.includes('hollywood')) {
    return "El **cine** nació a finales del siglo XIX con los hermanos Lumière en Francia y se transformó en la 'séptima arte', combinando narrativa visual, sonido y actuación para contar historias a nivel global.";
  }

  // Matemáticas
  if (queryLower.includes('matematicas') || queryLower.includes('pi') || queryLower.includes('algebra') || queryLower.includes('numero')) {
    return "Las **matemáticas** son la ciencia deductiva que estudia las propiedades y relaciones entre números, figuras geométricas y símbolos. El número Pi (π ≈ 3.14159) es la relación entre la longitud de una circunferencia y su diámetro.";
  }

  // Salud y Vida Cotidiana
  if (queryLower.includes('salud') || queryLower.includes('ejercicio') || queryLower.includes('sueño') || queryLower.includes('nutricion')) {
    return "Mantener una buena **salud** requiere un equilibrio entre una alimentación nutritiva, actividad física regular (al menos 30 minutos al día) y un descanso reparador de entre 7 y 8 horas diarias.";
  }

  // Respuesta general universal precisa para cualquier otro tema no mencionado
  const topicTitle = rawQuery.trim();
  return `💡 Sobre **"${topicTitle}"**:\n\nEs un tema de gran interés general. Para brindarte la información más exacta y detallada, ¿te gustaría conocer la definición, la historia o los aspectos más importantes relacionados con esto?`;
}

export function generateDynamicAnswer(userQuery) {
  if (!userQuery) return "Por favor, escribe una pregunta sobre cualquier tema.";
  
  const queryLower = userQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // 1. Verificar si preguntaron la historia o nombre de un jugador de fútbol
  for (const [key, player] of Object.entries(PLAYERS_HISTORY)) {
    if (queryLower.includes(key)) {
      return `📜 **${player.name}**\n\n${player.bio}`;
    }
  }

  // 2. Verificar si preguntaron por un equipo o selección de fútbol
  for (const [key, info] of Object.entries(TEAMS_HISTORY)) {
    if (queryLower.includes(key)) {
      return `⚽ **Historia del Club/Selección:**\n\n${info}`;
    }
  }

  // 3. Tópicos de competiciones de fútbol
  if (queryLower.includes('champions') || queryLower.includes('ucl') || queryLower.includes('orejona')) {
    return "🏆 **UEFA Champions League:** Es el torneo de clubes más prestigioso del planeta fundado en 1955. El Real Madrid es el máximo ganador histórico con 15 títulos, seguido por el AC Milan (7), Bayern Múnich (6), Liverpool (6) y FC Barcelona (5).";
  }

  if (queryLower.includes('mundial de futbol') || queryLower.includes('copa del mundo') || queryLower.includes('fifa')) {
    return "🌍 **Copa Mundial de la FIFA:** Se disputa cada 4 años desde 1930. El palmarés histórico lo lidera Brasil (5 títulos), seguido por Alemania e Italia (4 cada una), Argentina (3), Francia y Uruguay (2 cada una), y España e Inglaterra (1 cada una).";
  }

  if (queryLower.includes('balon de oro') || queryLower.includes('ballon d\'or')) {
    return "🥇 **El Balón de Oro:** Entregado desde 1956 por la revista France Football al mejor jugador del año. Lionel Messi encabeza el récord con 8 Balones de Oro, seguido por Cristiano Ronaldo con 5, y leyendas como Michel Platini, Johan Cruyff y Marco van Basten con 3 cada uno.";
  }

  if (queryLower.includes('premier league') || queryLower.includes('liga inglesa')) {
    return "🦁 **Premier League:** Fundada en su formato actual en 1992, es la liga más vista del mundo. El Manchester United es el club con más títulos de Premier (13), seguido por el Manchester City, Chelsea y Arsenal.";
  }

  // 4. Si NO es sobre jugadores ni fútbol específico, responder directamente con conocimientos del tema consultado (ciencia, tecnología, historia, geografía, cine, salud, etc.)
  return generateGeneralKnowledgeAnswer(queryLower, userQuery);
}
