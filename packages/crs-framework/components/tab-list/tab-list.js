import{loadHTML as s}from"./../../src/load-resources.js";class i extends HTMLElement{#e=this.#s.bind(this);#t;get html(){return import.meta.url.replace(".js",".html")}set target(t){this.#t=t}constructor(){super(),this.attachShadow({mode:"open"})}async connectedCallback(){this.shadowRoot.innerHTML=await s(import.meta.url),await this.load()}async disconnectedCallback(){await this.shadowRoot.removeEventListener("click",this.#e),this.#e=null,this.#t=null}load(){return new Promise(t=>{requestAnimationFrame(async()=>{this.shadowRoot.addEventListener("click",this.#e),this.#t=this.#t||document.querySelector(this.getAttribute("for")),await crs.binding.translations.parseElement(this),await crs.call("component","notify_ready",{element:this}),t()})})}async#s(t){const e=t.composedPath()[0];await this.selectTab(e.dataset.view,e)}async selectTab(t,e){e=e||this.querySelector(`[data-view="${t}"]`),this.#t.view=t,await crs.call("dom_collection","toggle_selection",{target:e}),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{tab:t}}))}}customElements.define("tab-list",i);export{i as TabList};
