Webcam.set({
    width: 400,
    height: 350,
    image_format: 'png',
    png_quality: 90,
    flip_horiz: true
})
camera = document.getElementById("camera")
Webcam.attach("#camera")

function Capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("picture").innerHTML = "<img id='captured_image' src = ' " + data_uri + " '>";
    });
}