const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.plugin('define').tap(args => {
            args[0].__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = 'false'
            return args
        })
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8864',
                changeOrigin: true, headers: {
                    Connection: 'keep-alive'
                }
            }
        }
    },
    // Disable ESLint during development to avoid compilation errors
    lintOnSave: false,
    // Configure ESLint
    pluginOptions: {
        lintStyleOnBuild: false,
        stylelint: {}
    },
    // Configure Webpack
    configureWebpack: {
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    },
    // Configure CSS
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "@/styles/variables.scss";
          @import "@/styles/mixins.scss";
        `
            }
        }
    },
    // Configure PWA
    pwa: {
        name: 'Your App Name',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: 'GenerateSW'
    }
})