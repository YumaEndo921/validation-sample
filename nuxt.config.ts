// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  // Viteのビルドの際に、SCSSのパーシャルファイルを読み込むよう指定する
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "@/assets/styles/_variables.scss";',
  //       },
  //     },
  //   },
  // },
})
