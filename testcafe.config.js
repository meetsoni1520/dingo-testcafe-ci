module.exports = {
    // Browser configuration
    browsers: [
        'chrome',
        'firefox',
        'safari'
    ],
    
    // Test files pattern
    src: ['tests/**/*.test.js'],
    
    // Output directory for reports
    reporter: [
        {
            name: 'spec',
            output: 'reports/report.txt'
        },
        {
            name: 'html',
            output: 'reports/report.html'
        }
    ],
    
    // Screenshots on failure
    screenshots: {
        path: 'screenshots',
        takeOnError: true,
        takeOnFails: true
    },
    
    // Video recording
    video: {
        path: 'videos',
        failedOnly: true
    },
    
    // Development mode settings
    developmentMode: false,
    
    // Stop on first failure
    stopOnFirstFail: false,
    
    // Parallel execution
    concurrency: 1,
    
    // Timeout settings
    pageLoadTimeout: 3000,
    assertionTimeout: 3000,
    selectorTimeout: 10000
};
