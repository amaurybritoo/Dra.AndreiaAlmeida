import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



import MoiPerfil from './assets/moi-perfil.png';
; // caminho relativo do componente pra imagem

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div style={{ textAlign: 'center' }}>
      <img src={MoiPerfil} alt="Dra. Andréia" style={{ width: '250px', borderRadius: '50%' }} />
      <App />
    </div>
  </React.StrictMode>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
