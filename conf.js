/**
 * Created by d.purszke on 28.06.2017.
 */
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        'features/*.feature'
    ],

    baseURL: 'http://localhost:8080/',

    cucumberOpts: {
        require: 'features/step_definitions/stepDefinitions.js',
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    }

}