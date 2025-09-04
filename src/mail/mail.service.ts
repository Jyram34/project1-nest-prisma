import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
    private transporter;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: Number(process.env.MAILTRAP_PORT),
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS,
            },
        });
    }

    async sendMail(to: string, subject: string, text: string, html?: string){
        const info = await this.transporter.sendMail({
            from: '"Whitecat App 👻" <no-reply@whitecat.com>', 
            to,
            subject,
            text,
            html,
        });

        return {
            message: 'Correo enviado con éxito',
            id: info.messageId,
        };
    }

}
