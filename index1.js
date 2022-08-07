console.log("Before Prepare food");

function prepareFood(callback){
    setTimeout(()=>{
        console.log("Prepare Food");
        callback("Food is Ready");
    },110);
}

function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("Prepare Frensh Toast");
        callback("French Toast is Ready");
    },120);
}

function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee is Ready");
    },130);
}

prepareFood(function (value){
    console.log("Food is Ready callback = ",value);
    prepareFrenchToast(function (value){
        console.log("French Toast is Ready callback = ",value);
        prepareCoffee(function (value){
            console.log("Coffee is Ready callback = ",value);
        });
    });
});

console.log("After Prepare food dinner is ready");
