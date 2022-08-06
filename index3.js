console.log("Before Prepare food");

function prepareFood(data){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            if(data !== 2){
                console.log("Prepare Food");
                resolve("Food is Ready");
            }
            else {
                reject("error")
            }   
        },10);
    });
    return promise;
}

function prepareFrenchToast(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Prepare Frensh Toast");
            resolve("French Toast is Ready");
        },20);  
    })
    return promise;
}

function prepareCoffee(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        },30);
    })
    return promise;
}

async function newMethod() {
    try {
        let foodValue = await prepareFood(6);
        console.log("Food value ", foodValue)
        let frenchToastValue = await prepareFrenchToast();
        console.log("Toast value ", frenchToastValue)
        let coffeeValue = await prepareCoffee();
        console.log("Coffee value ", coffeeValue)
    } catch(e) {
        console.log('Error = ', e)
    }
}

newMethod();

// let promise = prepareFood(2);
// promise
// .then(function (value){
//     console.log("Food is ready callbcak = ", value)
//     return prepareFrenchToast()
// })
// .then(function (frenchToastValue) {
//     console.log("French toast ready callback = ", frenchToastValue);
//     return prepareCoffee()
// })
// .then(function (coffeeValue) {
//     console.log("Coffee ready callback = ", coffeeValue)
// })
// .catch(function(error){
//     console.log("Error = ", error)
// })

console.log("After Prepare food dinner is ready");