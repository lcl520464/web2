var john = (89 + 120 + 103) / 3;//1. 4.计算John Mike Mary的平均分
var mike = (116 + 94 + 123) / 3;
var mary = (97 + 134 + 105) / 3;
console.log("johnScore: " + john, "mikeScore: " + mike, "maryScore: "+ mary + ". ");
//2.判断获胜队伍
if (john > mike && john > mary) {
    console.log("John's team wins with " + john + " points!")
} else if (mike > john && mike > mary) {
    console.log("Mike's team wins with " + mike + " points!")
} else if (mary > john && mary> mike) {
    console.log("Mary's team wins with " + mary + " points!")
} else {
    console.log("There is a draw!")
}