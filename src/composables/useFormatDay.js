export const useFormatDateDay = () => {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return {
    date: new Date().toLocaleDateString("en-us", options),
  };
};
