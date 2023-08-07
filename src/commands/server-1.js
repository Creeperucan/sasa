const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("server-1")
    .setDescription("Sunucu 1'i aktif etmek için bu komutu kullanın")
      .addStringOption(option => option.setName('ems')
			.setDescription('EMS aktif mi?')
			.setRequired(true)
			.addChoices(
				{ name: 'Aktif', value: "Aktif"},
				{ name: 'Aktif Değil', value: "Aktif Değil"},
			))
      .addStringOption(option => option.setName('wsp')
			.setDescription('WSP aktif mi?')
			.setRequired(true)
			.addChoices(
				{ name: 'Aktif', value: "Aktif"},
				{ name: 'Aktif Değil', value: "Aktif Değil"},
			))
      .addStringOption(option => option.setName('dot')
			.setDescription('DOT aktif mi?')
			.setRequired(true)
			.addChoices(
				{ name: 'Aktif', value: "Aktif"},
				{ name: 'Aktif Değil', value: "Aktif Değil"},
			))
    	.addStringOption(option => option.setName('sunucu-url')
			.setDescription("Sunucu URL yazın")
			.setRequired(true))
  	.addUserOption(option => option.setName('sunucuyu-açan')
			.setDescription("Evi kimin sattığını yazınız")
			.setRequired(true)),
    run: async (client, interaction, args, message) => {
      
      const ems = interaction.options.getString('ems')
      const wsp = interaction.options.getString('wsp')
      const dot = interaction.options.getString('dot')
      const url = interaction.options.getString('sunucu-url')
      const server = interaction.options.getUser('sunucuyu-açan')
      
      const channel = client.channels.cache.get('1023613176161509507')
      
  if(interaction.member.roles.cache.has('1023680884219588738') || interaction.member.roles.cache.has('1023681529416786042')){
      const response = new MessageEmbed()
          .setColor("BLACK")
          .setTitle(`Server-1 Aktif`)
          .setFooter({ text: 'Gv+ • 2022', iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
          .addFields(
            {name: "Acil Durum Araçları", value: `**EMS** • \`${ems}\`\n **WSP** • \`${wsp}\`\n **DOT** • \`${dot}\` `, inline: true},
            {name: "Bilgi", value: `**Sunucuyu Açan** • ${server}\n **Hız Sınırı** • \`Tabela Sistemi\`\n **Peacetime** • \`Açık\`\n\n${url} `, inline: false})

      
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Sunucu Başarıyla Açıldı!")
          .setDescription("**Başarıyla sunucu açıldı! Bir sorun halinde yetkili ekibi ile iletişime geçiniz!**")
          .setFooter({ text: `Gv+ • 2022`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
      channel.send({content: '@here',embeds: [response]})
      interaction.reply({ephemeral: true, embeds: [response2]})
       } else {
        
     const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("HATA")
          .setDescription("**Maalesef bu yetkiye sahip değilsiniz! Bir sorun olduğunu düşünüyorsanız yetkili ekibi ile iletişime geçiniz!**")
          .setFooter({ text: `Gv+ • 2022`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
      interaction.reply({ephemeral: true, embeds: [response2]})
        
      }
    }
 };


//https://v13.discordjs.guide/interactions/slash-commands.html#options