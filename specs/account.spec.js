import { expect } from "chai";
import { ApiClient } from "../src/apiClient.js";
import { newUser } from "../src/data/user.js";

let userToDelete = '';

describe("Suite - /auth/register route", function () {
  it("should be albe to register", async () => {
    const apiClient = ApiClient.unauthorized();
    const { body, statusCode } = await apiClient.user.register(newUser);
    console.log(body);
    userToDelete = body.user.id;
    expect(statusCode).to.be.eql(200);
    expect(body.user.username).to.be.eql(newUser.username);
    expect(body.user.name).to.be.eql(newUser.name);
    expect(body.user.surname).to.be.eql(newUser.surname);
  });
});

describe("Suite - /users route", function () {
  it("should be albe to delete user", async () => {
    const apiClient = ApiClient.unauthorized();
    const { body, statusCode } = await apiClient.newUser.delete(userToDelete);

    expect(statusCode).to.be.eql(200);
    expect(body.delete).to.be.eql(true);
  });
});
