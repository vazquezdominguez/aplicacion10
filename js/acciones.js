//JavaScript
 $(document).ready(function (e) {
 $('#principaI').height($('#page1').height());
 document.addEventListener("deviceready",function(){
audio=window.plugins.LowLatencyAudio;
 audio.preloadFX ('do','audio/DO.mp3',function(){} ,function(e){alert('Error'+e);});
 audio.preIoadFX('re','audio/RE.mp3',function(){},function(e){alert('Error '+e);});
 audio.preIoadFX('mi','audio/MI.mp3',function(){},function(e){alert('Error '+e);});
 audio.preIoadFX('fa','audio/FA.mp3',function(){},function(e){alert('Error '+e);});
 audio.preloadFX('sol','audio/SOL.mp3',function(){},function(e){alert('Error '+e);});
 audio.preIoadFX('Ia','audio/LA.mp3',function(){} ,function(e){alert('Error '+e);});
 audio.preloadFX('si','audio/SI.mp3',function(){},function(e){alert('Error '+e);});

 $('.nota').bind('touchstart',function(){
 $(this).addClass('tocada');
 audio.play($(this).attr('id'));

 }).bind('touchend',function(){
 $(this).removeClass('tocada');

 });
 },false);

 });