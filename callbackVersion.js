
function mowYard(name, callback) {
   setTimeout(function(){
    console.log(name + " mowed the yard.");
     callback();  
   }, 2000);
}
  
 function weedEat(name, callback) {
    setTimeout(function() {
        if (Math.random() < 0.8) {
        console.log (name + " finished using the weed eater.");
        callback();
    } else {
    console.log(name + " fell asleep after mowing the yard.");
    }
 }, 1500);
 } 

 function trimHedges(name, callback){
    setTimeout(function() {
        if (Math.random() <0.8) {
          console.log (name + " finished trimming the hedges.");
        callback();
         } else {
            console.log(name + " fell asleep after weed eating the yard.")
    }
    }, 1000);
 }

  function collectWood(name, callback) {
   setTimeout(function() {
    if (Math.random () < 0.5) {
    console.log (name + " finished collecting wood.");
  callback();
 } else {
    console.log(name + " fell asleep after trimming hedges.");
 }
 }, 2500);
}
 
 function waterGarden(name, callback){
    setTimeout(function(){ 
    if(Math.random() <0.9) {
    console.log(name + " finished watering the garden.");
    callback();
    } else {
    console.log(name + " fell Asleep after collecting wood.")
    }
 }, 500);
 }
       

 function doSummerChores(person) {
  mowYard(person, function () {
    weedEat(person, function() {
     trimHedges(person, function() {
        collectWood(person, function() {
            waterGarden(person, function() {
            console.log(person + " finished all their chores!");
            });
        });
     } ); 
    });

  });
} 
    doSummerChores("Weezy");
  

  
 