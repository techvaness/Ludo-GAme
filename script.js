import { outcome } from './Dice/dice';


let playerZone_Blue=document.querySelector('.player-zone-blue'),
    playerZone_Green=document.querySelector('.player-zone-green')
    tokensOfPlayer_Blue=[...document.querySelector('.player-blue').children],
    tokensOfPlayer_Green=[...document.querySelector('.player-green').children],
    safeSpots=[...document.querySelectorAll('.safe')],
    destinationOfPlayer_Blue=document.querySelector('.arrow-blue'),
    destinationOfPlayer_Green=document.querySelector('.arrow-green'),
    startOfPlayer_Green=document.querySelector('.green-start'),
    startOfPlayer_Blue=document.querySelector('.blue-start');
    //pathOfPlayer_1=
    //console.log(safeSpots)


console.log('outcome',outcome);
