import VetDomiciliar from "./VetDomiciliar";
import "./index.css";
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".animate").forEach(el => {
    observer.observe(el);
  });
}, []);

  return (
  <div className="app">
    <VetDomiciliar />

    <a
  href="https://wa.me/5592999999999"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Fale no WhatsApp"
>
  <span className="whatsapp-icon"></span>
</a>

  </div>
);
}