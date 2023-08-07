const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ev-sat")
    .setDescription("Ev satmak için bu komutu kullanın")
    	.addStringOption(option => option.setName('konum')
			.setDescription("Evin konumunu yazınız")
			.setRequired(true))
    	.addStringOption(option => option.setName('resim-url')
			.setDescription("Evin konumunu yazınız")
			.setRequired(true))
  	.addUserOption(option => option.setName('evi-satan')
			.setDescription("Evi kimin sattığını yazınız")
			.setRequired(true))
  	.addUserOption(option => option.setName('evi-alan')
			.setDescription("Evi alan kişiyi yazınız")
			.setRequired(true)),
    run: async (client, interaction, args, message) => {
      
      const konum = interaction.options.getString('konum')
      const home1 = interaction.options.getUser('evi-satan')
      const home2 = interaction.options.getUser('evi-alan')
      const image = interaction.options.getString('resim-url')
      
      const channel = client.channels.cache.get('1023680435185782874')
      
      const response = new MessageEmbed()
          .setColor("BLACK")
          .setTitle(`Bir Ev Satıldı!`)
          .setFooter({ text: 'Gv+ • 2022', iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
          .addFields(
            {name: "Konum", value: `\`${konum}\` `, inline: true},
            {name: "Bilgi", value: `**Evi Satan** • ${home1}\n **Evi Alan** • ${home2} `, inline: false})
          .setImage(`${image}`)

      
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Başarıyla Ev Satıldı!")
          .setDescription("**Başarıyla ev satıldı! Bir sorun halinde yetkili ekibi ile iletişime geçiniz!**")
          .setFooter({ text: `Gv+ • 2022`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
      channel.send({embeds: [response]})
      interaction.reply({ephemeral: true, embeds: [response2]})
      
    }
 };


//https://v13.discordjs.guide/interactions/slash-commands.html#options