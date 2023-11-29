import styles from './app.element.css?raw';
import polygon from './app.polygon.svg';

console.log(polygon);

export const app = () => (
  <>
    <style>{styles}</style>
    {/* <img src={polygon} /> */}
    {polygon}
  </>
);
