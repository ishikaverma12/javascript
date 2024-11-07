for(let i=1;i<=10;i++) {
   // console.log("i:",i);
    console.log("hello");

}

//sum to 1 to 5
let sum=0;
let n=100;
for(let i=1;i<n;i++){
    sum=sum+i;
}
console.log("Sum = ",sum);
console.log("loop has ended");
//while loop
let i=1;
while(i<5){
    console.log("hey");
    i++;
}
let summ=0;
let num=14;
let j=1
while(j<=n){
    summ=summ+i;
    j++;
}
console.log("sum is: ",summ);
//do-while
let k=1;
do{
    console.log("heyy");
i++;
}while(i<=10);
//for-of loop
let str="apnaclg";

for(let i of str){
    console.log("i",i);
}
// for in loop
let student= {
    name:"ishika",
    age:21,
    cgpa:7.1
};
for(let i in student){
    console.log("i=",i);
}