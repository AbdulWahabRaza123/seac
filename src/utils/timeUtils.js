export const calculateTimeLeft = () => {
  // let year = new Date().getFullYear();
  // let month = new Date().getMonth() + 1;
  // let day = new Date().getDate() + 8;

  const difference = +new Date(`${2023}-${4}-${14}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
