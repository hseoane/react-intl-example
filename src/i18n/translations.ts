import { APP_LOCALES } from "./locales";

const translations = {} as { [key: string]: any };

Object.keys(APP_LOCALES).forEach((key) => {
  try {
    const translation = require(`./messages/${key}.json`);
    translations[key] = translation;
  } catch (err) {
    console.warn(`Can't find translations for ${key}`);
  }
});

export default translations;
