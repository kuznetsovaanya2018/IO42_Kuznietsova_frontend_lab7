import { useState } from "react";

function Image(props) {
  const [visible, setVisible] = useState(true);
  const [width, setWidth] = useState(400);

  return (
    <div>
      {visible && (
        <img src={props.src} alt="Київ" style={{ width: width + "px" }} />
      )}

      <div>
        <button onClick={() => setVisible(true)}>Додати зображення</button>
        <button onClick={() => setVisible(false)}>Видалити зображення</button>
        <button onClick={() => setWidth(width + 50)}>Збільшити зображення</button>
        <button onClick={() => setWidth(width - 50)}>Зменшити зображення</button>
      </div>
    </div>
  );
}

export default Image;