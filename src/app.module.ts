import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhooksModule } from './webhooks/webhooks.module';
import { GoogleChatModule } from './google-chat/google-chat.module';
import { GithubModule } from './github/github.module';
import { DeployModule } from 'deploy/deploy.module';
@Module({
  imports: [WebhooksModule, GoogleChatModule, GithubModule, DeployModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
