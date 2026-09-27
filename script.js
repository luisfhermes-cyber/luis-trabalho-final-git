document.addEventListener('DOMContentLoaded', () => {

    const form       = document.querySelector('form');
    const textarea   = form ? form.querySelector('#comentario') : null;
    const MAX_CARACT = 500;
  
    
    if (textarea) {
      const contador = document.createElement('small');
      contador.style.display = 'block';
      contador.style.textAlign = 'right';
      contador.style.padding = '0';
      textarea.insertAdjacentElement('afterend', contador);
  
      const atualizarContador = () => {
        const usados = textarea.value.length;
        contador.textContent = `${usados}/${MAX_CARACT} caracteres`;
        contador.style.color = usados > MAX_CARACT ? '#b3261e' : '';
      };
      textarea.addEventListener('input', atualizarContador);
      atualizarContador();
    }
  
    
    function validar() {
      const nome  = form.nome.value.trim();
      const email = form.email.value.trim();
      const texto = textarea.value.trim();
  
      if (nome.length < 2)            return 'Informe um nome válido (mínimo 2 letras).';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                                      return 'Informe um e-mail válido.';
      if (texto.length < 10)          return 'Seu comentário precisa de pelo menos 10 caracteres.';
      if (texto.length > MAX_CARACT)  return `Comentário muito longo (máximo ${MAX_CARACT} caracteres).`;
      return null; 
    }
  
    
  
    
    const tituloComentarios = [...document.querySelectorAll('h2')]
      .find(h => h.textContent.includes('Comentários Recentes'));
  
    const lista = document.createElement('div');
    lista.id = 'lista-comentarios';
  
    if (tituloComentarios) {
      let el = tituloComentarios.nextElementSibling;
      let grupo = null;
      while (el && el.tagName !== 'HR') {
        const proximo = el.nextElementSibling;
        if (el.tagName === 'H4') {
          grupo = document.createElement('div');
          lista.appendChild(grupo);
        }
        if (grupo) grupo.appendChild(el);
        else       lista.appendChild(el);
        el = proximo;
      }
     
      lista.querySelectorAll(':scope > div').forEach(g => {
        const em = g.querySelector('em');
        if (em) g.dataset.topico = em.textContent.replace('Tópico:', '').trim();
      });
      tituloComentarios.insertAdjacentElement('afterend', lista);
    }
  
    
    function adicionarComentario(nome, topico, comentario, aoInicio = false) {
      const h4 = document.createElement('h4');
      h4.textContent = nome;
  
      const em = document.createElement('p');
      const italico = document.createElement('em');
      italico.textContent = `Tópico: ${topico}`;
      em.appendChild(italico);
  
      const corpo = document.createElement('p');
      corpo.textContent = `“${comentario}”`;
  
      const grupo = document.createElement('div');
      grupo.dataset.topico = topico;
      grupo.append(h4, em, corpo);
  
      if (aoInicio) lista.prepend(grupo);
      else          lista.append(grupo);
  
      grupo.style.opacity = '0';
      grupo.style.transition = 'opacity .6s ease';
      requestAnimationFrame(() => grupo.style.opacity = '1');
    }
  
    function incrementarContador(topico) {
      document.querySelectorAll('h3').forEach(h3 => {
        if (h3.textContent.includes(topico)) {
          const p = h3.nextElementSibling.nextElementSibling; 
          if (!p) return;
          const atual = parseInt(p.textContent.replace(/\D/g, ''), 10) || 0;
          p.innerHTML = `<strong>Comentários:</strong> ${atual + 1}`;
        }
      });
    }
  
    
    const CHAVE = 'comentarios-vaqueiro';
    function salvar(nome, topico, comentario) {
      const dados = JSON.parse(localStorage.getItem(CHAVE) || '[]');
      dados.push({ nome, topico, comentario, data: new Date().toISOString() });
      localStorage.setItem(CHAVE, JSON.stringify(dados));
    }
    function restaurar() {
      JSON.parse(localStorage.getItem(CHAVE) || '[]')
        .forEach(c => adicionarComentario(c.nome, c.topico, c.comentario));
    }
    restaurar();
  
  
     
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault(); 
  
        const erro = validar();
        if (erro) { alert(erro); return; }
  
        const nome       = form.nome.value.trim();
        const topico     = form.topico.value;
        const comentario = textarea.value.trim();
  
        adicionarComentario(nome, topico, comentario, true); 
        salvar(nome, topico, comentario);
        incrementarContador(topico);
  
        form.reset();
        textarea.dispatchEvent(new Event('input')); 
        tituloComentarios.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
   
    if (tituloComentarios) {
      const filtro = document.createElement('select');
      filtro.innerHTML = `<option value="">Todos os tópicos</option>` +
        [...document.querySelectorAll('form select option')].map(o =>
          `<option>${o.textContent}</option>`).join('');
      filtro.style.marginBottom = '1.2rem';
      tituloComentarios.insertAdjacentElement('afterend', filtro);
  
      filtro.addEventListener('change', () => {
        lista.querySelectorAll(':scope > div').forEach(grupo => {
          grupo.style.display =
            !filtro.value || grupo.dataset.topico === filtro.value ? '' : 'none';
        });
      });
    }
  
    
    const topo = document.createElement('button');
    topo.textContent = '↑ Topo';
    Object.assign(topo.style, {
      position: 'fixed', bottom: '1.2rem', right: '1.2rem',
      padding: '.6rem 1rem', border: 'none', borderRadius: '8px',
      background: '#b4551f', color: '#fffaf0', cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(61,43,31,.3)', display: 'none', zIndex: '99',
      margin: '0', maxWidth: 'none'
    });
    document.body.appendChild(topo);
  
    window.addEventListener('scroll', () => {
      topo.style.display = window.scrollY > 400 ? 'block' : 'none';
    });
    topo.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' }));
    
    const estilo = document.createElement('style');
    estilo.textContent = `
      body.lamparina {
        --cor-fundo:#241a12; --cor-painel:#2f2318; --cor-borda:#5a4028;
        --cor-texto:#f2d8b8; --cor-texto-suave:#c9a878; --cor-titulo:#f2a15f;
      }
      body.lamparina h1, body.lamparina h2, body.lamparina h3, body.lamparina h4 { color:#f2d8b8 !important; }
      body.lamparina input, body.lamparina select, body.lamparina textarea { background:#3d2b1f; color:#f2d8b8; }
      body.lamparina pre { background:#1c130c; }`;
    document.head.appendChild(estilo);
  
    const lamparina = document.createElement('button');
    lamparina.textContent = '🏮 Lamparina';
    Object.assign(lamparina.style, {
      position: 'fixed', bottom: '1.2rem', left: '1.2rem',
      padding: '.6rem 1rem', border: '1px solid #d9c3a0', borderRadius: '8px',
      background: 'transparent', color: 'inherit', cursor: 'pointer', zIndex: '99',
      margin: '0', maxWidth: 'none'
    });
    document.body.appendChild(lamparina);
    lamparina.addEventListener('click', () => document.body.classList.toggle('lamparina'));
  
    
    const secaoLetra = [...document.querySelectorAll('h2')]
      .find(h => h.textContent.includes('Letra Original'));
  
    if (secaoLetra) {
      const btnAboio = document.createElement('button');
      btnAboio.textContent = '🎵 Ouvir o aboio';
      Object.assign(btnAboio.style, {
        display: 'block', margin: '0 auto 1.2rem', padding: '.6rem 1.4rem',
        border: 'none', borderRadius: '8px', cursor: 'pointer',
        background: '#5f6f3a', color: '#fffaf0'
      });
      secaoLetra.insertAdjacentElement('afterend', btnAboio);
  
      btnAboio.addEventListener('click', () => {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const agora = ctx.currentTime;
  
        
        const notas = [523.25, 466.16, 392.00, 440.00, 349.23]; 
        notas.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const ganho = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq * 1.02, agora + i * 0.55);
          osc.frequency.exponentialRampToValueAtTime(freq, agora + i * 0.55 + 0.25);
          ganho.gain.setValueAtTime(0.0001, agora + i * 0.55);
          ganho.gain.exponentialRampToValueAtTime(0.22, agora + i * 0.55 + 0.08);
          ganho.gain.exponentialRampToValueAtTime(0.0001, agora + i * 0.55 + 0.5);
          osc.connect(ganho).connect(ctx.destination);
          osc.start(agora + i * 0.55);
          osc.stop(agora + i * 0.55 + 0.55);
        });
      });
    }
  });