const addBall = () => {
    const colors = [
        'success',
        'primary',
        'orange',
        'danger',
        'purple',
    ]
    const ball = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    ball.classList.add('ball');
    ball.style.left = `${Math.floor(Math.random() * 98)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 98)}vh`;
    ball.style.backgroundColor = `var(--my-${color})`;
    ball.style.transform = `scale(${Math.random()})`;

    return ball;
}

export { addBall };

