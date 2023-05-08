import { useState } from 'react';
// import { AccordionItems } from './AccordionItem';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

export const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const toggleContent = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <ul className="accordion">
      {data.map(({ title, content }, index) => (
        <li key={title} className="accordion_item">
          <div
            className="accordion_title_block"
            onClick={() => {
              toggleContent(index);
            }}
          >
            <h3 className="accordion_title">
              {title}{' '}
              {selected === index ? <AiFillCaretUp /> : <AiFillCaretDown />}{' '}
            </h3>{' '}
          </div>
          <p
            className={
              selected === index ? 'accordion_content' : 'vissually_hidden '
            }
          >
            {content}
          </p>
        </li>
      ))}
    </ul>
  );
};
