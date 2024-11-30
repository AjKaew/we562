import { useState } from "react";
import Modal from "./Modal";
import Tooltip from "./Tooltip";
import Dropdown from "./Dropdown";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tooltip, setTooltip] = useState({ visible: false, text: "", position: { x: 0, y: 0 } });
  const [dropdown, setDropdown] = useState({ isOpen: false, position: { x: 0, y: 0 } });

  const handleRightClick = (e) => {
    e.preventDefault();
    setDropdown({ isOpen: true, position: { x: e.clientX, y: e.clientY } });
  };

  const handleClose = () => setDropdown({ isOpen: false, position: { x: 0, y: 0 } });

  const handleMouseOver = (e) => {
    setTooltip({
      visible: true,
      text: "This is a tooltip",
      position: { x: e.clientX + 10, y: e.clientY + 10 },
    });
  };

  const handleMouseOut = () => {
    setTooltip({ visible: false, text: "", position: { x: 0, y: 0 } });
  };

  return (
    <div onClick={handleClose}>
      <h1>React Portals Example</h1>
      <button onContextMenu={handleRightClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
      onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>This is a modal rendered with React Portals.</p>
      </Modal>
      {dropdown.isOpen && <Dropdown isOpen={dropdown.isOpen} position={dropdown.position} items={['Option 1', 'Option 2', 'Option 3']} />}
      {tooltip.visible && <Tooltip text={tooltip.text} position={tooltip.position} />}
    </div>
  );
}

export default App;