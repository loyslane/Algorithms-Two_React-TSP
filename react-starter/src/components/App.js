import React from 'react';
import TSPRunner from './TSPRunner';

const coordinates = [];

let canvasContainerStyle = {
  margin: "10 auto"
}
let canvasStyle = {
  width: "450px",
  height: "450px",
  backgroundColor: "#f4f4f4"
}
class TSPCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  } 

  updateTSPVertices(results) {
    for (let i = 0; i < results.BT.length; i++) {
      coordinates.push([results.BT[i].x,results.BT[i].y]);
    }
    console.log(results);
  }
  updateTSPPath() {
    for (let i = 0; i < coordinates.length; i++) {
      if (!coordinates[i + 1]) {
        this.context.beginPath();
        this.context.lineWidth = 5;
        this.context.moveTo(coordinates[i][0],coordinates[i][1]);
        this.context.lineTo(coordinates[0][0],coordinates[0][1]);
        this.context.stroke();  
      } else {
        this.context.beginPath();
        this.context.lineWidth = 5;
        this.context.moveTo(coordinates[i][0],coordinates[i][1]);
        this.context.lineTo(coordinates[i + 1][0],coordinates[i + 1][1]);
        this.context.stroke();
      }
    }
  }
  drawCircle() {
    for (let i = 0; i < coordinates.length; i++) {
      this.context.fillStyle = 'blue';
      this.context.beginPath();
      this.context.arc(coordinates[i][0],coordinates[i][1],20,0,2*Math.PI,false);
      this.context.fill();
      this.context.stroke();
    }
  }
  click() {
    this.drawCircle(coordinates);
    this.updateTSPPath(coordinates);
    this.drawCircle(coordinates);
  }
  render() {
    return (<div style={canvasContainerStyle}> <TSPRunner onComplete={this.updateTSPVertices}/>
             <canvas id="TSP" ref={(c) => this.context = c.getContext('2d')} height={canvasStyle.height} width={canvasStyle.width} style={canvasStyle} onClick={() => this.click()} />
           </div>
    );
  }
}
export default TSPCanvas;