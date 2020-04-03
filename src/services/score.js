const storagePrefix = "daltonmemorygame@";

// function setBestScore(value) {
//   localStorage.setItem(`${storagePrefix}:bestScore`, value);
// }

// getBestScore() {
//   return localStorage.getItem(`${storagePrefix}:bestScore`);
// }

export function setLastScore(value) {
  let lastestScores = getLastScores();
  let minValue = lastestScores.pop();

  if (lastestScores.length >= 5) {
    if (value < minValue) return;
    lastestScores.push(value);
  }

  localStorage.setItem(
    `${storagePrefix}:latestScores`,
    lastestScores.join(";")
  );
}

export function getLastScores() {
  const scores = localStorage.getItem(`${storagePrefix}:latestScores`);

  return scores
    ? scores
        .split(";")
        .sort()
        .reverse()
        .map(i => parseInt(i))
    : [];
}
