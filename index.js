const { Client, MessageEmbed } = require('discord.js');

const client = new Client();
const prefix = '!';
var arrayAnim = [];

client.once('ready', () => {
	console.log('Ready!');
});

function AnimationWB(auteur,typeanim) {
	this.auteur  = auteur;
	this.typeanim = typeanim;
	this.activated = 0;
}

client.on('message', async message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'add' || command === 'addevent') {
		if (message.member.roles.cache.find(r => r.name === "ANIMATION"))
		{
			$isevent = (command === 'addevent');
			console.log($isevent);
			if (!args.length) {
				return message.channel.send(`Tu dois donner des arguments, ${message.author}!`);
			}
			else 
			{
				$pseudo = args[0];
				$nombre = 1;
				console.log(args[1]);
				if (args.length > 1) $nombre = args[1];
				
				$file = await fetch('http://localhost/bot/ajouter-pt.php?key=123&pseudo=' + $pseudo + '&ajout=' + $nombre + '&event=' + $isevent).then(response => response.json());
				color = '#009809';
				if($file['success'] == false) $color = '#B90000';
				const exampleEmbed = new MessageEmbed()
					.setColor($color)
					.setTitle('Retour de la requête')
					.setAuthor('WibboDreams\'s', 'https://i.imgur.com/CDkZFEm.png', 'http://localhost')
					.setDescription($file['msg'])
					.setTimestamp()
					.setFooter('Ajout de point', 'https://i.imgur.com/CDkZFEm.png');
					await message.channel.send(exampleEmbed)
			}
		} else { const exampleEmbed = new MessageEmbed()
			.setColor("#B90000")
			.setTitle('Interdit')
			.setAuthor('WibboDreams\'s', 'https://i.imgur.com/CDkZFEm.png', 'http://localhost')
			.setDescription("Vous n'avez pas accès à cette commande.")
			.setTimestamp()
			.setFooter('Ajout de point', 'https://i.imgur.com/CDkZFEm.png');
			await message.channel.send(exampleEmbed);
		}
		
		
	}
	if (message.channel.id === "743572370018533438") { //ICI CHANGER PAR LE CHANNEL ID
		if (command === 'go') {
			if (!args.length)
				return message.channel.send(`Tu dois donner le type d'animation, ${message.author}!`);
			else 
			{
				pseudo = args[0].split("-");
				arrayAnim.push(new AnimationWB(message.author, pseudo[0]));
				clear(message);
				embed = ecrireListe(arrayAnim);
				message.channel.send(embed).then(function (message) {
					if (arrayAnim[0].activated == 0) {
						message.react("✅")
						message.react("🟥")

						setTimeout(function(){ 
							if (arrayAnim.length != 0 && arrayAnim[0].activated==0)
							{
								embed.color="#EB7201";
								try { message.edit(embed) } catch(error) {};
								setTimeout(function(){ 
									if (arrayAnim.length != 0 && arrayAnim[0].activated==0)
									{
										embed.color="#B90000";
										try { message.edit(embed) } catch(error) {};
										arrayAnim[0].auteur.send("C'est à toi d'animer."); 
									}
								}, 5000);
							}
						}, 5000);
					}
				}).catch(function() {
					//Something
				});
			}
		
		}
		if (command === 'fin') {
			retirerListe(message.author.username,arrayAnim);
			clear(message);
			embed = ecrireListe(arrayAnim);
			msg = message.channel.send(embed).then(function (message) {
				if (arrayAnim.length != 0 && arrayAnim[0].activated == 0) {
					message.react("✅");
					message.react("🟥");
					setTimeout(function(){ 
						if (arrayAnim.length != 0 && arrayAnim[0].activated==0)
						{
							embed.color="#EB7201",
							message.edit(embed);
							setTimeout(function(){ 
								if (arrayAnim.length != 0 && arrayAnim[0].activated==0)
								{
									embed.color="#B90000",
									message.edit(embed);
									arrayAnim[0].auteur.send("C'est à toi d'animer."); 
								}
							}, 5000);
						}
					}, 5000);
				}
			}).catch(function() {
				//Something
			});
		}
		if (command === 'vider') {
			arrayAnim = [];
			clear(message);
			message.channel.send(ecrireListe(arrayAnim));
		}
	}

});

client.on('messageReactionAdd', (reaction, user) => {
	
	let message = reaction.message, emoji = reaction.emoji;
	if (message.channel.id === "743572370018533438") { //ICI CHANGER PAR LE CHANNEL ID
		if ( user.username === arrayAnim[0].auteur.username )
		{
			if(reaction.count > 1) { 
				
				if (emoji.name == '✅') {
					arrayAnim[0].activated = 1;
					clear(message);
					message.channel.send(ecrireListe(arrayAnim));
					
				}
				else if (emoji.name == '🟥') {
					clear(message);
					retirerListe(user.username, arrayAnim);
					message.channel.send(ecrireListe(arrayAnim));
				}
			}
		}
	}
});

function ecrireListe(arrayAnim)
{
	var sortie = "";
	arrayAnim.forEach(function(anim){
		sortie += (anim.activated == 1 ? "[EN COURS] " : "" ) + anim.auteur.username + " ("+ anim.typeanim+") - ";
	});
	if(sortie=="") sortie = "Aucune animation pour le moment.";
	nbanim = sortie.split("-").length;
	color = "B90000";
	if (arrayAnim.length > 0 ) color = "2CB400";
	const exampleEmbed = new MessageEmbed()
					.setColor(color)
					.setTitle('Liste des animations')
					.setAuthor('WibboStaff', 'https://imgur.com/qONhTe9.png', 'http://wibbo.org')
					.setDescription(sortie)
					.setTimestamp()
					.setFooter(( arrayAnim.length > 0 && arrayAnim[0].activated==0 ? "En attente de " + arrayAnim[0].auteur.username : "Par Freah"), 'https://imgur.com/qONhTe9.png');

	return exampleEmbed;
}
function retirerListe(pseudo, arrayAnim)
{
	boole = false;
	arrayAnim.forEach(function(anim){
		if (anim.auteur.username == pseudo && boole == false) 
		{
			if (arrayAnim.indexOf(anim)==0 && arrayAnim.length > 1 && arrayAnim[arrayAnim.indexOf(anim)+1].auteur.username !== pseudo) { 
				arrayAnim[arrayAnim.indexOf(anim)+1].auteur.send("HEOH ! C'est à toi d'animer ;)");
			}
			arrayAnim.splice( arrayAnim.indexOf(anim), 1 );
			boole = true
		}
	});
}

async function clear(message) {
	const fetched = await message.channel.messages.fetch();
	message.channel.bulkDelete(fetched);
}



client.login(process.env.TOKEN);