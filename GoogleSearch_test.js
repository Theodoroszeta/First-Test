Feature('GoogleSearch');

Scenario('TC1-Google Search', (I) => {
    I.am0nPage('/');
    I.seeElement('//body[1]/div[1]/div[3]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]');
    I.fillField('//body[1]/div[1]/div[3]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]', 'meteo');
    I.click('input')
    I.wait(2);


});
