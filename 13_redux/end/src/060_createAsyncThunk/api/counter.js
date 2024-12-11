const asyncCount = (count = 1) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: count }), Math.random() * 1000)
  );
};

export { asyncCount };
