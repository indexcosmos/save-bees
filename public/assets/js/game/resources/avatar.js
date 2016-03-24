Avatar.left = function(ctx, x, y, is_remote){

    // report location
    if(!is_remote) Avatar._report('left', x, y);

    // player_l
    ctx.save();
          ctx.beginPath();
          ctx.moveTo(10.7, 6.2);
          ctx.bezierCurveTo(10.4, 9.7, 12.1, 12.8, 14.4, 13.0);
          ctx.bezierCurveTo(16.8, 13.3, 19.0, 10.5, 19.4, 7.0);
          ctx.bezierCurveTo(19.7, 3.4, 18.1, 0.3, 15.7, 0.1);
          ctx.bezierCurveTo(13.3, -0.1, 11.1, 2.6, 10.7, 6.2);
          ctx.closePath();
          ctx.fillStyle = "rgb(203, 203, 203)";
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(5.5, 11.5);
          ctx.bezierCurveTo(5.5, 13.5, 6.8, 15.4, 8.9, 16.5);
          ctx.bezierCurveTo(9.8, 17.0, 10.8, 17.4, 11.9, 17.6);
          ctx.bezierCurveTo(12.5, 17.8, 13.2, 17.9, 13.9, 17.9);
          ctx.bezierCurveTo(14.0, 17.9, 14.1, 17.9, 14.2, 17.9);
          ctx.bezierCurveTo(15.1, 17.9, 16.0, 17.8, 16.9, 17.6);
          ctx.bezierCurveTo(17.6, 17.4, 18.3, 17.2, 18.9, 16.9);
          ctx.bezierCurveTo(20.1, 16.3, 21.2, 15.4, 21.9, 14.5);
          ctx.bezierCurveTo(22.5, 13.6, 22.9, 12.5, 22.9, 11.5);
          ctx.bezierCurveTo(22.9, 10.4, 22.5, 9.4, 21.9, 8.5);
          ctx.bezierCurveTo(21.2, 7.5, 20.1, 6.6, 18.9, 6.1);
          ctx.bezierCurveTo(18.3, 5.8, 17.6, 5.5, 16.9, 5.4);
          ctx.bezierCurveTo(16.0, 5.1, 15.1, 5.0, 14.2, 5.0);
          ctx.bezierCurveTo(14.1, 5.0, 14.0, 5.0, 13.9, 5.0);
          ctx.bezierCurveTo(13.2, 5.1, 12.5, 5.1, 11.9, 5.3);
          ctx.bezierCurveTo(10.8, 5.5, 9.8, 5.9, 8.9, 6.4);
          ctx.bezierCurveTo(6.8, 7.6, 5.5, 9.4, 5.5, 11.5);
          ctx.closePath();
          ctx.fillStyle = "rgb(251, 237, 32)";
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(19.0, 6.1);
          ctx.lineTo(19.0, 16.9);
          ctx.bezierCurveTo(20.0, 16.3, 21.0, 15.4, 22.0, 14.5);
          ctx.lineTo(22.0, 8.5);
          ctx.bezierCurveTo(21.0, 7.5, 20.0, 6.6, 19.0, 6.1);
          ctx.closePath();
          ctx.fillStyle = "rgb(0, 0, 0)";
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(14.0, 5.0);
          ctx.lineTo(14.0, 17.9);
          ctx.bezierCurveTo(14.0, 17.9, 14.2, 17.9, 14.3, 17.9);
          ctx.bezierCurveTo(15.3, 17.9, 16.0, 17.8, 17.0, 17.6);
          ctx.lineTo(17.0, 5.4);
          ctx.bezierCurveTo(16.0, 5.1, 15.3, 5.0, 14.3, 5.0);
          ctx.bezierCurveTo(14.2, 5.0, 14.0, 5.0, 14.0, 5.0);
          ctx.closePath();
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(9.0, 6.4);
          ctx.lineTo(9.0, 16.5);
          ctx.bezierCurveTo(10.0, 17.0, 11.0, 17.4, 12.0, 17.6);
          ctx.lineTo(12.0, 5.3);
          ctx.bezierCurveTo(11.0, 5.5, 10.0, 5.9, 9.0, 6.4);
          ctx.closePath();
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(0.0, 5.0);
          ctx.bezierCurveTo(0.0, 7.8, 2.4, 10.1, 5.5, 10.1);
          ctx.bezierCurveTo(8.5, 10.1, 10.9, 7.8, 10.9, 5.0);
          ctx.bezierCurveTo(10.9, 2.3, 8.5, 0.0, 5.5, 0.0);
          ctx.bezierCurveTo(2.4, 0.0, 0.0, 2.3, 0.0, 5.0);
          ctx.closePath();
          ctx.fillStyle = "rgb(251, 237, 32)";
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(13.5, 4.1);
          ctx.bezierCurveTo(11.4, 7.0, 11.3, 10.5, 13.3, 11.9);
          ctx.bezierCurveTo(15.2, 13.2, 18.5, 12.0, 20.6, 9.1);
          ctx.bezierCurveTo(22.7, 6.2, 22.8, 2.7, 20.8, 1.3);
          ctx.bezierCurveTo(18.9, -0.1, 15.6, 1.1, 13.5, 4.1);
          ctx.closePath();
          ctx.fillStyle = "rgb(255, 255, 255)";
          ctx.fill();

          // layer2/Path
          ctx.beginPath();
          ctx.moveTo(2.3, 3.3);
          ctx.bezierCurveTo(2.3, 3.7, 2.6, 4.1, 3.0, 4.1);
          ctx.bezierCurveTo(3.5, 4.1, 3.8, 3.7, 3.8, 3.3);
          ctx.bezierCurveTo(3.8, 2.8, 3.5, 2.5, 3.0, 2.5);
          ctx.bezierCurveTo(2.6, 2.5, 2.3, 2.8, 2.3, 3.3);
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
ctx.moveTo(12.1, 6.2);
ctx.bezierCurveTo(12.5, 9.7, 10.8, 12.8, 8.4, 13.0);
ctx.bezierCurveTo(6.0, 13.3, 3.8, 10.5, 3.5, 7.0);
ctx.bezierCurveTo(3.2, 3.4, 4.8, 0.3, 7.2, 0.1);
ctx.bezierCurveTo(9.6, -0.1, 11.8, 2.6, 12.1, 6.2);
ctx.closePath();
ctx.fillStyle = "rgb(203, 203, 203)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(17.4, 11.5);
ctx.bezierCurveTo(17.4, 13.5, 16.0, 15.4, 14.0, 16.5);
ctx.bezierCurveTo(13.1, 17.0, 12.1, 17.4, 11.0, 17.6);
ctx.bezierCurveTo(10.4, 17.8, 9.7, 17.9, 9.0, 17.9);
ctx.bezierCurveTo(8.9, 17.9, 8.8, 17.9, 8.7, 17.9);
ctx.bezierCurveTo(7.7, 17.9, 6.8, 17.8, 6.0, 17.6);
ctx.bezierCurveTo(5.3, 17.4, 4.6, 17.2, 4.0, 16.9);
ctx.bezierCurveTo(2.7, 16.3, 1.7, 15.4, 1.0, 14.5);
ctx.bezierCurveTo(0.4, 13.6, 0.0, 12.5, 0.0, 11.5);
ctx.bezierCurveTo(0.0, 10.4, 0.4, 9.4, 1.0, 8.5);
ctx.bezierCurveTo(1.7, 7.5, 2.7, 6.6, 4.0, 6.1);
ctx.bezierCurveTo(4.6, 5.8, 5.3, 5.5, 6.0, 5.4);
ctx.bezierCurveTo(6.8, 5.1, 7.7, 5.0, 8.7, 5.0);
ctx.bezierCurveTo(8.8, 5.0, 8.9, 5.0, 9.0, 5.0);
ctx.bezierCurveTo(9.7, 5.1, 10.4, 5.1, 11.0, 5.3);
ctx.bezierCurveTo(12.1, 5.5, 13.1, 5.9, 14.0, 6.4);
ctx.bezierCurveTo(16.0, 7.6, 17.4, 9.4, 17.4, 11.5);
ctx.closePath();
ctx.fillStyle = "rgb(251, 237, 32)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(4.0, 6.1);
ctx.lineTo(4.0, 16.9);
ctx.bezierCurveTo(2.7, 16.3, 1.7, 15.4, 1.0, 14.5);
ctx.lineTo(1.0, 8.5);
ctx.bezierCurveTo(1.7, 7.5, 2.7, 6.6, 4.0, 6.1);
ctx.closePath();
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(9.0, 5.0);
ctx.lineTo(9.0, 17.9);
ctx.bezierCurveTo(8.9, 17.9, 8.8, 17.9, 8.7, 17.9);
ctx.bezierCurveTo(7.7, 17.9, 6.8, 17.8, 6.0, 17.6);
ctx.lineTo(6.0, 5.4);
ctx.bezierCurveTo(6.8, 5.1, 7.7, 5.0, 8.7, 5.0);
ctx.bezierCurveTo(8.8, 5.0, 8.9, 5.0, 9.0, 5.0);
ctx.closePath();
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(14.0, 6.4);
ctx.lineTo(14.0, 16.5);
ctx.bezierCurveTo(13.1, 17.0, 12.1, 17.4, 11.0, 17.6);
ctx.lineTo(11.0, 5.3);
ctx.bezierCurveTo(12.1, 5.5, 13.1, 5.9, 14.0, 6.4);
ctx.closePath();
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(22.9, 5.0);
ctx.bezierCurveTo(22.9, 7.8, 20.4, 10.1, 17.4, 10.1);
ctx.bezierCurveTo(14.4, 10.1, 12.0, 7.8, 12.0, 5.0);
ctx.bezierCurveTo(12.0, 2.3, 14.4, 0.0, 17.4, 0.0);
ctx.bezierCurveTo(20.4, 0.0, 22.9, 2.3, 22.9, 5.0);
ctx.closePath();
ctx.fillStyle = "rgb(251, 237, 32)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(9.4, 4.1);
ctx.bezierCurveTo(11.4, 7.0, 11.5, 10.5, 9.6, 11.9);
ctx.bezierCurveTo(7.6, 13.2, 4.4, 12.0, 2.3, 9.1);
ctx.bezierCurveTo(0.2, 6.2, 0.1, 2.7, 2.1, 1.3);
ctx.bezierCurveTo(4.0, -0.1, 7.3, 1.1, 9.4, 4.1);
ctx.closePath();
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fill();

// layer2/Path
ctx.beginPath();
ctx.moveTo(20.6, 3.3);
ctx.bezierCurveTo(20.6, 3.7, 20.2, 4.1, 19.8, 4.1);
ctx.bezierCurveTo(19.4, 4.1, 19.1, 3.7, 19.1, 3.3);
ctx.bezierCurveTo(19.1, 2.8, 19.4, 2.5, 19.8, 2.5);
ctx.bezierCurveTo(20.2, 2.5, 20.6, 2.8, 20.6, 3.3);
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
    y+=6;
    ctx.save();
      ctx.beginPath();
      ctx.moveTo(13.1, 6.1);
      ctx.bezierCurveTo(11.6, 9.4, 12.2, 12.9, 14.4, 13.8);
      ctx.bezierCurveTo(16.6, 14.8, 19.6, 12.9, 21.0, 9.6);
      ctx.bezierCurveTo(22.5, 6.3, 21.8, 2.9, 19.6, 1.9);
      ctx.bezierCurveTo(17.4, 1.0, 14.5, 2.8, 13.1, 6.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 203, 203)";
      ctx.fill();


      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(5.5, 12.3);
      ctx.bezierCurveTo(5.5, 14.3, 6.8, 16.1, 8.9, 17.3);
      ctx.bezierCurveTo(9.8, 17.8, 10.8, 18.2, 11.9, 18.4);
      ctx.bezierCurveTo(12.5, 18.6, 13.2, 18.7, 13.9, 18.7);
      ctx.bezierCurveTo(14.0, 18.7, 14.1, 18.7, 14.2, 18.7);
      ctx.bezierCurveTo(15.1, 18.7, 16.0, 18.6, 16.9, 18.4);
      ctx.bezierCurveTo(17.6, 18.2, 18.3, 18.0, 18.9, 17.7);
      ctx.bezierCurveTo(20.1, 17.1, 21.2, 16.2, 21.9, 15.2);
      ctx.bezierCurveTo(22.5, 14.4, 22.9, 13.3, 22.9, 12.3);
      ctx.bezierCurveTo(22.9, 11.2, 22.5, 10.2, 21.9, 9.3);
      ctx.bezierCurveTo(21.2, 8.3, 20.1, 7.4, 18.9, 6.9);
      ctx.bezierCurveTo(18.3, 6.6, 17.6, 6.3, 16.9, 6.1);
      ctx.bezierCurveTo(16.0, 5.9, 15.1, 5.8, 14.2, 5.8);
      ctx.bezierCurveTo(14.1, 5.8, 14.0, 5.8, 13.9, 5.8);
      ctx.bezierCurveTo(13.2, 5.9, 12.5, 5.9, 11.9, 6.1);
      ctx.bezierCurveTo(10.8, 6.3, 9.8, 6.7, 8.9, 7.2);
      ctx.bezierCurveTo(6.8, 8.4, 5.5, 10.2, 5.5, 12.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(251, 237, 32)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(19.0, 6.9);
      ctx.lineTo(19.0, 17.7);
      ctx.bezierCurveTo(20.0, 17.1, 21.0, 16.2, 22.0, 15.2);
      ctx.lineTo(22.0, 9.3);
      ctx.bezierCurveTo(21.0, 8.3, 20.0, 7.4, 19.0, 6.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(14.0, 5.8);
      ctx.lineTo(14.0, 18.7);
      ctx.bezierCurveTo(14.0, 18.7, 14.2, 18.7, 14.3, 18.7);
      ctx.bezierCurveTo(15.3, 18.7, 16.0, 18.6, 17.0, 18.4);
      ctx.lineTo(17.0, 6.1);
      ctx.bezierCurveTo(16.0, 5.9, 15.3, 5.8, 14.3, 5.8);
      ctx.bezierCurveTo(14.2, 5.8, 14.0, 5.8, 14.0, 5.8);
      ctx.closePath();
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(9.0, 7.2);
      ctx.lineTo(9.0, 17.3);
      ctx.bezierCurveTo(10.0, 17.8, 11.0, 18.2, 12.0, 18.4);
      ctx.lineTo(12.0, 6.1);
      ctx.bezierCurveTo(11.0, 6.3, 10.0, 6.7, 9.0, 7.2);
      ctx.closePath();
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(0.0, 5.8);
      ctx.bezierCurveTo(0.0, 8.6, 2.4, 10.9, 5.5, 10.9);
      ctx.bezierCurveTo(8.5, 10.9, 10.9, 8.6, 10.9, 5.8);
      ctx.bezierCurveTo(10.9, 3.0, 8.5, 0.8, 5.5, 0.8);
      ctx.bezierCurveTo(2.4, 0.8, 0.0, 3.0, 0.0, 5.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(251, 237, 32)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(10.8, 5.3);
      ctx.bezierCurveTo(9.8, 8.7, 11.0, 12.0, 13.3, 12.6);
      ctx.bezierCurveTo(15.6, 13.3, 18.2, 11.0, 19.2, 7.5);
      ctx.bezierCurveTo(20.1, 4.0, 18.9, 0.7, 16.6, 0.1);
      ctx.bezierCurveTo(14.3, -0.5, 11.7, 1.8, 10.8, 5.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(2.3, 4.1);
      ctx.bezierCurveTo(2.3, 4.5, 2.6, 4.9, 3.0, 4.9);
      ctx.bezierCurveTo(3.5, 4.9, 3.8, 4.5, 3.8, 4.1);
      ctx.bezierCurveTo(3.8, 3.6, 3.5, 3.2, 3.0, 3.2);
      ctx.bezierCurveTo(2.6, 3.2, 2.3, 3.6, 2.3, 4.1);
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
    y+=6;
    ctx.save();
      ctx.beginPath();
      ctx.moveTo(9.8, 6.1);
      ctx.bezierCurveTo(11.3, 9.4, 10.6, 12.9, 8.4, 13.8);
      ctx.bezierCurveTo(6.2, 14.8, 3.3, 12.9, 1.9, 9.6);
      ctx.bezierCurveTo(0.4, 6.3, 1.0, 2.9, 3.2, 1.9);
      ctx.bezierCurveTo(5.4, 1.0, 8.4, 2.8, 9.8, 6.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 203, 203)";
      ctx.fill();


      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(17.4, 12.3);
      ctx.bezierCurveTo(17.4, 14.3, 16.0, 16.1, 14.0, 17.3);
      ctx.bezierCurveTo(13.1, 17.8, 12.1, 18.2, 11.0, 18.4);
      ctx.bezierCurveTo(10.4, 18.6, 9.7, 18.7, 9.0, 18.7);
      ctx.bezierCurveTo(8.9, 18.7, 8.8, 18.7, 8.7, 18.7);
      ctx.bezierCurveTo(7.7, 18.7, 6.8, 18.6, 6.0, 18.4);
      ctx.bezierCurveTo(5.3, 18.2, 4.6, 18.0, 4.0, 17.7);
      ctx.bezierCurveTo(2.7, 17.1, 1.7, 16.2, 1.0, 15.2);
      ctx.bezierCurveTo(0.4, 14.4, 0.0, 13.3, 0.0, 12.3);
      ctx.bezierCurveTo(0.0, 11.2, 0.4, 10.2, 1.0, 9.3);
      ctx.bezierCurveTo(1.7, 8.3, 2.7, 7.4, 4.0, 6.9);
      ctx.bezierCurveTo(4.6, 6.6, 5.3, 6.3, 6.0, 6.1);
      ctx.bezierCurveTo(6.8, 5.9, 7.7, 5.8, 8.7, 5.8);
      ctx.bezierCurveTo(8.8, 5.8, 8.9, 5.8, 9.0, 5.8);
      ctx.bezierCurveTo(9.7, 5.9, 10.4, 5.9, 11.0, 6.1);
      ctx.bezierCurveTo(12.1, 6.3, 13.1, 6.7, 14.0, 7.2);
      ctx.bezierCurveTo(16.0, 8.4, 17.4, 10.2, 17.4, 12.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(251, 237, 32)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(4.0, 6.9);
      ctx.lineTo(4.0, 17.7);
      ctx.bezierCurveTo(3.0, 17.1, 2.0, 16.2, 1.0, 15.2);
      ctx.lineTo(1.0, 9.3);
      ctx.bezierCurveTo(2.0, 8.3, 3.0, 7.4, 4.0, 6.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(9.0, 5.8);
      ctx.lineTo(9.0, 18.7);
      ctx.bezierCurveTo(9.0, 18.7, 8.8, 18.7, 8.7, 18.7);
      ctx.bezierCurveTo(7.7, 18.7, 7.0, 18.6, 6.0, 18.4);
      ctx.lineTo(6.0, 6.1);
      ctx.bezierCurveTo(7.0, 5.9, 7.7, 5.8, 8.7, 5.8);
      ctx.bezierCurveTo(8.8, 5.8, 9.0, 5.8, 9.0, 5.8);
      ctx.closePath();
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(14.0, 7.2);
      ctx.lineTo(14.0, 17.3);
      ctx.bezierCurveTo(13.0, 17.8, 12.0, 18.2, 11.0, 18.4);
      ctx.lineTo(11.0, 6.1);
      ctx.bezierCurveTo(12.0, 6.3, 13.0, 6.7, 14.0, 7.2);
      ctx.closePath();
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(22.9, 5.8);
      ctx.bezierCurveTo(22.9, 8.6, 20.4, 10.9, 17.4, 10.9);
      ctx.bezierCurveTo(14.4, 10.9, 12.0, 8.6, 12.0, 5.8);
      ctx.bezierCurveTo(12.0, 3.0, 14.4, 0.8, 17.4, 0.8);
      ctx.bezierCurveTo(20.4, 0.8, 22.9, 3.0, 22.9, 5.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(251, 237, 32)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(12.1, 5.3);
      ctx.bezierCurveTo(13.0, 8.7, 11.9, 12.0, 9.6, 12.6);
      ctx.bezierCurveTo(7.3, 13.3, 4.6, 11.0, 3.7, 7.5);
      ctx.bezierCurveTo(2.8, 4.0, 3.9, 0.7, 6.2, 0.1);
      ctx.bezierCurveTo(8.6, -0.5, 11.2, 1.8, 12.1, 5.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(20.6, 4.1);
      ctx.bezierCurveTo(20.6, 4.5, 20.2, 4.9, 19.8, 4.9);
      ctx.bezierCurveTo(19.4, 4.9, 19.1, 4.5, 19.1, 4.1);
      ctx.bezierCurveTo(19.1, 3.6, 19.4, 3.2, 19.8, 3.2);
      ctx.bezierCurveTo(20.2, 3.2, 20.6, 3.6, 20.6, 4.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.stroke();
      ctx.restore();

};
