function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (min - max + 1) + min);
}

// Tableau de citations
let citations = [
  ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi",true],
  ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg",false],
  ["Méritez votre statut de leader chaque jour.", "Mickael Jordan",false],
  ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi",false],
  ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain",false],
  ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot",false],
  ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais",false],
  ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain",false],
  ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy",false],
  ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum",false],
  ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher",false],
  ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick",false],
  ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson",false],
  ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso",false],
  ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill",false],
  ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki",false],
  ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar",false],
  ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy",false],
  ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt",false],
  ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis",false],
  ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill",false]
];