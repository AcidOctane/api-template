import { expect } from "chai";
import { ApiClient } from "../src/apiClient.js";
import { userToDelete } from "../src/data/user.js";

describe("Suite - /users route", function () {
  xit("should be albe to delete user", async () => {
    const apiClient = ApiClient.unauthorized();
    const { body, statusCode } = await apiClient.user.delete(userToDelete.id);

    expect(statusCode).to.be.eql(200);
    expect(body.delete).to.be.eql(true);
  });
});
