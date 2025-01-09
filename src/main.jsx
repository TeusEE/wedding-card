import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// iOS Safari에서 확대/축소 제스처를 막기 위한 이벤트 리스너 추가
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
  document.body.style.zoom = 1; // iOS Safari에서 확대/축소를 막기 위해 필요
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
