function scoreClassifier(score){
    if(score < 0 || score > 100){
        console.log("Invalid");
    }else if(score >= 80){
        console.log("Excellent");
    }else if(score >= 60){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
}

let score = 65;
scoreClassifier(score);
score = 85;
scoreClassifier(score);
score = 105;
scoreClassifier(score);