const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

const PREFIX = '!';
const BOT_TOKEN = process.env.BOT_TOKEN;
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const TARGET_CHANNEL_ID = process.env.TARGET_CHANNEL_ID;
const GNEWS_API_URL = 'https://gnews.io/api/v4/search';

async function fetchAndSendTechnologyNews(message) {
    try {
        console.log('Buscando e enviando notícias de tecnologia...');
        
        const response = await axios.get(GNEWS_API_URL, {
            params: {
                q: 'tecnologia da informação OR TI OR informática OR desenvolvimento de software OR cibersegurança OR hackers OR computação',
                lang: 'pt',
                country: 'BR',
                token: GNEWS_API_KEY
            },
        });

        const articles = response.data.articles;
        if (articles.length > 0) {
            const chunkSize = 3;

            for (let i = 0; i < articles.length; i += chunkSize) {
                const chunk = articles.slice(i, i + chunkSize);

                const embeds = chunk.map(article => {
                    return new EmbedBuilder()
                        .setColor('#0099ff')
                        .setTitle(article.title)
                        .setDescription(article.description)
                        .setFooter({
                            text: `Admin por ${message.author.username} • Copyright © 2023`,
                            iconURL: message.author.avatarURL()
                        })
                        .addFields(
                            { name: 'Link:', value: `[Clique aqui](${article.url})` }
                        )
                        .setImage(article.image);
                });

                message.channel.send({ embeds: embeds });
            }
        } else {
            message.channel.send('Nenhuma notícia de tecnologia encontrada.');
        }
    } catch (error) {
        console.error('Erro ao buscar notícias de tecnologia:', error);
        message.channel.send('Ocorreu um erro ao buscar notícias de tecnologia.');
    }
}

client.once('ready', () => {
    console.log(`Logado como ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'nf') {
            console.log('Comando !nf recebido.');

            const targetChannel = client.channels.cache.get(TARGET_CHANNEL_ID);
            if (targetChannel) {
                fetchAndSendTechnologyNews(message);
                message.delete();
            } else {
                console.error('Canal alvo não encontrado.');
            }
        }
    }
});

client.login(BOT_TOKEN);