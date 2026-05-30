// Import styling
import './style.css';

/* ==========================================================================
   Dataset: Interactive Compiler Presets (Aligned with ARCHITECTURE.md)
   ========================================================================== */

const PRESETS = {
  checkout: {
    fileName: "payment_gateway.ts",
    schema: {
      "id": "payment_gateway",
      "version": "1.2.0",
      "entities": {
        "Transaction": {
          "amount": { "type": "float", "required": true },
          "currency": { "type": "string", "required": true },
          "payment_method": { "type": "select", "options": ["card", "paypal", "wire"], "required": true },
          "billing_zip": { "type": "string", "required": false }
        }
      },
      "endpoints": {
        "process_payment": {
          "path": "/api/payments",
          "method": "POST"
        }
      }
    },
    intents: {
      standard: {
        name: "Intent A: US Web Pro",
        emoji: "💻",
        description: "Desktop browser, US user, high-speed connection. Requesting advanced payment options with full billing layout.",
        device: "desktop",
        intentText: "standard credit checkout for web users in US region",
        usage: { "thinking_tokens": 820, "input_tokens": 1420, "output_tokens": 480 },
        latencyMs: 8200,
        ir: {
          "$schema": "https://fluid.dev/ir/v1.json",
          "id": "payment_gateway",
          "layout": { "style": "glassmorphic", "width": "desktop" },
          "components": [
            { "type": "heading", "content": "Complete Checkout" },
            { "type": "label", "text": "Select payment method" },
            { "type": "payment_methods", "options": ["Credit Card", "PayPal", "Wire"] },
            { "type": "input", "placeholder": "Cardholder Name" },
            { "type": "input", "placeholder": "Card Number (•••• •••• •••• ••••)" },
            { "type": "row", "children": [
              { "type": "input", "placeholder": "MM/YY" },
              { "type": "input", "placeholder": "CVC" }
            ]},
            { "type": "button", "label": "Pay $49.00 USD", "variant": "primary" }
          ]
        }
      },
      mobile: {
        name: "Intent B: Tokyo Mobile",
        emoji: "📱",
        description: "Mobile device, Tokyo location, transit network. Requesting instant local payment methods, avoiding text fields.",
        device: "mobile",
        intentText: "mobile one-click checkout in yen on commuter network",
        usage: { "thinking_tokens": 640, "input_tokens": 1420, "output_tokens": 310 },
        latencyMs: 5800,
        ir: {
          "$schema": "https://fluid.dev/ir/v1.json",
          "id": "payment_gateway",
          "layout": { "style": "compact", "width": "mobile" },
          "components": [
            { "type": "heading", "content": "クイック決済" },
            { "type": "express_button", "provider": "Apple Pay" },
            { "type": "express_button", "provider": "LINE Pay" },
            { "type": "divider", "text": "または通常決済" },
            { "type": "button", "label": "¥5,400 支払う", "variant": "primary" }
          ]
        }
      },
      outage: {
        name: "Intent C: Outage Mode",
        emoji: "🚨",
        description: "Edge networks degraded. Requesting emergency fallback checkout capability using offline-first deferred credit authorizations.",
        device: "desktop",
        intentText: "degraded service mode with billing queue deferred actions",
        usage: { "thinking_tokens": 980, "input_tokens": 1580, "output_tokens": 360 },
        latencyMs: 9100,
        ir: {
          "$schema": "https://fluid.dev/ir/v1.json",
          "id": "payment_gateway",
          "layout": { "style": "warning-dense", "width": "desktop" },
          "components": [
            { "type": "alert", "content": "Payment API degraded. Running in offline grace mode.", "status": "danger" },
            { "type": "input", "placeholder": "Email Address for Receipt" },
            { "type": "button", "label": "Queue Deferred Transaction", "variant": "danger" }
          ]
        }
      }
    }
  },
  dashboard: {
    fileName: "metrics_collector.ts",
    schema: {
      "id": "metrics_collector",
      "version": "2.4.1",
      "entities": {
        "Telemetry": {
          "resolution": { "type": "string", "required": true },
          "host_id": { "type": "string", "required": true },
          "metric_type": { "type": "string", "required": true },
          "timestamp": { "type": "datetime", "required": true }
        }
      },
      "endpoints": {
        "fetch_telemetry": {
          "path": "/api/telemetry/query",
          "method": "POST"
        }
      }
    },
    intents: {
      standard: {
        name: "Intent A: US Web Pro",
        emoji: "💻",
        description: "Desktop browser, SRE developer. Requests dense telemetry view with granular latency histograms and action items.",
        device: "desktop",
        intentText: "dense telemetry metrics list with edge latency spikes",
        usage: { "thinking_tokens": 1050, "input_tokens": 1390, "output_tokens": 580 },
        latencyMs: 7600,
        ir: {
          "$schema": "https://fluid.dev/ir/v1.json",
          "id": "metrics_collector",
          "layout": { "style": "technical", "width": "desktop" },
          "components": [
            { "type": "heading", "content": "P99 Edge Latency (ms)" },
            { "type": "chart", "values": [12, 14, 9, 18, 33, 15, 11], "danger": false },
            { "type": "label", "text": "Edge Node Logs" },
            { "type": "logs", "lines": [
              "22:31:02 [GET] /ir/resolve - 200 OK (1.4ms)",
              "22:31:05 [GET] /ir/resolve - 200 OK (1.1ms)",
              "22:31:08 [GET] /ir/resolve - 304 Cache HIT"
            ]},
            { "type": "button", "label": "Download CSV Log Dump", "variant": "secondary" }
          ]
        }
      },
      mobile: {
        name: "Intent B: Tokyo Mobile",
        emoji: "📱",
        description: "Mobile viewport. Requests a simple, read-only status metric to quickly verify infrastructure health on-the-go.",
        device: "mobile",
        intentText: "radial summary metric gauge of cluster health mobile view",
        usage: { "thinking_tokens": 550, "input_tokens": 1390, "output_tokens": 280 },
        latencyMs: 4900,
        ir: {
          "$schema": "https://fluid.dev/ir/v1.json",
          "id": "metrics_collector",
          "layout": { "style": "radial-summary", "width": "mobile" },
          "components": [
            { "type": "heading", "content": "System Health" },
            { "type": "metric_value", "label": "Edge API uptime", "value": "99.98%" },
            { "type": "label", "text": "All global edge nodes online" },
            { "type": "button", "label": "Open PagerDuty Dashboard", "variant": "primary" }
          ]
        }
      },
      outage: {
        name: "Intent C: Outage Mode",
        emoji: "🚨",
        description: "High load/incident detected. Renders alert panel highlighting latency spike anomalies and primary emergency actions.",
        device: "desktop",
        intentText: "critical latency incident alert and traffic reroute actions",
        usage: { "thinking_tokens": 1120, "input_tokens": 1540, "output_tokens": 420 },
        latencyMs: 8400,
        ir: {
          "$schema": "https://fluid.dev/ir/v1.json",
          "id": "metrics_collector",
          "layout": { "style": "incident-level-1", "width": "desktop" },
          "components": [
            { "type": "alert", "content": "Critical spike: US-West Edge Latency > 850ms", "status": "danger" },
            { "type": "chart", "values": [15, 18, 22, 19, 95, 99, 98], "danger": true },
            { "type": "button", "label": "Reroute Traffic instantly", "variant": "danger" }
          ]
        }
      }
    }
  },
  feedback: {
    fileName: "user_engagement.ts",
    schema: {
      "id": "user_engagement",
      "version": "1.0.2",
      "entities": {
        "Response": {
          "rating": { "type": "integer", "required": true },
          "comment": { "type": "string", "required": true },
          "incident_code": { "type": "string", "required": false }
        }
      },
      "endpoints": {
        "submit_feedback": {
          "path": "/api/engagement/feedback",
          "method": "POST"
        }
      }
    },
    intents: {
      standard: {
        name: "Intent A: US Web Pro",
        emoji: "💻",
        description: "Desktop browser, satisfied experience indicators. Renders star selection widget and input comment fields.",
        device: "desktop",
        intentText: "classic desktop developer rating form with stars selector",
        usage: { "thinking_tokens": 760, "input_tokens": 1410, "output_tokens": 430 },
        latencyMs: 6900,
        ir: {
          "$schema": "https://fluid.dev/ir/v1.json",
          "id": "user_engagement",
          "layout": { "style": "glassmorphic", "width": "desktop" },
          "components": [
            { "type": "heading", "content": "Rate Fluid Engine" },
            { "type": "stars", "label": "Select stars rating", "count": 5 },
            { "type": "textarea", "placeholder": "What features can we improve?" },
            { "type": "button", "label": "Submit Feedback", "variant": "primary" }
          ]
        }
      },
      mobile: {
        name: "Intent B: Tokyo Mobile",
        emoji: "📱",
        description: "Mobile viewport, satisfied developer context. Displays a quick single-tap emoji reaction selector to maximize click rates.",
        device: "mobile",
        intentText: "mobile friendly fast reaction emoji grid select metrics",
        usage: { "thinking_tokens": 480, "input_tokens": 1410, "output_tokens": 290 },
        latencyMs: 4100,
        ir: {
          "$schema": "https://fluid.dev/ir/v1.json",
          "id": "user_engagement",
          "layout": { "style": "emoji-grid", "width": "mobile" },
          "components": [
            { "type": "heading", "content": "How's the experience?" },
            { "type": "emojis", "options": ["😢", "😐", "😊", "🚀"] },
            { "type": "button", "label": "Submit Quick Rating", "variant": "primary" }
          ]
        }
      },
      outage: {
        name: "Intent C: Outage Mode",
        emoji: "🚨",
        description: "Incident scenario. Replaces standard product feedback with a critical incident support ticket submission layout.",
        device: "desktop",
        intentText: "incident reports collection form SLA alert on desktop",
        usage: { "thinking_tokens": 990, "input_tokens": 1560, "output_tokens": 390 },
        latencyMs: 7800,
        ir: {
          "$schema": "https://fluid.dev/ir/v1.json",
          "id": "user_engagement",
          "layout": { "style": "escalation-support", "width": "desktop" },
          "components": [
            { "type": "alert", "content": "Operational outage active. Support SLA Response: < 15 mins", "status": "danger" },
            { "type": "textarea", "placeholder": "Describe stack impact and error logs..." },
            { "type": "button", "label": "Escalate Ticket to On-Call SRE", "variant": "danger" }
          ]
        }
      }
    }
  }
};

/* ==========================================================================
   State Management & Interactive Demo Engine
   ========================================================================== */

let activePresetKey = 'checkout';
let activeIntentKey = 'standard';
let compileTimer = null;

// Simulated Memory Cache representing Redis/Local Map cache (1h TTL)
const applicationCache = new Map();

// DOM Elements
const schemaPresetSelect = document.getElementById('schema-preset');
const schemaCodeDisplay = document.getElementById('schema-code-display');
const intentDescElement = document.getElementById('intent-description');
const irCodeDisplay = document.getElementById('compiled-ir-display');
const previewViewport = document.getElementById('preview-viewport');
const intentButtons = document.querySelectorAll('.intent-btn');
const meterBar = document.querySelector('.meter-bar');
const latencyBadge = document.getElementById('latency-badge');

const logStep1 = document.getElementById('log-step-1');
const logStep2 = document.getElementById('log-step-2');
const logStep3 = document.getElementById('log-step-3');
const logStep4 = document.getElementById('log-step-4');

/**
 * Simple Hash simulator to yield reproducible 16-char hashes matching:
 * ir:{schema}:{sha256(intent)[:16]}
 */
function simulateHash(schemaId, intentText) {
  let hash = 0;
  const merged = `${schemaId}:${intentText.trim().toLowerCase()}`;
  for (let i = 0; i < merged.length; i++) {
    const char = merged.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return `ir:${schemaId}:${Math.abs(hash).toString(16).padEnd(16, '0').slice(0, 16)}`;
}

/**
 * Initialize Demo Workspace
 */
function initDemo() {
  schemaPresetSelect.addEventListener('change', (e) => {
    activePresetKey = e.target.value;
    activeIntentKey = 'standard';
    updateIntentButtonsMarkup();
    triggerCompilation();
  });

  intentButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const intentKeys = ['standard', 'mobile', 'outage'];
      activeIntentKey = intentKeys[idx];
      
      intentButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      triggerCompilation();
    });
  });

  updateIntentButtonsMarkup();
  triggerCompilation();
}

/**
 * Update the button labels with correct emojis based on selected preset
 */
function updateIntentButtonsMarkup() {
  const preset = PRESETS[activePresetKey];
  intentButtons.forEach((btn, idx) => {
    const keys = ['standard', 'mobile', 'outage'];
    const key = keys[idx];
    const data = preset.intents[key];
    
    const iconSpan = btn.querySelector('.intent-icon');
    const nameSpan = btn.querySelector('.intent-name');
    
    if (iconSpan) iconSpan.textContent = data.emoji;
    if (nameSpan) nameSpan.textContent = data.name;

    if (key === activeIntentKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Run Compilation Simulation
 */
function triggerCompilation() {
  const preset = PRESETS[activePresetKey];
  const intentData = preset.intents[activeIntentKey];
  
  // 1. Calculate Cache Key
  const cacheKey = simulateHash(preset.schema.id, intentData.intentText);
  const cacheHit = applicationCache.has(cacheKey);

  // Update Left Panel: Schema Code & Description
  schemaCodeDisplay.textContent = JSON.stringify(preset.schema, null, 2);
  intentDescElement.textContent = intentData.description;

  if (compileTimer) clearTimeout(compileTimer);
  meterBar.style.width = '0%';
  
  const steps = [logStep1, logStep2, logStep3, logStep4];
  steps.forEach(step => {
    step.classList.remove('active');
    const statusSpan = step.querySelector('.log-status');
    if (statusSpan) {
      statusSpan.textContent = 'WAITING';
      statusSpan.style.color = '#666666';
    }
  });

  // Calculate speeds based on Cache HIT status
  const runDuration = cacheHit ? 180 : 1200; // Hit resolves in 180ms, Miss in 1200ms
  const stepDelay = cacheHit ? 40 : 250;

  // Animate Compiler panel steps sequentially
  let currentStepIndex = 0;
  meterBar.style.transition = `width ${runDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  meterBar.style.width = '100%';

  // Update Compiler Log Labels dynamically to match Cache Key Hashing
  logStep1.querySelector('.log-text').textContent = `Hash Intent: ${cacheKey}`;
  logStep2.querySelector('.log-text').textContent = `Query IR Cache: ${cacheHit ? 'CACHE HIT' : 'CACHE MISS'}`;
  logStep3.querySelector('.log-text').textContent = cacheHit ? `Loading cached IR tree` : `Calling Claude stream (ephemeral prompt)`;
  logStep4.querySelector('.log-text').textContent = cacheHit ? `Bypassing Zod check` : `Validating JSON with Zod schema`;

  function runStep() {
    if (currentStepIndex < steps.length) {
      const step = steps[currentStepIndex];
      step.classList.add('active');
      const statusSpan = step.querySelector('.log-status');
      if (statusSpan) {
        if (currentStepIndex === 1) {
          statusSpan.textContent = cacheHit ? 'HIT' : 'MISS';
          statusSpan.style.color = cacheHit ? 'var(--accent-cyan)' : 'var(--accent-pink)';
        } else {
          statusSpan.textContent = 'DONE';
          statusSpan.style.color = 'var(--accent-green)';
        }
      }
      currentStepIndex++;
      compileTimer = setTimeout(runStep, stepDelay);
    } else {
      // Set to cache for subsequent clicks
      if (!cacheHit) {
        applicationCache.set(cacheKey, intentData.ir);
      }
      renderOutput(intentData, cacheHit);
    }
  }

  runStep();
}

/**
 * Render IR Code and Live UI Preview Component
 */
function renderOutput(intentData, cacheHit) {
  // Update IR Display code
  irCodeDisplay.textContent = JSON.stringify(intentData.ir, null, 2);

  // Update Latency Badge metadata
  if (cacheHit) {
    latencyBadge.textContent = 'CACHE HIT — 1.4ms';
    latencyBadge.style.color = 'var(--accent-cyan)';
    latencyBadge.style.borderColor = 'rgba(0, 223, 216, 0.3)';
    latencyBadge.style.background = 'rgba(0, 223, 216, 0.08)';
  } else {
    latencyBadge.textContent = `RESOLVED — ${(intentData.latencyMs / 1000).toFixed(1)}s (Opus Stream)`;
    latencyBadge.style.color = 'var(--accent-green)';
    latencyBadge.style.borderColor = 'rgba(0, 255, 135, 0.3)';
    latencyBadge.style.background = 'rgba(0, 255, 135, 0.08)';
  }

  // Resize right panel viewport based on intent device
  if (intentData.device === 'mobile') {
    previewViewport.className = 'device-screen device-mobile';
  } else {
    previewViewport.className = 'device-screen';
  }

  // Paint dynamic HTML inside viewport
  previewViewport.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'mock-container';

  // Render Token Usage statistics if Miss path
  if (!cacheHit) {
    const stats = document.createElement('div');
    stats.style.fontFamily = 'var(--font-mono)';
    stats.style.fontSize = '0.65rem';
    stats.style.color = 'var(--fg-muted)';
    stats.style.borderBottom = '1px solid var(--border-muted)';
    stats.style.paddingBottom = '8px';
    stats.style.marginBottom = '8px';
    stats.textContent = `Tokens — In: ${intentData.usage.input_tokens} | Thinking: ${intentData.usage.thinking_tokens} | Out: ${intentData.usage.output_tokens}`;
    container.appendChild(stats);
  } else {
    const cacheNotice = document.createElement('div');
    cacheNotice.style.fontFamily = 'var(--font-mono)';
    cacheNotice.style.fontSize = '0.65rem';
    cacheNotice.style.color = 'var(--accent-cyan)';
    cacheNotice.style.borderBottom = '1px solid var(--border-muted)';
    cacheNotice.style.paddingBottom = '8px';
    cacheNotice.style.marginBottom = '8px';
    cacheNotice.textContent = `Bypassed Claude generation: Loaded from Map application cache.`;
    container.appendChild(cacheNotice);
  }

  intentData.ir.components.forEach(comp => {
    switch (comp.type) {
      case 'heading':
        const title = document.createElement('h4');
        title.className = 'mock-title';
        title.textContent = comp.content;
        container.appendChild(title);
        break;

      case 'label':
        const label = document.createElement('span');
        label.className = 'mock-label';
        label.textContent = comp.text;
        container.appendChild(label);
        break;

      case 'payment_methods':
        const methodsRow = document.createElement('div');
        methodsRow.className = 'mock-payment-row';
        comp.options.forEach((opt, idx) => {
          const methodCard = document.createElement('div');
          methodCard.className = `payment-method-card ${idx === 0 ? 'active' : ''}`;
          
          const icon = document.createElement('div');
          icon.style.fontSize = '1.2rem';
          icon.textContent = opt === 'Credit Card' ? '💳' : opt === 'PayPal' ? '🅿️' : '🏦';
          
          const labelText = document.createElement('div');
          labelText.className = 'method-name';
          labelText.textContent = opt;
          
          methodCard.appendChild(icon);
          methodCard.appendChild(labelText);
          methodsRow.appendChild(methodCard);

          methodCard.addEventListener('click', () => {
            methodsRow.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
            methodCard.classList.add('active');
          });
        });
        container.appendChild(methodsRow);
        break;

      case 'input':
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'mock-input';
        input.placeholder = comp.placeholder;
        container.appendChild(input);
        break;

      case 'row':
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.gap = '12px';
        comp.children.forEach(child => {
          const childInput = document.createElement('input');
          childInput.type = 'text';
          childInput.className = 'mock-input';
          childInput.placeholder = child.placeholder;
          childInput.style.flex = '1';
          row.appendChild(childInput);
        });
        container.appendChild(row);
        break;

      case 'button':
        const btn = document.createElement('button');
        btn.className = `mock-btn ${comp.variant === 'danger' ? 'mock-btn-danger' : ''}`;
        btn.textContent = comp.label;
        btn.addEventListener('click', () => {
          btn.textContent = 'Processing...';
          setTimeout(() => {
            btn.textContent = 'Success ✅';
            setTimeout(() => {
              btn.textContent = comp.label;
            }, 1500);
          }, 1000);
        });
        container.appendChild(btn);
        break;

      case 'express_button':
        const expBtn = document.createElement('button');
        expBtn.className = 'mock-btn';
        expBtn.style.background = comp.provider === 'Apple Pay' ? '#ffffff' : '#06c755';
        expBtn.style.color = comp.provider === 'Apple Pay' ? '#000000' : '#ffffff';
        expBtn.style.display = 'flex';
        expBtn.style.alignItems = 'center';
        expBtn.style.justifyContent = 'center';
        expBtn.style.gap = '8px';
        
        const btnLogo = document.createElement('span');
        btnLogo.textContent = comp.provider === 'Apple Pay' ? '🍎' : '💬';
        const btnText = document.createElement('span');
        btnText.textContent = `${comp.provider}で支払う`;
        btnText.style.fontSize = '0.75rem';
        btnText.style.fontWeight = 'bold';
        
        expBtn.appendChild(btnLogo);
        expBtn.appendChild(btnText);
        
        expBtn.addEventListener('click', () => {
          expBtn.style.opacity = '0.7';
          setTimeout(() => {
            expBtn.style.opacity = '1';
            alert(`Simulated Quick Checkout with ${comp.provider}`);
          }, 400);
        });
        container.appendChild(expBtn);
        break;

      case 'divider':
        const divEl = document.createElement('div');
        divEl.style.display = 'flex';
        divEl.style.alignItems = 'center';
        divEl.style.gap = '10px';
        divEl.style.margin = '4px 0';
        
        const lLine = document.createElement('div');
        lLine.style.flex = '1';
        lLine.style.height = '1px';
        lLine.style.background = 'var(--border-muted)';
        
        const divText = document.createElement('span');
        divText.style.fontSize = '0.7rem';
        divText.style.color = 'var(--fg-muted)';
        divText.textContent = comp.text;
        
        const rLine = lLine.cloneNode();
        
        divEl.appendChild(lLine);
        divEl.appendChild(divText);
        divEl.appendChild(rLine);
        container.appendChild(divEl);
        break;

      case 'alert':
        const alertBox = document.createElement('div');
        alertBox.className = 'mock-alert';
        alertBox.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <span>${comp.content}</span>
        `;
        container.appendChild(alertBox);
        break;

      case 'chart':
        const chartBox = document.createElement('div');
        chartBox.className = 'chart-box';
        const barsCont = document.createElement('div');
        barsCont.className = 'chart-bars';
        
        comp.values.forEach(val => {
          const bar = document.createElement('div');
          bar.className = `chart-bar ${comp.danger ? 'chart-bar-danger' : ''}`;
          bar.style.height = '0%';
          barsCont.appendChild(bar);
          
          setTimeout(() => {
            bar.style.height = `${val}%`;
          }, 100);
        });
        
        chartBox.appendChild(barsCont);
        container.appendChild(chartBox);
        break;

      case 'logs':
        const logsBox = document.createElement('div');
        logsBox.className = 'log-terminal-lines';
        comp.lines.forEach(ln => {
          const line = document.createElement('div');
          line.textContent = ln;
          logsBox.appendChild(line);
        });
        container.appendChild(logsBox);
        break;

      case 'metric_value':
        const metricDiv = document.createElement('div');
        metricDiv.style.textAlign = 'center';
        metricDiv.style.padding = '20px 0';
        
        const mVal = document.createElement('h2');
        mVal.style.fontSize = '3rem';
        mVal.style.color = 'var(--accent-green)';
        mVal.textContent = comp.value;
        
        const mLabel = document.createElement('p');
        mLabel.style.fontSize = '0.8rem';
        mLabel.style.color = 'var(--fg-secondary)';
        mLabel.textContent = comp.label;
        
        metricDiv.appendChild(mVal);
        metricDiv.appendChild(mLabel);
        container.appendChild(metricDiv);
        break;

      case 'stars':
        const starsLabel = document.createElement('span');
        starsLabel.className = 'mock-label';
        starsLabel.textContent = comp.label;
        container.appendChild(starsLabel);

        const starsCont = document.createElement('div');
        starsCont.className = 'star-selector';
        for (let i = 1; i <= comp.count; i++) {
          const star = document.createElement('span');
          star.textContent = '★';
          star.dataset.index = i;
          if (i <= 4) star.classList.add('active'); // Default 4 stars
          starsCont.appendChild(star);

          star.addEventListener('click', () => {
            starsCont.querySelectorAll('span').forEach((s, idx) => {
              if (idx < i) {
                s.classList.add('active');
              } else {
                s.classList.remove('active');
              }
            });
          });
        }
        container.appendChild(starsCont);
        break;

      case 'textarea':
        const area = document.createElement('textarea');
        area.className = 'mock-input';
        area.style.minHeight = '70px';
        area.style.resize = 'none';
        area.placeholder = comp.placeholder;
        container.appendChild(area);
        break;

      case 'emojis':
        const emojiRow = document.createElement('div');
        emojiRow.style.display = 'flex';
        emojiRow.style.justifyContent = 'space-around';
        emojiRow.style.padding = '12px 0';
        comp.options.forEach(em => {
          const emBtn = document.createElement('button');
          emBtn.style.fontSize = '1.8rem';
          emBtn.style.background = 'transparent';
          emBtn.style.border = 'none';
          emBtn.style.cursor = 'pointer';
          emBtn.style.transition = 'transform 0.2s';
          emBtn.textContent = em;
          
          emBtn.addEventListener('click', () => {
            emBtn.style.transform = 'scale(1.3)';
            setTimeout(() => { emBtn.style.transform = 'scale(1)'; }, 200);
          });
          
          emojiRow.appendChild(emBtn);
        });
        container.appendChild(emojiRow);
        break;
    }
  });

  previewViewport.appendChild(container);
}

/* ==========================================================================
   Code Example Section: Tab Switcher
   ========================================================================== */

const codeTabButtons = document.querySelectorAll('.code-tab-btn');
const codeBlocks = document.querySelectorAll('.code-block');

function initCodeTabs() {
  codeTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.dataset.tab;
      
      // Update active classes on buttons
      codeTabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update active classes on code pre blocks
      codeBlocks.forEach(block => {
        if (block.id === `code-${targetTabId}`) {
          block.classList.add('active');
        } else {
          block.classList.remove('active');
        }
      });

      // Update header language label text
      const langLabel = document.querySelector('.lang-label');
      if (langLabel) {
        if (targetTabId === 'schema-tab') langLabel.textContent = 'Typescript';
        else if (targetTabId === 'ir-tab') langLabel.textContent = 'JSON Schema';
        else if (targetTabId === 'react-tab') langLabel.textContent = 'React TSX';
      }
    });
  });
}

/* ==========================================================================
   CLI Command: Copy to Clipboard
   ========================================================================== */

const cliCopyTrigger = document.getElementById('cli-copy-trigger');
const cliCmdText = document.getElementById('cli-cmd-copy');
const copyBtnText = document.getElementById('copy-btn-text');

function initClipboardCopy() {
  if (!cliCopyTrigger || !cliCmdText) return;

  cliCopyTrigger.addEventListener('click', () => {
    const textToCopy = cliCmdText.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Success feedback
      copyBtnText.textContent = 'Copied!';
      cliCopyTrigger.style.borderColor = 'var(--accent-green)';
      cliCopyTrigger.style.color = '#ffffff';

      setTimeout(() => {
        copyBtnText.textContent = 'Copy';
        cliCopyTrigger.style.borderColor = '';
        cliCopyTrigger.style.color = '';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });
}

/* ==========================================================================
   Terminal Window Mock Execution Animation
   ========================================================================== */

function animateTerminal() {
  const terminal = document.getElementById('dx-terminal');
  if (!terminal) return;

  const cursorNode = terminal.querySelector('.term-cmd:last-of-type');
}

/* ==========================================================================
   Scroll Reveal System
   ========================================================================== */

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Stop observing once animated in
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Background Animation
   ========================================================================== */

function initBackgroundAnimation() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let mouse = { x: null, y: null };

  // Multi-layered wave animation
  const waves = [
    {
      // Primary wave (blue)
      points: [],
      amplitude: 80,
      wavelength: 120,
      speed: 0.02,
      offset: 0,
      fillStyle: 'rgba(0, 114, 245, 0.15)',
      strokeStyle: 'rgba(0, 114, 245, 0.6)',
    },
    {
      // Secondary wave (soft white)
      points: [],
      amplitude: 50,
      wavelength: 80,
      speed: 0.015,
      offset: 0,
      fillStyle: 'rgba(255, 255, 255, 0.1)',
      strokeStyle: 'rgba(255, 255, 255, 0.4)',
    },
  ];

  // Initialize points for each wave based on current canvas size
  function initWaves() {
    waves.forEach(wave => {
      wave.points = [];
      for (let x = 0; x <= width; x += 10) {
        wave.points.push({ x, y: height / 2 });
      }
    });
  }

  function updateWaves() {
    waves.forEach(wave => {
      wave.offset += wave.speed;
      for (let i = 0; i < wave.points.length; i++) {
        const p = wave.points[i];
        const dx = p.x + wave.offset * 100;
        p.y = height / 2 + Math.sin(dx / wave.wavelength) * wave.amplitude;
        // Mouse interaction – gentle pull toward cursor
        if (mouse.x !== null) {
          const dist = Math.abs(p.x - mouse.x);
          if (dist < 100) {
            const pull = (100 - dist) / 100;
            p.y += (mouse.y - height / 2) * pull * 0.5;
          }
        }
      }
    });
  }

  function drawWaves() {
    ctx.clearRect(0, 0, width, height);
    waves.forEach(wave => {
      ctx.beginPath();
      ctx.moveTo(0, wave.points[0].y);
      for (let i = 1; i < wave.points.length; i++) {
        ctx.lineTo(wave.points[i].x, wave.points[i].y);
      }
      // Close shape to bottom of canvas for fill
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = wave.fillStyle;
      ctx.fill();
      ctx.strokeStyle = wave.strokeStyle;
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }

  // Resize handler now reinitializes wave points
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initWaves();
  }
  window.addEventListener('resize', resize);
  resize();

  // Initialize and start animation
  initWaves();
  function animate() {
    updateWaves();
    drawWaves();
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   Bootstrap Application
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initDemo();
  initCodeTabs();
  initClipboardCopy();
  animateTerminal();
  initScrollReveal();
  initBackgroundAnimation();
});
