var name1=prompt("Enter your name");
var name2=prompt("Enter your valantine");

var n = Math.random();
n=n*100;
n=Math.floor(n)+1;
if (n>70) {
    alert(n+"% Your a fantastic couple ");
}else if (n>=30 && n<=70) {
    alert(n+"% You love each other likee romeo juliet");
}else if (n<=30) {
    alert(n+"% is your score");
}
