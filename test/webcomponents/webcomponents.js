class ServiceWorker extends HTMLElement {

  static observedAttributes = ["color", "size"];

  constructor() {
    super();
    console.log('super called');
  }
  // Element functionality written in 
  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
    console.log(newValue);
  }
}

customElements.define("service-worker", ServiceWorker);

function kicking (){
  console.log('kicking');
}
