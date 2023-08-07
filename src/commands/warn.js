const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("uyarı")
    .setDescription("Bir kişiye uyarı verir")
    	.addStringOption(option => option.setName('sebep')
			.setDescription("Ceza sebebini yazın")
			.setRequired(true))
      .addStringOption(option => option.setName('uyarı-sayısı')
			.setDescription('Kullanıcının kaçıncı uyarısı olduğunu seçiniz')
			.setRequired(true)
			.addChoices(
				{ name: '1', value: "1"},
        { name: '2', value: "2"},
        { name: '3', value: "3"},
			))
  	.addUserOption(option => option.setName('uyarıyı-veren')
			.setDescription("Uyarıyı veren kişiyi seçiniz")
			.setRequired(true))
  	.addUserOption(option => option.setName('uyarı-verilen')
			.setDescription("Uyarıyı veren kişiyi seçiniz")
			.setRequired(true)),
    run: async (client, interaction, args, message) => {
      
      const sebep = interaction.options.getString('sebep')
      const warn2 = interaction.options.getString('uyarı-sayısı')
      const warn = interaction.options.getUser('uyarıyı-veren')
      const warn3 = interaction.options.getUser('uyarı-verilen')
      
      const channel = client.channels.cache.get('1023617781285007421')
      
      
    if(warn2 == "1") {
        const member = interaction.options.getMember('uyarı-verilen');
        member.roles.add('1027993411405500416');
    }
    if(warn2 == "2") {
        const member = interaction.options.getMember('uyarı-verilen');
        member.roles.add('1027993424512684032');
    }
    if(warn2 == "3") {
        const member = interaction.options.getMember('uyarı-verilen');
        member.roles.add('1027993433169731636');
    }
      
      
      if(interaction.member.roles.cache.has('1023678560659062885') || interaction.member.roles.cache.has('1023681529416786042')){
      const response = new MessageEmbed()
          .setColor("BLACK")
          .setTitle(`Bir Uyarı Verildi!`)
          .setFooter({ text: 'Gv+ • 2022', iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
          .addFields(
            {name: "Sebep", value: `\`${sebep}\` `, inline: true},
            {name: "Bilgi", value: `**Uyarıyı Veren** • ${warn}\n **Uyarıyı Alan** • ${warn3}\n **Uyarıyı Sayısı** • \`${warn2}\` `, inline: false})

      
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Başarıyla Uyarı Verildi!")
          .setDescription("**Başarıyla uyarı verildi! Bir sorun halinde yetkili ekibi ile iletişime geçiniz!**")
          .setFooter({ text: `Gv+ • 2022`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
      channel.send({embeds: [response]})
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