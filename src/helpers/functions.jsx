export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedSeconds = `0${seconds}`.slice(-2);

  return `${minutes}:${formattedSeconds}`;
};
