// Array Methods

const Array =[1,2,3,4,5,6,7,8,9,10];

Array.pop();
console.log("pop arrray====" ,Array);

Array.push("Ali");
console.log("push arrray====" ,Array);

Array.shift();
console.log("shift arrray====" ,Array);

Array.unshift("Ramzan");
console.log("unshift arrray====" ,Array);

function forEach(value,index,Array){
    console.log("For each method===" , value,index,Array);
    const multiple = value*4;
    return multiple;
}

const foreacharray = Array.forEach(forEach);
console.log("Returned foreacharray" , foreacharray);


function maparray(value,index,Array){
    console.log("Mapppedarray=====" ,value ,index ,Array);
    const multiple = value*4;
    return multiple;
}

const mappedarray = Array.map(maparray);
console.log("Returned mappedarray" , mappedarray);

function filterarray(value,index,Array){
    console.log("FilteredArray=====" ,value ,index ,Array);
    const even = value%2===0;
    return even;
}

const filteredarray = Array.filter(filterarray);
console.log("Returned fileredarray" , filteredarray);

//  built-in-Methods

const data = {
    Adminname : "Ramzan",
    Age:20,
    grade:"BA english",
    gender:"male",
}

console.log("Hasown property" , data.hasOwnProperty("gender"));
console.log("Hasown property" , data.hasOwnProperty(""));
console.log("Hasown property" , data.hasOwnProperty("cast"));

console.log("key methods" , Object.keys(data));
console.log("value method" , Object.values(data));
console.log("enteries method", Object.entries(data));




