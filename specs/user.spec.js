import { expect } from "chai";
import { ApiClient } from "../src/apiClient.js";
import { user, userID, invalidUserID } from "../src/data/user.js";

describe("Suite - users/ route", function()  {

  it("should get all users list", async () => {
    const apiClient = await ApiClient.authorized(user);
    const { statusCode, body } = await apiClient.user.getAllUsers();
    //console.log(body);
    expect(statusCode).to.be.eql(200);
    expect(body).to.be.a('object');
  });

  it("should get a user by id", async () => {
    const apiClient = await ApiClient.authorized(user);
    const { statusCode, body } = await apiClient.user.getUserById(userID);
    //console.log(body);
    expect(statusCode).to.be.eql(200);
    expect(body).to.be.a('object');
  })

  it("shouldn't get unexisted user", async () => {
    const apiClient = await ApiClient.authorized(user);
    const { statusCode } = await apiClient.user.getUserById(`${invalidUserID}`, false);
    expect(statusCode).to.be.eql(200);
  })
  
});