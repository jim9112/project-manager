const getDate = () => {
  const today = new Date();
  const date = today.toLocaleString();
  return date;
};

export { getDate };
