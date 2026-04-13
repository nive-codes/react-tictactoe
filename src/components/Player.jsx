import { useState } from "react";

export default function Player({initialName, symbole}){
    const [playName, setPlayerName] =  useState(initialName);
    const [isEditing, setIsEditing] = useState(false);   //변경 여부 상태값

    function handleEditiClick(){
      // setIsEditing(!isEditing)  //이렇게 쓰지 말것. 상태 변화가 스케쥴링 걸리면서 즉각적으로 상태변화가 일어나지 않음.
      // setIsEditing(!isEditing)  //두번째에서도 첫번째의 변화가 예약이 걸린 상태이므로 실행 자체가 되지 않음.

      setIsEditing((editing) => !isEditing)   //항상 최신 버전인 상태 
    }

    function handleChange(event){
      // console.log(event)
      setPlayerName(event.target.value);
      
    }

    let editablePlayerName = <span className="player-name">{playName}</span>;
    // let btnCaption = 'Edit';

    if(isEditing){
      editablePlayerName = <input type="text" required value={playName} onChange={handleChange}/>;
      // btnCaption = 'Save';
    }

    return (
        <li>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbole}</span>
          </span>
          <button onClick={handleEditiClick}>{isEditing ? 'Save' : 'Edit'}</button>

        </li>

    );
}