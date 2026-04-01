/* ============================================================
   topic.js — Common interactions for all topic pages
   JS Mastery
   ============================================================ */

// ── Helpers ────────────────────────────────────────────────────
function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatValue(v) {
  if (v === null)      return '<span class="out-null">null</span>';
  if (v === undefined) return '<span class="out-undef">undefined</span>';
  if (typeof v === 'number')  return `<span class="out-num">${v}</span>`;
  if (typeof v === 'boolean') return `<span class="out-bool">${v}</span>`;
  if (typeof v === 'string')  return `<span class="out-str">${escHtml(v)}</span>`;
  if (typeof v === 'object') {
    try { return `<span class="out-obj">${escHtml(JSON.stringify(v, null, 2))}</span>`; }
    catch { return escHtml(String(v)); }
  }
  return escHtml(String(v));
}

function executeJS(code) {
  const lines  = [];
  const _log   = console.log;
  const _warn  = console.warn;
  let   isError = false;

  console.log  = (...args) => lines.push(args.map(formatValue).join(' '));
  console.warn = (...args) => lines.push(
    args.map(a => `<span class="out-undef">${escHtml(String(a))}</span>`).join(' ')
  );

  try {
    // new Function executes in global scope — perfect for self-contained snippets
    // eslint-disable-next-line no-new-func
    new Function(code)();
  } catch (e) {
    lines.push(`<span class="is-error">// Error: ${escHtml(e.message)}</span>`);
    isError = true;
  } finally {
    console.log  = _log;
    console.warn = _warn;
  }

  return { lines, isError };
}

// ── Copy buttons ───────────────────────────────────────────────
document.querySelectorAll('.example-header').forEach(header => {
  const block  = header.closest('.example-block');
  const codeEl = block && block.querySelector('pre code');
  if (!codeEl) return;

  const btn = document.createElement('button');
  btn.className   = 'copy-btn';
  btn.textContent = 'Copy';
  btn.setAttribute('aria-label', 'Copy code to clipboard');
  header.appendChild(btn);

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeEl.textContent);
      btn.textContent = '✓ Copied!';
      btn.classList.add('copied');
    } catch {
      // Fallback for older browsers / HTTP contexts
      const ta = document.createElement('textarea');
      ta.value = codeEl.textContent;
      ta.style.cssText = 'position:fixed;opacity:0;';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.textContent = '✓ Copied!';
      btn.classList.add('copied');
    }
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
});

// ── Run buttons ────────────────────────────────────────────────
document.querySelectorAll('.run-btn').forEach(btn => {
  const panel  = btn.closest('.output-panel');
  const output = panel.querySelector('.output-body');
  // The code lives in the nearest ancestor that holds both pre and output-panel
  const host   = panel.parentElement;
  const codeEl = host.querySelector('pre code');

  btn.addEventListener('click', () => {
    btn.textContent = '⟳ Running…';
    btn.disabled    = true;

    // Small visual delay so the user sees the "running" state
    setTimeout(() => {
      const { lines } = executeJS(codeEl.textContent);

      output.innerHTML = '';

      if (lines.length === 0) {
        output.innerHTML = '<span class="output-empty">// No output</span>';
      } else {
        lines.forEach((html, i) => {
          const div = document.createElement('div');
          div.className = 'output-line';
          div.style.animationDelay = `${i * 60}ms`;
          div.innerHTML = html;
          output.appendChild(div);
        });
      }

      panel.classList.add('live');
      btn.textContent = '▶ Run again';
      btn.disabled    = false;
    }, 160);
  });
});

// ── HTML live preview ──────────────────────────────────────────
document.querySelectorAll('.preview-btn').forEach(btn => {
  const panel  = btn.closest('.output-panel, .preview-panel');
  const block  = btn.closest('.example-block');
  const codeEl = block.querySelector('pre code');
  const iframe = block.querySelector('.preview-frame');
  const dot    = panel.querySelector('.output-dot');

  btn.addEventListener('click', () => {
    // textContent decodes HTML entities — gives us real HTML
    iframe.srcdoc = codeEl.textContent;
    iframe.classList.add('visible');
    if (dot) { dot.style.background = 'var(--blue)'; dot.style.boxShadow = '0 0 7px rgba(130,170,255,0.7)'; }
    btn.textContent = '⟳ Refresh';

    // Auto-resize iframe to content height after load
    iframe.onload = () => {
      try {
        const h = iframe.contentDocument.body.scrollHeight;
        if (h > 40) iframe.style.height = h + 20 + 'px';
      } catch { /* cross-origin or sandboxed — ignore */ }
    };
  });
});

// ── MCQ interaction ────────────────────────────────────────────
document.querySelectorAll('.mcq-card').forEach(card => {
  const options     = card.querySelectorAll('.mcq-option');
  const explanation = card.querySelector('.mcq-explanation');
  let   answered    = false;

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      if (answered) return;
      answered = true;

      options.forEach(o => {
        o.classList.add(o.dataset.correct === 'true' ? 'correct' : 'wrong');
      });

      if (explanation) {
        explanation.classList.add('visible');
        explanation.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
});

// ── Mini challenge reveal ──────────────────────────────────────
const revealBtn = document.querySelector('.reveal-btn');
if (revealBtn) {
  revealBtn.addEventListener('click', () => {
    const answer = document.querySelector('.challenge-answer');
    if (answer) {
      answer.classList.add('visible');
      answer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    revealBtn.textContent = '✓ Answer Revealed';
    revealBtn.disabled    = true;
  });
}
