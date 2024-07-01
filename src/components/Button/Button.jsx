import "./styles.css";

function Button({ children, buttonName = "No text" }) {
  return (
    <button className={`button-component main-button`}>
      {/* {children} */}
      {buttonName}
    </button>
  );
}

export default Button;
