import request from "../httpRequest.js";
import { BaseController } from "./base.controller.js";

export class UserController extends BaseController {
  
  async login({ email, password }) {
    const response = await request.post({
      url: "auth/login",
      body: { email, password },
    });

    return response;
  };

  async register(payload) {
    const response = await request.post({
      url: "auth/register",
      body: { 
        email: payload.email, 
        password: payload.password, 
        username: payload.username,
        confirmPassword: payload.confirmPassword,
        name: payload.name,
        surname: payload.surname,
      },
    });

    return response;
  };

  async delete(userID) {
    const response = request.delete({
      url: `user/${userID}`,
    });

    return response;
  }
};
