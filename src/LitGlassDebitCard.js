import { html, LitElement } from 'lit-element';

import {LitGrassDebitCardStyle} from './LitGlassDebitCardStyle.js';

export class LitGlassDebitCard extends LitElement {

  static get styles() {
    return [LitGrassDebitCardStyle];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button>HOla</button>
      <h1>HOla</h1>
    `;
  }
}
