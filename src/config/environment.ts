export const environment = {
  COINCAP_BASE_URL: process.env.NEXT_PUBLIC_COINCAP_BASE_URL,
  DATABASE_URL: process.env.DATABASE_URL
};

export const getEnv = (key: keyof typeof environment) => {
  const value = environment[key];

  if (!value) throw new Error(`Environment variable ${key} not found`);

  return value;
};
