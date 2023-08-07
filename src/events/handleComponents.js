const { readdirSync } = require("fs");

module.export = (client) => {
  client.handleComponents = async () => {
    const componentsFolder = readdirSync(`.src/commands2`);
    for (const folder of componentsFolder) {
      const componentsFiles = readdirSync(`.src/commands2/${folder}`).filter((file) => file.endWith(".js"));
      
      const {buttons} = client;
      
      switch (folder) {
        case "buttons":
          for (const file of componentsFiles) {
            const button = require(`../../commands2/${folder}/${file}`);
            buttons.set(button.data.name, button);
          }
          break;
          
        default:
          break;
      }
    }
  };
};