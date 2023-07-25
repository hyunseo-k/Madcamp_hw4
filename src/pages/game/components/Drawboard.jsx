import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
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

const colorPalette = ['#000000', '#FF0000', '#00FF00', '#183EFA', '#FFFF00', '#E94097', '#79EDFF', '#FFFFFF'];

const Drawboard = () => {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);
  const drawingToolRef = useRef(null);
  const [isErasing, setIsErasing] = useState(false);
  const [currentColor, setCurrentColor] = useState(colorPalette[0]);
  const [brushWidth, setBrushWidth] = useState(2); // Default brush width

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 770,
      height: 405,
      backgroundColor: '#ffffff', // Set your desired canvas background color
    });

    fabricCanvasRef.current = canvas;

    return () => {
      // Clean up the Fabric.js canvas instance on unmount
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    // Apply the new color to the canvas whenever the currentColor changes
    const canvas = fabricCanvasRef.current;
    canvas.freeDrawingBrush.color = currentColor;
    canvas.freeDrawingBrush.width = brushWidth;
  }, [currentColor, brushWidth]);

  const onMouseDown = (event) => {
    if (drawingToolRef.current && drawingToolRef.current.onMouseDown) {
      drawingToolRef.current.onMouseDown(event);
    }
  };

  const onMouseMove = (event) => {
    if (drawingToolRef.current && drawingToolRef.current.onMouseMove) {
      drawingToolRef.current.onMouseMove(event);
    }
  };

  const onMouseUp = (event) => {
    if (drawingToolRef.current && drawingToolRef.current.onMouseUp) {
      drawingToolRef.current.onMouseUp(event);
    }
  };

  useEffect(() => {
    const canvas = fabricCanvasRef.current;

    // Event handlers for mouse events
    canvas.on('mouse:down', onMouseDown);
    canvas.on('mouse:move', onMouseMove);
    canvas.on('mouse:up', onMouseUp);

    return () => {
      // Remove the event listeners on unmount
      canvas.off('mouse:down', onMouseDown);
      canvas.off('mouse:move', onMouseMove);
      canvas.off('mouse:up', onMouseUp);
    };
  }, []);

  const setDrawingTool = (tool) => {
    drawingToolRef.current = tool;
  };

  const enableFreeDrawing = () => {
    const canvas = fabricCanvasRef.current;

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = brushWidth;

    if (isErasing) {
      canvas.freeDrawingBrush.color = '#ffffff'; // Set the brush color to white for erasing effect
      canvas.freeDrawingBrush.backgroundColor = '#ffffff'; // Set the background color to white for erasing effect
      canvas.isDrawingMode = true; // Enable drawing mode for erasing
    } else {
      canvas.freeDrawingBrush.color = currentColor; // Set the brush color to the selected color for drawing
      canvas.freeDrawingBrush.backgroundColor = 'transparent'; // Set the background color to transparent for drawing
      canvas.isDrawingMode = true; // Enable drawing mode
    }
  };

  const handleColorChange = (color) => {
    setCurrentColor(color);
    setIsErasing(false); // Disable eraser when a color is selected
  };

  const toggleEraser = () => {
    setIsErasing((prev) => !prev);
  };

  const handleBrushWidthChange = (event) => {
    const width = parseInt(event.target.value);
    setBrushWidth(width);
  };

  const clearCanvas = () => {
    const canvas = fabricCanvasRef.current;
    const objects = canvas.getObjects();
  
    // Remove all foreground objects, leaving the background color intact
    objects.forEach((object) => {
      if (object !== canvas.backgroundImage) {
        canvas.remove(object);
      }
    });

    canvas.renderAll(); // Re-render the canvas after clearing
  };
  

  return (
    <div>
      <div class="text-center d-flex justify-content-center">
  <MDBCard id="chat1" className="ms-auto" style={{ borderRadius: "15px", width:"100%", fontSize: '20px' }}>
    <MDBCardHeader
      className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
      style={{
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
    >
      <p id="form" className="mb-0 fw-bold" style={{ fontSize: '23px'}}>현서 님이 그림을 그리고 있습니다!</p>
    </MDBCardHeader>
    <MDBCardBody className="canvas-container">
      <span class="badge rounded-pill badge-primary mb-2" style={{ width: '80px', fontSize: '20px' }}>제시어</span>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '400px',
          border: '1px solid #ccc',
          /* Add any other desired styles for the canvas here */
        }}
      />
      <div class="btn-group d-flex mt-2" role="group">
        <MDBBtn onClick={enableFreeDrawing} type="button" className='btn btn-info' style={{ fontSize: '20px' }}> 그리기</MDBBtn>
        <MDBBtn onClick={clearCanvas} type="button" className="btn btn-info" style={{ fontSize: '20px' }}>전체 지우기</MDBBtn>
      </div>
      <div className="text-center mt-2 mb-2">
        {colorPalette.map((color) => (
          <button
            key={color}
            style={{
              backgroundImage: color === "#FFFFFF" ? 'url("/img/eraser.jpg")' : "",
              backgroundColor: color !== "#FFFFFF" ? color : "", // Eraser 이미지가 있는 경우 배경색을 적용하지 않습니다.
              width: "30px",
              height: "30px",
              margin: "5px",
            }}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>

      <span class="badge rounded-pill badge-info" style={{ width: '89px', fontSize: '20px' }}>선 굵기</span>
      <input
        type="range"
        min="1"
        max="10"
        value={brushWidth}
        onChange={handleBrushWidthChange}
        style={{ width: '100px', margin: '5px' }}
      />
      <span>{brushWidth}</span>

    </MDBCardBody>
  </MDBCard>
</div>

    </div>
  );
};

export default Drawboard;
