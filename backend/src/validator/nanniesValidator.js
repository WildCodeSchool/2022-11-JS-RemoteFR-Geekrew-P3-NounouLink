const Joi = require("joi");

const nanniesValidator = Joi.object({
  ranking: Joi.number(),
  pictures: Joi.string(),
  hourlyRate: Joi.number(),
  adName: Joi.string().min(5).max(150),
  custodyAddress: Joi.string().min(15).max(150),
  profilePicNanny: Joi.string(),
  presentation: Joi.string().min(15).max(500),
  psc1: Joi.boolean(),
  pedagogy: Joi.boolean(),
  degreeLevel: Joi.string().min(1).max(45),
  experience: Joi.number(),
  hygiene: Joi.boolean(),
  overtime: Joi.number(),
  tariffMajor: Joi.number(),
  priceKilometre: Joi.number(),
  mealPrice: Joi.number(),
  homeInsurance: Joi.string().min(3).max(255),
  carInsurance: Joi.string().min(3).max(255),
  id: Joi.string().min(3).max(255),
  secuCertificate: Joi.string().min(3).max(255),
  proofOfResidence: Joi.string().min(3).max(255),
  diploma: Joi.string().min(3).max(255),
  aggregationNumber: Joi.number(),
  dateAgreement: Joi.date(),
  placesMax: Joi.number(),
});

const validateNannies = (nanny) => {
  const result = nanniesValidator.validate(nanny, { abortEarly: false });
  if (result.error) {
    return result.error.details.map((error) => ({
      property: error.path[0],
      message: error.message,
    }));
  }
  return [];
};

module.exports = validateNannies;
