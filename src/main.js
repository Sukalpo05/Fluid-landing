// Import styling
import './style.css';

/* ==========================================================================
   Dataset: Interactive Compiler Presets
   ========================================================================== */

const PRESETS = {
  checkout: {
    fileName: "payment_gateway.json",
    schema: {
      "$schema": "https://fluid.dev/schemas/v1/capability.json",
      "id": "payment_gateway",
      "version": "1.2.0",
      "actions": {
        "process_payment": {
          "inputs": {
            "amount": "float",
            "currency": "string",
            "payment_method": "select",
            "billing_zip": "string"
          }
        }
      }
    },
    intents: {
      standard: {
        name: "Intent A: US Web Pro",
        emoji: "💻",
        description: "Desktop browser, US user, high-speed connection. Requesting advanced payment options with full billing layout.",
        device: "desktop",
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
    fileName: "metrics_collector.json",
    schema: {
      "$schema": "https://fluid.dev/schemas/v1/capability.json",
      "id": "metrics_collector",
      "version": "2.4.1",
      "actions": {
        "fetch_telemetry": {
          "inputs": {
            "resolution": "string",
            "host_id": "string",
            "metric_type": "string"
          }
        }
      }
    },
    intents: {
      standard: {
        name: "Intent A: US Web Pro",
        emoji: "💻",
        description: "Desktop browser, SRE developer. Requests dense telemetry view with granular latency histograms and action items.",
        device: "desktop",
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
    fileName: "user_engagement.json",
    schema: {
      "$schema": "https://fluid.dev/schemas/v1/capability.json",
      "id": "user_engagement",
      "version": "1.0.2",
      "actions": {
        "submit_feedback": {
          "inputs": {
            "rating": "int",
            "comment": "string"
          }
        }
      }
    },
    intents: {
      standard: {
        name: "Intent A: US Web Pro",
        emoji: "💻",
        description: "Desktop browser, satisfied experience indicators. Renders star selection widget and input comment fields.",
        device: "desktop",
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

// DOM Elements
const schemaPresetSelect = document.getElementById('schema-preset');
const schemaCodeDisplay = document.getElementById('schema-code-display');
const intentDescElement = document.getElementById('intent-description');
const irCodeDisplay = document.getElementById('compiled-ir-display');
const previewViewport = document.getElementById('preview-viewport');
const intentButtons = document.querySelectorAll('.intent-btn');
const meterBar = document.querySelector('.meter-bar');

const logStep1 = document.getElementById('log-step-1');
const logStep2 = document.getElementById('log-step-2');
const logStep3 = document.getElementById('log-step-3');
const logStep4 = document.getElementById('log-step-4');

/**
 * Initialize Demo Workspace
 */
function initDemo() {
  // Preset Select Listener
  schemaPresetSelect.addEventListener('change', (e) => {
    activePresetKey = e.target.value;
    // Set standard intent as default for new preset
    activeIntentKey = 'standard';
    updateIntentButtonsMarkup();
    triggerCompilation();
  });

  // Intent Button Click Listener
  intentButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const intentKeys = ['standard', 'mobile', 'outage'];
      activeIntentKey = intentKeys[idx];
      
      // Update active state in buttons UI
      intentButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      triggerCompilation();
    });
  });

  // Run initial compile
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

    // Reset active button state
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

  // Update Left Panel: Schema Code & Description
  schemaCodeDisplay.textContent = JSON.stringify(preset.schema, null, 2);
  intentDescElement.textContent = intentData.description;

  // Clear previous timers & reset compiler UI
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

  // Animate Compiler panel steps sequentially
  let currentStepIndex = 0;
  meterBar.style.transition = 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  meterBar.style.width = '100%';

  function runStep() {
    if (currentStepIndex < steps.length) {
      const step = steps[currentStepIndex];
      step.classList.add('active');
      const statusSpan = step.querySelector('.log-status');
      if (statusSpan) {
        statusSpan.textContent = 'DONE';
        statusSpan.style.color = 'var(--accent-green)';
      }
      currentStepIndex++;
      compileTimer = setTimeout(runStep, 250);
    } else {
      // Compilation finished -> Render outputs
      renderOutput(intentData);
    }
  }

  // Start animation loop
  runStep();
}

/**
 * Render IR Code and Live UI Preview Component
 */
function renderOutput(intentData) {
  // Update IR Display code
  irCodeDisplay.textContent = JSON.stringify(intentData.ir, null, 2);

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

  intentData.ir.components.forEach(comp => {
    const el = document.createElement('div');

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
          
          // Animate height entrance
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

  // We can re-trigger or play typing sequences here if desired
  // Currently, the static lines look very clean. Let's make it blink the cursor!
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
   Bootstrap Application
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initDemo();
  initCodeTabs();
  initClipboardCopy();
  animateTerminal();
  initScrollReveal();
});
