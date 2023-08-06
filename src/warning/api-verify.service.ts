import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import axios from "axios";

@Injectable()
export default class ApiVerifyService {
  @Cron("* * * * *")
  public async cronToVerify() {
    try {
      await axios.get(`${process.env.API_URL}/health`);
    } catch (error) {
      await this.sendMessageToDiscord();
    }
  }

  private async sendMessageToDiscord() {
    await axios.post(
      `https://discord.com/api/channels/${process.env.CHANNEL_DISCORD_CODE}/messages`,
      {
        content: "Erro ao verificar a Aplicação",
        embed: {
          title: "AVISO",
          description: `⚠️ A ultima verificação feita falhou, existe a possibilidade da Aplicação ter se jogado no chão, acho melhor verificar meu querido`,
          url: "https://discordapp.com",
          color: 13632027,
          author: {
            name: "Dona Maria",
            url: "https://discordapp.com",
            icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
          },
        },
      },
      {
        headers: {
          Authorization: `Bot ${process.env.TOKEN_DISCORD_BOT}`,
        },
      },
    );
  }
}
