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
       

 function doSummerChores(person) {
   mowYard(person).then(value => {
    console.log(value); 
    return weedEat(person);

    }) 
   .then(value => {
    console.log(value); 
    return trimHedges(person);
})
   .then(value => {
    console.log(value);  
    return collectWood(person);
})
   .then(value => {
    console.log(value);  
    return waterGarden(person);
})
   .then(value => {
    console.log(value);  
    console.log(person + " finished all their chores!");
})
   .catch(error => {
    console.error(error);
   });

 
 }  
 doSummerChores("Weezy");