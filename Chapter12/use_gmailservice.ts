import GMailService from './app/GMailService';
import { ISystemSettings } from './app/ISystemSettings';
import { ServiceLocator } from './app/ServiceLocator';

// let gmailService = new GMailService({
//     SmtpServerConnectionString : 'smtp://localhost:1025',
//     SmtpFromAddress : 'smtp_from@test.com'
// });

// gmailService.sendMail(
//     '<testUser>@gmail.com', 
//     'Hello', 
//     'Hello from gmailService');

let smtpSinkSettings : ISystemSettings  = {
    SmtpServerConnectionString : 'smtp://localhost:1025',
    SmtpFromAddress : 'smtp_from@test.com'
};

ServiceLocator.register('ISystemSettings', smtpSinkSettings);

let gmailService = new GMailService();

gmailService.sendMail(
    "test2@test.com", 
    "subject", 
    "content").then( (msg) => {
        console.log(`sendMail result :(${msg})`);
} );

