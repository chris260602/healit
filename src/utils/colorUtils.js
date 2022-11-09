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

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
export const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};
