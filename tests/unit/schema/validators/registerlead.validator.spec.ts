import { registerLeadValidator } from "../../../../schema/validators/registerlead.validator";

describe("RegisterLeadValidator", () => {
  it("should allow valid fields", () => {
    const request = {
      name: "Randy Santiago",
      email: "randy@gmail.com",
      mobile: "09205346064",
      postcode: "1104",
      services: ["payment"],
    };
    const validation = registerLeadValidator.validate(request);
    expect(validation.error).toBeFalsy();
  });
  it("should throw an error on invalid email", () => {
    const request = {
      name: "Randy Santiago",
      email: "randy",
      mobile: "09205346064",
      postcode: "1104",
      services: ["payment"],
    };
    const validation = registerLeadValidator.validate(request);
    expect(validation.error?.message).toBe("Please provide a valid email.");
  });
  it("should throw an error on invalid mobile", () => {
    const request = {
      name: "Randy Santiago",
      email: "randy@gmail.com",
      mobile: "abc",
      postcode: "1104",
      services: ["payment"],
    };
    const validation = registerLeadValidator.validate(request);
    expect(validation.error?.message).toBe("Please provide a valid mobile.");
  });
  it("should throw an error on invalid services", () => {
    const request = {
      name: "Randy Santiago",
      email: "randy@gmail.com",
      mobile: "09205346064",
      postcode: "1104",
      services: [""],
    };
    const validation = registerLeadValidator.validate(request);
    console.log(validation);
    expect(validation.error?.message).toBe(
      "A service can only be delivery,pickup,payment"
    );
  });
});
