const playerContainer = $(".player");
const playerVideo = $("video")[0];
const playerPlayback = $(".player__playback");
const playbackBtn = $(".player__playback-button");
const playerVolume = $(".player__volume");
const playerVolVal = $(".player__volume-value");
const playerVolumeBtn = $(".player__volume-button");

let eventsInit = () => {
  $(".player__splash").on("click", e => {
    playerContainer.addClass("active");
    playerVideo.play();
    playerContainer.addClass("paused");
  })

  $(".player__start").on("click", e => {
    e.preventDefault();
    playerContainer.addClass("active");
 
    if (playerContainer.hasClass("paused")) {
      playerContainer.removeClass("paused");
      playerVideo.pause();
    } else {
      playerContainer.addClass("paused");
      playerVideo.play();
    }
  })

  playerVideo.ontimeupdate = function() {setInterval()};
  
  playbackBtn.css({
    background: "#FEDB3F"
  });

  playerVolumeBtn.css({
    background: "#FEDB3F",
    left: `${playerVideo.volume * 100}%`
  });

  playerVolVal.css({
    background: `linear-gradient(to right, #FEDB3F ${playerVideo.volume * 100}%, #626262 ${playerVideo.volume * 100}%)`
  });

  setInterval = () => {
    const durationSec = playerVideo.duration;
    const completedSec = playerVideo.currentTime;
    const completedPercent = (completedSec / durationSec) * 100;

    playbackBtn.css({
      left: `${completedPercent}%`
    });
    $(".player__playback-duration").css({
      background: `linear-gradient(to right, #FEDB3F ${completedPercent}%, #626262 ${completedPercent}%)`
    });
  };

  playerPlayback.click (e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec =
      (playerVideo.duration / 100) * newButtonPositionPercent;
    
    playbackBtn.css({
      left: `${newButtonPositionPercent}%`
    });
    
    playerVideo.currentTime = newPlaybackPositionSec;
  });

  playerVolume.click (e => {
    const barVol = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    
    const newLoudness = (clickedPosition / barVol.width());
    const newLoudnessPercent = newLoudness * 100;
    
    playerVolumeBtn.css({
      left: `${newLoudnessPercent}%`
    });
    
    playerVideo.volume = newLoudness;

    playerVolVal.css({
      background: `linear-gradient(to right, #FEDB3F ${newLoudnessPercent}%, #626262 ${newLoudnessPercent}%)`
    });
  });
};

eventsInit();