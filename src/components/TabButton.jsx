export default function TabButton({ children, onSelect }) {
  console.log("tabbutton component is executed")
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
