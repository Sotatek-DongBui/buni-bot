import { Body, Controller, Post } from '@nestjs/common';
import { IPayloadGithub } from 'interfaces/payload-github';
import { WebhooksService } from './webhooks.service';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}
  @Post('github/pull-request')
  async notiGithubWebhook(@Body() payload: IPayloadGithub) {
    await this.webhooksService.notiGithubWebhook(payload);
    return 'ok';
  }

  @Post('demo1')
  async webhookDemo1(@Body() req: any) {
    console.log('webhooks-demo1');
    console.log(JSON.stringify(req));
    return 'ok';
  }
}
