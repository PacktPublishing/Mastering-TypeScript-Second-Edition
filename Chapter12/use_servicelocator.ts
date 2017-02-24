import { ServiceLocator } from './app/ServiceLocator';
import { ISystemSettings } from './app/ISystemSettings';

let smtpSinkSettings : ISystemSettings  = {
    SmtpServerConnectionString : 'smtp://localhost:1025',
    SmtpFromAddress : 'smtp_from@test.com'
};

ServiceLocator.register('ISystemSettings', smtpSinkSettings);

let currentSettings : ISystemSettings = 
    ServiceLocator.resolve('ISystemSettings');

console.log(`current smtp from address :
     ${currentSettings.SmtpFromAddress}`);


