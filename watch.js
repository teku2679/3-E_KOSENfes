window.addEventListener('load',
    function(event){
        startwatch();
    }
, false);

function startwatch(){
    var watch = document.getElementById('watch');
    window.setInterval(
        function(){
            var time = new Date();
            watch.innerHTML = 
                zero2D(time.getHours()) + ':' +
                zero2D(time.getMinutes()) + ':' +
                zero2D(time.getSeconds());
        }
    ,1000);
}

function zero2D(num){
    var str = '0' + num;
    return str.substr(-2, 2);
}