import { GMailServiceDi } from './app/GMailServiceDi';
import { ServiceLocatorGeneric } from './app/ServiceLocator';
import { IISystemSettings } from './app/ISystemSettings';

ServiceLocatorGeneric.register(IISystemSettings, {
    SmtpServerConnectionString : 'smtp://localhost:1025',
    SmtpFromAddress : 'smtp_from@test.com'
});

var gmailDi = new GMailServiceDi();

gmailDi.sendMail("test@test.com", "testsubject", "testContent" 
).then( (msg) => {
    console.log(`sendMail returned : ${msg}`);
} ).catch( (err) => {
    console.log(`sendMail returned : ${err}`);
});
