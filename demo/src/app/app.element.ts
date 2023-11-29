import { custom } from '../utilities';
import { app } from './app.template';

console.log(app());


@custom('app-root')
export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'demo';

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(app());
  }
}
