/// <reference types="vite/client" />

declare const main: HTMLDivElement
declare const Fragment = DocumentFragment
declare const h: Function


declare namespace JSX {
  interface SVGElement {
    xmlns: string;
    fill?: string;
    width: `${number}`;
    height: `${number}`;
    viewBox: `${number} ${number} ${number} ${number}`;
  }

  interface SVGGElement {
    id: string;
  }

  interface SVGPathElement {
    id: string;
    d: string;
    fill?: string;
    stroke?: string;
  }

  interface SVGTextElement {
    id: string;
    style: string;
    fill?: string;
    'xml:space'?: string;
  }

  interface SVGTSpanElement {
    x: `${number}`;
    y: `${number}`;
  }

  interface SVGElementTagNameMap {
    svg: SVGElement;
    g: SVGGElement;
    path: SVGPathElement;
    text: SVGTextElement;
    tspan: SVGTSpanElement;
  }

  type HTMLElements = {
    [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K]>;
  };
  type SVGElements = {
    [K in keyof Omit<SVGElementTagNameMap, 'a'>]: Partial<
      SVGElementTagNameMap[K]
    >;
  };
  type IntrinsicElements = HTMLElements & SVGElements;
}
