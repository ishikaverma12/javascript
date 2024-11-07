/*let profile= {
    fullnaMe:"shradha khapra",
isfollow:true,
post:195,
followers:569,
//comment
};
//print all even num 0to 100

for(let i=1;i<100;i++){
    if(i%2==0){
console.log("i=",i);
    }
}
//create a game where you start with any game num.ask user keep the guess game until user enter correct value
let gamenum=34;

let usernum=prompt("guess the game num:");
while(usernum!=gamenum){
usernum=prompt("wrong ans,again do this");

}
console.log("you winn");
//method 1
let username="ishikaverma123";
let u1="@";
console.log(u1.concat(username));
console.log(username.length);

let username=prompt("enter username");
let fname="@" + username + username.length;
console.log(fname);
//array marks of stu find avg marks
let sum=0
let marks=[85,97,44,37,76,60];
for(let is of marks){
sum=sum+is;
let avg=sum/marks.length;
console.log(avg); 
}*/
let items=[250,645,300,900,50];
for(let val=0;val<=items.length;val++){
    let offer=items/10;//10%
items[val]-=offer;
}
console.log(items);