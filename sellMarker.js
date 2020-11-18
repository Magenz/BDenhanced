var item = document.querySelectorAll('u');
var cont = document.querySelector('input[value*="Conti"]');
//note: do not repeat items, or even overlap, example : Jewel and ewel, Rec and Recipe
//overlapping twice means u click it twice, clicking twice means you unmarked and mark simultaneusly  , it means it didnt do anything.
// just dont overlap For fuck sake haha
//i will soon implement fix on ovelap issue >,< . pls do remind me ~Ed
const excludeThis = [
    "Jewel",
    "Charm",
    "Rec",
    "Magic scroll"
];

for(var i=0; i<item.length; i++){
    for(var j=0; j<excludeThis.length; j++){
        
        if(item[i].innerHTML.includes(excludeThis[j])){item[i].click(); }
            
    }
}
cont.click();