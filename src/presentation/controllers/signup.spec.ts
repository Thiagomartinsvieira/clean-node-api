import { SignUpCOntroller } from "./signup";

describe("Signup Controller", () => {
  test("Should return 400 if no name is provied", () => {
    const sut = new SignUpCOntroller();
    const httprequest = {
      body: {
        // name: "any_name",
        email: "any_email@email,com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httprequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
