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
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerHTML = `${score.user}: ${score.score}`;
    leaderBoardList.appendChild(tr);
    tr.appendChild(td);
  });
};
addScoreButton.addEventListener('click', addScore);
refreshButton.addEventListener('click', listPlayer);
document.addEventListener('DOMContentLoaded', listPlayer, false);