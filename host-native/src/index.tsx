// src/index.tsx
import { AppRegistry } from 'react-native';
import App from './App';  // Make sure this points to the correct App component
import { name as appName } from './app.json';  // This should match the app name in app.json

// Register the root component with AppRegistry
AppRegistry.registerComponent(appName, () => App);

// For rendering the app in the web (optional)
if (typeof document !== 'undefined') {
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
