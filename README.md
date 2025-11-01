Nombre: Gen Quality AI
Tipo: Microservicio React + Tailwind para gestión y predicción de calidad seminal en verracos.
Origen: Adaptación visual y funcional del sistema GestasML (microservicios R y dashboard).

🔹 Objetivo

Integrar este dashboard al ecosistema de GestasML como un microservicio independiente:

Nombre del microservicio: gen-quality-ai

Interfaz: frontend React

Backend: conexión al modelo R mediante API

Reutiliza la estructura de sesiones y autenticación de GestasML

🔹 Qué incluye el proyecto

Dashboard responsive a pantalla completa

Secciones: Nav, Tabla, Gráficos, Modales (Ajustes, Cuentas, Edición)

30 registros de prueba (verraco001 → verraco030)

Cálculos de Quality, Quantity, Wear Coefficient, etc.

Predicciones automáticas según hora y ajustes

🔹 Qué necesita el agente integrar

Conectar los endpoints del modelo R ya existentes en GestasML (predicción, registros, snapshot).

Vincular la autenticación de usuarios del sistema principal.

Mapear los datos de los “Gen” en la base de datos central de GestasML.

Adaptar los estilos globales (si GestasML usa su propio theme o Tailwind config).

Validar los hooks y endpoints que se usarán para:

Guardar snapshots (saveSnapshot)

Generar predicciones (generatePrediction)

Sincronizar modo offline → online

Importar registros CSV

🔹 Instrucciones para revisión rápida

Abrir el proyecto React localmente

npm install
npm run dev


Explorar los componentes principales en src/components/.

Verificar el App.jsx y los modales de ajustes/usuario.

Consultar el JSON de prueba verraco001–030 en /src/data/.