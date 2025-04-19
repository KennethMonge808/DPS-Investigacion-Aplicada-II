import React, { useEffect, useState } from 'react';
import { ViroText, ViroNode, Viro3DObject } from '@viro-community/react-viro';
import { fetchSensorData } from '../services/api';

const SensorPanelAR = () => {
  const [sensorData, setSensorData] = useState({
    temperature: '--',
    humidity: '--',
    location: '',
    status: ''
  });

  const updateData = async () => {
    const data = await fetchSensorData();
    if (data) setSensorData(data);
  };

  useEffect(() => {
    updateData();
    const interval = setInterval(updateData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ViroNode position={[0, 0, -1]}>
      <ViroText
        text={` Temp: ${sensorData.temperature}°C\n Hum: ${sensorData.humidity}%\n ${sensorData.location}\nEstado: ${sensorData.status}`}
        scale={[0.5, 0.5, 0.5]}
        width={2}
        height={2}
        position={[0, 0.3, 0]}
        style={{ fontFamily: 'Arial', fontSize: 40, color: '#FFFFFF', textAlign: 'center' }}
      />
      
      <Viro3DObject
        source={require('../assets/sensor/sensor.obj')}
        resources={[
          require('../assets/sensor/centurion-ram_d_0.png'),
          require('../assets/sensor/centurion-ram_n_1.png'), // Solo si aplica
        ]}
        position={[0, -0.2, 0]}
        scale={[0.05, 0.05, 0.05]}
        type="OBJ"
      />

<ViroText
  text="Actualizar"
  position={[0, -0.6, -1.5]} // Ajuste de la posición para estar en el espacio 3D
  scale={[0.5, 0.5, 0.5]} // Para hacer el texto más visible y en 3D
  onClick={updateData} // Aquí tienes la función de actualización
  style={{ fontFamily: 'Arial', fontSize: 30, color: 'lightblue', textAlign: 'center' }}
/>
    </ViroNode>
  );
};

export default SensorPanelAR;
