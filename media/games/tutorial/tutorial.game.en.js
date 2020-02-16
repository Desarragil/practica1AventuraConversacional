// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "1bb6fe3e-aee2-47c7-b5d7-61616667f03f";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {

    	inicio: new undum.SimpleSituation(
        	"<p>Es el día anterior al examen de estadística y te encuentras\
		 en tu cuarto, cenado y listo para acostarte. Te has estado\
		 preparando el examen durante los tres últimos meses y te\
		 sientes confiado.</p>\
		</br>\
		<p class='transient'>Llegados a este punto podrías\
		 <a href='acostarse'>acostarte</a> directamente y descansar\
		 tus ocho horas, si los nervios te lo permiten. Dado el estado\
		 de nerviosismo que te suscita el examen de mañana, podrías\
		 <a href='repasar'>repasar los temas que más te cuestan</a>\
		 para autoconvencerte de que te va a salir bien y así poder\
		 dormir tranquilo. Otra opción sería la de<a href='youtube'>\
		coger el móvil y sumergirte en YouTube</a>: has estado\
		 estudiando estos meses y estás preparado de sobra, te mereces\
		 un poco de ocio antes de la prueba final, no va a pasar nada.\
		</p></br>"
  	),

	repasar: new undum.SimpleSituation(
		"<p>Te sientas en tu escritorio, coges los apuntes de teoría y\
		 te enfrascas en la tarea de dar un último repaso a esos\
		 conceptos que tanto te cuesta entender. Sin darte cuenta miras\
		 tu móvil y ves que han pasado casi dos horas desde que te\
		 sentaste. Corriendo, te pones el pijama, pones una alarma a\
		 una hora prudente y te metes en la cama. No tienes problema\
		 para caer dormido al instante.</p></br>",
		{
		enter: function(character, system, to) {
			system.setQuality("descansado", 1);
			system.setQuality("hambriento",1);
			system.doLink('teduermes')		       
			}
		}
	),

	youtube: new undum.SimpleSituation(
		"<p>Te metes en la cama, coges el móvil, abres YouTube y buscas\
		 ese canal que tanto te gusta ver. Ves un video, al terminar\
		 ves el siguiente, y otro video, y otro, y otro...</p>\
		</br>\
		<p>Un olor a comida te invade. Recuerdas que hoy es tu examen y\
		 abres los ojos de par en par, vas a buscar tu móvil en la\
		 mesita para mirar la hora pero no lo encuentras. Te incorporas\
		 y ves que tu móvil está en la almohada, ahora lo recuerdas:\
		 anoche estuviste viendo YouTube antes de acostarte. Miras la\
		 hora: las 14:27. Un escalofrío recorre tu espalda, te quedaste\
		 frito anoche, se te olvidó poner la alarma y te has quedado\
		 dormido. Buscando un atisbo de esperanza vas a revisar la hora\
		 del examen en docencia virtual para comprobar lo que ya sabías\
		 de sobra: el examen era a las 09:00. Todo el trabajo que has\
		 realizado se ha ido a la porra por unos minutos de ocio.</p>",
		{
		enter: function(character, system, to) {
					system.setQuality("descansado", 1);
					system.setQuality("hambriento", 1)
				}
		}
	),

	acostarse: new undum.SimpleSituation(
		"<p>Decides meterte en la cama y dormirte ya, no sin antes\
		 olvidarte de coger el móvil, poner una alarma a una hora\
		 prudente y dejarlo en la mesita de noche. Tras un tiempo sin\
		 poder dormirte, notas como se cierran tus parpados lentamente\
		 y sucumbes al sueño.</p></br><p>Un eco retumba en tu cabeza;\
		 es la alarma.</p></br><p class='transient'>Podrías\
		 <a href='apagaralarma'>apagarla y levantarte</a> o bien\
		 <a href='teduermes'>posponerla 10 minutos</a>, al fin y al\
		 cabo estar bien descansado para el día de hoy es\
		 importante.</p>",
		{
		exit: function(character, system, to) {
					system.setQuality("descansado", 1);
					system.setQuality("hambriento", 1)
				}
		}
	),

	apagaralarma: new undum.SimpleSituation(
		"<p>Apagas la alarma y miras la hora, todo va sobre ruedas. Si\
		 bien anoche te costó un tiempo dormirte porque estabas un poco\
		 nervioso te sientes descansado y con un poco de hambre.\
		 Podrías <a href='./desayunar' class='once'>desayunar</a>\
		 para coger fuerzas, <a href='./ducharte' class='once'>ducharte\
		</a> o bien <a href='revisarmochila'>revisar la mochila</a>\
		 para comprobar si tienes todo lo necesario, por si las moscas.\
		</p></br>",
		{
            		actions: {
                		"desayunar": function(character, system, to) {
                			system.setQuality("hambriento", 0);
					system.write(
				"<p>Te diriges a la cocina en\
				 busca de un buen café que te espabile y esos\
				 cereales que tanto te gustan. Terminas de\
				 desayunar y regresas a tu cuarto.</p></br>")},

				"ducharte": "<p>Te diriges al baño dispuesto\
				 a darte una ducha. Tras ducharte te dispones\
				 a lavarte los dientes y aliviar un poco la\
				 vejiga para evitar imprevistos durante el\
				 examen, que nunca se sabe.</p></br>"
            		}
        	}
	),

	revisarmochila: new undum.SimpleSituation(
		"<p>Te acercas a la mochila que descansa a los pies de tu\
		 escritorio y la abres para inspeccionarla. Deberían de estar\
		 dentro tu <a href='./buscarcalculadora' class='once'>\
		calculadora</a>, <a href='./buscartablas' class='once'>tus\
		 tablas de distribuciones</a> y tu <a href='./buscarcartera'\
		 class='once'>cartera</a> con tu DNI.</p></br>",
		{
			actions: {
				"buscarcalculadora": function(character, system,
									 to) {
                		system.setQuality("calculadora", 1);
				system.write( 
				"<p>Miras en el bolsillo\
				 exterior de tu mochila, donde sueles guardar\
				 el estuche y la calculadora tras pasar la\
				 jornada estudiando en la biblioteca y ahí\
				 esta: tu calculadora, justo donde la dejaste\
				 el día anterior.</p></br>")},

				"buscartablas": function(character, system, to) 
				{
                		system.setQuality("tablas", 1);
				system.write(
				"<p>Buscas con la mirada en el\
				 bolsillo más grande y encuentras las tablas de\
				 distribuciones con las que estuviste\
				 trabajando ayer por la mañana.</p></br>")},

				"buscarcartera": "<p>Buscas y rebuscas en la\
				 mochila y no encuentras tu cartera, seguro que\
				 ayer se te pasó guardarla aunque creyeras\
				 recordar que sí lo hiciste. Tras hacer memoria\
				, estás seguro de que debe de estar en los\
				 <a href='./pantalones' class='once'>pantalones\
				</a> o en la <a href='./chaqueta' class='once'>\
				chaqueta</a> que te pusiste ayer para ir a la\
				 biblioteca por la mañana.</p></br>",

				"pantalones": "<p>Buscas con la mano en los\
				 bolsillos de tu pantalón y no encuentras nada,\
				 empiezas a preocuparte ante la idea de perder\
+				 demasiado tiempo buscando el DNI.</p></br>",

				"chaqueta": function(character, system, to) {
                		system.setQuality("dni", 1);
				system.write(
				"<p>Rebuscas en la chaqueta y en el\
				 bolsillo interior ahí está, tu cartera. La\
				 abres y compruebas que, efectivamente,\
				 contiene tu DNI. La depositas en el bolsillo\
				 más chico de tu mochila, te la echas a la\
				 espalda y <a href='examen'>te diriges al\
				 examen</a>.</p></br>")}
			}
		}
	),

	teduermes: new undum.SimpleSituation(
		"<p>Apagas la alarma y miras la hora; han pasado casi 45\
		 minutos desde que sonó la alarma y has estado posponiéndola\
		 inconscientemente todo este tiempo. Te levantas agitado y\
		 piensas rápido: no hay tiempo para desayunar, prefieres pasar\
		 hambre a llegar tarde al examen que has estado preparando\
		 durante tanto tiempo. Tampoco hay tiempo para ducharse, es un\
		 lujo que no te puedes permitir ahora mismo.</p></br>\
		<p class='transient'>Tras pensarlo, solo ves dos opciones\
		 posibles: podrías <a href='revisarmochila'>revisar la mochila\
		</a> corriendo para comprobar que llevas todo o\
		 <a href='examen'>salir corriendo</a> para no\
		 desperdiciar ni un solo segundo más de tiempo.</p>",
	),

	examen: new undum.SimpleSituation(
		"",

		{
		enter :function(character, system, to) {
				if ( character.qualities.tablas == 0 ) {
					system.setQuality("tablas", 1);
					system.setQuality("calculadora", 1)
				}

				if (character.qualities.dni == 0) {
          				system.write("<p>Buscas en tu mochila y\
					 encuentras tu calculadora y tus tablas\
					 de distribución, sigues buscando y no\
					 encuentras tu cartera. Buscas una, dos\
					 y cinco veces y no aparece. Nervioso\
					 acudes a la profesora para contarle tu\
					 situación y conseguir que te deje\
					 sentarte en tu sitio. Tras discutir\
					 con la profesora durante 5 minutos\
					 consigues que se enfade y que te\
					 expulse del aula. Has suspendido, todo\
					 el trabajo de estos tres últimos meses\
					 no ha servido de nada.</p></br>");
        			} else {
					system.write("<p>Sacas de tu mochila la\
					 calculadora, las tablas de \
					distribución y tu DNI. Acto seguido, \
					dejas la mochila con el resto de \
					mochilas de tus compañeros y te diriges\
					 a tu asiento. Una vez allí y estando \
					todos listos, la profesora procede a \
					entregar el examen.</p></br>");
					if(character.qualities.hambriento == 1) 
					{
						system.write("<p>Empiezas a \
						hacer el examen y pasados 30 \
						minutos te encuentras fatigado,\
						 recuerdas que esta mañana no\
						 desayunaste. Haces un esfuerzo\
						 por concentrarte en el examen\
						 y sigues con ello, por un \
						momento crees tenerlo todo \
						controlado pero de repente todo\
						 se vuelve negro. Te ha dado un\
						 bajón de azúcar y te has \
						desmayado en mitad del examen, \
						todo el trabajo de estos tres \
						últimos meses no ha servido de \
						nada.</p></br>");
					} else if (character.qualities.descansado 
									== 0 ) 
					{
						system.write("<p>Te dispones a \
						realizar el examen. Te sientes \
						un poco cansado pero seguro de \
						lo que estás respondiendo, lo \
						has hecho mil veces estos \
						últimos tres meses de estudio. \
						Tras tres duras horas \
						poniéndote a prueba estás \
						agotado y decides entregar el \
						examen después de echarle un \
						vistazo rápido a todomlo que \
						has contestado; estás muerto \
						de sueño y en lo único que \
						piensas es en la siesta que te \
						vas a dar como merecido premio \
						al llegar a casa. Tras unas \
						semanas, ves que has suspendido\
						 con mucha menos nota de la que\
						 esperabas. Vas a revisión y \
						compruebas que todo el examen \
						está plagado de fallos tontos y\
						 erratas. Solo hay una \
						explicación posible; no \
						descansaste lo suficiente y el \
						día del examen no estabas al \
						100%. Todo el trabajo de estos \
						tres últimos meses no ha \
						servido de nada.</p></br>");
					} else {
						system.write("<p>Te dispones a \
						realizar el examen. Te sientes \
						confiado y con fuerzas, seguro \
						de lo que estás respondiendo, \
						lo has hecho mil veces estos \
						tres meses de estudio. Tras \
						tres duras horas poniéndote a \
						prueba terminas el examen y \
						aún quedan unos minutos para \
						que acabe el tiempo del examen.\
						 Decides repasar el examen y no\
						 jugártela por terminar pronto.\
						 Mientras revisas el examen \
						encuentras cuatro errores \
						tontos que has cometido; los \
						corriges, escribes tu nombre y \
						lo entregas. Semanas después \
						recibes tu nota: matrícula de \
						honor. Todo el trabajo de los \
						últimos tres meses ha dado su \
						recompensa.</p></br>");
					}
				}
			}
		}
	),
} 

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "inicio";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {

	calculadora: new undum.OnOffQuality("Calculadora",{
	priority:"0001", 
	group:'mochila',
	onDisplay:"&#10003;"}),

	tablas: new undum.OnOffQuality("Tablas de distribución",{
	priority:"0002", 
	group:'mochila',
	onDisplay:"&#10003;"
	}),

	dni: new undum.OnOffQuality("DNI",{
	priority:"0003", 
	group:'mochila',
	onDisplay:"&#10003;"}),
		
	descansado: new undum.YesNoQuality("Descansado",{
	priority:"0001",
	group:'estado',
	yesDisplay:"Sí",
	noDisplay:"No"}),
	
	hambriento: new undum.YesNoQuality("Hambriento",{
	priority:"0002",
	group:'estado',
	yesDisplay:"Sí",
	noDisplay:"No"}),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {

    mochila: new undum.QualityGroup('Mochila', {priority:"0001"}),
    estado: new undum.QualityGroup('Estado físico', {priority:"0002"}),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {

	character.qualities.calculadora = 0;
    	character.qualities.tablas = 0;
    	character.qualities.dni = 0;
    	character.qualities.descansado = 0;
    	character.qualities.hambriento = 0;
};
