import { getRequestConfig, GetRequestConfigParams } from "next-intl/server";

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !["en", "es"].includes(locale)) {
    return { locale: "en", messages: {} }; // Fallback to a default valid locale
  }

  return {
    // This will be used as the default locale when no locale is provided
    locale: locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});