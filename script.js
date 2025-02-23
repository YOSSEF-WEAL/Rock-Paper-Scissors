const choiceBtn = document.querySelectorAll('.choice-btn');
const playerChoiceText = document.querySelector('.player-choice-text');
const cpuChoiceText = document.querySelector('.cpu-choice-text');
const gametitle = document.querySelector('.game-title');
const scoreDrawText = document.querySelector('.score-draw-text');
const scoreWonText = document.querySelector('.score-won-text');
const scoreLoseText = document.querySelector('.score-lost-text');

let playerResiltValue = "";
let cpuResiltValue = "";


const choiceEmogi = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};
console.log(choiceEmogi['rock'])


choiceBtn.forEach((choicBtn) =>
{
    choicBtn.addEventListener('click', () =>
    {
        choiceBtn.forEach(btn =>
        {
            btn.classList.add('dsapleBtn');
        });

        gametitle.textContent = "Let's Play!"

        playerChoiceText.textContent = "✊";
        cpuChoiceText.textContent = "✊";

        playerResiltValue = choicBtn.value;
        cpuResiltValue = getCpuResiltValue();

        playerChoiceText.classList.add("player-choice-text-anim");
        cpuChoiceText.classList.add("cpu-choice-text-anim");


        setTimeout(() =>
        {
            playerChoiceText.textContent = choiceEmogi[playerResiltValue];
            cpuChoiceText.textContent = choiceEmogi[cpuResiltValue];

            playerChoiceText.classList.remove("player-choice-text-anim");
            cpuChoiceText.classList.remove("cpu-choice-text-anim");

            choiceBtn.forEach(btn =>
            {
                btn.classList.remove('dsapleBtn');

            });
            showResultGame();
        }, 2000);

    })

});

function getCpuResiltValue()
{
    const cpuotionChoices = ['rock', 'paper', 'scissors'];
    const cpuRandomChoice = cpuotionChoices[Math.floor(Math.random() * cpuotionChoices.length)];
    return cpuRandomChoice
};

function showResultGame()
{
    if (playerResiltValue == cpuResiltValue)
    {
        gametitle.textContent = "Draw!";
        scoreDrawText.textContent++;
    } else if (playerResiltValue == "rock" && cpuResiltValue == "scissors" || playerResiltValue == "paper" && cpuResiltValue == "rock" || playerResiltValue == "scissors" && cpuResiltValue == "paper")
    {
        gametitle.textContent = "You Won!";
        scoreWonText.textContent++;
    } else
    {
        gametitle.textContent = "You Lose!";
        scoreLoseText.textContent++;

    }
};