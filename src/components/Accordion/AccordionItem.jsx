import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
export const AccordionItems = ({ title, content, isOpened, onClick }) => (
  <li key={title} className="accordion_item">
    <div className="accordion_title_block" onClick={onClick}>
      <h3 className="accordion_title">{title} </h3>{' '}
      <span className="accordion_icon">
        {isOpened ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </span>
    </div>
    <p className={isOpened ? 'accordion_content' : 'vissually_hidden'}>
      {content}
    </p>
  </li>
);
