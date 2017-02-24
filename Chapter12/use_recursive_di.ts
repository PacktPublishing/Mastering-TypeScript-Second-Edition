import { GMailServiceDi, IGMailServiceDi, IIGMailServiceDi } from './app/GMailServiceDi';
import { ServiceLocatorGeneric } from './app/ServiceLocator';
import { IISystemSettings } from './app/ISystemSettings';
import { ConstructorInject } from './app/ConstructorInject';

ServiceLocatorGeneric.register(IISystemSettings, {
    SmtpServerConnectionString : 'smtp://localhost:1025',
    SmtpFromAddress : 'smtp_from@test.com'
});

ServiceLocatorGeneric.register(IIGMailServiceDi, new GMailServiceDi());

@ConstructorInject
class MailSender {
    private gMailService : IGMailServiceDi;
    constructor(gMailService?: IIGMailServiceDi) {}
    async sendWelcomeMail(to: string) {
        await(this.gMailService.sendMail(to, "welcome", ""));
    }
}

let mailSender = new MailSender();
mailSender.sendWelcomeMail("test@test.com");
