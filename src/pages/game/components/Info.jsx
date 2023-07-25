import React, { useEffect, useState } from "react";

const Info = () => {
  const [seconds, setSeconds] = useState(60);
  // 가상의 플레이어 정보 데이터 (예시로 만들어짐)

  useEffect(() => {
    // 컴포넌트가 마운트될 때 타이머를 시작합니다.
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        // 이전 초(second) 값을 감소시킵니다.
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          // 초(second)가 0이 되면 타이머를 멈춥니다.
          clearInterval(timer);
          return prevSeconds;
        }
      });
    }, 1000);

    // 컴포넌트가 언마운트되면 타이머를 정리합니다.
    return () => clearInterval(timer);
  }, []);


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
    <div>
      <div 
        style={{
          fontFamily: "",
          fontWeight: "bold",
          backgroundImage: "url('/img/clock.gif')",
          backgroundSize: "cover",
          display: "flex", // display를 flex로 지정
          alignItems: "center", // 위-아래 기준 가운데 정렬
          justifyContent: "center", // 좌-우 기준 가운데 정렬
          color: "black",
          fontSize: "30px",
          width: "100px", // 가로 크기를 지정하세요.
          height: "100px", // 세로 크기를 지정하세요.
        }}
      >
        <span style={{ marginTop: "10px" }}>{seconds}</span>
      </div>
      <div
        className="py-2 px-2"
        style={{
          background: "#FFF",
          borderRadius: "10px",
          fontSize: "24px"
        }}
      >
        {players.map((player) => (
          <div
            key={player.name}
            className={`${
              player.isCurrentPlayer ? "border border-dark border-1" : ""
            } py-2 px-3 mb-2`}
            style={{
              borderRadius: "10px",
              borderColor: player.isCurrentPlayer ? "#000000" : "", // 현재 플레이어일 때 윤곽선 색상 변경
              backgroundColor: player.isCurrentPlayer ? "#7AB2CF" : "",
            }}
          >
            <h5 className="fw-bold">{player.name}</h5>
            <p>Score: {player.score}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Info;
