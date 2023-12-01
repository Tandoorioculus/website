let gridArray = [['0','0','0','0'],['1','1','1','0'],['1','b','1','0'],['1','1','1','0']];
let game = 0;
function leftClicked(thingID){
    if(gridArray[thingID[0]][thingID[1]]==='b'&&game===0&&document.getElementById(thingID).style.backgroundColor!=="orange"){
        document.getElementById(thingID).style.backgroundColor="red";

        const para = document.createElement("p");
        const node = document.createTextNode("You lost the game");
        para.appendChild(node);
        const element = document.getElementById("winLose");
        element.appendChild(para);
        game=1;
    }
    else if(game===0&&document.getElementById(thingID).style.backgroundColor!=="orange"){
        fill(thingID);
    }
}
function rightClicked(thingID){
    if(document.getElementById(thingID).style.backgroundColor==="orange"&&game===0)
        document.getElementById(thingID).style.backgroundColor="lightgreen";
    else if(game===0&&document.getElementById(thingID).style.backgroundColor!=="gray"&&document.getElementById(thingID).style.backgroundColor!=="red"){
        document.getElementById(thingID).style.backgroundColor="orange";
    }
}
function fill(thingID){
    let ID = parseInt(thingID);

    document.getElementById(thingID).style.backgroundColor="gray";
    document.getElementById(thingID).innerHTML=gridArray[thingID[0]][thingID[1]];

    if(gridArray[thingID[0]][thingID[1]]==='0'){
        if(thingID[0]+1<4&&gridArray[thingID[0]][thingID[1]]!=='b'){
            
        }
        if(thingID[0]-1>=0&&gridArray[thingID[0]-1][thingID[1]]!=='b'){
            
        }
        if(Math.floor(ID/10)<4&&gridArray[Math.floor(ID/10)][ID%10+1]!=='b'){
            fill((ID+1)+"");
        }
        if(thingID[1]-1>=0&&gridArray[thingID[0]][thingID[1]-1]!=='b'){
            
        }
    }
}
