import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);
export function UserContextProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [adress, setAdress] = useState(null);
  const [aggregationNumber, setAggregationNumber] = useState(null);
  const [cafNumber, setCafNumber] = useState(null);
  const [carInsurance, setCarInsurance] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [custodyAdress, setCustodyAdress] = useState(null);
  const [dateAgrement, setDateAgrement] = useState(null);
  const [degreeLevel, setDegreeLevel] = useState(null);
  const [diploma, setDiploma] = useState(null);
  const [exitPermit, setExitPermit] = useState(null);
  const [experience, setExperience] = useState(null);
  const [homeInsurance, setHomeInsurance] = useState(null);
  const [hourlyRate, setHourlyRate] = useState(null);
  const [hygiene, setHygiene] = useState(null);
  const [imageRights, setImageRights] = useState(null);
  const [kind, setKind] = useState(null);
  const [mealPrice, setMealPrice] = useState(null);
  const [overtime, setOvertime] = useState(null);
  const [pedagogy, setPedagogy] = useState(null);
  const [phone, setPhone] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [placesMax, setPlacesMax] = useState(null);
  const [presentation, setPresentation] = useState("");
  const [priceKilometre, setPriceKilometre] = useState(null);
  const [profilPicture, setProfilPicture] = useState(null);
  const [proofOfResidence, setProofOfResidence] = useState(null);
  const [psc1, setPsc1] = useState(null);
  const [ranking, setRanking] = useState(null);
  const [secuCertificate, setSecuCertificate] = useState(null);
  const [tariffMajor, setTariffMajor] = useState(null);
  const [parentId, setParentId] = useState(null);
  const [childrenId, setChildrenId] = useState(null);
  const [nannyId, setNannyId] = useState(null);

  const values = useMemo(
    () => ({
      userId,
      setUserId,
      parentId,
      setParentId,
      nannyId,
      setNannyId,
      childrenId,
      setChildrenId,
      firstname,
      setFirstname,
      lastname,
      setLastname,
      adress,
      setAdress,
      aggregationNumber,
      setAggregationNumber,
      cafNumber,
      setCafNumber,
      carInsurance,
      setCarInsurance,
      userEmail,
      setUserEmail,
      custodyAdress,
      setCustodyAdress,
      dateAgrement,
      setDateAgrement,
      degreeLevel,
      setDegreeLevel,
      diploma,
      setDiploma,
      exitPermit,
      setExitPermit,
      experience,
      setExperience,
      homeInsurance,
      setHomeInsurance,
      hourlyRate,
      setHourlyRate,
      hygiene,
      setHygiene,
      imageRights,
      setImageRights,
      kind,
      setKind,
      mealPrice,
      setMealPrice,
      overtime,
      setOvertime,
      pedagogy,
      setPedagogy,
      phone,
      setPhone,
      pictures,
      setPictures,
      placesMax,
      setPlacesMax,
      presentation,
      setPresentation,
      priceKilometre,
      setPriceKilometre,
      profilPicture,
      setProfilPicture,
      proofOfResidence,
      setProofOfResidence,
      psc1,
      setPsc1,
      ranking,
      setRanking,
      secuCertificate,
      setSecuCertificate,
      tariffMajor,
      setTariffMajor,
    }),
    [
      userId,
      parentId,
      nannyId,
      childrenId,
      firstname,
      lastname,
      adress,
      aggregationNumber,
      cafNumber,
      carInsurance,
      userEmail,
      custodyAdress,
      dateAgrement,
      degreeLevel,
      diploma,
      exitPermit,
      experience,
      homeInsurance,
      hourlyRate,
      hygiene,
      imageRights,
      kind,
      mealPrice,
      overtime,
      pedagogy,
      phone,
      pictures,
      placesMax,
      presentation,
      priceKilometre,
      profilPicture,
      proofOfResidence,
      psc1,
      ranking,
      secuCertificate,
      tariffMajor,
    ]
  );
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
