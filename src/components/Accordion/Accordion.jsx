import { useState } from 'react';
import { AccordionItems } from './AccordionItem';

export const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const toggleContent = title => {
    if (selected === title) {
      return setSelected(null);
    }
    setSelected(title);
  };

  return (
    <ul className="accordion">
      {data.map(({ title, content }) => (
        <AccordionItems
          key={title}
          title={title}
          content={content}
          isOpened={selected === title ? true : false}
          onClick={() => toggleContent(title)}
        />
      ))}
    </ul>
  );
};
