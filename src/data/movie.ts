import { Actor, actors, Award } from '@/data/actor'
import { countries } from '@/data/countries'
import { Category, movieCategories } from '@/data/movie-category'
import { Rating } from '@/data/rating-movie'
import { getRandomFloat, getRandomInt, shuffleArray } from '@/utils/algorithm'

export type Movie = {
  id: string
  title: string
  description: string
  releaseDate: string
  genre: Category[]
  cast: Actor[]
  director: Actor[]
  ratings: Rating
  posterUrl: string
  trailerUrl: string
  duration: number
  country: string
  movieType: string
  budget: number
  awards: Award[]
}

const dataRaw = [
  {
    Title: 'The Exorcism of God',
    Overview:
      'An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/pcqo9D8Bdppt6t9fBliJYPROZkv.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/T65_PSo4dLU?si=fAHe0N5izuzVq3Fg',
  },
  {
    Title: 'The Desperate Hour',
    Overview:
      'A woman desperately races to save her child after police place her hometown on lockdown due to an active shooter incident.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/u6Pg9eTklhg6Aa7kXaxrfdE1Chi.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/kiwCH84GMhE?si=RHxzxRk2gKL_hCE6',
  },
  {
    Title: 'The Deep House',
    Overview:
      'While diving in a remote French lake, a couple of YouTubers who specialize in underwater exploration videos discover a house submerged in the deep waters. What was initially a unique finding soon turns into a nightmare when they discover that the house was the scene of atrocious crimes. Trapped, with their oxygen reserves falling dangerously, they realize the worst is yet to come: they are not alone in the house.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/5xhAPxRr64oQPEFnUOrttuI4ZEU.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/_SWoaOdv_q0?si=EMI_zLlpDre0oqDU',
  },
  {
    Title: 'Boruto: Naruto the Movie',
    Overview:
      "The spirited Boruto Uzumaki, son of Seventh Hokage Naruto, is a skilled ninja who possesses the same brashness and passion his father once had. However, the constant absence of his father, who is busy with his Hokage duties, puts a damper on Boruto's fire. He ends up meeting his father's friend Sasuke, and requests to become... his apprentice!? The curtain on the story of the new generation rises!",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/Qyonn5Vbg7s?si=07gJWUvmMDvR0jSo',
  },
  {
    Title: 'Coco',
    Overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/xlnPHQ3TLX8?si=JUV7xkVO819nnNkh',
  },
  {
    Title: 'Avengers: Endgame',
    Overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/TcMBFSGVi1c?si=c4D7tsUi2Z3thrkr',
  },
  {
    Title: 'Tarumama',
    Overview:
      'Sara and Óscar, a couple going through a marital crisis, decide to spend a week in a remote country cabin with their two children, Alicia and Tomás. The family tries to have a quiet time, but something strange happens there. There is a woman who prowls through the forest and cries uncontrollably looking for a baby she has just lost. This deeply affects the family who will have to stay together to survive this nightmare.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/iwlmZKndp7fIfHbxVzQtk9zby3A.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/y9CZcWEI3zg?si=EWyuRF6H8O58iD65',
  },
  {
    Title: 'Tom & Jerry',
    Overview:
      'Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/8XZI9QZ7Pm3fVkigWJPbrXCMzjq.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/kP9TfCWaQT4?si=mrdYdF6KGyrghlGP',
  },
  {
    Title: 'Raya and the Last Dragon',
    Overview:
      'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/1VIZ89FEjYI?si=33g2AQWRauuBfpW6',
  },
  {
    Title: 'Dragon Fury',
    Overview:
      'A group of soldiers are taken to the mountains of Wales to investigate a strange looking monster.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/6WcJ4cV2Y3gnTYp5zHu968TYmTJ.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/uJ7ImjaB9d0?si=9oVJ7JzdE9iOEJ1f',
  },
  {
    Title: 'The Fallout',
    Overview:
      'In the wake of a school tragedy, Vada, Mia and Quinton form a unique and dynamic bond as they navigate the never linear, often confusing journey to heal in a world that feels forever changed.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/y94auaBWq1E7sun3ZpvBmQfGUW.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/Gtl-6RCOl84?si=l7hZ87VyZYxJusGU',
  },
  {
    Title: 'Halloween Kills',
    Overview:
      "The nightmare isn't over as unstoppable killer Michael Myers escapes from Laurie Strode's trap to continue his ritual bloodbath. Injured and taken to the hospital, Laurie fights through the pain as she inspires residents of Haddonfield, to rise up against Myers. Taking matters into their own hands, the Strode women and other survivors form a vigilante mob to hunt down Michael and end his reign of terror once and for all.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/qmJGd5IfURq8iPQ9KF3les47vFS.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/hL6R3HmQfPc?si=8MAv4eND21-80RLL',
  },
  {
    Title: 'The Addams Family 2',
    Overview:
      'The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/Kd82bSBDE84?si=x6bgui0z0Iw83_Os',
  },
  {
    Title: 'Home Team',
    Overview:
      'Two years after a Super Bowl win when NFL head coach Sean Payton is suspended, he goes back to his hometown and finds himself reconnecting with his 12-year-old son by coaching his Pop Warner football team.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/xdPdVJGIQjuVhK7SeK5fpjuc1bu.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/xppbyXSxPlo?si=82iZxhn94pCODXe0',
  },
  {
    Title: 'Infinite',
    Overview:
      'Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/a3RDnD9YVxA?si=kTSOgWd_4aAvwg3Q',
  },
  {
    Title: 'Wrath of Man',
    Overview:
      "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/M7SUK85sKjaStg4TKhlAVyGlz3.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/EFYEni2gsK0?si=lMdhCC9wUutt0DbF',
  },
  {
    Title: 'Fortress',
    Overview:
      'The story revolves around a top-secret resort for retired U.S. intelligence officers. A group of criminals led by Balzary breach the compound, hellbent on revenge on Robert, forcing the retired officer and his son to save the day.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/vQxtoPJVfpHgL7DCg9hQFZKDWJa.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/GNGXauix9Mo?si=pfRgCQ2xYQcROv1E',
  },
  {
    Title: 'Space Jam: A New Legacy',
    Overview:
      "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/olXYZOsXw_o?si=dZGQ6QXAz68RBliH',
  },
  {
    Title: 'Laura y el misterio del asesino inesperado',
    Overview:
      "After years of leave, Laura Lebrel returns to action. Lydia asks him for help on a case: Eugenio Ortiz, Laura's former instructor, has been murdered. But a new detective, Hector, finds evidence that incriminates Laura. She asks to be allowed to find the killer and Lydia gives her 24 hours to solve the case before arresting her.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/p6T9g5a227cUs4rlTlaxo8QAqIf.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/ltErl9B5Fo0?si=jin4xortlYxfP1nr',
  },
  {
    Title: 'The Conjuring: The Devil Made Me Do It',
    Overview:
      "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/h9Q4zZS2v1k?si=c5HydKobSd8Ms88m',
  },
  {
    Title: 'Batman Begins',
    Overview:
      'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/8RW2runSEc34IwKN2D1aPcJd2UL.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/neY2xVmOfUM?si=AiiX3BsyFvMtQBt0',
  },
  {
    Title: 'The Royal Treatment',
    Overview:
      'Isabella runs her own salon and isn’t afraid to speak her mind, while Prince Thomas runs his own country and is about to marry for duty rather than love. When Izzy and her fellow stylists get the opportunity of a lifetime to do the hair for the royal wedding, she and Prince Thomas learn that taking control of their own destiny requires following their hearts.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/mYAv0YUoXJzLxIdEirOken8Quwf.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/E3G0CmhcD1o?si=uIHYi15EKBuswx0l',
  },
  {
    Title: 'Ripper Untold',
    Overview:
      'A detective and a medical examiner join forces to solve a series of horrific murders in Victorian London - but one of them harbors a deadly secret.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/4msDckyD51Fx3qzVRHtb3lFHo2c.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/WH2Bdsya0GU?si=BMYf_ZNKy8_gdoUa',
  },
  {
    Title: 'Meander',
    Overview:
      'After getting a car ride from an unknown man, Lisa wakes up in a tube. On her arm is strapped a bracelet with a countdown. She quickly understands that every 8 minutes, fire burns an occupied section. She has no choice but to crawl into safe sections to survive. To know why she’s there and how to get out, Lisa will have to face the memories of her dead daughter…',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/2OTIAx8AmwGCaXmq5ohQCyPUjdC.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/u1Q5jWpRCL4?si=N6k-x4hoNGaQ68tr',
  },
  {
    Title: 'Zeros and Ones',
    Overview:
      "Called to Rome to stop an imminent terrorist bombing, a soldier desperately seeks news of his imprisoned brother — a rebel with knowledge that could thwart the attack. Navigating the capital's darkened streets, he races to a series of ominous encounters to keep the Vatican from being blown to bits.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/a6balsDWCFMHPaPT6rFoBpNjR6z.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/_GiS4ofPIsY?si=4FAc9ZDRp6j3s5nO',
  },
  {
    Title: 'Survive the Game',
    Overview:
      'When cop David is injured in a drug bust gone wrong, his partner Cal chases the two criminals who shot him. They all land at a remote farm owned by troubled vet Eric, and as Cal and Eric plot their defense, more of the gang arrives - along with a wounded David. Outnumbered, the three heroes must use stealth, smarts, and good shooting to take down the drug-dealing mob.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/xF1uc2pEf34X2G41wvZaF5H0V7C.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/xT8uydi9bDQ?si=SvHyWkrnaafdsf1h',
  },
  {
    Title: 'Riverdance: The Animated Adventure',
    Overview:
      'A young Irish boy named Keegan and Spanish girl named Moya journey into a magical world of the Megaloceros Giganteus who teach them to appreciate Riverdance as a celebration of life. Based on the stage show phenomenon of the same name and featuring Bill Whelan’s multi-platinum Grammy Award-winning music.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/i6TRDlVuuEXMyLSlIkDd8YhBN0r.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/ZN6TgXnNVGQ?si=Dki5AZRIWPUi_nXg',
  },
  {
    Title: 'Apex',
    Overview:
      'Ex-cop Thomas Malone is serving a life sentence for a crime he didn’t commit. He is offered a chance at freedom if he can survive a deadly game of Apex, in which six hunters pay for the pleasure of hunting another human on a remote island. He accepts, and once he arrives, all hell breaks loose.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/zeVwKk7_XHs?si=nnUYU2UawwTvtMDS',
  },
  {
    Title: 'The Tinder Swindler',
    Overview:
      'Posing as a wealthy, jet-setting diamond mogul, an Israeli conman wooed women online then conned them out of millions of dollars. Now some victims plan for payback.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/iLUSFjdavIf0SrP7ldoQ1xomQVC.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/sNO4X__dagA?si=b0bn0etmVaWx4hl3',
  },
  {
    Title: 'Love Tactics',
    Overview:
      "An ad executive and a fashion designer-blogger don't believe in love, so they place a bet to make the other fall head over heels - with unusual tactics.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/8RyASTsrKKRnQ9xSGJDuImD8cjX.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/NzkJEnWzLc4?si=aSjkNmeYW4Oy8nMD',
  },
  {
    Title: 'Miraculous World: Shanghai – The Legend of Ladydragon',
    Overview:
      'On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/qQ0VKsGRQ2ofAmswGNzZnvC1xPE.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/TF63WzwuBcM?si=yHP6YbkPTtn--tqU',
  },
  {
    Title: 'Ciao Alberto',
    Overview:
      "With his best friend Luca away at school, Alberto is enjoying his new life in Portorosso working alongside Massimo – the imposing, tattooed, one-armed fisherman of few words – who's quite possibly the coolest human in the entire world as far as Alberto is concerned. He wants more than anything to impress his mentor, but it's easier said than done.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/1SyTnaY0wte69oKdqxQLvxPT3hs.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/KJZS7oXX5SE?si=G4Hqqb9jdL3_syfd',
  },
  {
    Title: 'The Amazing Spider-Man 2',
    Overview:
      'For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/DlM2CWNTQ84?si=Zdf2e-rXMFuVlVqb',
  },
  {
    Title: 'The Avengers',
    Overview:
      'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/eOrNdBpGMv8?si=V8VfXYjZksipcjMs',
  },
  {
    Title: 'Surviving Paradise: A Family Tale',
    Overview:
      'As the Kalahari Desert faces a worsening dry season, prides, packs and herds of all kinds must rely on the power of family to survive.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/c7cA49RgpTYgk7Db3XAzb8vExAD.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/K3udBGJNd5Y?si=fnaZWus_lg_sVjOM',
  },
  {
    Title: 'My Hero Academia: Heroes Rising',
    Overview:
      "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/zGVbrulkupqpbwgiNedkJPyQum4.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/3lnt41tVygI?si=LEQe8XI9PDY8H6c4',
  },
  {
    Title: 'Amina',
    Overview:
      "In 16th-century Zazzau, now Zaria, Nigeria, Amina must utilize her military skills and tactics to defend her family's kingdom. Based on a true story.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/hMIQiwLpBfTfe3ZbRlNx4225Mgg.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/RW87asYGq7g?si=QvOJDGVrTwjIzRcY',
  },
  {
    Title: 'Encounter',
    Overview:
      'A decorated Marine goes on a rescue mission to save his two young sons from an unhuman threat. As their journey takes them in increasingly dangerous directions, the boys will need to leave their childhoods behind.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/tUkY0WxffPZ9PoyC62PIyyUMGnt.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/cSI8FbGYPJQ?si=7-P8ph9OyR_JxUfx',
  },
  {
    Title: 'The Whole Truth',
    Overview:
      'When two siblings stumble on a strange hole in the wall of their grandparents’ house, horrifying incidents reveal sinister secrets about their family.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/bPq6x47nEqMZED5PrKelcWWpezM.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/XZj7DFQEWwo?si=abTL6ts8STlxalRw',
  },
  {
    Title: 'Catwoman: Hunted',
    Overview:
      "Catwoman's attempt to steal a priceless jewel puts her squarely in the crosshairs of both a powerful consortium of villains and the ever-resourceful Interpol, not to mention Batwoman.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/iu01cvxs3eLQzra3YNF1pbpXIZa.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/PYPqTLS_g9c?si=vPLvq5a3RGRPj8gb',
  },
  {
    Title: 'Hacksaw Ridge',
    Overview:
      'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/fTuxNlgEm04PPFkr1xfK94Jn8BW.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/s2-1hz1juBI?si=2FWIr_Kw5DVuGGb_',
  },
  {
    Title: 'Crazy Fist',
    Overview:
      "After an opponent dies mid-match, a prominent MMA champion swore never to fight again and retired to run his family's company. But when his best friend dies under suspicious circumstances, he has no choice but to step back in the ring.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/jVAEVDNdUPRKJ7hJ4zt6lGcLATD.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/Tu9JBisaC34?si=CF9422vlabMCDMwI',
  },
  {
    Title: "Harry Potter and the Philosopher's Stone",
    Overview:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/VyHV0BRtdxo?si=Y0Qd5zR5acfEMVK7',
  },
  {
    Title: 'Doctor Strange',
    Overview:
      'After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/aWzlQ2N6qqg?si=dJoh9gYUWYO35X_8',
  },
  {
    Title: 'Spider-Man: Far From Home',
    Overview:
      'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/Nt9L1jCKGnE?si=C7ZuK93IClWY1STz',
  },
  {
    Title: 'Harry Potter 20th Anniversary: Return to Hogwarts',
    Overview:
      'An enchanting making-of story told through all-new in-depth interviews and cast conversations, inviting fans on a magical first-person journey through one of the most beloved film franchises of all time.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/jntLBq0MLR3hrwKaTQswxACRPMs.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/fFGS4zZWGoA?si=SqCysrfCiaG3djPz',
  },

  {
    Title: "Dragon Ball Z: Resurrection 'F'",
    Overview:
      "One peaceful day on Earth, two remnants of Frieza's army named Sorbet and Tagoma arrive searching for the Dragon Balls with the aim of reviving Frieza. They succeed, and Frieza subsequently seeks revenge on the Saiyans.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/soq3AxjALdBfdPAm8H7yuMmNL5Y.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/WiONylGn8Xw?si=vdmOfkyNhSCpC9Lq',
  },
  {
    Title: 'Seal Team',
    Overview:
      'After his best friend is killed in a shark attack, Quinn, a lovable yet tenacious seal assembles a SEAL TEAM to fight back against a gang of sharks overtaking the neighborhood. But this merry band of international seals are not at all trained for such a mission. They seek the help of a much more skillful combatant, Claggart, but even his tricks and flips can’t whip these guys into shape. However, with a little bit of ingenuity, intelligence and a lot of heart, our SEAL TEAM may actually be able to bring peace back to their undersea community.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/yPZ3I27oeSm4zVesgMxXlhW8GDe.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/3k9o6y-wjMg?si=b8vqDKH4QxUKLZnP',
  },
  {
    Title: 'Knowing',
    Overview:
      "A teacher opens a time capsule that has been dug up at his son's elementary school; in it are some chilling predictions -- some that have already occurred and others that are about to -- that lead him to believe his family plays a role in the events that are about to unfold.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/nO9gTGDNdYnPr9ILKNQmk6EVTVR.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/C2zSFElhgE0?si=poqjrYOR-FKC7CnL',
  },
  {
    Title: 'Witch Hunt',
    Overview:
      'In a modern America where witches are real and witchcraft is illegal, a sheltered teenager must face her own demons and prejudices as she helps two young witches avoid law enforcement and cross the southern border to asylum in Mexico.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/vHKlIci8f38GaAd361EW0VSx91k.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/2II-EAPNR1Y?si=IdQjBa_75QR7WoSl',
  },
  {
    Title: 'The Maze Runner',
    Overview:
      "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/ode14q7WtDugFDp78fo9lCsmay9.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/AwwbhhjQ9Xk?si=t2mdSrrbp0Ng5rVv',
  },
  {
    Title: 'The Unholy',
    Overview:
      'Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/cFOWiYDQ8Nttmt0K6PU38L48wWK.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/wohncvqwQuE?si=xhZ_x5upcJ5bYRBB',
  },
  {
    Title: 'Ashfall',
    Overview:
      'A group of unlikely heroes from across the Korean peninsula try to save the day after a volcano erupts on the mythical and majestic Baekdu Mountain.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/gCZ0RHifBxZGedde7WPWSgjpyZt.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/24T47vQA0fY?si=BrF-6Kvv7wQzCuui',
  },
  {
    Title: 'The Sky Is Everywhere',
    Overview:
      "Lennie is a teen musical prodigy grieving the death of her sister when she finds herself caught between a new guy at school and her sister's devastated boyfriend. Through her vivid imagination and conflicted heart, Lennie navigates first love and first loss.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/qMVUlq6rdqFo1xZ5ozQcKFCDbgj.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/7R_5fSWvGs4?si=51ycEJy2CFQloqxL',
  },
  {
    Title: 'Time Is Up',
    Overview:
      'Vivien, an accomplished student with a passion for physics, and Roy, a troubled young man, are involved in an accident that forces them to reclaim their lives one minute at the time.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/dxWHyMY4HoXH8LiEhYlga2OtK5B.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/YI_Y4agNZa0?si=jmSuz9gN5Gh-hMfM',
  },
  {
    Title: 'Harry Potter and the Chamber of Secrets',
    Overview:
      'Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/nE11U5iBnH0?si=-eH5yOZQM5yPpA15',
  },
  {
    Title: 'Sonic the Hedgehog',
    Overview:
      'Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/qSu6i2iFMO0?si=zSAfZ_ZgfedUivvt',
  },
  {
    Title: 'Ava',
    Overview:
      'Ava, 13, is spending the summer on the Atlantic coast when she learns that she will lose her sight sooner than expected. Her mother decides to act as if everything were normal so as to spend their best summer ever. Ava confronts the problem in her own way. She steals a big black dog that belongs to a young man on the run...',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/cUI1PFsrQVJR3IZOpkfsOOOUhTO.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/ZyCXmbJnzrI?si=SxlU4UVdgcOKsRnm',
  },
  {
    Title: 'Fury',
    Overview:
      "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/q94n3eWOWXM?si=zAI7qzj-73PxBNAZ',
  },
  {
    Title: "Don't Breathe 2",
    Overview:
      'The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/r7HEBkkRN93d3eFBZgPJfRaob5p.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/gRbG2tjHYCA?si=Rev5U6NFXIJ0zEAz',
  },
  {
    Title: 'Matando Cabos 2: La Máscara del Máscara',
    Overview:
      'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/vu3CfSqxNzmnSU8SrWLDTHzspk9.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/iC8407QNBZ8?si=RYsMeZkEmeI0CFtW',
  },
  {
    Title: 'Monster Hunter',
    Overview:
      'A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/1UCOF11QCw8kcqvce8LKOO6pimh.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/BeON-bSbrL4?si=0QCDUyjFWhSirXGS',
  },
  {
    Title: 'The Last: Naruto the Movie',
    Overview:
      'Two years after the events of the Fourth Great Ninja War, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world, threatening to become a meteor that would destroy everything on impact. Amidst this crisis, a direct descendant of Kaguya Otsutsuki named Toneri Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting her younger sister Hanabi. Naruto and his allies now mount a rescue mission before finding themselves embroiled in a final battle to decide the fate of everything.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/tA3yE4_t6SY?si=S-1IeCHGR-dnKu47',
  },
  {
    Title: 'Spider-Man: Homecoming',
    Overview:
      'Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/rk-dF1lIbIg?si=ZvTuIyKTtU09CLEU',
  },
  {
    Title: 'Bigbug',
    Overview:
      "Humans have ceded most tasks to AI in 2045, even in nostalgic Alice's home. So when robots stage a coup, her androids protectively lock her doors.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/73Eh5dm6O604kgYY69oQVOeSOvZ.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/V8Y_hvBnA7M?si=PZVNtWSaugBLoLKo',
  },
  {
    Title: 'Spider-Man',
    Overview:
      'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
    Trailer_Url: '',
  },
  {
    Title: 'I Am Legend',
    Overview:
      'Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/dtKMEAXyPkg?si=Iyu5qwobSHnVZFqh',
  },
  {
    Title: 'Naruto Shippuden the Movie',
    Overview:
      'Demons that once almost destroyed the world, are revived by someone. To prevent the world from being destroyed, the demon has to be sealed and the only one who can do it is the shrine maiden Shion from the country of demons, who has two powers; one is sealing demons and the other is predicting the deaths of humans. This time Naruto\'s mission is to guard Shion, but she predicts Naruto\'s death. The only way to escape it, is to get away from Shion, which would leave her unguarded, then the demon, whose only goal is to kill Shion will do so, thus meaning the end of the world. Naruto decides to challenge this "prediction of death."',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/vDkct38sSFSWJIATlfJw0l3QOIR.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/5_Jnm7cDnX8?si=jAwi6zzZB7u8XfMI',
  },
  {
    Title: 'Against the Ice',
    Overview:
      "In 1909, two explorers fight to survive after they're left behind while on a Denmark expedition in ice-covered Greenland.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/6FSGYvPEhIx3ThOikGqHmKxeyNN.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/bEyyKwVORvo?si=N5JOemq9BhuL6ugx',
  },
  {
    Title: 'Harry Potter and the Prisoner of Azkaban',
    Overview:
      'Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/VwErvYgoH70?si=hX8IaJcZcgrxmvq8',
  },
  {
    Title: 'The Vault',
    Overview:
      "When an engineer learns of a mysterious, impenetrable fortress hidden under The Bank of Spain, he joins a crew of master thieves who plan to steal the legendary lost treasure locked inside while the whole country is distracted by Spain's World Cup Final. With thousands of soccer fans cheering in the streets, and security forces closing in, the crew have just minutes to pull off the score of a lifetime.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/kWhXubAiIcHW0xn5GThflqaKZqh.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/L41IJiageyg?si=VMRGCZdT-2snBt4l',
  },
  {
    Title: 'The Adam Project',
    Overview:
      'After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/sI3hQMTyrF9F8jU1qA8qPHLKCgG.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/IE8HIsIrq4o?si=02sKOfHtgZMeZBKR',
  },
  {
    Title: 'Deadpool',
    Overview:
      'Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/3E53WEZJqP6aM84D8CckXx4pIHw.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/Xithigfg7dA?si=afRJr_7qrEtGesXW',
  },
  {
    Title: 'The Harder They Fall',
    Overview:
      'Gunning for revenge, outlaw Nat Love saddles up with his gang to take down enemy Rufus Buck, a ruthless crime boss who just got sprung from prison.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/su9WzL7lwUZPhjH6eZByAYFx2US.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/Poc55U2RPMw?si=I15Aa8P55ANPVzgc',
  },
  {
    Title: 'Monsters, Inc.',
    Overview:
      "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
    Poster_Url:
      'https://image.tmdb.org/t/p/original/sgheSKxZkttIe8ONsf2sWXPgip3.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/6tCxnHCqqxg?si=JPrFcHVpPiC02RxT',
  },
  {
    Title: 'Ainbo: Spirit of the Amazon',
    Overview:
      'An epic journey of a young hero and her Spirit Guides, \'Dillo\' a cute and humorous armadillo and "Vaca" a goofy oversized tapir, who embark on a quest to save their home in the spectacular Amazon Rainforest.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/l8HyObVj8fPrzacAPtGWWLDhcfh.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/fMbV1BDlmqQ?si=cXob7z3_-9-kAk9f',
  },
  {
    Title: "Don't Look Up",
    Overview:
      'Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.',
    Poster_Url:
      'https://image.tmdb.org/t/p/original/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg',
    Trailer_Url:
      'https://www.youtube.com/embed/RbIxYm3mKzI?si=OgwuSQc61qSsVjOz',
  },
]

export const movies: Movie[] = dataRaw.map((item, index) => {
  let movieId
  if (index + 1 < 10) {
    movieId = `0000000000000000movie00${index + 1}`
  } else if (index + 1 < 100) {
    movieId = `0000000000000000movie0${index + 1}`
  } else if (index + 1 < 1000) {
    movieId = `0000000000000000movie${index + 1}`
  }
  return {
    id: movieId,
    title: item.Title,
    description: item.Overview,
    releaseDate: '2025-06-01T17:00:00.000+00:00',
    posterUrl: item.Poster_Url,
    trailerUrl: item.Trailer_Url,
    genre: shuffleArray(movieCategories).slice(0, 3),
    cast: shuffleArray(actors).slice(0, 4),
    director: [],
    ratings: {
      averageRating: getRandomFloat(3, 5, 1),
      numberOfRatings: getRandomInt(20, 200),
    },
    duration: getRandomInt(120, 180),
    country: countries[getRandomInt(0, countries.length - 1)].value,
    movieType: 'SINGLE',
    budget: getRandomInt(100, 999) * 1000000,
    awards: [],
  }
})
