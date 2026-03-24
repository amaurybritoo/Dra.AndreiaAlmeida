import { useState, useEffect, useRef } from "react";

export default function VetDomiciliar() {
  const servicos = [
    "Consulta clínica",
    "Vacinação",
    "Coleta de exames",
    "Atendimento geriátrico",
    "Curativos",
    "Administração de medicamentos",
    "Orientação nutricional",
    "Microchipagem",
    "Acompanhamento de filhotes"
  ];

  const [tutor, setTutor] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState(" ");
  const [message, setMessage] = useState("");
  
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current || document;
    const selector = '.gallery-item';
    const items = Array.from(container.querySelectorAll(selector));
    if (!items.length) return;

    const adjustItem = (item) => {
      const img = item.querySelector('img');
      if (!img) return;
      const aspect = (img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : 1;
      const computed = getComputedStyle(item);
      const itemHeight = parseFloat(computed.height) || 320;
      const width = Math.max(140, Math.round(itemHeight * aspect));
      item.style.flex = `0 0 ${width}px`;
    };

    items.forEach((item) => {
      const img = item.querySelector('img');
      if (!img) return;
      const onLoad = () => adjustItem(item);
      if (img.complete) {
        adjustItem(item);
      } else {
        img.addEventListener('load', onLoad);
        item._onLoad = onLoad;
      }
    });

    const onResize = () => items.forEach(adjustItem);
    window.addEventListener('resize', onResize);

    return () => {
      items.forEach((item) => {
        const img = item.querySelector('img');
        if (img && item._onLoad) img.removeEventListener('load', item._onLoad);
        delete item._onLoad;
        item.style.flex = '';
      });
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "559288255935";
    const tutorName = tutor.trim() || "Cliente";
    const pet = petName.trim() || "meu pet";
    const whatsappContact = whatsapp.trim() || "Não informado";
    const messageText = message.trim() ? `${message}` : "";
    
    const text = `Oi! Gostaria de solicitar um orçamento para um atendimento domiciliar.\n\nTutor(a): ${tutorName}\nPet: ${pet}\nTipo: ${petType}\nWhatsApp: ${whatsappContact} \nOBS.: ${messageText}\n\nObrigado!`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <img src="/img/logo_final.png" alt="Logo Andreia Veterinária" className="hero-logo" />
        <h1>Cuidado veterinário no conforto da sua casa</h1>
        <p>
          Atendimento domiciliar em Manaus para pequenos animais com carinho,
          segurança e profissionalismo.
        </p>
        <a
          className="btn"
          href="https://wa.me/559288255935"
          target="_blank"
          rel="noreferrer"
        >
          Agendar pelo WhatsApp
        </a>
      </section>

      {/* SOBRE */}
      <section>
  <div className="container grid-2 about">

    {/* IMAGEM À ESQUERDA */}
    <div className="about-image">
      <img
        src="/img/moi.png"
        alt="Veterinária com cachorro"
      />
    </div>

    {/* TEXTO À DIREITA */}
    <div className="about-text">
      <h2>Conheça a Dra. Andréia Almeida</h2>
      <p>
        Desde a infância, a Dra. Andréia é movida pelo amor aos animais e foi essa paixão que se transformou em propósito profissional. 
Oferece atendimento veterinário domiciliar humanizado, proporcionando mais conforto aos pets e mais tranquilidade aos responsáveis, no ambiente seguro do próprio lar.
Com experiência em clínica médica de cães e gatos, prioriza a saúde, o bem-estar e a individualidade de cada paciente, sempre com atenção personalizada, responsabilidade e ética profissional.
Seu compromisso é transformar cada consulta em uma experiência positiva, leve e acolhedora, promovendo cuidado de qualidade e fortalecendo o vínculo entre responsável e pet.
A Dra. Andréia acredita que a prevenção e a orientação são pilares fundamentais da medicina veterinária. Por isso, dedica-se também à educação dos responsáveis, ajudando-os a compreender melhor as necessidades, comportamentos e cuidados essenciais para uma vida mais saudável.
Seu atendimento é pautado na empatia, respeito e comprometimento, unindo conhecimento técnico, atualização constante e sensibilidade para oferecer soluções seguras e eficazes em cada situação.
Se você busca um atendimento atencioso, seguro e individualizado para o seu pet, será um prazer cuidar de quem é tão importante para você.
Entre em contato e agende uma consulta domiciliar.
      </p>
    </div>

  </div>
</section>

      {/* SERVIÇOS */}
      <section className="light">
        <h2 className="section-title">Serviços</h2>
        <div className="container grid-3">
          {servicos.map((s) => (
            <div className="card" key={s}>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA DE ATENDIMENTOS*/}
      {/*
<section className="light">
  <h2 className="section-title">Nossos Atendimentos</h2>
  <p className="gallery-subtitle">Conheça alguns dos atendimentos realizados com carinho e profissionalismo</p>
  
  <div className="gallery-full">
    <div className="container">
      <div className="gallery-carousel" ref={carouselRef}>
        <div className="gallery-item">
          <img src="https://i.imgur.com/p2K7nPA.jpeg" alt="Consulta veterinária domiciliar" />
          <div className="gallery-overlay">
            <h4>Consulta Clínica</h4>
            <p>Atendimento personalizado no conforto do lar</p>
          </div>
        </div>

        <div className="gallery-item">
          <img src="https://i.imgur.com/aTnIeEY.jpeg" alt="Vacinação de pet" />
          <div className="gallery-overlay">
            <h4>Vacinação</h4>
            <p>Proteção completa para seu pet</p>
          </div>
        </div>

        <div className="gallery-item">
          <img src="https://i.imgur.com/FxMqeF9.jpeg" alt="Cuidado veterinário geriátrico" />
          <div className="gallery-overlay">
            <h4>Cuidados Geriátricos</h4>
            <p>Atenção especial para pets seniors</p>
          </div>
        </div>

        <div className="gallery-item">
          <img src="https://i.imgur.com/2adEnsn.png" alt="Acompanhamento de filhotes" />
          <div className="gallery-overlay">
            <h4>Filhotes</h4>
            <p>Acompanhamento completo desde o início</p>
          </div>
        </div>

        <div className="gallery-item">
          <img src="https://i.imgur.com/9TRO0VU.png" alt="Coleta de exames" />
          <div className="gallery-overlay">
            <h4>Coleta de Exames</h4>
            <p>Diagnóstico rápido e preciso</p>
          </div>
        </div>

        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=500&h=400&fit=crop" alt="Curativo e medicação" />
          <div className="gallery-overlay">
            <h4>Curativos e Medicação</h4>
            <p>Tratamento completo com eficiência</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      */}

          {/* COMO FUNCIONA */}
<section className="light">
  <h2 className="section-title">Como funciona</h2>

  <div className="container timeline">
    <div className="timeline-line"></div>

    <div className="timeline-step">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h4>Solicitação</h4>
        <p>Contato inicial via WhatsApp ou formulário de orçamento.</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h4>Contato</h4>
        <p>Confirmamos as informações e esclarecemos dúvidas.</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h4>Agendamento</h4>
        <p>Definimos data e horário conforme sua disponibilidade.</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h4>Atendimento</h4>
        <p>Consulta realizada no conforto e segurança do lar do pet.</p>
      </div>
    </div>
  </div>
</section>

     {/* AGENDAMENTO E ORÇAMENTO */}
<section className="appointment">
  <div className="container appointment-grid">

    {/* TEXTO */}
    <div className="appointment-info">
      <h2>Agendamento e Orçamento</h2>
      <p>
        Solicite seu atendimento domiciliar de forma rápida e segura.
        Essas informações nos ajudam a preparar um atendimento
        personalizado para o seu pet.
      </p>

      <ul>
        <li>✔ Atendimento humanizado</li>
        <li>✔ Profissional qualificada</li>
        <li>✔ Conforto e segurança para o pet</li>
      </ul>
    </div>

    {/* FORMULÁRIO */}
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nome do tutor</label>
        <input
          type="text"
          placeholder="Ex: Maria Silva"
          value={tutor}
          onChange={(e) => setTutor(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>WhatsApp</label>
        <input
          type="tel"
          placeholder="(92) 99999-9999"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Nome do pet</label>
        <input
          type="text"
          placeholder="Ex: Thor"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Tipo de pet</label>
        <select value={petType} onChange={(e) => setPetType(e.target.value)}>
          <option value=" ">Selecione o tipo</option>
          <option value="Cão">Cão</option>
          <option value="Gato">Gato</option>
        </select>
      </div>

      <div className="form-group full">
        <label>Mensagem</label>
        <textarea
          placeholder="Descreva brevemente o atendimento desejado"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Solicitar orçamento</button>
    </form>

  </div>
</section>



      {/* AVALIAÇÕES DOS CLIENTES */}
      {/*
<section className="reviews-section">
  <h2 className="section-title">O que nossos clientes dizem</h2>

  <div className="reviews-full">
    <div className="container">
      <div className="reviews-carousel">
        <div className="review-card">
          <p>
            "A Dra. Andréia foi incrível! Atendeu meu pet com muito cuidado e paciência. Recomendo de olhos fechados!"
          </p>
          <div className="review-author">
            <span>– Mariana S.</span>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        <div className="review-card">
          <p>
            "Excelente atendimento domiciliar! Meu cachorro ficou super tranquilo durante toda a consulta."
          </p>
          <div className="review-author">
            <span>– João P.</span>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        <div className="review-card">
          <p>
            "Profissional, atenciosa e super educada. Fiquei muito satisfeita com o cuidado da minha gatinha."
          </p>
          <div className="review-author">
            <span>– Camila R.</span>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        
        <div className="review-card">
          <p>
            "Atendimento impecável! A Dra. Andréia explicou tudo com muita clareza e cuidou do meu pet com um carinho enorme."
          </p>
          <div className="review-author">
            <span>– Yasmin T.</span>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        <div className="review-card">
          <p>
            "Super recomendo! Atendimento personalizado e muito carinho com meu pet."
          </p>
          <div className="review-author">
            <span>– Lucas M.</span>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

*/}

     {/* CONTATO */}
<section className="contact">
  <div className="container contact-center animate">

    <h2 className="section-title">Contato</h2>

    <p className="contact-description">
      Atendimento veterinário domiciliar em Manaus.
      Fale diretamente pelo WhatsApp para agendar ou tirar dúvidas.<br/>
      <strong>Faça um orçamento gratuito 😁</strong>
    </p>

    <div className="contact-details center">
      <div>
        <strong>📍 Atendimento</strong>
        <span>Domiciliar – Manaus</span>
      </div>

      <div>
        <strong>🕒 Horário</strong>
        <span>Seg - Sex · 9h às 17h</span>
        <span>Sab · 8h às 12h</span>
      </div>
    </div>

    <a
      href="https://wa.me/559288255935"
      target="_blank"
      className="contact-cta"
    >
      💬 Falar no WhatsApp
    </a>

  </div>
</section>



      {/* FOOTER */}
      <footer>
        © 2026 Atendimento Veterinário Domiciliar • CRMV/AM 02993
      </footer>
    </>
  );
}
