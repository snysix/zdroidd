

const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("Z!");
var commands = new Object();
var token = ('NDM0MDYzODI1Mjc3NTUwNTk0.DbE9fw.ZrJsC6Ih31Ehrf06rGLQtnnE3nk');
var perms = ["KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","CREATE_INSTANT_INVITE","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","READ_MESSAGES","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];

bot.on('ready', () => {
	bot.user.setActivity('Editing insultes.js')
bot.guilds.forEach(guild => { 
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});

    	// Catégorie - Administation (5 Commandes)
    	
    	bot.on('message', message => {
    		
    		// Redémarage
    // Alias : reload, rl
			if (message.content === 'Z!reload') {
				if(message.author.id !== "436244695056646144") {
					return message.channel.send("Commande refusée")
					}
				}
			
		
    	if(message.content === 'Z!reload') {
				if(message.author.id !== "436244695056646144") {
					return message.channel.send(":white_check_mark: Mise à jour du code fini.")
					
				}
				message.channel.send(":white_check_mark:  Redémarrage fini.\nCause du redémarrage : **Mise  jour du code.**")
			message.delete();
			}
			
			if (message.content === 'Z!rl') {
				if(message.author.id !== "436244695056646144") {
					return message.channel.send(" ")
					}
				}
			
		
    	if(message.content === 'Z!rl') {
				if(message.author.id !== "436244695056646144") {
					return message.channel.send(" ")
					
				}
				message.channel.send(":white_check_mark:  Redémarrage fini.\nCause du redémarrage : **Mise  jour du code.**")
			message.delete();
			}
			
			  // Commande - X
		  	// Alias : X
			// Empeche les bot d'éxécuter les commandes
			if (message.content.startsWith(prefix)) {
		if(message.author.bot) return; 
		try {
			var splited_message = message.content.slice(prefix.length).split(" ");
			var command = splited_message[0];
			var parameters = splited_message.slice(1)
		} catch (error) {
			return
	}
		};
			
  });
  
  // Catégorie - Divers (  Commandes) 
		
		 // Pierre Feuille Ciseau
		// Commandes : Pierre, feuille, ciseau
	// Alias : X
		  
	bot.on('message', message => {	  	
if(message.content.startsWith('Z!ciseau')) {
message.delete();
        let randnum_game = Math.floor(Math.random() * 3)

        if (randnum_game == 0) {

            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("Vous › Ciseau\nRobot › Feuille\n Résultat : Vous avez gagnez.")
            .setFooter('Vous avez gagnez.')
            message.channel.send(embed).catch(console.error)

        } else if(randnum_game == 1) {

            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("Vous › Ciseau\nRobot › Ciseau\n Résultat : Égalité.")
            .setFooter('Bien joué.')
            message.channel.send(embed).catch(console.error)

    }     else if(randnum_game == 2) {

            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("Vous › Ciseau\nRobot › Pierre\n Résultat : Vous avez perdu.")
            .setFooter("Bien joué.")
            message.channel.send(embed).catch(console.error)
    }
    
    }
    
  if(message.content.startsWith('Z!feuille')) {
message.delete();
        let randnum_game = Math.floor(Math.random() * 3)

        if (randnum_game == 0) {

            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("Vous › Feuille\nRobot › Pierre\n Résultat : Vous avez gagnez.")
            .setFooter('Bien joué.')
            message.channel.send(embed).catch(console.error)
 
    } else if(randnum_game == 1) {

            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("Vous › Feuille\nRobot › Feuille\n Résultat : Égalité.")
            .setFooter('Bien joué.')
            message.channel.send(embed).catch(console.error)

    }     else if(randnum_game == 2) {

            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("Vous › Feuille\nRobot › Ciseau\n Résultat : Vous avez perdu.")
            .setFooter("Bien joué.")
            message.channel.send(embed).catch(console.error)
    }
    
    }
    
      if(message.content.startsWith('Z!pierre')) {
message.delete();
        let randnum_game = Math.floor(Math.random() * 3)

        if (randnum_game == 0) {

            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("Vous › Pierre\nRobot › Ciseau\n Résultat : Vous avez gagnez.")
            .setFooter('Bien joué.')
            message.channel.send(embed).catch(console.error)

        } else if(randnum_game == 1) {

            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("Vous › Pierre\nRobot › Pierre\nRésultat : Égalité.")
            .setFooter('Bien joué.')
            message.channel.send(embed).catch(console.error)

    }     else if(randnum_game == 2) {

            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("Vous › Pierre\nRobot › Feuille\nRésultat : Vous avez perdu.")
            .setFooter("Bien joué.")
            message.channel.send(embed).catch(console.error)
    }
}
    // Commande - Bienvenue
   // Alias : bvn, bienvenue, bienvenu
   if(message.content === "bvn") {
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor((Math.random() * 16777215) + 1)) // Une couleur aléatoire
					.setFooter(message.author.username, message.author.avatarURL)
					.addField("Message › Bienvenue à tous", "» Pour shouaiter la bienvenue : **Z!bvn** «");
				message.channel.send("", {embed})
			}
			
			 // Commande - Easter Egg
   // Alias : X
  // Z!easter va avec le Z!whois
			if (message.content === 'Z!easter') {
       message.reply("Tu viens de ramporter le badge : **Chercheur**\n\nContact : @「 AnnonymousMan  」#3365 pour le badge.")
        message.delete();
        }
        
		  	// Commande - Invitation
			// Alias : invite, invitations, inv, invitation
			 if(message.content === "invitation") {
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor((Math.random() * 16777215) + 1)) // Une couleur aléatoire
					.setFooter(message.author.username, message.author.avatarURL)
					.addField("None", "none")
  }
  
  
    // Commande - Liste des serveurs
  // Alias : X
  if (message.content === 'Z!slist') {
          message.delete();
        
        
        
  
  bot.guilds.forEach(guild => { 
    var invite = bot.guilds.find("id", guild.id)
    message.author.send(`Je suis sur le serveur : **${guild.name}**`);
  
  })
  
   
  if(message.content === "Z!slist") {
  message.channel.send("La liste des serveurs ou je suis vous a été envoyé en message privé.")
  }
   }
   
   
    if (message.content === "Z!uinfo") {
                var member = message.author;
                    
                      
                    
                
                var champ_additions = [];
                var champ_permissions = [];
                var date = member.createdAt;
                var embed = new Discord.RichEmbed()
                    .setColor(Math.floor(( Math.random()*16777215 ) + 1))
                    .setTitle("Informations sur votre compte")
                    .addField("Identificateur  ╮\n", `${member.id}`)
                    .addField("Nom discord  ╮\n ", member.username, true)
                    .addField("Tag discord  ╮\n", member.tag, true)
                    .addField("Pseudo modifié  ╮\n", "Non")
                    .addField("Date de la création du compte  ╮\n", date.getDate()+"|"+(date.getMonth()+1)+"|"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes(), true);
       
       
                if (member.bot) {
                    champ_additions[champ_additions.length] = "Influence › Robot\n:trident: Badge › Bot"
                } else if (member.id === " " || member.id === " ") {
                    champ_additions[champ_additions.length] = " "
                };
               
                if (member.bot) {
                    champ_additions[champ_additions.length] = " "               } else if (member.id === "436244695056646144" || member.id === "215634007306534912") {
                    champ_additions[champ_additions.length] = "Influence › **Créateur du robot**\n:trident: Badge › **Développeur, Membre confirmé**"
                };
               
               if (member.user) {
                    champ_additions[champ_additions.length] = "Influence › **Utilisateur**\n:trident: Badge › **Aucun badge**"
                   
                };
               
                if (champ_additions.length > 0) {
                    embed.addField(":heavy_plus_sign:  Suplémentaire :\n", champ_additions.join("\n"))
                };
                message.channel.send("", {embed})
            }
   
  });
  
     // Catégorie Utile (1 Commande)
    // Commande - Aide
   // Commande - Paide
  // Commande - Aide [module]
  bot.on("message", message => {
  	if (message.content === "Z!aide") {
                var embed = new Discord.RichEmbed()
                    .setColor(Math.floor(( Math.random()*16777215 ) + 1))
                    .setTitle("Information - Aide")
                    .addField("[❌] Erreur", "Veuillez saisir le module ou vous voulez avoir de l'aide.\nExemple : `Z!aide fun`")
                    .addField("[🔔] Information", "Module disponnible : fun, divers, modération, utile")
                    .addField("[🔔] Information", "Si vous voulez avoir le panel d'aide : `Z!paide`")
                    .setFooter("ZDroid V0.2")
       message.channel.send("", {embed})
       }
       
   
  	if (message.content === "Z!aide fun") {
                var embed = new Discord.RichEmbed()
                    .setColor(Math.floor(( Math.random()*16777215 ) + 1))
                    .setTitle("Information - Fun")
                    .addField("[📁] Module FUN", "**Commandes pierre, feuille, ciseau :**\n`Z!pierre` - Tu choisis la pierre\n`Z!feuille` - Tu choisis la feuille\n`Z!ciseau` - Tu choisis le ciseau")
                    .setFooter("ZDroid V0.2")
       message.channel.send("", {embed})
       }
       
       if (message.content === "Z!aide modération") {
                var embed = new Discord.RichEmbed()
                    .setColor(Math.floor(( Math.random()*16777215 ) + 1))
                    .setTitle("Information - Modération")
                    .addField("[📁] Module MODÉRATION", "Aucunes commandes disponnible pour cette catégorie actuellement.")
                    .setFooter("ZDroid V0.2")
       message.channel.send("", {embed})
       }
       
       if (message.content === "Z!aide divers") {
                var embed = new Discord.RichEmbed()
                    .setColor(Math.floor(( Math.random()*16777215 ) + 1))
                    .setTitle("Information - Divers")
                    .addField("[📁] Module DIVERS", "`Z!uinfo` - Vous donne des informations sur votre compte.")
                    .setFooter("ZDroid V0.2")
       message.channel.send("", {embed})
       }
       
       if (message.content === "Z!aide utile") {
                var embed = new Discord.RichEmbed()
                    .setColor(Math.floor(( Math.random()*16777215 ) + 1))
                    .setTitle("Information - Utile")
                    .addField("[📁] Module UTILE", "`Z!question [question]` - Demande une question au créateur directement\n`Z!support [message]` - Envoie un message pour demander de l'aide\n`Z!paide` - Vous envoie le panel d'aide\n`Z!aide [module]` - Vous envoie un message d'aide avec une catégorie spécifié.")
                    .setFooter("ZDroid V0.2")
       message.channel.send("", {embed})
       }
       
       if (message.content === "Z!paide") {
                var embed = new Discord.RichEmbed()
                    .setColor(Math.floor(( Math.random()*16777215 ) + 1))
                    .setTitle("Information")
                    .addField("[❌] Erreur", "Commande non disponnible actuellement. [Commande OFF]")
                    .setFooter("ZDroid V0.2")
       message.channel.send("", {embed})
       }
       
       if (message.content === "Z!support") {
                var embed = new Discord.RichEmbed()
                    .setColor(Math.floor(( Math.random()*16777215 ) + 1))
                    .setTitle("Information")
                    .addField("[❌] Erreur", "Commande non disponnible actuellement.\n[En développement]")
                    .setFooter("ZDroid V0.2")
       message.channel.send("", {embed})
       }
       
       if (message.content === "Z!question") {
                var embed = new Discord.RichEmbed()
                    .setColor(Math.floor(( Math.random()*16777215 ) + 1))
                    .setTitle("Information")
                    .addField("[❌] Erreur", "Commande non disponnible actuellement.\n[En développement]")
                    .setFooter("ZDroid V0.2")
       message.channel.send("", {embed})
       }
       
       // Anti Insultes
       
     if (message.content "Z!update") {
	     message.channel.send("Information modération : L'anti insultes a été mis en maintenance jusqu'a un temps indeterminé.")
     }
       });
  
  bot.login(token)
