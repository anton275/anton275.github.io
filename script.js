window.onload = () => {
    var running = false;
    var time = 0;
    var speed = 5;
    var border_width = 1200;
    var height = 400
    var number = 0;
    var box_size = 20;
    var max = border_width / speed + box_size;
    const numbers = [];

    for (let i = 0; i < 100; i++) {
        let a = Math.floor(Math.random() * 10);
        let b = Math.floor(Math.random() * 10);
        numbers.push((String(a) + String(b)));
    }

    const play_button = document.getElementById("play");
    play_button.addEventListener("click", () => {
        if (running) {
            play_button.innerHTML = "play";
            running = false;
        }
        else {
            play_button.innerHTML = "stop";
            running = true;
        }


        window.requestAnimationFrame(animate);
    })


    function animate() {
        if (running) {
            let ctx = document.getElementById("numbers").getContext("2d");
            ctx.fillStyle = "white";
            ctx.font = "100px serif";
            ctx.clearRect(0, 0, border_width, height)

            //ctx.fillRect(border_width - (time * speed), 200, 20, 20);
            ctx.fillText(numbers[number], border_width - (time * speed), 220);
            time = (time + 1) % max;
            if (time == max - 1) {
                number += 1;
            }

            window.requestAnimationFrame(animate);

            //ctx.fillText("15", 200, 200)
            // window.requestAnimationFrame(animate)
        }
    }
    window.requestAnimationFrame(animate);

}