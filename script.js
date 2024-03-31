const resume = {
    "Name":"srilatha",
    "education":"B.Tech",
    "skills":["Html","css","javascript"],
    "Yearofpassing":"2008",
    "email":"srilathadinakar@gmail.com",
    "contact":"987654321",
    "gender":"F",
    "maritalstatus":"married",
    "age":"36",
    "language":["tamil","english"],
    "address":{
        "city":"salem",
        "state":"TN"
    }
}

const data = Object.entries(resume)
console.log(data); 

for(var i=0;i<data.length;i++){
    console.log(data[i]); 
}

for(var key in data){
    console.log(data[key]);
}

for(var [key,value] of data){
    console.log(key,value)
}

data.forEach(([key,value])=>console.log(value));
