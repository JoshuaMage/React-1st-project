export default function TabButton({ children, onSelect, isSelected }) {
  console.log("tabbutton component is executed")
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
