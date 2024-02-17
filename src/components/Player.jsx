import { useState } from "react";
export default function Player({ initialName, symbol,isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing){
      onChangeName(symbol,playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  
  let editabePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editabePlayerName = <input type="text" required placeholder={playerName} onChange={handleChange}/>;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editabePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
