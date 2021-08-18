import { expect } from "chai";
import { ApiClient } from "../src/apiClient.js";
import { user } from "../src/data/user.js";
import { newTask } from "../src/data/task.js";

describe("Suite - /task route", function () {

  xit("get all tasks list", async () => {
    const apiClient = await ApiClient.authorized(user);
    const { statusCode } = await apiClient.task.getAllTasks();

    expect(statusCode).to.be.eql(200);
  });

  xit("create a task", async () => {
    const apiClient = await ApiClient.authorized(user);
    const { statusCode } = await apiClient.task.createTask(newTask);

    expect(statusCode).to.be.eql(200);
  });

});
