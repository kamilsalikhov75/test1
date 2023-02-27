import './SizeButton.css';

function SizeButton({ size, setCurrentSize, className }) {
  function handleClick() {
    setCurrentSize(size);
  }
  return <button onClick={handleClick} className={className}>{size}</button>;
}

export { SizeButton };
