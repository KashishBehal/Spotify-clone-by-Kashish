console.log("Welcome to My Music  Player");
//intialise the variables
let songIndex=0;
let audioElement/*name*/ = new Audio('songs/Apna Bana Le.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar'); 
let songItems =  document.getElementsByClassName('songItem');
let songs = [
    {songName: "Apna Bana Le" , filePath:/*where  this song is*/ "songs/Apna Bana Le.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Rasiya" , filePath:/*where  this song is*/ "songs/Rasiya.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:/*where  this song is*/ "songs/Apnabanale.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:/*where  this song is*/ "songs/Apnabanale.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:/*where  this song is*/ "songs/Apnabanale.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:/*where  this song is*/ "songs/Apnabanale.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:/*where  this song is*/ "songs/Apnabanale.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:/*where  this song is*/ "songs/Apnabanale.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:/*where  this song is*/ "songs/Apnabanale.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:/*where  this song is*/ "songs/Apnabanale.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:/*where  this song is*/ "songs/Apnabanale.mp3" , coverPath: "covers/1.jpg"},
    
]//for  each takes the call back function. 
songs.forEach((Element)=>{


})
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-circle-play');
        masterPlay.classList.add('fa-solid fa-circle-pause');
        }
        else{
            audioElement.pause();
            masterPlay.classList.add('fa-solid fa-circle-play');
            masterPlay.classList.remove('-fa-solid fa-circle-pause');
        }
})

//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
     progess = parseInt((audioElement.currentTime/audioElement.duration)*100);//want in integer//
     myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})