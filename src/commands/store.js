const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("dükkan-sat")
    .setDescription("Dükkan satmak için bu komutu kullanın")
    	.addStringOption(option => option.setName('resim-url')
			.setDescription("Dükkanın tapusunu yazınız")
			.setRequired(true))
  	.addUserOption(option => option.setName('dükkanı-satan')
			.setDescription("Dükkanı kimin sattığını yazınız")
			.setRequired(true))
  	.addUserOption(option => option.setName('dükkanı-alan')
			.setDescription("Dükkanı alan kişiyi yazınız")
			.setRequired(true)),
    run: async (client, interaction, args, message) => {
      
      const store1 = interaction.options.getUser('dükkanı-satan')
      const store2 = interaction.options.getUser('dükkanı-alan')
      const image = interaction.options.getString('resim-url')
      
      const channel = client.channels.cache.get('1023618116770607194')
      
      if(interaction.member.roles.cache.has('1027287819560956004') || interaction.member.roles.cache.has('1023681529416786042')){
      const response = new MessageEmbed()
          .setColor("BLACK")
          .setTitle(`Bir Dükkan Satıldı!`)
          .setDescription("**Bilgiler aşağıdaki tapuda verilmiştir.**")
          .setFooter({ text: 'Gv+ • 2022', iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
          .addFields(
            {name: "Dükkanı Satan", value: `${store1}`, inline: true},
            {name: "Dükkanı Alan", value: `${store2} `, inline: true})
          .setImage(`${image}`)

      
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Başarıyla Dükkan Satıldı!")
          .setDescription("**Başarıyla dükkan satıldı! Bir sorun halinde yetkili ekibi ile iletişime geçiniz!**")
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