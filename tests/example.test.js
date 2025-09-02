import { Selector } from 'testcafe';

fixture('Dingo Website Tests')
    .page('https://www.dingo.com');

test('Check main heading is displayed', async t => {
    await t
        .expect(Selector('h1').exists).ok('Main heading should be present')
        .expect(Selector('h1').visible).ok('Main heading should be visible');
});

//BDD Style Test
test('Survey button functionality', async t => {
    // Given the Dingo website is loaded
    const surveyButton = Selector('a').withText('Launch the Asset Health Maturity Survey');
    
    // When the user checks for the survey button
    await t
        .expect(surveyButton.exists).ok('Survey button should be present')
        // And clicks the survey button
        .click(surveyButton)
        // Then the page should navigate to the survey form
        .expect(t.eval(() => window.location.href)).contains('survey.hsforms.com', 'Should navigate to survey page');
});

test('Check Trakka Software section is displayed', async t => {
    const trakkaSection = Selector('h4').withText('Trakka Software');
    
    await t
        .expect(trakkaSection.exists).ok('Trakka Software section should be present')
        .expect(trakkaSection.visible).ok('Trakka Software section should be visible');
});

test('Check video player is present', async t => {
    await t
        .expect(Selector('#DingoVideo iframe').exists).ok('Video player should be present')
        .expect(Selector('#DingoVideo iframe').visible).ok('Video player should be visible');
});


test('Check footer links are present', async t => {
    await t
        .expect(Selector('a').withText('Company').exists).ok('Company link should be present')
        .expect(Selector('a').withText('Privacy Policy').exists).ok('Privacy Policy link should be present');
});