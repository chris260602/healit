export const calculateBMI = (weight, height) => {
  const bmi = (weight / height / height) * 10000;
  return parseFloat(bmi.toFixed(2));
};

export const getBMIStats = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Healthy Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
};
