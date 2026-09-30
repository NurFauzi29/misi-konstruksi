import { useSyncExternalStore } from 'react';
import { nav } from './dc/nav.js';
import { SCENES } from './scenes/index.js';

export function App() {
  const { index, visit } = useSyncExternalStore(nav.subscribe, nav.get);
  const Scene = SCENES[index];
  return <Scene key={visit} />;
}
