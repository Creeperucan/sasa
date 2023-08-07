const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("araç-onay")
    .setDescription("Araç başvurusunu onaylamak için bu komutu kullanın")
  	.addStringOption(option => option.setName('marka')
			.setDescription("Aracınızın markasını yazınız")
			.setRequired(true))
  	.addStringOption(option => option.setName('model')
			.setDescription("Aracınızın modelini yazınız")
			.setRequired(true))
  	.addStringOption(option => option.setName('trim')
			.setDescription("Aracınızın trimini yazınız")
			.setRequired(true))
  	.addStringOption(option => option.setName('yıl')
			.setDescription("Aracınızın yılını yazınız")
			.setRequired(true))
  	.addStringOption(option => option.setName('plaka')
			.setDescription("Aracınızın plakasını büyük harflerle yazınız")
			.setRequired(true))
  	.addStringOption(option => option.setName('renk')
			.setDescription("Aracınızın rengini yazınız")
			.setRequired(true))
    	.addStringOption(option => option.setName('roblox-ismi')
			.setDescription("Roblox isminizi yazınız")
			.setRequired(true))
  	.addUserOption(option => option.setName('discord-ismi')
			.setDescription("Kendinizi seçiniz")
			.setRequired(true))
  	.addUserOption(option => option.setName('onaylayan-ismi')
			.setDescription("Kendinizi seçiniz")
			.setRequired(true)),
    run: async (client, interaction, args, message) => {
      
      const marka = interaction.options.getString('marka')
      const model = interaction.options.getString('model')
      const trim = interaction.options.getString('trim')
      const yıl = interaction.options.getString('yıl')
      const plaka = interaction.options.getString('plaka')
      const renk = interaction.options.getString('renk')
      const member2 = interaction.options.getString('roblox-ismi')
      const member1 = interaction.options.getUser('discord-ismi')
      const member3 = interaction.options.getUser('onaylayan-ismi')
      
      const channel = client.channels.cache.get('1023617681519292426')
      const channel2 = client.channels.cache.get('1024723152066064394')
      
      if(interaction.member.roles.cache.has('1023678560659062885') || interaction.member.roles.cache.has('1023681529416786042')){
      const response = new MessageEmbed()
          .setColor("BLACK")
          .setTitle(`Bir Araç Kayıt Edildi!`)
          .setFooter({ text: 'Gv+ • 2022', iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
          .setDescription(`<:onaylandi:1023685635883683860> ${member1} **adlı kullanıcının araba başvurusu onaylandı!**`)
          .addFields(
            {name: "Marka", value: `\`${marka}\` `, inline: true},
            {name: "Model", value:`\`${model}\` `, inline: true},
            {name: "Trim", value: `\`${trim}\` `, inline: true},
            {name: "Yıl", value: `\`${yıl}\` `, inline: true},
            {name: "Plaka", value: `\`${plaka}\` `, inline: true},
            {name: "Renk", value: `\`${renk}\` `, inline: true},
            {name: "Bilgi", value: `**Discord** • ${member1}\n **Roblox** • \`${member2}\`\n**Onaylayan Yetkili** • ${member3} `, inline: false})
      
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setDescription(`<:onaylandi:1023685635883683860> ${member1} **adlı kullanıcının** \`${marka}\` **markalı aracı onaylandı!**`)
      
      const response3 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Araba Başvurusunu Onayladınız!")
          .setDescription("**Araç kayıt ettiğiniz için teşekkürler! Bir sorun halinde yetkili ekibi ile iletişime geçebilirsiniz.**")
          .setFooter({ text: `Gv+ • 2022`, iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
      
      
      channel.send({embeds: [response]})
      channel2.send({embeds: [response2]})
      interaction.reply({ephemeral: true, embeds: [response3]})
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