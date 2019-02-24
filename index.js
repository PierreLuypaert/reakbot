const Discord = require("discord.js");

var bot = new Discord.Client();
var couleur = 1
bot.on('ready', () => {
    console.log("Je suis prêt!");
    bot.user.setGame('Par Sneawy')
    bot.channels.get("528998224380559402").send({embed: {
        color: 0x800080,
        author: {
            name: "REAK Bot",
            icon_url: bot.user.avatarURL
          },
        description: "**Robot connecté en Javascript!**",
        timestamp: new Date(),
        footer: {
        icon_url: bot.user.avatarURL,
        text: "© - REAK BOT"
        }
      }});

    
    
});
bot.on("message", function(message) {
    if(message.content.startsWith("!ping")) {
        temps = (new Date().getTime() - message.createdTimestamp)
            message.channel.send(temps + " ms");
        
    }
    
    if(message.content.startsWith ("!sondage ")) {
        if(message.member.roles.find("name", "🌀 ADMINISTRATEURS 🌀")){
        sond=message.content
        i=0
        sondage=""
        a=9
        stop=0
        message.delete(100);
        do{
            sondage=sondage+sond[a]
            a=a+1
            console.log(sondage)
            if ((sond.length)==a) {
                i=1
                console.log("on passe")
            }
        } while (i==0);
        
        user = message.guild.members.find("name", "Sondages");

        message.channel.send(`**Mention : <@&506075917504872449>**`);
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        resuab=getRandomInt(5);
        listeimage=["https://wallpapershome.com/images/pages/pic_h/19924.jpg","https://hdwallpapersmafia.com/wp-content/uploads/2018/11/hollowhead-fortnite-battle-royale-4k-pl-3840x2160.jpg","https://hdwallpapersmafia.com/wp-content/uploads/2018/09/Fortnite-4K-Wallpaper-Screenshot2.jpg","https://media.xboxlive.fr/galeries/2923/065.jpg","https://a-static.besthdwallpaper.com/arbres-shifty-maison-4k-fortnite-fond-d-ecran-1220_L.jpg"]
        imagef=listeimage[resuab]
        const embed = new Discord.RichEmbed()
        .setAuthor("REAK BOT", "https://i.imgur.com/mfvoPjv.png")
        .setColor(0x800080)
        .setDescription("**➡ " + sondage + " ⬅ \n Réagissez avec ✅ ou ⛔!**")
        .setFooter("REAK BOT - ")
        .setImage(imagef)
        .setTimestamp()
        message.channel.send({embed}) 
          .then(function (message) {
            message.react("⛔")
            message.react("✅")

          });
          
            
            


    } else{
        message.reply("**Vous n'êtes pas autorisé à utiliser cette commande. **")
    }

}

    if(message.content.startsWith ("INSCRIPTION DE L'EQUIPE :")) {
        inscription=message.content
        condition=0
        compteur=24
        nomdequipe=""
        joueurp=""
        joueurd=""
        condition2=0
        condition3=0

        do {
            compteur=compteur+1
            console.log(compteur)
            console.log(inscription[compteur])
            nomdequipe=nomdequipe+inscription[compteur]
                
                
            if  ((inscription[compteur+2]=="J") && (inscription[compteur+3]=="O") && (inscription[compteur+4]=="U") && (inscription[compteur+5]=="E") && (inscription[compteur+6]=="U") && (inscription[compteur+7]=="R") && (inscription[compteur+8]==" ") && (inscription[compteur+9]=="1")){
                condition=1
                console.log(nomdequipe)
            }}while (condition==0);
        compteur2=compteur+11

        do {
            compteur2=compteur2+1
            console.log(compteur2)
            console.log(inscription[compteur2])
            joueurp=joueurp+inscription[compteur2]
                
                
            if  ((inscription[compteur2+2]=="J") && (inscription[compteur2+3]=="O") && (inscription[compteur2+4]=="U") && (inscription[compteur2+5]=="E") && (inscription[compteur2+6]=="U") && (inscription[compteur2+7]=="R") && (inscription[compteur2+8]==" ") && (inscription[compteur2+9]=="2")){
                condition2=1

        }}while(condition2==0);

        compteur3=compteur2+11
        do {
            compteur3=compteur3+1
            joueurd=joueurd+inscription[compteur3]  
            console.log("AH") 
            if ((((inscription).length)-1)==(compteur3)){        
                condition3=1 
                
            }
        } while (condition3==0);




        console.log(joueurp,joueurd)
        message.channel.send({embed: {
            color: 0x800080,
            author: {
                name: "REAK Bot",
                icon_url: message.author.avatarURL
              },
            description: `Votre demande d'inscription est en attente de validation. \n \n __**Caractéristiques de votre équipe :**__ \n **INSCRIPTION DE L'EQUIPE :** ${nomdequipe} \n **JOUEUR 1 :** ${joueurp} \n **JOUEUR 2 :** ${joueurd}`,
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: "© REAK 2019 - 2020"
            }
          }});



        bot.channels.get("529281660865347585").send({embed: {
            color: 0x800080,
            author: {
                name: "REAK Bot",
                icon_url: message.author.avatarURL
              },
            title: "INSCRIPTION - EN ATTENTE DE REPONSE",
            description: `Une demande d'inscription a été émise. Vous devez y répondre : utilisez la commande !aide pour avoir de l'aide. \n \n __**Caractéristiques de votre équipe :**__ \n **INSCRIPTION DE L'EQUIPE :** ${nomdequipe} \n **JOUEUR 1 :** ${joueurp} \n **JOUEUR 2 :** ${joueurd} \n **ID:** ${message.author.id}`,
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: "© REAK 2019 - 2020"
            }
          }})
          .then(message => {

              message.react("✅")
              // on attend l'event d'ajout d'une réaction
              bot.on('messageReactionAdd', (reaction, user) => {
              
                if (reaction.emoji.name === ("✅") && user.id !== bot.user.id) {
                    console.log("CEST CA")
                    test=message.id
                    message.delete(message.id)
                }
              })
            })
    }

    if(message.content.startsWith ("!tirage ")) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        msgtir=message.content
        nb=msgtir[8]
        resu=getRandomInt(nb);
        resu=resu+1
        message.channel.send({embed: {
            color: 0x800080,
            author: {
                name: "REAK Bot",
                icon_url: message.author.avatarURL
              },
            description: `:game_die: Le chiffre tiré au sort est **${resu}** :game_die: `,
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: "© REAK 2019 - 2020"
            }
          }});
        }
    if(message.content.startsWith ("!spawn")) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        resua=getRandomInt(20);
        listemap=["Retail Row","Pleasant Park","Tilted Towers","Frosty Flights","Happy Hamlet","Lucky Landing","Salty Springs","Paradise Palms","Lazy Links","Junk Junction","Snobby Shores","Haunted Hills","Polar Peak","Shifty Shafts","Fatal Fields","Wailing Woods","Lonely Lodge","Dusty Divot","Tomato Temple","Loot Lake"];
        resu=listemap[resua]
        const embed = new Discord.RichEmbed()
            .setAuthor("REAK BOT", "https://i.imgur.com/mfvoPjv.png")
            .setColor(0x800080)
            .setDescription(`Votre prochain spawn sera à... **${resu}** :evergreen_tree:`)
            .setFooter("Bon spawn !")
            .setImage("https://i.imgur.com/d8ynso8.png")
            .setTimestamp()
         message.channel.send({embed}); }
    
    
    if(message.content.startsWith ("!valider ")) {
        message.delete(500)
        nbequipe=0
        inscription=message.content
        nbéquipe=inscription[9]+inscription[10]
        equipename=""
        joueur1name=""
        joueur2name=""
        compteura=36
        conditiona=0
        conditionb=0
        conditionc=0
        
        do{
            compteura=compteura+1
            equipename=equipename+inscription[compteura]
           
                
            if  (inscription[compteura+2]=="J" && inscription[compteura+3]=="O" && inscription[compteura+4]=="U" && inscription[compteura+5]=="E" && inscription[compteura+6]=="U" && inscription[compteura+7]=="R" && inscription[compteura+8]==" " && inscription[compteura+9]=="1") {
                conditiona=1
            }
        } while (conditiona==0);
        compteurb=compteura+11    
        
        
        do {
            compteurb=compteurb+1
            joueur1name=joueur1name+inscription[compteurb]
                
                
            if  (inscription[compteurb+2]=="J" && inscription[compteurb+3]=="O" && inscription[compteurb+4]=="U" && inscription[compteurb+5]=="E" && inscription[compteurb+6]=="U" && inscription[compteurb+7]=="R" && inscription[compteurb+8]==" " && inscription[compteurb+9]=="2"){
                conditionb=1 }
        } while(conditionb==0  );
        compteurc=compteurb+11 

        do {
            compteurc=compteurc+1
            joueur2name=joueur2name+inscription[compteurc]
                
                
            if (inscription[compteurc+2]=="I" && inscription[compteurc+3]=="D" && inscription[compteurc+4]==":"){
                conditionc=1}
        } while (conditionc==0); 
         
        compteurd=compteurc+4
        conditiond=0
        idplayer=""
        do {
            compteurd=compteurd+1
            idplayer=idplayer+inscription[compteurd]

            if ((((inscription).length)-1)==(compteurd)){          
                conditiond=1 }
        
        } while (conditiond==0);
        console.log("test") 
    bot.fetchUser(idplayer).then((user) => {
            user.send({embed: {
                color: 0x00FF00,
                author: {
                    name: "REAK Bot",
                    icon_url: message.author.avatarURL
                  },
                title: "INSCRIPTION ACCEPTÉE",
                description: `L'inscription de votre équipe **${equipename}** est acceptée au tournoi de la **TEAM REAK** ! Ce sera l'équipe N°**${nbéquipe} !** \n **:clock11: Soyez à l'heure ! :clock11: ** \n \n **Tout se passera sur notre serveur ! \n :arrow_right: https://discord.gg/twMe5Aw **`,
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: "© REAK 2019 - 2020"
                }
              }});
        });
        message.channel.send(`Inscription de l'équipe **${equipename}** acceptée. Equipe N°: *${nbéquipe}*`)
        nbéquipe=parseInt(nbéquipe)
        if (nbéquipe<=16){
        bot.channels.get("508289039619850241").send({embed: {
            color: 0x00FF00,
            author: {
                name: "REAK Bot",
                icon_url: message.author.avatarURL
              },
            title: "INSCRIPTION - NOUVELLE ÉQUIPE",
            description: `Une nouvelle équipe s'est inscrite pour notre tournoi ! C'est l'équipe N°**${nbéquipe}** ! \n \n __**Les caractéristiques de cette équipe sont les suivantes :**__ \n \n **NOM D'ÉQUIPE :**${equipename} \n **JOUEUR 1 :**${joueur1name} \n **JOUEUR 2 :**${joueur2name}`,
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: "Bonne chance ! © REAK 2019 - 2020"
            }
          }});
        }
        if (nbéquipe>16){
            
            bot.fetchUser(idplayer).then((user) => {
                user.send({embed: {
                    color: 0xFFA500,
                    author: {
                        name: "REAK Bot",
                        icon_url: message.author.avatarURL
                      },
                    title: "FILE D'ATTENTE",
                    description: `:warning: Votre équipe est en file d'attente. En effet, il y a trop d'équipe. Présentez vous à l'heure pour remplacer une équipe absente. :warning: `,
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: "© REAK 2019 - 2020"
                    }
                  }});
            });
            message.channel.send(`L'équipe a été mise en file d'attente.`)
            bot.channels.get("508289039619850241").send({embed: {
                color: 0xFFA500,
                author: {
                    name: "REAK Bot",
                    icon_url: message.author.avatarURL
                  },
                title: "INSCRIPTION - NOUVELLE ÉQUIPE EN FILE D'ATTENTE",
                description: `Une nouvelle équipe s'est inscrite pour notre tournoi ! C'est l'équipe N°**${nbéquipe}** ! \n :warning: En raison d'un trop grand nombre d'équipe, cette dernière est placée en file d'attente. :warning: \n \n __**Les caractéristiques de cette équipe sont les suivantes :**__ \n \n **NOM D'ÉQUIPE :**${equipename} \n **JOUEUR 1 :**${joueur1name} \n **JOUEUR 2 :**${joueur2name}`,
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: "Bonne chance ! © REAK 2019 - 2020"
                }
              }});
        }




    }




    if(message.content.startsWith ("!start")) {
        if((message.member.roles.find("name", "🔥 REAK - Première équipe 🔥")) || (message.member.roles.find("name", "💦REAK - Deuxième équipe 💦"))) {
            listejoueur=["313755754450386946","239105965679443968","203943345230184448","146359634972770304","227929826642624522","453234856835416066","331029959722401792","396419951436759040"]
            conditiliste=0
            message.delete(200)
            // SNEAWY - DEUCALIUS - ELMUY - ARYWIN - FRAYCHEUR - NABE - LUK - TOHKA 
            for (var comptliste = 0; comptliste < 8; comptliste++) {

              
                msgaenvoyer=listejoueur[comptliste]
                console.log(listejoueur[comptliste])
                  bot.fetchUser(msgaenvoyer).then((user) => {
                user.send({embed: {
                    color: 0x00FFFF,
                    author: {
                        name: "REAK Bot",
                        icon_url: message.author.avatarURL
                      },
                    title: "ATTENTE POUR SCRIM !",
                    description: `:warning: Il nous faut des joueurs pour jouer en **scrim** maintenant ! On est en vocal. :warning: `,
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: "© REAK 2019 - 2020"
                    }
                  }});
            });

        } 

            
        }

    }





    if(message.content.startsWith ("!refuser ")) {
        message.delete(500)
        inscription=message.content
        condi1=0
        compt1=33
        condi2=0
        equipename=""
        motif=""
        idteam=""
        condi3=0
        condi4=0
        compt2=0
        compt3=0
        compt4=0
        do {
            compt1=compt1+1
            equipename=equipename+inscription[compt1]

            if  ((inscription[compt1+2]=="J") && (inscription[compt1+3]=="O") && (inscription[compt1+4]=="U") && (inscription[compt1+5]=="E") && (inscription[compt1+6]=="U") && (inscription[compt1+7]=="R") && (inscription[compt1+8]==" ") && (inscription[compt1+9]=="1")){
                condi1=1 
            }


        } while (condi1==0);     
        compt2=compt1
        


        do{
            compt2=compt2+1

            if (inscription[compt2+2]=="I" && inscription[compt2+3]=="D" && inscription[compt2+4]==":"){
                condi2=1 }
        } while (condi2==0);



        compt3=compt2+4
        do{
            compt3=compt3+1
            idteam=idteam+inscription[compt3]

            if (inscription[compt3+2]=="M" && inscription[compt3+3]=="O" && inscription[compt3+4]=="T" && inscription[compt3+5]=="I" && inscription[compt3+6]=="F" && inscription[compt3+7]==":" && inscription[compt3+8]==" "){
                condi3=1}
    } while (condi3==0);
        compt4=compt3+8


        do{
            compt4=compt4+1
            motif=motif+inscription[compt4]
            console.log('ah')
            if ((((inscription).length)-1)==(compt4)){         
                condi4=1 }
        }while (condi4==0);
        
        bot.fetchUser(idteam).then((user) => {
            user.send({embed: {
                color: 0xFF0000,
                author: {
                    name: "REAK Bot",
                    icon_url: message.author.avatarURL
                  },
                title: "INSCRIPTION REFUSÉE",
                description: `L'inscription de votre équipe **${equipename}** est refusée au tournoi de la **TEAM REAK**. Certains critères n'ont pas été respectés. \n \n __**Le motif est le suivant :**__ \n ${motif} \n \n **Refaites votre inscription directement sur notre serveur ! \n :arrow_right: https://discord.gg/twMe5Aw **`,
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: "© REAK 2019 - 2020"
                }
              }});
        });
        bot.channels.get("508287072583417876").send({embed: {
            color: 0xFF0000,
            author: {
                name: "REAK Bot",
                icon_url: message.author.avatarURL
              },
            title: "INSCRIPTION REFUSÉE",
            description: `Refus de l'équipe **${equipename}**. Un critère n'a pas été respecté.`,
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: "Bonne chance ! © REAK 2019 - 2020"
            }
          }});
        message.channel.send(`Inscription de l'équipe **${equipename}** refusée. Motif : *${motif}*`)
    }









    if(message.content.startsWith ("!aide")) {
        message.channel.send({embed: {
            color: 0x800080,
            author: {
                name: "REAK Bot",
                icon_url: bot.user.avatarURL
              },
            title : "PAGE DES COMMANDES",
            description: `La liste de toutes les commandes est la suivante : \n \n **!aide** - Afficher ce bloc de commandes. \n **!tirage a b nb** - Permet d'effecter un tirage aléatoire entre 'a' et 'b' avec 'nb' répétitions. Les trois variables doivent être entières et ne doivent pas dépasser 1 chiffre. \n**!refuser C/C MOTIF: ()** - Refuser des inscriptions avec un motif (il doit y avait un espace après les deux points de MOTIF). Remplacez les parenthèses par votre message. \n **!valider numerodelequipe C/C** - Accepter des inscriptions. Attention, le numéro de l'équipe doit être écrit avec deux chiffres (exemples: 04 ; 12) \n **!classement nb EQUIPE1: x EQUIPE2: x EQUIPE3: x EQUIPE4: x EQUIPE5: x EQUIPE6: x EQUIPE7: x EQUIPE8: x**- Permet l'affichage du classement sous forme d'image -> Qu&& 'nb' = 1, on affiche les places de 1 à 8, qu&& 'nb' = 2, on affiche les places de 9 à 16. Il faut remplacer 'x' par le nom de l'équipe en ajoutant si on veut les points.`,
            timestamp: new Date(),
            footer: {
                icon_url: message.author.avatarURL,
                text: "Le 'C/C' signifie qu\'il faut copier/coller les caractéristiques de l\'équipe en question (4 lignes)."
            }
          }});
    }





    if (message.content === '/scrim') {
        // Only try to join the sender's voice channel if they are in one themselves
        var voiceChannel = message.member.voiceChannel;
        voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
                message.reply('Je suis bien connecté au channel.');
                const dispatcher = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/Sortie spawn.mp3", {
                    volume: 1,
                    passes: 1,
                    bitrate: 96
                
                  });
                  setTimeout(afterTwoSeconds, 10000)
                function afterTwoSeconds() { 
                    const dispatchertwo = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/vous pouvez tirer.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                  setTimeout(after2, 6000) }
                  function after2() { // C/C  A PARTIR DICI
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/déplacement de la zone dans/10 secondes.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    setTimeout(after3, 3000) }
                    function after3() { 
                        const dispatcherfor = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/La zone se déplacera vers la zone....mp3", {
                            volume: 1,
                            passes: 1,
                            bitrate: 96
                        });
                        setTimeout(annoncecouleur, 3000);
                  }
                
                function entierAleatoire(min, max)
                  {
                   return Math.floor(Math.r&&om() * (max - min + 1)) + min;
                  }

                function annoncecouleur()
                {
                    var couleur
                    couleur = entierAleatoire(1, 4);
                    console.log(couleur)


                  if (couleur==1){
                    const dispatcherc1 = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/couleurs/Rouge.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                  }
                  if (couleur==2){
                    const dispatcherc2 = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/couleurs/Blanc.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                  }
                  if (couleur==3){
                    const dispatcherc3 = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/couleurs/Verte.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                  }
                  if (couleur==4){
                    const dispatcherc4 = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/couleurs/Bleu.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    
                  }
                  setTimeout(tempete, 6000);
                  console.log(couleur)
                }
                  
                function tempete() { 
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/storm-eye-fortnite-sound-effect-hd.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    setTimeout(temps1, 7500);
                }

                function temps1() { 
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/la zone se déplace pendant/45 secondes.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    setTimeout(zonearrive, 33000);
                }
                function zonearrive() { 
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/Arrêt zone dépéchez vous.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    setTimeout(zonefin, 10000);
                }
                function zonefin() { 
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/la zone est arrêtée.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    setTimeout(aftert2, 5000)
                }




                /// TOUR 2


                function aftert2() { // C/C  A PARTIR DICI
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/déplacement de la zone dans/30 secondes - Copie.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    setTimeout(aftert3, 3500)
                 }
                    function aftert3() { 
                        const dispatcherfor = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/La zone se déplacera vers la zone2.mp3", {
                            volume: 1,
                            passes: 1,
                            bitrate: 96
                        });
                        setTimeout(annoncecouleur2, 3000);
                  }
                

                function annoncecouleur2()
                {
                    couleur2 = entierAleatoire(1, 4);
                    var couleur
                    console.log(couleur2)
                        if ((couleur2==couleur)&&(couleur2!=1)){
                            couleur2=couleur2-1
                        }
                        if ((couleur2==couleur)&&(couleur2==4)){
                            couleur2=couleur2-entierAleatoire(1,3)
                        }
                    

                  if (couleur2==1){
                    const dispatcherc1 = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/couleurs/Rouge - Copie.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                  }
                  if (couleur2==2){
                    const dispatcherc2 = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/couleurs/Blanc - Copie.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                  }
                  if (couleur2==3){
                    const dispatcherc3 = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/couleurs/Verte - Copie.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                  }
                  if (couleur2==4){
                    const dispatcherc4 = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/couleurs/Bleu - Copie.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    
                  }
                  setTimeout(tempete2, 27000);
                  console.log(couleur2)
                }
                  
                function tempete2() { 
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/storm-eye-fortnite-sound-effect-hd - Copie.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    setTimeout(temps2, 7500);
                }

                function temps2() { 
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/la zone se déplace pendant/30 secondes - Copie.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    setTimeout(zonearrive2, 23000);
                }
                function zonearrive2() { 
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/Arrêt zone dépéchez vous - Copie.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                    setTimeout(zonefin2, 10000);
                }
                function zonefin2() { 
                    const dispatcherthree = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/la zone est arrêtée - Copie.mp3", {
                        volume: 1,
                        passes: 1,
                        bitrate: 96
                    });
                }


                setTimeout(disco, 170000);
                function disco() { 
                    connection.channel.leave();
                    connection.disconnect();
                }
                console.log("OK")
            
            }
            )}
        
        console.log("OK")
        
    if (message.content === '/stop') {
        setTimeout(disco2, 1);
    }
    function disco2() { 
        var voiceChannel = message.member.voiceChannel;
        voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playFile("C:/Users/Utilisateur/Desktop/audio bot/Sortie spawn.mp3", {
                volume: 1,
                passes: 1,
                bitrate: 96
            
              });
              connection.channel.leave();
        connection.disconnect();
        })
        
    }

});
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('439548357304778754').send({embed: {
        color: 0x800080,
        author: {
            name: "REAK Bot",
            icon_url: member.user.avatarURL
        },
        description: "Bienvenue à toi **" + member + "**, prends place dans l'équipe parmis les **" + member.guild.memberCount + "** membres ! :shark: :v:",
        timestamp: new Date(),
        footer: {
        icon_url: bot.user.avatarURL,
        text: "© REAK 2019 - 2020"
        }
        }});
   });


bot.login(process.env.TOKEN)
