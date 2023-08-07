const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kayıt-onay")
    .setDescription("Kayıt başvurusunu onaylamak için bu komutu kullanın")
  	.addUserOption(option => option.setName('discord-ismi')
			.setDescription("Kendinizi seçiniz")
			.setRequired(true)),
    run: async (client, interaction, args, message) => {
      
      const member1 = interaction.options.getUser('discord-ismi')

      
      const channel = client.channels.cache.get('1062343665206448198')
      

        const member = interaction.options.getMember('discord-ismi');
        member.roles.add('1023683952311017492');
        member.roles.remove('1023684063120347227')
      
      if(interaction.member.roles.cache.has('1024369433143156807') || interaction.member.roles.cache.has('1023681529416786042')){
      const response = new MessageEmbed()
          .setColor("BLACK")
          .setDescription(`<:onaylandi:1023685635883683860> ${member1} **adlı kullanıcının kayıt başvurusu onaylandı!**`)
      
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Kayıt Başvurusunu Onayladınız!")
          .setDescription("**Kayıt başvurusunu onayladınız! Bir sorun halinde yetkili ekibi ile iletişime geçebilirsiniz.**")
          .setFooter({ text: `Gv+ • 2023`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
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