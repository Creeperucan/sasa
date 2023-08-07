const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kayıt-red")
    .setDescription("Kayıt başvurusunu reddetmek için bu komutu kullanın")
  	.addStringOption(option => option.setName('sebep')
			.setDescription("Red sebebini açıklayın")
			.setRequired(true))
  	.addUserOption(option => option.setName('discord-ismi')
			.setDescription("Başvuran kişinin discordunu seçiniz")
			.setRequired(true)),
    run: async (client, interaction, args, message) => {
      
      const sebep = interaction.options.getString('sebep')
      const member1 = interaction.options.getUser('discord-ismi')

      const channel2 = client.channels.cache.get('1062343665206448198')
      
      if(interaction.member.roles.cache.has('1024369433143156807') || interaction.member.roles.cache.has('1023681529416786042')){
      const response3 = new MessageEmbed()
          .setColor("BLACK")
          .setDescription(`<:reddedildi:1023685637330710639> ${member1} **adlı kullanıcının kayıt başvurusu** \`${sebep}\` **sebebinden dolayı reddedildi!**`)
      
      
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Kayıt Başvurusunu Reddettiniz!")
          .setDescription("**Kayıt başvurusunu reddettiniz! Bir sorun halinde yetkili ekibi ile iletişime geçebilirsiniz.**")
          .setFooter({ text: `Gv+ • 2022`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
      channel2.send({embeds: [response3]})
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