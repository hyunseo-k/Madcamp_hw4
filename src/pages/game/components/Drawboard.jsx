import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
  MDBBtn
} from "mdb-react-ui-kit";

import "./Drawboard.css"


const Drawboard = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [drawingData, setDrawingData] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set up event listeners for drawing
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);

    return () => {
      // Clean up event listeners when component unmounts
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    setDrawing(true);
    setPrevPosition({ x: e.offsetX, y: e.offsetY });
  };

  const handleMouseMove = (e) => {
    if (drawing) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(prevPosition.x, prevPosition.y);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();

      setPrevPosition({ x: e.offsetX, y: e.offsetY });

      // Send drawing data to the server via WebSocket
      setDrawingData([...drawingData, { x: e.offsetX, y: e.offsetY }]);
    }
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={500}
      style={{ border: '1px solid #eba83a', backgroundColor: 'white' }}
    />
  );
};


export default Drawboard;
