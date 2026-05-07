/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Heart, Search, Type, ShieldCheck, Users, Globe, Instagram } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('s1');
  const [scrolled, setScrolled] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  // Scroll listener for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth <= 1024 && servicesRef.current) {
      const panelTop = servicesRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: panelTop, behavior: 'smooth' });
    }
  };

  const services = [
    { id: 's1', title: 'Elaboração de Contratos', tag: '⭑ Serviço prioritário', desc: 'Contratos redigidos do zero, com linguagem precisa, cláusulas equilibradas e proteção real para ambas as partes.', bullets: ['Prestação de serviços e parcerias', 'Compra, venda e locações', 'Acordos societários e comerciais', 'Qualquer relação que mereça estar no papel'], cta: 'Solicitar elaboração', msg: 'Olá, gostaria de saber mais sobre a elaboração de um contrato.' },
    { id: 's2', title: 'Revisão de Contratos', tag: '⭑ Serviço prioritário', desc: 'Antes de assinar, você merece saber o que está aceitando. Revisão detalhada de cláusulas abusivas, lacunas e obrigações que parecem pequenas, mas não são.', bullets: ['Identificação de cláusulas abusivas', 'Análise de riscos e lacunas', 'Sugestão de ajustes com justificativa clara'], cta: 'Solicitar revisão', msg: 'Olá, gostaria de solicitar a revisão de um contrato.' },
    { id: 's3', title: 'Consultoria Preventiva', tag: 'Preventivo', desc: 'Orientação antes que o problema apareça, para quem quer tomar decisões com segurança, sem esperar a situação virar litígio.', bullets: ['Análise de situações antes de agir', 'Resposta a dúvidas pontuais', 'Mapeamento de riscos jurídicos'], cta: 'Agendar conversa', msg: 'Olá, gostaria de agendar uma consultoria preventiva.' },
    { id: 's4', title: 'Direito do Consumidor', tag: 'Consumidor · Cível', desc: 'Cobranças indevidas, serviços não prestados, contratos abusivos com empresas. Seus direitos como consumidor têm peso jurídico real.', bullets: ['Cobranças e dívidas indevidas', 'Produtos com defeito e garantia', 'Contratos leoninos com prestadoras'], cta: 'Consultar sobre meu caso', msg: 'Olá, gostaria de conversar sobre um problema de Direito do Consumidor.' },
    { id: 's5', title: 'Direito Empresarial', tag: 'Empresarial · Societário', desc: 'Contratos entre sócios, acordos comerciais e proteção jurídica para negócios de qualquer porte. Empresas pequenas também precisam de contratos sérios.', bullets: ['Contratos entre sócios e parceiros', 'Acordos comerciais e fornecimento', 'Formalização de relações de negócio'], cta: 'Falar sobre minha empresa', msg: 'Olá, gostaria de falar sobre assessoria jurídica para minha empresa.' },
    { id: 's6', title: 'Demandas Cíveis', tag: 'Cível · Contencioso', desc: 'Para situações que exigem atuação judicial, com encaminhamento para parceiros especializados quando necessário, sempre com transparência e acompanhamento.', bullets: ['Análise do caso e estratégia', 'Atuação direta ou via parceiros', 'Comunicação clara em todo o processo'], cta: 'Consultar sobre meu caso', msg: 'Olá, gostaria de consultar sobre uma demanda na área cível.' },
  ];

  const waNumber = '5517992505324';
  const genericMsg = encodeURIComponent('Olá, vi seu site e gostaria de conversar sobre serviços jurídicos.');
  const waLink = `https://wa.me/${waNumber}?text=${genericMsg}`;

  const depoimentos = [
    { author: 'A.F. · Revisão de contrato', text: 'Precisava revisar um contrato antes de assinar. A Maria Paula encontrou três cláusulas problemáticas que eu jamais teria percebido. Salvou meu dinheiro e meu tempo.' },
    { author: 'R.M. · Consultoria jurídica', text: 'O que me surpreendeu foi a clareza. Ela explicou tudo em português normal, sem me fazer sentir ignorante. Saí da conversa entendendo minha situação de verdade.' },
    { author: 'C.L. · Contrato societário', text: 'Formalizar a parceria da minha empresa parecia complicado. Ela tornou o processo simples, rápido e com um contrato que realmente protege os dois lados.' }
  ];

  const [currentDepo, setCurrentDepo] = useState(0);

  const nextDepo = () => {
    setCurrentDepo((prev) => (prev + 1) % depoimentos.length);
  };

  const prevDepo = () => {
    setCurrentDepo((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <main className="relative">
      {/* ─── NAVEGAÇÃO SUPERIOR ─── */}
      <nav className={`fixed top-0 left-0 w-full h-20 px-[5vw] z-[100] flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-[#11141A]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2">
          <div className="font-serif text-xl tracking-tighter uppercase text-white leading-none">
            MARIA PAULA <span className="text-[var(--terra)] font-light italic">VIANA</span>
            <div className="text-[7px] tracking-[0.4em] opacity-40 font-sans font-bold mt-1">ADVOCACIA</div>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">
          <a href="#inicio" className="hover:text-[var(--terra)] transition-colors no-underline text-white">Início</a>
          <a href="#sobre" className="hover:text-[var(--terra)] transition-colors no-underline text-white">Sobre</a>
          <a href="#servicos" className="hover:text-[var(--terra)] transition-colors no-underline text-white">Serviços</a>
          <a href="#processo" className="hover:text-[var(--terra)] transition-colors no-underline text-white">Processo</a>
          <a href="#depoimentos" className="hover:text-[var(--terra)] transition-colors no-underline text-white">Depoimentos</a>
          <a href="#faq" className="hover:text-[var(--terra)] transition-colors no-underline text-white">Dúvidas</a>
          <a href="#contato" className="hover:text-[var(--terra)] transition-colors no-underline text-white">Contato</a>
        </div>
      </nav>

      {/* ─── 1. HERO REIMAGINADA ─── */}
      <section className="hero-full group" id="inicio">
        <div className="hero-bg-zoom group-hover:scale-[1.03] transition-transform duration-500"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content-bottom">
          <div className="max-w-7xl mx-auto px-10 md:px-20">
            <h1 className="hero-headline-left reveal-on-scroll stagger-1">
              Direito que <em>faz sentido</em> para quem<br />
              está do outro lado da mesa.
            </h1>
            
            <div className="hero-split-content reveal-on-scroll stagger-2">
              <div className="hero-text-col">
                <p className="hero-sub-left">
                  Contratos claros, revisão de cláusulas abusivas e orientação jurídica acessível, para pessoas e empresas que querem fechar acordos sem arrependimentos.
                </p>
              </div>
              <div className="hero-cta-col">
                <a href={`https://wa.me/${waNumber}?text=${genericMsg}`} className="btn-fill">Conversar no WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SOBRE REFINADO ─── */}
      <section className="sobre" id="sobre">
        <div className="sobre-grid">
          <div className="sobre-content-col reveal-on-scroll">
            <span className="section-label">Sobre</span>
            <h2 className="section-title">Uma pequena vela, <br /><em>e às vezes é tudo<br />que se precisa.</em></h2>
            <div className="divider"></div>
            <p className="section-text">
              Não sou o maior escritório nem o mais antigo. Sou a advogada que vai ler
              o seu contrato com atenção real, apontar onde você pode estar assumindo
              risco sem perceber, e explicar tudo em português.
            </p>
            <p className="section-text" style={{ marginTop: '0.9rem' }}>
              Minha trajetória com contratos começou antes da faculdade. O que ficou foi
              um olhar treinado para o que está escrito, para o que falta, e para o que
              foi mal colocado de propósito.
            </p>
          </div>
          <div className="sobre-image-col reveal-on-scroll stagger-2">
            <div className="sobre-photo-placeholder">
              <img src="https://lh3.googleusercontent.com/d/1L-u8kPCEExhyqQzlw4fFwAFFYXLL5lXc" alt="Dra. Maria Paula Viana" className="sobre-photo-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. SERVIÇOS ─── */}
      <section className="servicos" id="servicos">
        <div className="reveal-on-scroll">
          <span className="section-label">Como posso te ajudar</span>
          <h2 className="section-title">Serviços que <em>protegem</em><br />o que você construiu</h2>
        </div>
        <div className="servicos-layout reveal-on-scroll stagger-1">
          <div className="servicos-nav">
            {services.map((s, i) => (
              <div 
                key={s.id} 
                className={`servico-tab ${activeTab === s.id ? 'active' : ''}`}
                onClick={() => handleTabClick(s.id)}
              >
                <span className="tab-num">0{i + 1}</span>{s.title}
              </div>
            ))}
          </div>
          <div className="servicos-panels" ref={servicesRef}>
            {services.map(s => (
              <div key={s.id} className={`servico-panel ${activeTab === s.id ? 'active' : ''}`}>
                <span className="panel-tag">{s.tag}</span>
                <div className="panel-title">{s.title}</div>
                <div className="panel-desc">{s.desc.replace(/ — | - /g, ', ')}</div>
                <div className="panel-bullets">
                  {s.bullets.map((b, i) => (
                    <div key={i} className="panel-bullet">{b}</div>
                  ))}
                </div>
                <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent(s.msg || '')}`} className="panel-cta group">
                  {s.cta}
                  <svg className="panel-cta-arrow transition-transform group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. DORES ─── */}
      <section className="dores" id="problemas">
        <div className="dores-layout">
          <div className="dores-intro reveal-on-scroll">
            <span className="section-label">Você se identifica?</span>
            <h2 className="section-title">Situações que chegam<br /><em>toda semana</em></h2>
            <p className="section-text">
              A maioria dos problemas jurídicos começa muito antes do processo, no contrato
              que não foi lido, na cláusula que pareceu padrão, no acordo de boca que
              funcionou até deixar de funcionar.
            </p>
          </div>
          <div className="dores-grid">
            {[
              { q: '"Assinei sem ler e agora estou preso numa cláusula péssima"', a: 'Uma leitura técnica antes da assinatura muda completamente o cenário.' },
              { q: '"Fechei um acordo e a outra parte não cumpriu, e agora?"', a: 'Acordos vagos deixam pouco espaço para exigir. A orientação certa aponta os caminhos com clareza.' },
              { q: '"Preciso de um contrato profissional mas não sei como fazer"', a: 'Um contrato feito para a sua situação protege o que nenhum template vai proteger.' },
              { q: '"Minha empresa não tem contratos formalizados com ninguém"', a: 'Regularizar antes do conflito é sempre mais simples, e muito mais barato, do que depois.' }
            ].map((dor, i) => (
              <div key={i} className="dor-card reveal-on-scroll">
                <div className="dor-title">{dor.q}</div>
                <div className="dor-text">{dor.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. DIFERENCIAIS ─── */}
      <section className="diferenciais" id="diferenciais">
        <div className="diff-header reveal-on-scroll">
          <span className="section-label">Como trabalho</span>
          <h2 className="section-title">O que você encontra <em>aqui</em></h2>
        </div>
        <div className="diff-grid">
          {[
            { icon: <Heart size={28} strokeWidth={1.5} />, title: 'Atendimento que acolhe', text: 'Você pode chegar sem saber o que precisa. A conversa é o ponto de partida, não um obstáculo.' },
            { icon: <Search size={28} strokeWidth={1.5} />, title: 'Olho treinado para contratos', text: 'Anos de contato com documentos jurídicos e precisão linguística fora do comum, diferença real na análise.' },
            { icon: <Type size={28} strokeWidth={1.5} />, title: 'Linguagem que clareia', text: 'Domínio da língua portuguesa não é detalhe quando cada palavra de um contrato importa.' },
            { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: 'Foco preventivo', text: 'Prefiro trabalhar antes do problema. Quando ele aparece, você conhece os caminhos com clareza.' },
            { icon: <Users size={28} strokeWidth={1.5} />, title: 'Rede para o que vai além', text: 'Parcerias confiáveis para demandas presenciais ou especializadas, você não fica desassistido.' },
            { icon: <Globe size={28} strokeWidth={1.5} />, title: 'Online, para todo o Brasil', text: 'Atendimento remoto com the mesma qualidade e proximidade de quem está na sua cidade.' }
          ].map((d, i) => (
            <div key={i} className={`diff-item reveal-on-scroll stagger-${i + 1}`}>
              <div className="diff-icon-wrapper">{d.icon}</div>
              <div className="diff-title">{d.title}</div>
              <div className="diff-text">{d.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. PROCESSO REIMAGINADO ─── */}
      <section className="processo" id="processo">
        <div className="processo-header reveal-on-scroll">
          <span className="section-label">Como funciona</span>
          <h2 className="section-title">O caminho do <em>primeiro contato</em><br />até a resolução</h2>
        </div>
        
        <div className="processo-steps-container reveal-on-scroll stagger-1">
          <div className="processo-steps">
            {[
              { num: '01', title: 'Primeiro contato', text: 'Você entra em contato e descreve brevemente sua situação.' },
              { num: '02', title: 'Reunião de briefing', text: 'Conversa detalhada para entender todos os aspectos do caso.' },
              { num: '03', title: 'Análise jurídica', text: 'Avaliação técnica aprofundada do caso e dos caminhos possíveis.' },
              { num: '04', title: 'Definição da estratégia', text: 'Acordo ou ação, apresentação clara do melhor caminho.' },
              { num: '05', title: 'Formalização', text: 'Contrato firmado com transparência sobre honorários e escopo.' },
              { num: '06', title: 'Acompanhamento', text: 'Presença próxima em todas as etapas até a conclusão.' }
            ].map((s, i) => (
              <div key={i} className="processo-item">
                <div className="processo-num">{s.num}</div>
                <div className="processo-title">{s.title}</div>
                <div className="processo-text">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. PROVA SOCIAL ─── */}
      <section className="prova" id="depoimentos">
        <div className="prova-container reveal-on-scroll">
          <div className="depo-slider-layout">
            <div className="depo-left">
              <span className="section-label">Depoimentos</span>
              <h2 className="section-title">O que dizem sobre<br /><em>o atendimento</em></h2>
              <div className="depo-arrows">
                <button onClick={prevDepo} className="arrow-btn" aria-label="Anterior">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button onClick={nextDepo} className="arrow-btn" aria-label="Próximo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="depo-right">
              {depoimentos.map((d, i) => (
                <div key={i} className={`depo-slide ${currentDepo === i ? 'active' : ''}`}>
                  <div className="depo-quote-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11L8 17H5L7 11H5V7H9V11H10ZM19 11L17 17H14L16 11H14V7H18V11H19Z" fill="currentColor" opacity="0.1"/>
                    </svg>
                  </div>
                  <p className="depo-text">"{d.text}"</p>
                  <div className="depo-author-box">
                    <div className="depo-author-name">{d.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. FAQ ─── */}
      <section className="faq" id="faq">
        <div className="faq-header reveal-on-scroll">
          <span className="section-label">Tire suas dúvidas</span>
          <h2 className="section-title">Perguntas <em>Frequentes</em></h2>
        </div>
        <div className="faq-grid reveal-on-scroll stagger-1">
          <div>
            {[
              { q: 'Você tem pouco tempo, isso é um problema?', a: 'Minha experiência com contratos começou antes da atuação autônoma. O que ofereço não depende de décadas de registro, depende de atenção real ao seu caso.' },
              { q: 'Atende fora de São José do Rio Preto?', a: 'Minha prática é 100% digital, atendendo clientes em todo o território nacional com a mesma proximidade e suporte jurídico.' },
              { q: 'Quanto custa uma revisão de contrato?', a: 'O valor é calculado com base na complexidade técnica e no volume do documento. Após uma breve análise inicial, apresento uma proposta transparente.' }
            ].map((f, i) => (
              <div key={i} className={`faq-item ${activeTab === `q-left-${i}` ? 'active' : ''}`} onClick={() => setActiveTab(activeTab === `q-left-${i}` ? '' : `q-left-${i}`)}>
                <div className="faq-q">{f.q} <span>{activeTab === `q-left-${i}` ? '−' : '+'}</span></div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
          <div>
            {[
              { q: 'Posso contratar só para tirar uma dúvida?', a: 'Sim. Ofereço consultas consultivas pontuais para quem precisa de segurança imediata em uma decisão ou esclarecimento sobre cláusulas.' },
              { q: 'E se meu caso precisar de atuação especializada?', a: 'Possuo uma rede de parceiros estratégicos em diversas áreas do Direito, garantindo que você tenha auxilio especializado sempre que necessário.' },
              { q: 'Como é a comunicação durante o processo?', a: 'Transparência total via WhatsApp para agilidade e reuniões por vídeo para alinhamentos estratégicos mais profundos.' }
            ].map((f, i) => (
              <div key={i} className={`faq-item ${activeTab === `q-right-${i}` ? 'active' : ''}`} onClick={() => setActiveTab(activeTab === `q-right-${i}` ? '' : `q-right-${i}`)}>
                <div className="faq-q">{f.q} <span>{activeTab === `q-right-${i}` ? '−' : '+'}</span></div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-footer reveal-on-scroll stagger-2">
          <a href={waLink} className="btn-fill" target="_blank" rel="noopener noreferrer">
            Fale Comigo
          </a>
        </div>
      </section>

      {/* ─── FOOTER REIMAGINADO ─── */}
      <footer className="footer" id="contato">
        <div className="footer-main">
          <div className="footer-col footer-brand reveal-on-scroll">
            <div className="font-serif text-2xl tracking-tighter uppercase text-white leading-none mb-6">
              MARIA PAULA <span className="text-[var(--terra)] font-light italic">VIANA</span>
              <div className="text-[8px] tracking-[0.4em] opacity-40 font-sans font-bold mt-1">ADVOCACIA</div>
            </div>
            <p className="footer-phrase whitespace-pre-line">
              Uma pequena vela,
              e às vezes é tudo
              que se precisa.
            </p>
          </div>

          <div className="footer-col reveal-on-scroll stagger-1">
            <h3 className="footer-title">Navegação</h3>
            <div className="footer-links">
              <a href="#inicio" className="footer-link">Início</a>
              <a href="#sobre" className="footer-link">Sobre</a>
              <a href="#servicos" className="footer-link">Serviços</a>
              <a href="#processo" className="footer-link">Como funciona</a>
              <a href="#depoimentos" className="footer-link">Depoimentos</a>
              <a href="#faq" className="footer-link">Dúvidas</a>
            </div>
          </div>

          <div className="footer-col reveal-on-scroll stagger-2">
            <h3 className="footer-title">Contato</h3>
            <div className="footer-links footer-contact-links">
              <a href={waLink} className="footer-link flex items-center gap-3" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-70 group-hover:opacity-100">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.554 4.183 1.604 5.96L0 24l6.117-1.605A11.803 11.803 0 0012.05 24c6.634 0 12.031-5.396 12.034-12.032a11.774 11.774 0 00-3.535-8.498"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://www.instagram.com/advmariapaulaviana/" className="footer-link flex items-center gap-3" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="opacity-70 group-hover:opacity-100" />
                @advmariapaulaviana
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-oab">
            Termos de Uso | Políticas de Privacidade
          </div>
          <div className="footer-credits">
            Criado com amor e fé por <a href="https://www.instagram.com/gustavozinatto/" target="_blank" rel="noopener noreferrer">Gustavo Zinatto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
