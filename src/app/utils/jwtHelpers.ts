import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

const generateToken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string,
): string => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: SignOptions = { expiresIn: expiresIn as any };

  return jwt.sign(jwtPayload, secret, options);
};

const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  generateToken,
  verifyToken,
};
