var atk = document.querySelector('input[value*="ATTACK"]');


var myEles = document.querySelectorAll('strong');
for(var i=0; i<myEles.length; i++){
    
    if(myEles[i].innerHTML == 'No space in your inventory.'){
        var invStatus = 1;   
    }
 
}

 if(invStatus == 1){
        window.location.href = "https://blackdragon.mobi/buildings/view/building=calh/action=sell/all=1/c=";
    }
else {atk.click();}