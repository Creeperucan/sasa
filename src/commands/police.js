const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ceza")
    .setDescription("Ceza kesmek için bu komutu kullanın")
    	.addStringOption(option => option.setName('sebep')
			.setDescription("Ceza sebebini yazın")
			.setRequired(true))
    	.addIntegerOption(option => option.setName('ceza-fiyatı')
			.setDescription("Cezayı yiyen kişinin ne kadar ödemesi gerektiğini yazın")
			.setRequired(true))
      .addStringOption(option => option.setName('plaka')
			.setDescription("Aracın plakasını giriniz")
			.setRequired(true))
      .addStringOption(option => option.setName('araç-men')
			.setDescription('Araç men edilecek mi')
			.setRequired(true)
			.addChoices(
				{ name: '7 Gün', value: "7 Gün"},
        { name: '5 Gün', value: "5 Gün"},
        { name: 'Bulunmuyor', value: "Bulunmuyor"},
			))
      .addStringOption(option => option.setName('ehliyet-men')
			.setDescription('Ehliyet men edilecek mi')
			.setRequired(true)
			.addChoices(
				{ name: '1 Gün', value: "1 Gün"},
        { name: '3 Gün', value: "3 Gün"},
        { name: 'Bulunmuyor', value: "Bulunmuyor"},
			))
  	.addUserOption(option => option.setName('polisin-discordu')
			.setDescription("Cezayı veren polisi seçiniz")
			.setRequired(true))
  	.addUserOption(option => option.setName('cezalının-discordu')
			.setDescription("Cezalı kişiyi seçiniz")
			.setRequired(true)),
    run: async (client, interaction, args, message) => {
      
      const sebep = interaction.options.getString('sebep')
      const price = interaction.options.getInteger('ceza-fiyatı')
      const police = interaction.options.getUser('polisin-discordu')
      const ceza = interaction.options.getUser('cezalının-discordu')
      const plaka = interaction.options.getString('plaka')
      const carban = interaction.options.getString('araç-men')
      const ehliyetban = interaction.options.getString('ehliyet-men')
      
      const channel = client.channels.cache.get('1023617796531302510')
      
      const button = new ButtonBuilder()
	.setCustomId('disabled')
	.setLabel('Click me?')
	.setStyle(ButtonStyle.Primary)
	.setDisabled(true);
      
      if(interaction.member.roles.cache.has('1023680417976553525') || interaction.member.roles.cache.has('1023681529416786042')){
      const response = new MessageEmbed()
          .setColor("RED")
          .setTitle(`Cezanın Ödenmesi Bekleniyor..`)
          .setFooter({ text: 'Gv+ • 2023', iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
          .addFields(
            {name: "Sebep", value: `\`${sebep}\` `, inline: true},
            {name: "Ceza Miktarı", value:`\`$${price}\``, inline: true},
            {name: "Plaka", value:`\`${plaka}\``, inline: true},
            {name: "Araç Men", value:`\`${carban}\``, inline: true},
            {name: "Ehliyet Men", value:`\`${ehliyetban}\``, inline: true},
            {name: "Bilgi", value: `**Cezayı Yiyen** • ${ceza}\n **Cezayı Kesen** • ${police}\n\n \` Ceza parasını bu bot'a gönderiniz. \` `, inline: false})
      

      
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Başarıyla Ceza Kesildi!")
          .setDescription("**Başarıyla ceza kesildi! Bir sorun halinde yetkili ekibi ile iletişime geçiniz!**")
          .setFooter({ text: `Gv+ • 2022`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
      channel.send({embeds: [response]})
      interaction.reply({ephemeral: true, embeds: [response2]})
       } else {
        
     const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("HATA")
          .setDescription("**Maalesef bu yetkiye sahip değilsiniz! Bir sorun olduğunu düşünüyorsanız yetkili ekibi ile iletişime geçiniz!**")
          .setFooter({ text: `Gv+ • 2023`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
      interaction.reply({ephemeral: true, embeds: [response2]})
        
      }
    }
 };
