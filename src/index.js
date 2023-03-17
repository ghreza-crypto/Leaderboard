import './style.css';
import { getScores, postScore } from './modules/api.js';

const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const leaderBoardList = document.getElementById('leaderBoardList');
const addScoreButton = document.getElementById('addScoreButton');
const refreshButton = document.getElementById('refreshButton');

const addScore = () => {
  const body = {
    user: playerName.value,
    score: playerScore.value,
  };
  postScore(body);
  playerName.value = '';
  playerScore.value = '';
};
const listPlayer = async () => {
  const scores = await getScores();
  leaderBoardList.innerHTML = '';
  scores.forEach((score) => {
    const el = document.createElement('div');
    el.innerHTML = `${score.user}: ${score.score}`;
    leaderBoardList.appendChild(el);
  });
};
addScoreButton.addEventListener('click', addScore);
refreshButton.addEventListener('click', listPlayer);