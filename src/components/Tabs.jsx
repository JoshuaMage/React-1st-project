export default function Tabs({ children, buttons, ButtonContainers = "menu" }) {
  //const ButtonContainers = buttonContainer;
  return (
    <>
      <ButtonContainers>{buttons}</ButtonContainers>
      {children}
    </>
  );
}
