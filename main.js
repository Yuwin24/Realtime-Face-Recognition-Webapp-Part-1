function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/5Xq0cxSiF/model.json',modelLoaded)
}
function draw(){
    image(video, 0, 0, 400, 400);
    classofier.classify(video, gotResult)
}
function modelLoaded(){
    console.log('Model has been Loaded!')
}
function gotResult(){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}