import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { INotificationPayload } from './types';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @EventPattern('send_notification')
    public async sendNotification(@Payload() payload: INotificationPayload): Promise<void> {
        await this.appService.createNotifications(payload);
    }
}
