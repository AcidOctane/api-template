export const randomNumber = random();
export const randomUsername = `user-${randomNumber}`;
export const randomEmail = `user${randomNumber}@bsa21.com`;
export const randomName = `John-${randomNumber}`;
export const randomSurname = `Johnson-${randomNumber}`;
export const randomPass = `Pa55word${randomNumber}`;

export function random() {
  return Math.floor(Math.random() * 100);
}
