const storagePrefix = "daltonmemorygame@";

// function setBestScore(value) {
//   localStorage.setItem(`${storagePrefix}:bestScore`, value);
// }

// getBestScore() {
//   return localStorage.getItem(`${storagePrefix}:bestScore`);
// }

export function setLastScore(value) {
  let lastestScores = getLastScores();

  if (lastestScores.length === 5) {
    let maxValue = Math.max(lastestScores);

    if (value > maxValue) return;

    lastestScores.pop();
  }

  lastestScores.unshift(value);

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
        .map((i) => parseInt(i))
    : [];
}
