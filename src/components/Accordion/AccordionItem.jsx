export const AccordionItems = ({ title, content, selectedItem, onClick }) => (
  <li key={title} className="accordion_item">
    <h3 className="accordion_title">{title}</h3>
    <p className="accordion_content">{content}</p>
  </li>
);
