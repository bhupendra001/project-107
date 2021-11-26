function start() {
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier=ml5.soundClassifier('',modelready)
}

function modelready(){

classifier.classify(gotready)

}

function gotready(error,result){

console.log("gotresult")

}