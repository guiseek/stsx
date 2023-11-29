export function custom(name: string) {
  return <T extends CustomElementConstructor>(target: T) => {
    customElements.define(`w3c-${name}`, target);
  };
}
