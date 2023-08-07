const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("rp-oylama")
    .setDescription("Roleplay oylaması açar")
      .addStringOption(option => option.setName('rp-saat')
			.setDescription('Roleplay saatini seçiniz')
			.setRequired(true)
			.addChoices(
        { name: '10.30', value: "10.30"},
        { name: '11.30', value: "11.30"},
				{ name: '12.30', value: "12.30"},
        { name: '13.30', value: "13.30"}, 
        { name: '14.30', value: "14.30"},        
        { name: '15.30', value: "15.30"},
        { name: '16.30', value: "16.30"}, 
        { name: '17.30', value: "17.30"}, 
        { name: '18.30', value: "18.30"},
        { name: '19.30', value: "19.30"},
        { name: '20.30', value: "20.30"},
        { name: '21.30', value: "21.30"},
        { name: '22.30', value: "22.30"},
        { name: '23.30', value: "23.30"},
        { name: '00.30', value: "00.30"},
        { name: '01.30', value: "01.30"},
        { name: '02.30', value: "02.30"},
			)),
    run: async (client, interaction, args, message) => {
      
      const watch = interaction.options.getString('rp-saat')
      
      const channel = client.channels.cache.get('1023613176161509507')
      
      if(interaction.member.roles.cache.has('1023680884219588738') || interaction.member.roles.cache.has('1023681529416786042')){
      const response = new MessageEmbed()
          .setColor("BLACK")
          .setTitle(`Roleplay Oylması!`)
          .setFooter({ text: 'Gv+ • 2022', iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
          .setDescription(`\`${watch}\` **RP Oylaması**`)
      
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Bir RP Oylaması Açtınız!")
          .setDescription("**Roleplay oylamasını başlattınız! Bir sorun halinde yetkili ekibi ile iletişime geçebilirsiniz.**")
          .setFooter({ text: `Gv+ • 2022`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
      const A = await channel.send({content: '@here',embeds: [response]})
      A.react('<:onaylandi:1023685635883683860>');
      A.react('<:reddedildi:1023685637330710639>');
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