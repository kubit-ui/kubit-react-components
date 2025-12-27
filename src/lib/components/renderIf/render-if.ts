// This file is part of the WIP vanilla JS version of the SOFTWEB web UI components.
// It is not intended for use in production and is subject to change.

/**
 * Custom element that conditionally renders its content based on the `condition` attribute.
 * It can either render or hide the content using a CSS class based on the `display-mode` attribute.
 *
 * @example
 * <render-if condition="true" display-mode="render">
 *   <!-- This content will be rendered -->
 * </render-if>
 *
 * @example
 * <render-if condition="false" display-mode="class">
 *   <!-- This content will be hidden using the 'hidden' class -->
 * </render-if>
 */
class RenderIf extends HTMLElement {
  static get observedAttributes() {
    return ['condition', 'display-mode'];
  }

  constructor() {
    super();
    if (typeof window !== 'undefined') {
      this.attachShadow({ mode: 'open' });
    }
  }

  attributeChangedCallback(name: string) {
    if (name === 'condition' || name === 'display-mode') {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (typeof window === 'undefined') {
      // Server-side rendering logic
      const condition = this.getAttribute('condition') === 'true';
      const displayMode = this.getAttribute('display-mode') || 'render';

      if (displayMode === 'render') {
        this.innerHTML = condition ? '<slot></slot>' : '';
      } else if (displayMode === 'class') {
        this.innerHTML = '<slot></slot>';
        const slot = this.querySelector('slot');
        if (slot) {
          slot.classList.toggle('hidden', !condition);
        }
      }
    } else {
      // Client-side rendering logic
      const condition = this.getAttribute('condition') === 'true';
      const displayMode = this.getAttribute('display-mode') || 'render';

      if (displayMode === 'render') {
        if (this.shadowRoot) {
          this.shadowRoot.innerHTML = condition ? '<slot></slot>' : '';
        }
      } else if (displayMode === 'class') {
        if (this.shadowRoot) {
          this.shadowRoot.innerHTML = '<slot></slot>';
        }
        const slot = this.shadowRoot?.querySelector('slot');
        if (slot) {
          slot.classList.toggle('hidden', !condition);
        }
      }
    }
  }
}

customElements.define('render-if', RenderIf);
