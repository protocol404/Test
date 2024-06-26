const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Initialize game variables
let birdY = canvas.height / 2;
let birdVelocity = 0;
const gravity = 0.5;
let score = 0;

// Draw bird
function drawBird() {
    const birdImage = new Image();
    birdImage.src = "https://github.com/protocol404/Test/blob/main/46888908-8574e880-ce7f-11e8-9ead-cc837d87098d.png"; // Ganti dengan URL gambar burung
    ctx.drawImage(birdImage, birdX, birdY, birdWidth, birdHeight);
}

// Draw pipes
function drawPipes() {
    const pipeImage = new Image();
    pipeImage.src = "https://github.com/protocol404/Test/blob/main/c339e6f1-a3da-470b-95f5-5a231f521dae.png"; // Ganti dengan URL gambar pipa
    // Implement logika menggambar pipa di sini
}

// Update game logic
function updateGame() {
    birdVelocity += gravity;
    birdY += birdVelocity;
    checkCollision(); // Implement collision detection
    // Other game logic (pipe movement, scoring, etc.)
}

// Event listener for spacebar (bird jump)
document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        birdVelocity = -10; // Bird jumps
    }
});

// Main game loop
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBird();
    drawPipes();
    updateGame();

    // Display score (customize position and style)
    ctx.fillStyle = "#000";
    ctx.font = "24px Arial";
    ctx.fillText(`Score: ${score}`, 20, 40);
}

// Start the game loop
gameLoop();
