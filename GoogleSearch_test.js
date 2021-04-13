Feature('GoogleSearch');

Scenario('TC1-Google Search', (I) => {
    I.am0nPage('http://www.google.com');
    I.seeElement('Google');
    I.fillField('//body[1]/div[1]/div[3]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]', 'meteo');
    I.click('input')


});
