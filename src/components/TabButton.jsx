export default function TabButton({ children,  isSelected, ...props }) {
  console.log("tabbutton component is executed")
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
    </li>
  );
}
