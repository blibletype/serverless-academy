export const proccessData = (vacationsData) => {
  const users = [];

  for (const vacation of vacationsData) {
    const user = users.find((user) => user.userId === vacation.user._id);

    if (!user) {
      users.push({
        userId: vacation.user._id,
        userName: vacation.user.name,
        vacations: [
          { startDate: vacation.startDate, endDate: vacation.endDate },
        ],
      });
      continue;
    }

    user.vacations.push({
      startDate: vacation.startDate,
      endDate: vacation.endDate,
    });
  }

  return users.sort((a, b) => b.vacations.length - a.vacations.length);
};
