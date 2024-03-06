// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxt/content",
    "nuxt-icon",
    "nuxt-og-image",
    "nuxt-simple-sitemap",
  ],
  css: ["~/assets/css/app.css"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
        fbApiKey: process.env.FIREBASE_API_KEY,
        fbAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
        fbDatabaseUrl: process.env.FIREBASE_DATABASE_RUL,
        fbProjectId: process.env.FIREBASE_PROJECT_ID,
        fbStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        fbMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        fbAppId: process.env.FIREBASE_APP_ID,
        fbMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
});
