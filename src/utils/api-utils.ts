export const responseError = (message: string, status: number) => {
  return new Response(message, {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
