Aplicación IoT + Realidad Aumentada ViroReact
Visualización de sensores ambientales en AR

Integrantes:
Abner Ismael Rivera Leiva (RL233297)
Andrés Eduardo Navidad Flores (NF220677)
Kenneth Gabriel Monge Aguilar (MA230693)
Derek Marcelo Monge Aguilar (MA230691)

Enlaces Importantes
Repositorio GitHub: https://github.com/KennethMonge808/Dps-Investigacion-Aplicada-II
Presentación (Canva): https://www.canva.com/design/DAGk_k1Q41U/nGuPVRwvFXe7-Nnu-mpV0A/edit?utm_content=DAGk_k1Q41U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Instalación Paso a Paso
1. Clonar el Repositorio
git clone https://github.com/KennethMonge808/Dps-Investigacion-Aplicada-II.git
cd Dps-Investigacion-Aplicada-II

3. Requisitos Previos
JDK 17.
Node.js.
Android Studio: Para poder configura el Android SDK.

3. Configuración del Proyecto
Edita el archivo local.properties y coloca la ruta de tu SDK de Android:
sdk.dir = /tu/ruta/al/android/sdk
(Ejemplo en Windows: C:\\Users\\TuUsuario\\AppData\\Local\\Android\\Sdk).

4. Instalar Dependencias
npm install

5. Ejecutar la Aplicación
En Android:
npx react-native run-android

En iOS (requiere Xcode):
npx react-native run-ios

¿Que es la app?
Al iniciar la app:
Verás un menú para activar la cámara y escanear el entorno.

Visualización en AR:
Aparecerá un panel flotante con datos simulados de temperatura (°C) y humedad (%).
