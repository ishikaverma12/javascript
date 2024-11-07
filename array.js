let marks=[23,12,3,45,28];
console.log(marks);
console.log(marks.length);
let heroes=["jay","rahul","aman"];
/*console.log(heroes);
console.log(heroes.length);
for(let i=0;i<=heroes.length;i++){
    console.log(heroes[i]);
}
for(let i=0;i<=marks.length;i++){
    console.log(marks[i]);
}*/
for(let item of heroes){
    console.log(item);
}
let cities=["delhi","ghzb","mumbai","jaipur"];
for(let i of cities){
    console.log(i);
    console.log(i.toLowerCase);
    console.log(i.toUpperCase);
}
//array method
cities.push("new delhi");

