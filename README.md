# Dingo - TestCafe Project

This project uses TestCafe for end-to-end testing of web applications with comprehensive CI/CD integration.

## Installation

TestCafe Install using following command:

```bash
npm install --save-dev testcafe
```

## Available Scripts

- `npm test` - Run tests in Chrome (visible browser)
- `npm run test:headless` - Run tests in headless Chrome (faster, for CI/CD)
- `npm run test:live` - Run tests in live mode (watches for changes)

## Project Structure

```
├── tests/                 # Test files
│   └── example.test.js   # Test file
├── .github/workflows/     # GitHub Actions CI/CD
│   └── testcafe-simple.yml
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```

## Running Tests

### Basic Usage

```bash
# Run all tests
npm test

# Run tests in specific browser
npm run test:chrome

# Run tests in headless mode
npm run test:headless
```

### Advanced Usage

```bash
# Run specific test file
npx testcafe chrome tests/example.test.js

# Run tests with custom configuration
npx testcafe chrome tests/ --config-file testcafe.config.js

# Run tests in live mode (watches for changes)
npm run test:live
```

## Writing Tests

Tests are written in JavaScript/TypeScript using TestCafe's API. Here's a basic example:

```javascript
import { Selector } from 'testcafe';

fixture('My Test Suite')
    .page('https://example.com');

test('My Test', async t => {
    const element = Selector('#my-element');
    await t.expect(element.exists).ok();
});
```

## Configuration

The `testcafe.config.js` file contains various configuration options:

- Browser selection
- Test file patterns
- Reporter configuration
- Screenshot and video settings
- Timeout configurations
- Parallel execution settings

## CI/CD Integration

This project includes a simple GitHub Actions workflow for automated testing:

### How It Works

1. **Automatic Testing** - When you push code or create a pull request, tests run automatically
2. **Simple Setup** - Just one workflow file that's easy to understand
3. **Test Results** - If tests fail, you get screenshots and videos to help debug

### What Happens

- **Push to main branch** → Tests run automatically
- **Create pull request** → Tests run before you can merge
- **Tests fail** → You get screenshots and videos to see what went wrong
- **Tests pass** → Your code is ready to go!

### Local Testing

Before pushing to GitHub, test your code locally:
```bash
npm run test:headless
```

This runs the same tests that will run on GitHub, so you can catch issues early.

## Getting Help

- [TestCafe Documentation](https://testcafe.io/documentation/)
- [TestCafe API Reference](https://testcafe.io/documentation/reference/test-api/)
- [TestCafe Examples](https://github.com/DevExpress/testcafe-examples)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
