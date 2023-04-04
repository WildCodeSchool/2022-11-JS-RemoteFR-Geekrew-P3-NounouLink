const Joi = require("joi");

const usersValidator = Joi.object({
  firstname: Joi.string().min(3).max(45).required(),
  lastname: Joi.string().min(3).max(45).required(),
  kind: Joi.string().min(1),
  email: Joi.string().email().required(),
  adress: Joi.string().min(3).max(155).required(),
  phone: Joi.string().min(9).max(45).required(),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
    .required(),
});

const validateUsers = (users) => {
  const result = usersValidator.validate(users, { abortEarly: false });
  if (result.error) {
    return result.error.details.map((error) => ({
      property: error.path[0],
      message: error.message,
    }));
  }
  return [];
};

module.exports = validateUsers;
