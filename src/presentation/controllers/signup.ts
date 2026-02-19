import { MissingParamError } from "../errors/missing-param-error";
import { badRequest } from "../helpers/http-helper";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpCOntroller {
  handle(httprequest: HttpRequest): HttpResponse {
    if (!httprequest.body.name) {
      return badRequest(new MissingParamError("name"));
    }

    if (!httprequest.body.email) {
      return badRequest(new MissingParamError("email"));
    }

    return {
      statusCode: 200,
      body: "OK",
    };
  }
}
