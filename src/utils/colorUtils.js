export const getColorFromDifficulty = (difficulty) => {
  if (difficulty === "Beginner") {
    return "#5FBFF9";
  } else if (difficulty === "Intermediate") {
    return "#5D5179";
  } else if (difficulty === "Expert") {
    return "#ED254E";
  } else {
    return "#ED254E";
  }
};
export const getColorFrontWorkoutType = (type) => {
  if (type === "Abs") {
    return "#CF95F8";
  } else if (type === "Leg") {
    return "#ED7267";
  } else if (type === "Core") {
    return "#F4B558";
  } else if (type === "Arm") {
    return "#82D1CE";
  } else {
    return "#ED7267";
  }
};
