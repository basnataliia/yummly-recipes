export const APP_ID = 'c38d80dc';
export const APP_KEY = 'ec06a1a1b6700369d98e52ff5ddb19ed';

const YUMMLY_API_BASE_URL = 'http://api.yummly.com/v1/api/';

export const GET_ALL_RECIPES_URL = YUMMLY_API_BASE_URL + `recipes?_app_id=${APP_ID}&_app_key=${APP_KEY}&requirePictures=true`;
export const GET_RECIPE_BY_ID_URL = YUMMLY_API_BASE_URL + `recipe/`;
export const SEARCH_RECIPE_URL = YUMMLY_API_BASE_URL + `recipes?_app_id=${APP_ID}&_app_key=${APP_KEY}&requirePictures=true&q=`;
// export const SEARCH_RECIPE_URL = YUMMLY_API_BASE_URL + `recipes?_app_id=${APP_ID}&_app_key=${APP_KEY}&requirePictures=true&recipeName=`;
