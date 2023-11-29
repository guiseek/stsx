type Fn = (...params: any[]) => Element;
type Ctor = new (...params: any[]) => Element;

export function h(tagFn: string | Fn | Ctor, props: object, ...nodes: Node[]) {
  const component = create(tagFn, props);

  component.append(...nodes.flatMap(add));

  for (const [prop, value] of Object.entries(props ?? {})) {
    component.setAttribute(prop, value)
  }

  return component;
  // return Object.assign(component, props);
}

function add(node: Node | string) {
  return typeof node === 'string' ? new Text(node) : node;
}

function create(tagFn: string | Fn | Ctor, props: object): Element {
  if (typeof tagFn === 'string') {
    return tagFn === 'svg'
      ? document.createElementNS('http://www.w3.org/2000/svg', tagFn)
      : document.createElementNS('http://www.w3.org/1999/xhtml', tagFn);
    // return document.createElement(tagFn);
  }

  try {
    return (tagFn as Fn)(props);
  } catch {
    return new (tagFn as Ctor)(props);
  }
}
