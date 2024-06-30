import "./styles.css";

function Button() {
  const buttonName = "Send";

  // const getButtonClass = () => {
  //   return buttonName === "Delete"
  //     ? "button-component delete-button"
  //     : "button-component main-button";
  // };

  // const getButtonClass = () => {
  //   if (buttonName === "Delete") {
  //     return "button-component delete-button";
  //   } else {
  //     return "button-component main-button";
  //   }
  // };

  // return <button className={getButtonClass()}>{buttonName}</button>;
  const buttonClass =
    buttonName === "Delete"
      ? "button-component delete-button"
      : "button-component main-button";

  return <button className={buttonClass}>{buttonName}</button>;
}

export default Button;
