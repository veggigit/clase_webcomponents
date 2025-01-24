class BtnElement extends HTMLElement {
    // El constructor es un método especial que se ejecuta automáticamente cuando se crea una instancia de esta clase.
    constructor() {
        // Llamamos a super() para ejecutar el constructor de la clase padre (HTMLElement).
        // Esto es obligatorio cuando usamos `extends` para heredar de otra clase.
        super();
        
        // Establecemos el contenido HTML del componente personalizado. En este caso, un div con estilo en línea.
        this.innerHTML = `<div style='background-color:red; width:max-content; height:auto; padding:.2rem;'>boton</div>`;
    }
}

// `customElements` es una propiedad global de `window` que nos permite registrar elementos personalizados.
// El método `define` recibe dos argumentos:
// 1. El nombre que usaremos como etiqueta HTML personalizada ("<btn-element></btn-element>").
// 2. La clase que define el comportamiento del componente.
customElements.define('btn-element', BtnElement);
