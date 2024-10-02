import {
  IoPeopleOutline,
  IoPersonOutline,
  IoPlayCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

interface ContentItem {
  key: string;
  content: string[];
  title: string;
  startContent: React.ComponentType<{ size?: number }>;
}

export const aboutMe: ContentItem[] = [
  {
    key: "1",
    content: [
      "Cuenta dedicada especificamente a la interpretación literaria de más un personaje ficticio. No se permiten perfiles exclusivos para icons, memes y shitpost.",
      "Poseo más de una cuenta para este hobby, cada una con su propio estilo; pero todas destinadas al reolpleay y procuraré ordenarlas cuanto antes.",
      "Con frecuencia hago una pequeña limpieza dentro del muro del perfil, ya que prefiero tener este espacio para el rol, búsquedas, etc y así pueda acceder más rápido a ellos.",
      "Puedo rolear a través del muro o usar incluso el chat privado para ello, crear grupos de messenger o algún otro medio. Pero si me preguntan por alguna preferencia, el muro definitivamente.",
      "Detesto las etiquetas masivas, por favor evitame eliminar la etiqueta de tu publicación o en su defecto eliminarte de los contactos.",
      "Cada cierto tiempo realizare eliminación de contactos. Me gusta la actividad, es únicamente lo que busco dentro de este lugar, así que si no tenemos rol o por lo menos una conversación te eliminaré. Nada personal.",
    ],
    title: "Account",
    startContent: IoSettingsOutline,
  },
  {
    key: "2",
    title: "Roleplay",
    content: [
      "Redacto mis respuestas en tercera persona, aunque no tengo preferencia por la forma de hacerlo del otro usuario. Pueden sentirse libres de usar cualquier forma de escritura.",
      "Si tuviera que decir que manejo algún número de lineas para cumplir con algún requisito, diría que arriba de sesenta, quién sabe, realmente no las he contado pero todo depende de la inspiración, mi nivel de interés en la trama y la posibilidad de describir lo que acontece en mi turno.",
      "Dentro de lo que redacto, procuro describir lo que mi personaje está pensando, sus acciones y los motivos por los que suele moverse. Es en lo que me centro, y quizá en ocasiones tenga que meter otros personajes o algún secundario.",
      "Me gusta rolear aventura, misterio, fantasía y todo aquello que pueda describir aquellas historias mágicas y medievales. Adoro la comedia, así que si la historia lo permite, tengan por seguro que buscaré incluirlo.",
      "Soy selectivo a la hora de agregar personas, aunque últimamente me he abierto a aceptar cuentas desordenadas con tal de darle la oportunidad a quienes priorizan su escritura antes que el perfil. Me he topado con cada joya.",
    ],
    startContent: IoPlayCircleOutline,
  },
  {
    key: "3",
    title: "Characters",
    content: [
      "Me gusta la exclusividad. Sin embargo, la daré siempre y cuando exista actividad constante y no se trate solo de emparejar porque si. Con esto e refiero a ships nada más, el tema de relaciones amistosas entre personajes la tengo mucho más libre.",
      "Mis personjaes tendrán un desarrollo, si estoy roleando contigo puede que mi personaje ya haya atravesado por algunos obstaculos, lo cual lo hará de alguna forma más 'experimentado'.",
      "Retomando el tema de la exclusividad, prefiero que sea exclusividad de ship y no de personaje. Con esto quiero decir que puede tener más de un ship; pero si se llega a un acuerdo mutuo, hay interés y actividad, claro que puedo vovler exclusivo al personaje.",
    ],
    startContent: IoPeopleOutline,
  },
  {
    key: "4",
    title: "User",
    content: [
      "Pueden referirse a mi como Vadam, aunque no me cierro a diferentes apodos o el nombre del personaje que esté utilizando en cuestión.",
      "Datos personales solo a personas de confianza, no me molesta darlos pero me gusta que exista por lo menos algo de charla y una amistad. ",
      "Pueden acudir a mi chat sin problema alguno, me presto para roelar, preparar una trama o simplemente llevar una charla agradable.",
      "Trabajo de lunes a viernes, y apesar de ello, son los días en los que más responderé. Los fines de semana me gusta usarlos para mi, ya sea descansar o salir con mis amistades y familia. Habrá sus excepciones, pero principalmente será así.",
    ],
    startContent: IoPersonOutline,
  },
];
