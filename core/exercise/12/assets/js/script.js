function getSeconds(seconds){
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString(
        'pt-BR',
        {
            timeZone: 'UTC'
        }
    )
};

function webDom(){
    let content = document.getElementById('timer');
    let start = document.querySelector('.start');
    let pause = document.querySelector('.pause');
    let reset = document.querySelector('.reset');
    let seconds = 0;
    let timer;

    function startTimer(){
        timer = setInterval(
            () => {
                seconds++;
                content.textContent = getSeconds(seconds);
            },
            1000
        );
    }

    document.addEventListener(
        'click',
        (e) => {
            const element = e.target;
            if (element.classList.contains('start')){
                content.classList.remove('paused');
                clearInterval(timer);
                startTimer();
            }
            else if (element.classList.contains('pause')){
                content.classList.add('paused');
                clearInterval(timer);
            }
            else if (element.classList.contains('reset')){
                clearInterval(timer);
                content.classList.remove('paused');
                content.textContent = '00:00:00';
                seconds = 0;
            }
        }
    )
};

webDom();