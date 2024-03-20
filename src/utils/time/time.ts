export const videoFormatTime = (currentSeconds: number, totalSeconds?: number): string | null => {
  if (totalSeconds) {
    //actual time
    const currentMins = Math.floor(currentSeconds / 60);
    const currentSecs = Math.floor(currentSeconds % 60);
    const formatCurrentMins = String(currentMins).padStart(2, '0');
    const formatCurrentSecs = String(currentSecs).padStart(2, '0');

    //total time
    const totalMins = Math.floor(totalSeconds / 60);
    const totalSecs = Math.floor(totalSeconds % 60);
    const formatTotalMins = String(totalMins).padStart(2, '0');
    const formatTotalSecs = String(totalSecs).padStart(2, '0');

    return `${formatCurrentMins}:${formatCurrentSecs} / ${formatTotalMins}:${formatTotalSecs}`;
  }
  return null;
};
