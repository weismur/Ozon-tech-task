class ProgressBarComponent extends HTMLElement {
  static get observedAttributes() {
    return ["progress-value", "is-animated", "is-hidden"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.init();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const radialProgress = this.shadowRoot.getElementById("radial-progress");
    if (name === "progress-value") {
      const value = 0 < +newValue && +newValue <= 100 ? newValue : 0;
      radialProgress.style.cssText += `background: radial-gradient(closest-side, white 83%, transparent 80% 100%),
        conic-gradient(#005CFF ${value}%, #EAF0F6 0);`;
    }
    if (name === "is-animated") {
      if (newValue === "true") {
        radialProgress.style.animationPlayState = `running`;
      } else {
        radialProgress.style.animationPlayState = `paused`;
      }
    }
    if (name === "is-hidden") {
      if (newValue === "true") {
        radialProgress.style.opacity = "0";
      } else {
        radialProgress.style.opacity = "1";
      }
    }
  }

  init() {
    this.shadowRoot.innerHTML = `
      <style>
        .progress__bar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background:
            radial-gradient(closest-side, white 83%, transparent 0% 100%),
            conic-gradient(#005CFF 0%, #EAF0F6 0);
          animation: rotate 2s ease-in-out infinite paused;
          opacity: 1;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      </style>
      <div class="progress__bar" id="radial-progress">
      </div>
    `;
  }
}

customElements.define("progress-bar-component", ProgressBarComponent);
