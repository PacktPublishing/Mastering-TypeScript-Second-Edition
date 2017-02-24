import * as nodemailer from 'nodemailer';
import { ISystemSettings } from './ISystemSettings';
import { ServiceLocator } from './ServiceLocator';

export default class GMailService {
    private _transporter: nodemailer.Transporter;
    private _settings: ISystemSettings;

    constructor() {
        this._settings = 
            ServiceLocator.resolve('ISystemSettings');
        this._transporter = nodemailer.createTransport(
            this._settings.SmtpServerConnectionString
        );
    }
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
}