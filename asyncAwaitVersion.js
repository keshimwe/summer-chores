function mowYard(name) {

    return new Promise ((resolve, reject) => {
        setTimeout(function(){
        resolve (name + " mowed the yard.");   
   }, 2000);

});
   
}



 function weedEat(name) {
     return new Promise((resolve, reject) => {
       setTimeout(function() {
        if (Math.random() < 0.8) {
        resolve(name + " finished using the weed eater.");
        
    } else {
        reject(name + " fell asleep after mowing the yard.");
    }
 }, 1500);
  });
    
 } 

 function trimHedges(name){
      return new Promise((resolve, reject) => {
       setTimeout(function() {
        if (Math.random() <0.8) {
          resolve (name + " finished trimming the hedges.");
        
         } else {
            reject(name + " fell asleep after weed eating the yard.")
    }
    }, 1000); 
  });
 }

  function collectWood(name) {
   return new Promise((resolve, reject) => {
        setTimeout(function() {
    if (Math.random () < 0.5) {
    resolve (name + " finished collecting wood.");
  } else {
    reject(name + " fell asleep after trimming hedges.");
 }
 }, 2500);
  });
}
 
 function waterGarden(name){
    return new Promise((resolve, reject) => {
        setTimeout(function(){ 
    if(Math.random() <0.9) {
    resolve(name + " finished watering the garden.");
    } else {
    reject(name + " fell Asleep after collecting wood.")
    }
 }, 500);
  });
 }
       
async function doSummerChores(person){
     try{
     let mowYardFinish = await mowYard(person);
     console.log(mowYardFinish);

      let weedEatFinish = await weedEat(person);
     console.log(weedEatFinish);

      let trimHedgesFinish = await trimHedges(person);
     console.log(trimHedgesFinish);

     let collectWoodFinish = await collectWood(person);
     console.log(collectWoodFinish);

     let waterGardenFinish = await waterGarden(person);
     console.log(waterGardenFinish);

     console.log(person + " finished all their chores!");

     }
     catch(error){
     console.error(error);
     }
}

    
 doSummerChores("Weezy")