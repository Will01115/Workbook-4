"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores){
    let averageScore = 0;
    let totalOfAllScores = 0
    for(let index =0; index < scores.length; index++){
        let score = scores[index];
        totalOfAllScores = totalOfAllScores + score;
        // totalOfAllScores += score;
    }
    console.log(totalOfAllScores);
    return averageScore;
}

let averageScoreForMyScores = getAverage(myScores);
let averageScoreForYourScores = getAverage(yourScores);
