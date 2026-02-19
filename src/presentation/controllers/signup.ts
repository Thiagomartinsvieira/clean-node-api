import { MissingParamError } from "../errors/missing-param-error";
import { badRequest } from "../helpers/http-helper";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpCOntroller {
  handle(httprequest: HttpRequest): HttpResponse {
    const requiredFields = ["name", "email", "password"];

    for (const field of requiredFields) {
      if (!httprequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return {
      statusCode: 200,
      body: "OK",
    };
  }
}
