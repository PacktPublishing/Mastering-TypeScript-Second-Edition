import * as nodemailer from 'nodemailer';
import { ISystemSettings, IISystemSettings } from './ISystemSettings';
import { ServiceLocatorGeneric } from './ServiceLocator';
import { ConstructorInject } from './ConstructorInject';

@ConstructorInject
export class GMailServiceDi {
    private _transporter: nodemailer.Transporter;
    private _settings: ISystemSettings;
    
   sendMail(to: string, subject: string, content: string)
    : Promise<void>
        {
        let options = {
            from: this._settings.SmtpFromAddress,
            to: to,
            subject: subject,
            text: content
        }

        return new Promise<void> (
            (resolve: (msg: any) => void, 
                reject: (err: Error) => void) => {
                this._transporter.sendMail( 
                    options, (error, info) => {
                        if (error) {
                            console.log(`error: ${error}`);
                            reject(error);
                        } else {
                            console.log(`Message Sent ${info.response}`);
                            resolve(`Message Sent ${info.response}`);
                        }
                })
            }
        );
    }

    constructor(_settings?: IISystemSettings, testParameter?: string) {
        this._transporter = nodemailer.createTransport(
            this._settings.SmtpServerConnectionString
        );
    }

}

export interface IGMailServiceDi {
    sendMail(to: string, subject: string, content: string)
    : Promise<void>;
}

export class IIGMailServiceDi { }

    