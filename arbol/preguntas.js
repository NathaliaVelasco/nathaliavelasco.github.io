/* El Árbol · Radiografía de una organización · Simoné
   Preguntas compartidas por el formulario (/arbol/) y el tablero (/arbol/resultados/).
   "neg": opciones que se leen como alerta en el tablero. */
window.ARBOL = {
  // URL de la aplicación web del programa de la hoja "el arbol radiografia de una organizacion" (cuenta experienciasimone@gmail.com).
  endpoint: "https://script.google.com/macros/s/AKfycbxABb10TcbRIrcOx2DB7ICqsSeh0dn6Ad9_P0V7V5zdtxB2jC5bj1UBH5DUETQ-IGcN0w/exec",
  clave: "simone-arbol-envio",
  meta: 85,
  minimoGrupo: 5,
  grupos: ["Líderes de área", "Administrativos", "Operativos", "Fuerza comercial"],
  mediciones: { "base": "Línea de base · vivencial", "6m": "Seguimiento a 6 meses", "13m": "Seguimiento a 13 meses" },
  partes: [
    { id: "tronco", nombre: "El tronco", sub: "La historia, lo que somos y lo que sentimos", preguntas: [
      { id: "hitos", titulo: "Hitos históricos", texto: "Selecciona los 3 hitos más relevantes para la empresa.", max: 3, opciones: [
        "Expansión y crecimiento", "Superación de una crisis", "Cambio de liderazgo", "Lanzamiento de un producto o servicio innovador",
        "Fusión o adquisición clave", "Implementación de una política ambiental", "Reconocimiento público o premio importante",
        "Fortalecimiento comercial", "Reestructuración del organigrama"] },
      { id: "valores", titulo: "Valores organizacionales", texto: "Elige los 4 valores que mejor definen el día a día en tu empresa.", max: 4, opciones: [
        "Honestidad", "Responsabilidad", "Responsabilidad social", "Calidad y excelencia", "Respeto y diversidad", "Trabajo en equipo",
        "Innovación", "Compromiso", "Transparencia e integridad", "Solidaridad", "Profesionalismo", "Adaptabilidad"] },
      { id: "emociones", titulo: "Emociones predominantes", texto: "¿Qué emociones predominan en el ambiente laboral? Elige 4.", max: 4, opciones: [
        "Alegría", "Agradecimiento", "Generosidad", "Esperanza", "Confianza", "Serenidad", "Satisfacción",
        "Frustración", "Ansiedad", "Miedo", "Tristeza", "Envidia", "Resentimiento"],
        neg: ["Frustración", "Ansiedad", "Miedo", "Tristeza", "Envidia", "Resentimiento"] },
      { id: "recursos", titulo: "Recursos clave", texto: "Selecciona los 3 recursos más valiosos de la empresa.", max: 3, opciones: [
        "Talento y relaciones humanas", "Tecnología avanzada", "Infraestructura física", "Procesos eficientes",
        "Presupuesto sólido", "Red de contactos y aliados", "Gestión empresarial y de liderazgo"] },
      { id: "amenazas", titulo: "Amenazas críticas", texto: "¿Cuáles son las 3 mayores amenazas?", max: 3, opciones: [
        "Inestabilidad económica", "Factores políticos y sociales", "Competencia agresiva", "Atraso tecnológico",
        "Factores regulatorios", "Factores ambientales", "Relación con proveedores"] }
    ]},
    { id: "hojas", nombre: "Las hojas", sub: "Lo que decimos y lo que nos fortalece", preguntas: [
      { id: "frases", titulo: "Frases recurrentes", texto: "Selecciona hasta 3 frases que escuchas con frecuencia.", max: 3, opciones: [
        "«Póngase la camiseta»", "«Todo es para ayer»", "«Siempre se ha hecho así»", "«Aquí se trabaja bajo presión»", "«Somos una familia»",
        "«Innovar o morir»", "«El que manda, manda, aunque mande mal»", "«Árbol que nace torcido nunca endereza»", "«Todo se puede lograr»",
        "«Solo basta con soñarlo para poder crearlo»", "«Nada es imposible»", "«Aquí trabajamos como un verdadero equipo»", "«El cliente siempre tiene la razón»"],
        neg: ["«Todo es para ayer»", "«Siempre se ha hecho así»", "«El que manda, manda, aunque mande mal»", "«Árbol que nace torcido nunca endereza»"] },
      { id: "rituales", titulo: "Rituales positivos", texto: "¿Qué prácticas crees que fortalecen a tu equipo? Elige 2.", max: 2, opciones: [
        "Reuniones semanales de coordinación", "Celebración de metas cumplidas", "Aprendizaje y capacitación continua",
        "Retroalimentación constructiva", "Actividades de integración", "Programas de bienestar perfilados"] }
    ]},
    { id: "parasitos", nombre: "Los parásitos", sub: "Las prácticas que debilitan al árbol", preguntas: [
      { id: "habitos", titulo: "Hábitos negativos", texto: "Elige las 3 prácticas más perjudiciales.", max: 3, opciones: [
        "Chismes o rumores", "Impuntualidad crónica", "Falta de empatía entre áreas", "Procesos obsoletos o desorganización",
        "Comunicación agresiva o pasivo-agresiva", "Resistencia al cambio", "Falta de comunicación interna", "Liderazgos autoritarios"], todasNeg: true },
      { id: "control", titulo: "Sistemas de control", texto: "¿Qué métodos se usan para gestionar al personal? Elige 2.", max: 2, opciones: [
        "Evaluación de desempeño formal", "Seguimiento diario de tareas", "Retroalimentación 360°",
        "Vigilancia estricta (cámaras, reportes)", "Sanciones disciplinarias", "Despidos continuos y poco justificados"],
        neg: ["Vigilancia estricta (cámaras, reportes)", "Despidos continuos y poco justificados"] }
    ]},
    { id: "identidad", nombre: "Los habitantes", sub: "Cómo somos y cómo me siento en el equipo", preguntas: [
      { id: "animales", titulo: "Representación animal", texto: "Elige el animal con el que te sientes representado en las actitudes y comportamientos de tu equipo.", max: 1,
        imagenes: ["aguila", "hormiga", "buho", "camaleon", "oso", "ardilla", "abeja", "zorro"], opciones: [
        "Águila · visión estratégica", "Hormiga · persistencia y fuerza", "Búho · observación y análisis", "Camaleón · adaptación rápida",
        "Oso · protección y liderazgo fuerte", "Ardilla · planificación de recursos", "Abeja · jerarquía y disciplina", "Zorro · astucia e inteligencia"] },
      { id: "escucha", titulo: "Pertenencia", texto: "¿Con qué frecuencia sientes que tu opinión es escuchada y que encajas de verdad con los valores y las personas de este grupo?", escala: 5, extremos: ["Nunca", "Siempre"] },
      { id: "valorado", titulo: "Reconocimiento", texto: "¿Sientes que tu trabajo diario es valorado y que formas parte importante de los logros de tu equipo?", escala: 10, extremos: ["Nada", "Totalmente"] }
    ]}
  ]
};

/* Bosque de arquetipos · cada opción suma a un árbol nativo.
   Las emociones no suman a ningún árbol: miden el clima. Los animales tampoco: tienen su propia lectura. */
window.ARBOL.arquetipos = {
  arboles: [
    { id: "palma", nombre: "Palma de cera", sub: "Resiliencia y altura",
      fuerza: "Una organización que se mantiene en pie ante las crisis, con metas claras y un tronco firme.",
      riesgo: "Puede volverse vertical y distante: las decisiones se quedan en la cima y la gente de la base deja de sentirse parte." },
    { id: "ceiba", nombre: "Ceiba", sub: "Comunidad y refugio",
      fuerza: "Un tejido humano cálido y leal, donde la colaboración y el cuidado mutuo son el centro.",
      riesgo: "El exceso de familiaridad puede evitar las conversaciones difíciles y convertir el «somos una familia» en presión informal." },
    { id: "guayacan", nombre: "Guayacán", sub: "Transformación e innovación",
      fuerza: "Un entorno vibrante y creativo que se adapta rápido al mercado y florece en los momentos de alta intensidad.",
      riesgo: "Sin pausas ni procesos claros, los ciclos de alta exigencia se vuelven desgaste: presión constante, ansiedad y agotamiento." },
    { id: "roble", nombre: "Roble andino", sub: "Estructura y raíz profunda",
      fuerza: "Orden, procesos estables y una trayectoria que da seguridad y previsibilidad.",
      riesgo: "El control y la costumbre pueden frenar la agilidad, la empatía entre áreas y la voz de los equipos operativos." }
  ],
  mapa: {
    hitos: { "Expansión y crecimiento": "guayacan", "Superación de una crisis": "palma", "Cambio de liderazgo": "palma",
      "Lanzamiento de un producto o servicio innovador": "guayacan", "Fusión o adquisición clave": "palma",
      "Implementación de una política ambiental": "roble", "Reconocimiento público o premio importante": "roble",
      "Fortalecimiento comercial": "guayacan", "Reestructuración del organigrama": "palma" },
    valores: { "Honestidad": "roble", "Responsabilidad": "roble", "Responsabilidad social": "ceiba", "Calidad y excelencia": "roble",
      "Respeto y diversidad": "ceiba", "Trabajo en equipo": "ceiba", "Innovación": "guayacan", "Compromiso": "palma",
      "Transparencia e integridad": "roble", "Solidaridad": "ceiba", "Profesionalismo": "palma", "Adaptabilidad": "guayacan" },
    recursos: { "Talento y relaciones humanas": "ceiba", "Tecnología avanzada": "guayacan", "Infraestructura física": "roble",
      "Procesos eficientes": "roble", "Presupuesto sólido": "palma", "Red de contactos y aliados": "ceiba", "Gestión empresarial y de liderazgo": "palma" },
    frases: { "«Póngase la camiseta»": "ceiba", "«Todo es para ayer»": "guayacan", "«Siempre se ha hecho así»": "roble",
      "«Aquí se trabaja bajo presión»": "guayacan", "«Somos una familia»": "ceiba", "«Innovar o morir»": "guayacan",
      "«El que manda, manda, aunque mande mal»": "palma", "«Árbol que nace torcido nunca endereza»": "roble",
      "«Todo se puede lograr»": "palma", "«Solo basta con soñarlo para poder crearlo»": "guayacan", "«Nada es imposible»": "palma",
      "«Aquí trabajamos como un verdadero equipo»": "ceiba", "«El cliente siempre tiene la razón»": "roble" },
    rituales: { "Reuniones semanales de coordinación": "roble", "Celebración de metas cumplidas": "palma",
      "Aprendizaje y capacitación continua": "guayacan", "Retroalimentación constructiva": "roble",
      "Actividades de integración": "ceiba", "Programas de bienestar perfilados": "ceiba" },
    habitos: { "Chismes o rumores": "ceiba", "Impuntualidad crónica": "guayacan", "Falta de empatía entre áreas": "roble",
      "Procesos obsoletos o desorganización": "guayacan", "Comunicación agresiva o pasivo-agresiva": "palma",
      "Resistencia al cambio": "roble", "Falta de comunicación interna": "palma", "Liderazgos autoritarios": "palma" },
    control: { "Evaluación de desempeño formal": "roble", "Seguimiento diario de tareas": "guayacan", "Retroalimentación 360°": "ceiba",
      "Vigilancia estricta (cámaras, reportes)": "roble", "Sanciones disciplinarias": "palma", "Despidos continuos y poco justificados": "palma" }
  },
  animales: {
    "Águila · visión estratégica": "El equipo se ve a sí mismo mirando lejos: planea, anticipa y piensa en el largo plazo. Vale la pena preguntar si esa visión baja hasta el día a día.",
    "Hormiga · persistencia y fuerza": "El equipo se reconoce en el trabajo constante y silencioso. Sostiene la operación, pero puede sentir que su esfuerzo no se ve.",
    "Búho · observación y análisis": "El equipo se mueve con cautela: observa, analiza y decide con datos. Aporta criterio, aunque a veces le cuesta actuar rápido.",
    "Camaleón · adaptación rápida": "El equipo sobrevive cambiando de color: se adapta a todo. Es una fortaleza, y también una señal de que el entorno cambia más de lo que el equipo puede asimilar.",
    "Oso · protección y liderazgo fuerte": "El equipo busca o encarna un liderazgo que protege. Hay cuidado, y también el riesgo de depender de una sola figura fuerte.",
    "Ardilla · planificación de recursos": "El equipo administra con prudencia el tiempo y los recursos. Hay orden, aunque puede aparecer la sensación de escasez.",
    "Abeja · jerarquía y disciplina": "El equipo funciona con roles claros y disciplina. La estructura da seguridad; el reto es que no apague la iniciativa propia.",
    "Zorro · astucia e inteligencia": "El equipo resuelve con ingenio y lectura rápida de las situaciones. Vale la pena mirar si esa astucia nace de la confianza o de la necesidad de protegerse."
  }
};
