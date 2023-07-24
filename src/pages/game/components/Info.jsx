import React, { useState } from "react";

const Info = () => {
  // 가상의 플레이어 정보 데이터 (예시로 만들어짐)
  const player1 = {
    name: "플레이어 1",
    score: 20,
    isCurrentPlayer: true, // 현재 플레이어인지 여부 (true면 플레이어 1이 현재 플레이어)
  };

  const player2 = {
    name: "플레이어 2",
    score: 15,
    isCurrentPlayer: false, // 현재 플레이어인지 여부 (false면 플레이어 2가 현재 플레이어)
  };

  // 각 플레이어에 대한 정보를 표시하기 위한 state
  const [players, setPlayers] = useState([player1, player2]);

  return (
    <div
      className="py-3 px-2"
      style={{
        background: "white",
        borderRadius: "10px",
      }}
    >
      {players.map((player) => (
        <div
          key={player.name}
          className={`${
            player.isCurrentPlayer ? "border border-primary border-3" : ""
          } py-2 px-3 mb-2`}
          style={{
            borderRadius: "10px",
            borderColor: player.isCurrentPlayer ? "#000000" : "", // 현재 플레이어일 때 윤곽선 색상 변경
            backgroundColor: player.isCurrentPlayer ? "#FEF0C6" : ""
          }}
        >
          <h5>{player.name}</h5>
          <p>Score: {player.score}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
