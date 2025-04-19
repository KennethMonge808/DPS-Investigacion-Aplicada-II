import React from 'react';
import { ViroARScene, ViroARSceneNavigator } from '@viro-community/react-viro';
import SensorPanelAR from './components/SensorPanelAR';

const MyARScene = () => (
  <ViroARScene>
    <SensorPanelAR />
  </ViroARScene>
);

export default function App() {
  return (
    <ViroARSceneNavigator
      initialScene={{ scene: MyARScene }}
      autofocus={true}
      style={{ flex: 1 }}
    />
  );
}


