export const environment = {
  COINGECKO_BASE_URL: process.env.NEXT_PUBLIC_COINGECKO_BASE_URL
};

export const getEnv = (key: keyof typeof environment) => {
  const value = environment[key];

  if (!value) throw new Error(`Environment variable ${key} not found`);

  return value;
};
