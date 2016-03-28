Avatar.left = function(ctx, x, y, is_remote){

    // report location
    if(!is_remote) Avatar._report('left', x, y);

    // player_l
    ctx.save();
          ctx.beginPath();
          ctx.moveTo(x+10.7, y+6.2);
          ctx.bezierCurveTo(x+10.4, y+9.7, x+12.1, y+12.8, x+14.4, y+13.0);
          ctx.bezierCurveTo(x+16.8, y+13.3, x+19.0, y+10.5, x+19.4, y+7.0);
          ctx.bezierCurveTo(x+19.7, y+3.4, x+18.1, y+0.3, x+15.7, y+0.1);
          ctx.bezierCurveTo(x+13.3, y+-0.1, x+11.1, y+2.6, x+10.7, y+6.2);
          ctx.closePath();
          ctx.fillStyle = "rgb(203, 203, 203)";
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(x+5.5, y+11.5);
          ctx.bezierCurveTo(x+5.5, y+13.5, x+6.8, y+15.4, x+8.9, y+16.5);
          ctx.bezierCurveTo(x+9.8, y+17.0, x+10.8, y+17.4, x+11.9, y+17.6);
          ctx.bezierCurveTo(x+12.5, y+17.8, x+13.2, y+17.9, x+13.9, y+17.9);
          ctx.bezierCurveTo(x+14.0, y+17.9, x+14.1, y+17.9, x+14.2, y+17.9);
          ctx.bezierCurveTo(x+15.1, y+17.9, x+16.0, y+17.8, x+16.9, y+17.6);
          ctx.bezierCurveTo(x+17.6, y+17.4, x+18.3, y+17.2, x+18.9, y+16.9);
          ctx.bezierCurveTo(x+20.1, y+16.3, x+21.2, y+15.4, x+21.9, y+14.5);
          ctx.bezierCurveTo(x+22.5, y+13.6, x+22.9, y+12.5, x+22.9, y+11.5);
          ctx.bezierCurveTo(x+22.9, y+10.4, x+22.5, y+9.4, x+21.9, y+8.5);
          ctx.bezierCurveTo(x+21.2, y+7.5, x+20.1, y+6.6, x+18.9, y+6.1);
          ctx.bezierCurveTo(x+18.3, y+5.8, x+17.6, y+5.5, x+16.9, y+5.4);
          ctx.bezierCurveTo(x+16.0, y+5.1, x+15.1, y+5.0, x+14.2, y+5.0);
          ctx.bezierCurveTo(x+14.1, y+5.0, x+14.0, y+5.0, x+13.9, y+5.0);
          ctx.bezierCurveTo(x+13.2, y+5.1, x+12.5, y+5.1, x+11.9, y+5.3);
          ctx.bezierCurveTo(x+10.8, y+5.5, x+9.8, y+5.9, x+8.9, y+6.4);
          ctx.bezierCurveTo(x+6.8, y+7.6, x+5.5, y+9.4, x+5.5, y+11.5);
          ctx.closePath();
          ctx.fillStyle = "rgb(251, 237, 32)";
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(x+19.0, y+6.1);
          ctx.lineTo(x+19.0, y+16.9);
          ctx.bezierCurveTo(x+20.0, y+16.3, x+21.0, y+15.4, x+22.0, y+14.5);
          ctx.lineTo(x+22.0, y+8.5);
          ctx.bezierCurveTo(x+21.0, y+7.5, x+20.0, y+6.6, x+19.0, y+6.1);
          ctx.closePath();
          ctx.fillStyle = "rgb(0, 0, 0)";
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(x+14.0, y+5.0);
          ctx.lineTo(x+14.0, y+17.9);
          ctx.bezierCurveTo(x+14.0, y+17.9, x+14.2, y+17.9, x+14.3, y+17.9);
          ctx.bezierCurveTo(x+15.3, y+17.9, x+16.0, y+17.8, x+17.0, y+17.6);
          ctx.lineTo(x+17.0, y+5.4);
          ctx.bezierCurveTo(x+16.0, y+5.1, x+15.3, y+5.0, x+14.3, y+5.0);
          ctx.bezierCurveTo(x+14.2, y+5.0, x+14.0, y+5.0, x+14.0, y+5.0);
          ctx.closePath();
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(x+9.0, y+6.4);
          ctx.lineTo(x+9.0, y+16.5);
          ctx.bezierCurveTo(x+10.0, y+17.0, x+11.0, y+17.4, x+12.0, y+17.6);
          ctx.lineTo(x+12.0, y+5.3);
          ctx.bezierCurveTo(x+11.0, y+5.5, x+10.0, y+5.9, x+9.0, y+6.4);
          ctx.closePath();
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(x+0.0, y+5.0);
          ctx.bezierCurveTo(x+0.0, y+7.8, x+2.4, y+10.1, x+5.5, y+10.1);
          ctx.bezierCurveTo(x+8.5, y+10.1, x+10.9, y+7.8, x+10.9, y+5.0);
          ctx.bezierCurveTo(x+10.9, y+2.3, x+8.5, y+0.0, x+5.5, y+0.0);
          ctx.bezierCurveTo(x+2.4, y+0.0, x+0.0, y+2.3, x+0.0, y+5.0);
          ctx.closePath();
          ctx.fillStyle = "rgb(251, 237, 32)";
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(x+13.5, y+4.1);
          ctx.bezierCurveTo(x+11.4, y+7.0, x+11.3, y+10.5, x+13.3, y+11.9);
          ctx.bezierCurveTo(x+15.2, y+13.2, x+18.5, y+12.0, x+20.6, y+9.1);
          ctx.bezierCurveTo(x+22.7, y+6.2, x+22.8, y+2.7, x+20.8, y+1.3);
          ctx.bezierCurveTo(x+18.9, y+-0.1, x+15.6, y+1.1, x+13.5, y+4.1);
          ctx.closePath();
          ctx.fillStyle = "rgb(255, 255, 255)";
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(x+2.3, y+3.3);
          ctx.bezierCurveTo(x+2.3, y+3.7, x+2.6, y+4.1, x+3.0, y+4.1);
          ctx.bezierCurveTo(x+3.5, y+4.1, x+3.8, y+3.7, x+3.8, y+3.3);
          ctx.bezierCurveTo(x+3.8, y+2.8, x+3.5, y+2.5, x+3.0, y+2.5);
          ctx.bezierCurveTo(x+2.6, y+2.5, x+2.3, y+2.8, x+2.3, y+3.3);
          ctx.closePath();
          ctx.fillStyle = "rgb(0, 0, 0)";
          ctx.fill();
          ctx.stroke();
          ctx.restore();

};

Avatar.right = function(ctx, x, y, is_remote){

    // report location
    if(!is_remote) Avatar._report('right', x, y);

    // player_r

ctx.save();
ctx.beginPath();
ctx.moveTo(x+12.1, y+6.2);
ctx.bezierCurveTo(x+12.5, y+9.7, x+10.8, y+12.8, x+8.4, y+13.0);
ctx.bezierCurveTo(x+6.0, y+13.3, x+3.8, y+10.5, x+3.5, y+7.0);
ctx.bezierCurveTo(x+3.2, y+3.4, x+4.8, y+0.3, x+7.2, y+0.1);
ctx.bezierCurveTo(x+9.6, y+-0.1, x+11.8, y+2.6, x+12.1, y+6.2);
ctx.closePath();
ctx.fillStyle = "rgb(203, 203, 203)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(x+17.4, y+11.5);
ctx.bezierCurveTo(x+17.4, y+13.5, x+16.0, y+15.4, x+14.0, y+16.5);
ctx.bezierCurveTo(x+13.1, y+17.0, x+12.1, y+17.4, x+11.0, y+17.6);
ctx.bezierCurveTo(x+10.4, y+17.8, x+9.7, y+17.9, x+9.0, y+17.9);
ctx.bezierCurveTo(x+8.9, y+17.9, x+8.8, y+17.9, x+8.7, y+17.9);
ctx.bezierCurveTo(x+7.7, y+17.9, x+6.8, y+17.8, x+6.0, y+17.6);
ctx.bezierCurveTo(x+5.3, y+17.4, x+4.6, y+17.2, x+4.0, y+16.9);
ctx.bezierCurveTo(x+2.7, y+16.3, x+1.7, y+15.4, x+1.0, y+14.5);
ctx.bezierCurveTo(x+0.4, y+13.6, x+0.0, y+12.5, x+0.0, y+11.5);
ctx.bezierCurveTo(x+0.0, y+10.4, x+0.4, y+9.4, x+1.0, y+8.5);
ctx.bezierCurveTo(x+1.7, y+7.5, x+2.7, y+6.6, x+4.0, y+6.1);
ctx.bezierCurveTo(x+4.6, y+5.8, x+5.3, y+5.5, x+6.0, y+5.4);
ctx.bezierCurveTo(x+6.8, y+5.1, x+7.7, y+5.0, x+8.7, y+5.0);
ctx.bezierCurveTo(x+8.8, y+5.0, x+8.9, y+5.0, x+9.0, y+5.0);
ctx.bezierCurveTo(x+9.7, y+5.1, x+10.4, y+5.1, x+11.0, y+5.3);
ctx.bezierCurveTo(x+12.1, y+5.5, x+13.1, y+5.9, x+14.0, y+6.4);
ctx.bezierCurveTo(x+16.0, y+7.6, x+17.4, y+9.4, x+17.4, y+11.5);
ctx.closePath();
ctx.fillStyle = "rgb(251, 237, 32)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(x+4.0, y+6.1);
ctx.lineTo(x+4.0, y+16.9);
ctx.bezierCurveTo(x+2.7, y+16.3, x+1.7, y+15.4, x+1.0, y+14.5);
ctx.lineTo(x+1.0, y+8.5);
ctx.bezierCurveTo(x+1.7, y+7.5, x+2.7, y+6.6, x+4.0, y+6.1);
ctx.closePath();
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(x+9.0, y+5.0);
ctx.lineTo(x+9.0, y+17.9);
ctx.bezierCurveTo(x+8.9, y+17.9, x+8.8, y+17.9, x+8.7, y+17.9);
ctx.bezierCurveTo(x+7.7, y+17.9, x+6.8, y+17.8, x+6.0, y+17.6);
ctx.lineTo(x+6.0, y+5.4);
ctx.bezierCurveTo(x+6.8, y+5.1, x+7.7, y+5.0, x+8.7, y+5.0);
ctx.bezierCurveTo(x+8.8, y+5.0, x+8.9, y+5.0, x+9.0, y+5.0);
ctx.closePath();
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(x+14.0, y+6.4);
ctx.lineTo(x+14.0, y+16.5);
ctx.bezierCurveTo(x+13.1, y+17.0, x+12.1, y+17.4, x+11.0, y+17.6);
ctx.lineTo(x+11.0, y+5.3);
ctx.bezierCurveTo(x+12.1, y+5.5, x+13.1, y+5.9, x+14.0, y+6.4);
ctx.closePath();
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(x+22.9, y+5.0);
ctx.bezierCurveTo(x+22.9, y+7.8, x+20.4, y+10.1, x+17.4, y+10.1);
ctx.bezierCurveTo(x+14.4, y+10.1, x+12.0, y+7.8, x+12.0, y+5.0);
ctx.bezierCurveTo(x+12.0, y+2.3, x+14.4, y+0.0, x+17.4, y+0.0);
ctx.bezierCurveTo(x+20.4, y+0.0, x+22.9, y+2.3, x+22.9, y+5.0);
ctx.closePath();
ctx.fillStyle = "rgb(251, 237, 32)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(x+9.4, y+4.1);
ctx.bezierCurveTo(x+11.4, y+7.0, x+11.5, y+10.5, x+9.6, y+11.9);
ctx.bezierCurveTo(x+7.6, y+13.2, x+4.4, y+12.0, x+2.3, y+9.1);
ctx.bezierCurveTo(x+0.2, y+6.2, x+0.1, y+2.7, x+2.1, y+1.3);
ctx.bezierCurveTo(x+4.0, y+-0.1, x+7.3, y+1.1, x+9.4, y+4.1);
ctx.closePath();
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(x+20.6, y+3.3);
ctx.bezierCurveTo(x+20.6, y+3.7, x+20.2, y+4.1, x+19.8, y+4.1);
ctx.bezierCurveTo(x+19.4, y+4.1, x+19.1, y+3.7, x+19.1, y+3.3);
ctx.bezierCurveTo(x+19.1, y+2.8, x+19.4, y+2.5, x+19.8, y+2.5);
ctx.bezierCurveTo(x+20.2, y+2.5, x+20.6, y+2.8, x+20.6, y+3.3);
ctx.closePath();
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fill();
ctx.stroke();
ctx.restore();

};

Avatar.down_left = function(ctx, x, y, is_remote){

    // report location
    if(!is_remote) Avatar._report('down_left', x, y);

    // player_down_l
    y+=1;
    ctx.save();
      ctx.beginPath();
      ctx.moveTo(x+13.1, y+6.1);
      ctx.bezierCurveTo(x+11.6, y+9.4, x+12.2, y+12.9, x+14.4, y+13.8);
      ctx.bezierCurveTo(x+16.6, y+14.8, x+19.6, y+12.9, x+21.0, y+9.6);
      ctx.bezierCurveTo(x+22.5, y+6.3, x+21.8, y+2.9, x+19.6, y+1.9);
      ctx.bezierCurveTo(x+17.4, y+1.0, x+14.5, y+2.8, x+13.1, y+6.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 203, 203)";
      ctx.fill();


      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+5.5, y+12.3);
      ctx.bezierCurveTo(x+5.5, y+14.3, x+6.8, y+16.1, x+8.9, y+17.3);
      ctx.bezierCurveTo(x+9.8, y+17.8, x+10.8, y+18.2, x+11.9, y+18.4);
      ctx.bezierCurveTo(x+12.5, y+18.6, x+13.2, y+18.7, x+13.9, y+18.7);
      ctx.bezierCurveTo(x+14.0, y+18.7, x+14.1, y+18.7, x+14.2, y+18.7);
      ctx.bezierCurveTo(x+15.1, y+18.7, x+16.0, y+18.6, x+16.9, y+18.4);
      ctx.bezierCurveTo(x+17.6, y+18.2, x+18.3, y+18.0, x+18.9, y+17.7);
      ctx.bezierCurveTo(x+20.1, y+17.1, x+21.2, y+16.2, x+21.9, y+15.2);
      ctx.bezierCurveTo(x+22.5, y+14.4, x+22.9, y+13.3, x+22.9, y+12.3);
      ctx.bezierCurveTo(x+22.9, y+11.2, x+22.5, y+10.2, x+21.9, y+9.3);
      ctx.bezierCurveTo(x+21.2, y+8.3, x+20.1, y+7.4, x+18.9, y+6.9);
      ctx.bezierCurveTo(x+18.3, y+6.6, x+17.6, y+6.3, x+16.9, y+6.1);
      ctx.bezierCurveTo(x+16.0, y+5.9, x+15.1, y+5.8, x+14.2, y+5.8);
      ctx.bezierCurveTo(x+14.1, y+5.8, x+14.0, y+5.8, x+13.9, y+5.8);
      ctx.bezierCurveTo(x+13.2, y+5.9, x+12.5, y+5.9, x+11.9, y+6.1);
      ctx.bezierCurveTo(x+10.8, y+6.3, x+9.8, y+6.7, x+8.9, y+7.2);
      ctx.bezierCurveTo(x+6.8, y+8.4, x+5.5, y+10.2, x+5.5, y+12.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(251, 237, 32)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+19.0, y+6.9);
      ctx.lineTo(x+19.0, y+17.7);
      ctx.bezierCurveTo(x+20.0, y+17.1, x+21.0, y+16.2, x+22.0, y+15.2);
      ctx.lineTo(x+22.0, y+9.3);
      ctx.bezierCurveTo(x+21.0, y+8.3, x+20.0, y+7.4, x+19.0, y+6.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+14.0, y+5.8);
      ctx.lineTo(x+14.0, y+18.7);
      ctx.bezierCurveTo(x+14.0, y+18.7, x+14.2, y+18.7, x+14.3, y+18.7);
      ctx.bezierCurveTo(x+15.3, y+18.7, x+16.0, y+18.6, x+17.0, y+18.4);
      ctx.lineTo(x+17.0, y+6.1);
      ctx.bezierCurveTo(x+16.0, y+5.9, x+15.3, y+5.8, x+14.3, y+5.8);
      ctx.bezierCurveTo(x+14.2, y+5.8, x+14.0, y+5.8, x+14.0, y+5.8);
      ctx.closePath();
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+9.0, y+7.2);
      ctx.lineTo(x+9.0, y+17.3);
      ctx.bezierCurveTo(x+10.0, y+17.8, x+11.0, y+18.2, x+12.0, y+18.4);
      ctx.lineTo(x+12.0, y+6.1);
      ctx.bezierCurveTo(x+11.0, y+6.3, x+10.0, y+6.7, x+9.0, y+7.2);
      ctx.closePath();
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+0.0, y+5.8);
      ctx.bezierCurveTo(x+0.0, y+8.6, x+2.4, y+10.9, x+5.5, y+10.9);
      ctx.bezierCurveTo(x+8.5, y+10.9, x+10.9, y+8.6, x+10.9, y+5.8);
      ctx.bezierCurveTo(x+10.9, y+3.0, x+8.5, y+0.8, x+5.5, y+0.8);
      ctx.bezierCurveTo(x+2.4, y+0.8, x+0.0, y+3.0, x+0.0, y+5.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(251, 237, 32)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+10.8, y+5.3);
      ctx.bezierCurveTo(x+9.8, y+8.7, x+11.0, y+12.0, x+13.3, y+12.6);
      ctx.bezierCurveTo(x+15.6, y+13.3, x+18.2, y+11.0, x+19.2, y+7.5);
      ctx.bezierCurveTo(x+20.1, y+4.0, x+18.9, y+0.7, x+16.6, y+0.1);
      ctx.bezierCurveTo(x+14.3, y+-0.5, x+11.7, y+1.8, x+10.8, y+5.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+2.3, y+4.1);
      ctx.bezierCurveTo(x+2.3, y+4.5, x+2.6, y+4.9, x+3.0, y+4.9);
      ctx.bezierCurveTo(x+3.5, y+4.9, x+3.8, y+4.5, x+3.8, y+4.1);
      ctx.bezierCurveTo(x+3.8, y+3.6, x+3.5, y+3.2, x+3.0, y+3.2);
      ctx.bezierCurveTo(x+2.6, y+3.2, x+2.3, y+3.6, x+2.3, y+4.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.stroke();
      ctx.restore();

};

Avatar.down_right = function(ctx, x, y, is_remote){

    // report location
    if(!is_remote) Avatar._report('down_right', x, y);

    // player_down_r
    y+=1;
    ctx.save();
      ctx.beginPath();
      ctx.moveTo(x+9.8, y+6.1);
      ctx.bezierCurveTo(x+11.3, y+9.4, x+10.6, y+12.9, x+8.4, y+13.8);
      ctx.bezierCurveTo(x+6.2, y+14.8, x+3.3, y+12.9, x+1.9, y+9.6);
      ctx.bezierCurveTo(x+0.4, y+6.3, x+1.0, y+2.9, x+3.2, y+1.9);
      ctx.bezierCurveTo(x+5.4, y+1.0, x+8.4, y+2.8, x+9.8, y+6.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 203, 203)";
      ctx.fill();


      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+17.4, y+12.3);
      ctx.bezierCurveTo(x+17.4, y+14.3, x+16.0, y+16.1, x+14.0, y+17.3);
      ctx.bezierCurveTo(x+13.1, y+17.8, x+12.1, y+18.2, x+11.0, y+18.4);
      ctx.bezierCurveTo(x+10.4, y+18.6, x+9.7, y+18.7, x+9.0, y+18.7);
      ctx.bezierCurveTo(x+8.9, y+18.7, x+8.8, y+18.7, x+8.7, y+18.7);
      ctx.bezierCurveTo(x+7.7, y+18.7, x+6.8, y+18.6, x+6.0, y+18.4);
      ctx.bezierCurveTo(x+5.3, y+18.2, x+4.6, y+18.0, x+4.0, y+17.7);
      ctx.bezierCurveTo(x+2.7, y+17.1, x+1.7, y+16.2, x+1.0, y+15.2);
      ctx.bezierCurveTo(x+0.4, y+14.4, x+0.0, y+13.3, x+0.0, y+12.3);
      ctx.bezierCurveTo(x+0.0, y+11.2, x+0.4, y+10.2, x+1.0, y+9.3);
      ctx.bezierCurveTo(x+1.7, y+8.3, x+2.7, y+7.4, x+4.0, y+6.9);
      ctx.bezierCurveTo(x+4.6, y+6.6, x+5.3, y+6.3, x+6.0, y+6.1);
      ctx.bezierCurveTo(x+6.8, y+5.9, x+7.7, y+5.8, x+8.7, y+5.8);
      ctx.bezierCurveTo(x+8.8, y+5.8, x+8.9, y+5.8, x+9.0, y+5.8);
      ctx.bezierCurveTo(x+9.7, y+5.9, x+10.4, y+5.9, x+11.0, y+6.1);
      ctx.bezierCurveTo(x+12.1, y+6.3, x+13.1, y+6.7, x+14.0, y+7.2);
      ctx.bezierCurveTo(x+16.0, y+8.4, x+17.4, y+10.2, x+17.4, y+12.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(251, 237, 32)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+4.0, y+6.9);
      ctx.lineTo(x+4.0, y+17.7);
      ctx.bezierCurveTo(x+3.0, y+17.1, x+2.0, y+16.2, x+1.0, y+15.2);
      ctx.lineTo(x+1.0, y+9.3);
      ctx.bezierCurveTo(x+2.0, y+8.3, x+3.0, y+7.4, x+4.0, y+6.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+9.0, y+5.8);
      ctx.lineTo(x+9.0, y+18.7);
      ctx.bezierCurveTo(x+9.0, y+18.7, x+8.8, y+18.7, x+8.7, y+18.7);
      ctx.bezierCurveTo(x+7.7, y+18.7, x+7.0, y+18.6, x+6.0, y+18.4);
      ctx.lineTo(x+6.0, y+6.1);
      ctx.bezierCurveTo(x+7.0, y+5.9, x+7.7, y+5.8, x+8.7, y+5.8);
      ctx.bezierCurveTo(x+8.8, y+5.8, x+9.0, y+5.8, x+9.0, y+5.8);
      ctx.closePath();
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+14.0, y+7.2);
      ctx.lineTo(x+14.0, y+17.3);
      ctx.bezierCurveTo(x+13.0, y+17.8, x+12.0, y+18.2, x+11.0, y+18.4);
      ctx.lineTo(x+11.0, y+6.1);
      ctx.bezierCurveTo(x+12.0, y+6.3, x+13.0, y+6.7, x+14.0, y+7.2);
      ctx.closePath();
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+22.9, y+5.8);
      ctx.bezierCurveTo(x+22.9, y+8.6, x+20.4, y+10.9, x+17.4, y+10.9);
      ctx.bezierCurveTo(x+14.4, y+10.9, x+12.0, y+8.6, x+12.0, y+5.8);
      ctx.bezierCurveTo(x+12.0, y+3.0, x+14.4, y+0.8, x+17.4, y+0.8);
      ctx.bezierCurveTo(x+20.4, y+0.8, x+22.9, y+3.0, x+22.9, y+5.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(251, 237, 32)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+12.1, y+5.3);
      ctx.bezierCurveTo(x+13.0, y+8.7, x+11.9, y+12.0, x+9.6, y+12.6);
      ctx.bezierCurveTo(x+7.3, y+13.3, x+4.6, y+11.0, x+3.7, y+7.5);
      ctx.bezierCurveTo(x+2.8, y+4.0, x+3.9, y+0.7, x+6.2, y+0.1);
      ctx.bezierCurveTo(x+8.6, y+-0.5, x+11.2, y+1.8, x+12.1, y+5.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(x+20.6, y+4.1);
      ctx.bezierCurveTo(x+20.6, y+4.5, x+20.2, y+4.9, x+19.8, y+4.9);
      ctx.bezierCurveTo(x+19.4, y+4.9, x+19.1, y+4.5, x+19.1, y+4.1);
      ctx.bezierCurveTo(x+19.1, y+3.6, x+19.4, y+3.2, x+19.8, y+3.2);
      ctx.bezierCurveTo(x+20.2, y+3.2, x+20.6, y+3.6, x+20.6, y+4.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.stroke();
      ctx.restore();

};
