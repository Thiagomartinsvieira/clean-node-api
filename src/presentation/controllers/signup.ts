import { MissingParamError } from "../errors/missing-param-error";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpCOntroller {
  handle(httprequest: HttpRequest): HttpResponse {
    if (!httprequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError("name"),
      };
    }

    if (!httprequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError("email"),
      };
    }

    return {
      statusCode: 200,
      body: "OK",
    };
  }
}
