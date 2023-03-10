const Joi = require("joi");

const passwordValidator = Joi.string()
  .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{3,}$/)
  .message(
    "Le mot de passe doit contenir une minuscule, une majuscule et un chiffre et 3 caractéres minimum."
  );

const usersShema = Joi.object({
  firstname: Joi.string().min(3).max(45).required(),
  lastname: Joi.string().min(3).max(45).required(),
  kind: Joi.string().min(1),
  email: Joi.string().email().required(),
  adress: Joi.string().min(3).max(155).required(),
  phone: Joi.string().min(9).max(45).required(),
  hashedPassword: passwordValidator.required(),
});

const validateUsers = (users) => {
  const result = usersShema.validate(users, { abortEarly: true });
  if (result.error) {
    return result.error.details.map((error) => ({
      property: error.path[0],
      message: error.message,
    }));
  }
  return [];
};

module.exports = validateUsers;
