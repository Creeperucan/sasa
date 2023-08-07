const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("wsp-onay")
    .setDescription("WSP başvurularına onay vermek için bu komutu kullanın")
      .addStringOption(option => option.setName('iş')
			.setDescription('Kişinin yapmak istediği mesleği seçiniz')
			.setRequired(true)
			.addChoices(
				{ name: 'Sheriff', value: "Sheriff"},
        { name: 'WSP', value: "WSP"},
			))
  	.addUserOption(option => option.setName('discord-ismi')
			.setDescription("Başvuran kişinin discordunu seçiniz")
			.setRequired(true)),
    run: async (client, interaction, args, message) => {
      
      const job = interaction.options.getString('iş')
      const member1 = interaction.options.getUser('discord-ismi')
      
      const channel = client.channels.cache.get('1024723152066064394')
      
    if(job == "WSP") {
        const member = interaction.options.getMember('discord-ismi');
        member.roles.add('1023680417976553525');
        member.roles.add('1023830962309713941');
        member.roles.add('1024722086628950097');
    }
      
    if(job == "Şerif") {
        const member = interaction.options.getMember('discord-ismi');
        member.roles.add('1023680417976553525');
        member.roles.add('1023830962309713941');
        member.roles.add('1024722086628950097');
    }
      
      if(interaction.member.roles.cache.has('1024749871820976168') || interaction.member.roles.cache.has('1023681529416786042')){
      
      const response = new MessageEmbed()
          .setColor("BLACK")
          .setDescription(`<:onaylandi:1023685635883683860> ${member1} **adlı kullanıcı** \`${job}\` **işine girdi!**`)
        
      const response2 = new MessageEmbed()
          .setColor("BLACK")
          .setTitle("Başarıyla Kişiyi Onayladınız!")
          .setDescription("**Başarıyla bir kişiyi onayladınız! Bir sorun halinde yetkili ekibi ile iletişime geçebilirsiniz.**")
          .setFooter({ text: 'Gv+ • 2022', iconURL: "https://cdn.glitch.global/ce452010-22c4-4a80-a19f-5d5eb53a36b4/Yeni%20Proje%20(1).png?v=1664006619698"})
    
      
      
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