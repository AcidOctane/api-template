import { randomNumber } from "../common/utils/helper.js";

export const user = {
  email: "test3@bsa21.com",
  password: "Pa55word",
  id: "5832c439-13a1-4596-bd54-eaf853721093",
};

export const invalidEmail = {
  email: "atest@google.com",
  password: "Pa55word",
};

export const invalidPassword = {
  email: "test@google.com",
  password: `Pa55word${randomNumber}`,
};

export const userToDelete = {
  id: "b6a3bac2-45ae-41e4-b195-cfa381a4c3fb"
} 

export const newUser = {
  username : `user-${randomNumber}`,
  email : `user${randomNumber}@bsa21.com`,
  name : `John-${randomNumber}`,
  surname : `Johnson-${randomNumber}`,
  password : `Pa55word${randomNumber}`
}

export const userID = "c69ed9a1-0f4f-49e8-a781-a46bc1aa0d1e";
export const invalidUserID = "5a535fdf-cfdc-48ce-bcf0-bbb2986f226f";
