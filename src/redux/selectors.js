// Authenticate selectors

export const selectClient = (state) => state.auth.client;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsBMR = (state) => state.auth.client.BMR;
export const selectIsTimeForSport = (state) => state.auth.client.timeForSport;
export const selectNameS = (state) => state.auth.client.name;
export const selectEmail = (state) => state.auth.client.email;
export const selectAvatar = (state) => state.auth.client.avatar;
export const selectBMR = (state) => state.auth.client.BMR


// Diary selectors

export const selectDiaryExercises = (state) => state.diary.data.exerciseDone;
export const selectDiaryProducts = (state) => state.diary.data.consumedProduct;
export const selectDiaryMetrics = (state) => state.diary.data;

// Products selectors

export const selectProducts = (state) => state.products.productList;
export const selectProductsCategories = (state) => state.products.productsCategories;

// Exercises selectors

export const selectExercises = (state) => state.sports.exercises;
export const selectExeciseFilter = (state) => state.sports.filter;

//statistic

export const selectTrainingsQuantity = (state) => state.statistic.trainingsQuantity;
export const selectBurnedAllUsersCalories = (state) => state.statistic.burnedAllUsersCalories;
export const selectRegisteredUsersCount = (state) => state.statistic.registeredUsersCount;
export const selectSpentAllUsersTime = (state) => state.statistic.spentAllUsersTime;
export const selectTotalUsersExercisesCount = (state) => state.statistic.totalUsersExercisesCount;
