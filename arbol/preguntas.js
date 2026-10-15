/* El Árbol · Radiografía de una organización · Simoné
   Preguntas compartidas por el formulario (/arbol/) y el tablero (/arbol/resultados/).
   "neg": opciones que se leen como alerta en el tablero. */
window.ARBOL = {
  endpoint: "https://script.google.com/macros/s/AKfycbz5npQIBjEG_xR1iNcVp1ALmjQFo1TV-5YcbyUbVrPegt7WUwTpjg60J0MDrv_aR5oP/exec",
  clave: "simone-diagnostico-2026",
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
      { id: "animales", titulo: "Representación animal", texto: "Elige 3 animales que representen las actitudes y comportamientos de tu equipo.", max: 3, opciones: [
        "Águila · visión estratégica", "Hormiga · persistencia y fuerza", "Búho · observación y análisis", "Camaleón · adaptación rápida",
        "Oso · protección y liderazgo fuerte", "Ardilla · planificación de recursos", "Abeja · jerarquía y disciplina", "Zorro · astucia e inteligencia"] },
      { id: "escucha", titulo: "Pertenencia", texto: "¿Con qué frecuencia sientes que tu opinión es escuchada y que encajas de verdad con los valores y las personas de este grupo?", escala: 5, extremos: ["Nunca", "Siempre"] },
      { id: "valorado", titulo: "Reconocimiento", texto: "¿Sientes que tu trabajo diario es valorado y que formas parte importante de los logros de tu equipo?", escala: 10, extremos: ["Nada", "Totalmente"] }
    ]}
  ]
};
