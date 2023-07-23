export const subscribeNewsletter = async (_email: string) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 5000);
  });
};
