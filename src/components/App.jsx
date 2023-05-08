import items from '../data/data';
import { Accordion } from './Accordion/Accordion';
export const App = () => {
  return <Accordion data={items} />;
};
