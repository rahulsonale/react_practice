function Button({ text, onClick }) {
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: "purple" }}>
        {text}
      </button>
    </div>
  );
}

export default Button;
