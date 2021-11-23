export default function getBudgetObject(income, gdp, capita) {
  // modify the budget obejct to use the keyname
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
