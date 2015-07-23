(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

(function(){
  
  window.write_current_fps = function(fps){
    var current_fps = document.createElement('h2');
    current_fps.innerHTML = 'Current FPS should be ' + fps;
    document.getElementsByTagName('h1')[0].appendChild(current_fps);       
  }
})();

(function(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var last_render = 0;
  
  /*
      ______  _______  ____  ____  _________    _   ________
     /  _/  |/  / __ \/ __ \/ __ \/_  __/   |  / | / /_  __/
     / // /|_/ / /_/ / / / / /_/ / / / / /| | /  |/ / / /   
   _/ // /  / / ____/ /_/ / _, _/ / / / ___ |/ /|  / / /    
  /___/_/  /_/_/    \____/_/ |_| /_/ /_/  |_/_/ |_/ /_/     

  */
  var fps = 1;
  
  write_current_fps(fps);

  var delta = 1000 / fps;
  var now;
  var animate = function(current_time){
    requestAnimationFrame(animate);
//    var now = Date.now();
    var now = current_time;
    var duration = now - last_render;

//    console.log(duration);
   
    if( duration < delta  ) return ;

    ctx.clearRect(0, 0 , 500 ,500, 50);    
//    console.log(duration.toFixed(2));
//    ctx.fillText('fps : ' + ( delta / duration ).toFixed(2) , 50, 200);
//    console.log( duration );
    ctx.fillText('fps : ' + ( 1000 / duration  ).toFixed(2) , 50, 200);
  //  ctx.clearRect(50, 300 , 100 ,100);    
//    ctx.fillText('fps : ' + current_time ,50,300);
    last_render = now;
  }
  
  animate();
})();
