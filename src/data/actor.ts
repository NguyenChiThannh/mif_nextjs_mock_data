export type Award = {
  name: string
  date: string
}

export type Actor = {
  id: string
  name: string
  dateOfBirth: string
  bio: string
  awards: Award[]
  profilePictureUrl: string
  createdAt: string
  updatedAt: string
  scoreRank: number
  previousScoreRank: number
  favoriteCount: number
}

export const actors: Actor[] = [
  {
    id: '0000000000000000actor001',
    name: 'Adrien Brody',
    dateOfBirth: '1973-04-14T00:00:00.000+00:00',
    bio: 'Youngest actor to win the Academy Award for Best Actor (The Pianist, 2002).',
    awards: [
      {
        name: 'Academy Award – Best Actor',
        date: '2003-03-23T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTcyNDY5NTgxNV5BMl5BanBnXkFtZTYwNzY4MzQ2._V1_.jpgs',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.85,
    previousScoreRank: 4.8,
    favoriteCount: 1200,
  },
  {
    id: '0000000000000000actor002',
    name: 'Leonardo DiCaprio',
    dateOfBirth: '1974-11-11T00:00:00.000+00:00',
    bio: 'Actor and producer, known for Titanic, Inception, The Revenant.',
    awards: [
      {
        name: 'Academy Award – Best Actor',
        date: '2016-02-28T00:00:00.000+00:00',
      },
      {
        name: 'Golden Globe – Best Actor',
        date: '2016-01-10T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BODJmNDcwOGQtOTk5OC00MDA3LWFkNzMtOGVhYTgyZGQwNmZlXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.95,
    previousScoreRank: 4.92,
    favoriteCount: 5000,
  },
  {
    id: '0000000000000000actor003',
    name: 'Joaquin Phoenix',
    dateOfBirth: '1974-10-28T00:00:00.000+00:00',
    bio: 'Known for playing complex characters; Oscar winner for Joker.',
    awards: [
      {
        name: 'Academy Award – Best Actor',
        date: '2020-02-09T00:00:00.000+00:00',
      },
      {
        name: 'Golden Globe – Best Actor',
        date: '2020-01-05T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI4NTQ1MTQwMF5BMl5BanBnXkFtZTYwMzc3ODM2._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.9,
    previousScoreRank: 4.88,
    favoriteCount: 2300,
  },
  {
    id: '0000000000000000actor004',
    name: 'Daniel Day-Lewis',
    dateOfBirth: '1957-04-29T00:00:00.000+00:00',
    bio: 'Three‑time Academy Award winner, known for intense method acting.',
    awards: [
      {
        name: 'Academy Award – Best Actor',
        date: '1990-03-26T00:00:00.000+00:00',
      },
      {
        name: 'Academy Award – Best Actor',
        date: '2008-02-24T00:00:00.000+00:00',
      },
      {
        name: 'Academy Award – Best Actor',
        date: '2013-02-24T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTg5NTgzMTkzNl5BMl5BanBnXkFtZTYwMTQwNjI2._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.96,
    previousScoreRank: 4.94,
    favoriteCount: 1800,
  },
  {
    id: '0000000000000000actor005',
    name: 'Marilyn Monroe',
    dateOfBirth: '1926-06-01T00:00:00.000+00:00',
    bio: 'Cultural icon of the 1950s–early ’60s.',
    awards: [],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTUyMjgzMjczOF5BMl5BanBnXkFtZTgwNzcyMzQyNDM@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.89,
    previousScoreRank: 4.87,
    favoriteCount: 3000,
  },
  {
    id: '0000000000000000actor006',
    name: 'Tom Hanks',
    dateOfBirth: '1956-07-09T00:00:00.000+00:00',
    bio: 'Two‑time Oscar winner; known for Forrest Gump, Cast Away.',
    awards: [
      {
        name: 'Academy Award – Best Actor',
        date: '1995-03-27T00:00:00.000+00:00',
      },
      {
        name: 'Academy Award – Best Actor',
        date: '1996-03-24T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMjMxOTEyMDY1OV5BMl5BanBnXkFtZTgwMjc5MzQ2MjE@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.94,
    previousScoreRank: 4.92,
    favoriteCount: 4200,
  },
  {
    id: '0000000000000000actor007',
    name: 'Meryl Streep',
    dateOfBirth: '1949-06-22T00:00:00.000+00:00',
    bio: 'One of the most awarded actresses, multiple Oscars & Golden Globes.',
    awards: [
      {
        name: 'Academy Award – Best Actress',
        date: '1980-04-14T00:00:00.000+00:00',
      },
      {
        name: 'Academy Award – Best Actress',
        date: '2012-02-26T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTk4MzMwMjc5NF5BMl5BanBnXkFtZTYwMDMyNzQz._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.97,
    previousScoreRank: 4.95,
    favoriteCount: 4700,
  },
  {
    id: '0000000000000000actor008',
    name: 'Robert De Niro',
    dateOfBirth: '1943-08-17T00:00:00.000+00:00',
    bio: 'Legendary actor known for Taxi Driver, Raging Bull, The Godfather Part II.',
    awards: [
      {
        name: 'Academy Award – Best Actor',
        date: '1981-04-13T00:00:00.000+00:00',
      },
      {
        name: 'Academy Award – Best Supporting Actor',
        date: '1991-03-25T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI1MjU3MTI2MF5BMl5BanBnXkFtZTcwMDgxNTE4MQ@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.93,
    previousScoreRank: 4.9,
    favoriteCount: 4500,
  },
  {
    id: '0000000000000000actor009',
    name: 'Kate Winslet',
    dateOfBirth: '1975-10-05T00:00:00.000+00:00',
    bio: 'Known for Titanic, The Reader (Oscar winner).',
    awards: [
      {
        name: 'Academy Award – Best Actress',
        date: '2009-02-22T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTQzMTcxMzcwN15BMl5BanBnXkFtZTYwNjIwMjc1._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.88,
    previousScoreRank: 4.85,
    favoriteCount: 3200,
  },
  {
    id: '0000000000000000actor010',
    name: 'Tom Cruise',
    dateOfBirth: '1962-07-03T00:00:00.000+00:00',
    bio: 'Known for Mission: Impossible franchise.',
    awards: [
      {
        name: 'Golden Globe – Best Actor',
        date: '1997-01-19T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTAwNzE4Njg0NTFeQTJeQWpwZ15BbWU3MDk0MDEyMDc@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.91,
    previousScoreRank: 4.89,
    favoriteCount: 4900,
  },
  {
    id: '0000000000000000actor011',
    name: 'Brad Pitt',
    dateOfBirth: '1963-12-18T00:00:00.000+00:00',
    bio: 'Known for Fight Club, Once Upon a Time in Hollywood.',
    awards: [
      {
        name: 'Academy Award – Best Supporting Actor',
        date: '2020-01-09T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMmRjNWQwMDQtMWNjZS00ZTUzLTkwODEtMTU5YjRlZmJiMTVkXkEyXkFqcGdeQXVyMTEzNjc3MDQ5._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.92,
    previousScoreRank: 4.9,
    favoriteCount: 5100,
  },
  {
    id: '0000000000000000actor012',
    name: 'Angelina Jolie',
    dateOfBirth: '1975-06-04T00:00:00.000+00:00',
    bio: 'Actress and director, known for Girl, Interrupted; powerhouse humanitarian.',
    awards: [
      {
        name: 'Academy Award – Best Supporting Actress',
        date: '2000-03-27T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.87,
    previousScoreRank: 4.85,
    favoriteCount: 4800,
  },
  {
    id: '0000000000000000actor013',
    name: 'Denzel Washington',
    dateOfBirth: '1954-12-28T00:00:00.000+00:00',
    bio: 'Two-time Oscar winner and respected actor-director.',
    awards: [
      {
        name: 'Academy Award – Best Supporting Actor',
        date: '1990-03-26T00:00:00.000+00:00',
      },
      {
        name: 'Academy Award – Best Actor',
        date: '2002-03-24T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMjUxMjE4MTQxMF5BMl5BanBnXkFtZTcwNzc2MDM1NA@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.94,
    previousScoreRank: 4.92,
    favoriteCount: 4600,
  },
  {
    id: '0000000000000000actor014',
    name: 'Nicole Kidman',
    dateOfBirth: '1967-06-20T00:00:00.000+00:00',
    bio: 'Oscar winner known for Moulin Rouge!, The Hours.',
    awards: [
      {
        name: 'Academy Award – Best Actress',
        date: '2003-03-24T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.86,
    previousScoreRank: 4.84,
    favoriteCount: 4000,
  },
  {
    id: '0000000000000000actor015',
    name: 'Will Smith',
    dateOfBirth: '1968-09-25T00:00:00.000+00:00',
    bio: 'Known for Men in Black, The Pursuit of Happyness.',
    awards: [
      {
        name: 'Academy Award – Best Actor',
        date: '2022-03-27T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTk4NDMxMTI0MF5BMl5BanBnXkFtZTYwMjE3ODE0._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.89,
    previousScoreRank: 4.86,
    favoriteCount: 4700,
  },
  {
    id: '0000000000000000actor016',
    name: 'Christian Bale',
    dateOfBirth: '1974-01-30T00:00:00.000+00:00',
    bio: 'Oscar-winning actor, known for Batman trilogy, Vice.',
    awards: [
      {
        name: 'Academy Award – Best Supporting Actor',
        date: '2011-02-27T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BNWM0OTlhYmQtZWI0NS00NzM0LWE5YjItMWZmYzkzY2FmNTc2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.88,
    previousScoreRank: 4.86,
    favoriteCount: 3500,
  },
  {
    id: '0000000000000000actor017',
    name: 'Scarlett Johansson',
    dateOfBirth: '1984-11-22T00:00:00.000+00:00',
    bio: 'Known for MCU as Black Widow, acclaimed for Marriage Story.',
    awards: [
      {
        name: 'BAFTA Rising Star Award',
        date: '2006-02-19T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BNzBhMjAyZGYtZWQ1Yy00MTQxLWEwNjgtZTczYzJjMjIxZWE2XkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.9,
    previousScoreRank: 4.88,
    favoriteCount: 5400,
  },
  {
    id: '0000000000000000actor018',
    name: 'Morgan Freeman',
    dateOfBirth: '1937-06-01T00:00:00.000+00:00',
    bio: 'Legendary voice and screen actor; Oscar winner.',
    awards: [
      {
        name: 'Academy Award – Best Supporting Actor',
        date: '2005-02-27T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTUxMDMwMTI4MF5BMl5BanBnXkFtZTcwMzE2MzQxMw@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.95,
    previousScoreRank: 4.93,
    favoriteCount: 5600,
  },
  {
    id: '0000000000000000actor019',
    name: 'Kate Blanchett',
    dateOfBirth: '1969-05-14T00:00:00.000+00:00',
    bio: 'Two-time Oscar winner; known for Elizabeth, Blue Jasmine.',
    awards: [
      {
        name: 'Academy Award – Best Supporting Actress',
        date: '2005-02-27T00:00:00.000+00:00',
      },
      {
        name: 'Academy Award – Best Actress',
        date: '2014-03-02T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.92,
    previousScoreRank: 4.9,
    favoriteCount: 3800,
  },
  {
    id: '0000000000000000actor020',
    name: 'Harrison Ford',
    dateOfBirth: '1942-07-13T00:00:00.000+00:00',
    bio: 'Iconic roles in Star Wars and Indiana Jones.',
    awards: [
      {
        name: 'AFI Life Achievement Award',
        date: '2000-06-06T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTUyMzEyNzU4NV5BMl5BanBnXkFtZTgwNDg2MzM3MDE@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.88,
    previousScoreRank: 4.85,
    favoriteCount: 2900,
  },
  {
    id: '0000000000000000actor021',
    name: 'Emma Stone',
    dateOfBirth: '1988-11-06T00:00:00.000+00:00',
    bio: 'Oscar winner known for La La Land.',
    awards: [
      {
        name: 'Academy Award – Best Actress',
        date: '2017-02-26T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTA3NDQ3NTAxNDVeQTJeQWpwZ15BbWU3MDI1MjQ1OTY@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.89,
    previousScoreRank: 4.87,
    favoriteCount: 3600,
  },
  {
    id: '0000000000000000actor022',
    name: 'Johnny Depp',
    dateOfBirth: '1963-06-09T00:00:00.000+00:00',
    bio: 'Known for Pirates of the Caribbean, Edward Scissorhands.',
    awards: [
      {
        name: 'Golden Globe – Best Actor',
        date: '2004-01-25T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTY0MTM1MTM5Nl5BMl5BanBnXkFtZTcwNzA1OTM3MQ@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.87,
    previousScoreRank: 4.85,
    favoriteCount: 4000,
  },
  {
    id: '0000000000000000actor023',
    name: 'Samuel L. Jackson',
    dateOfBirth: '1948-12-21T00:00:00.000+00:00',
    bio: 'Prolific actor in Pulp Fiction, MCU.',
    awards: [
      { name: 'Academy Honorary Award', date: '2022-03-27T00:00:00.000+00:00' },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTk0MzEwMzEzNV5BMl5BanBnXkFtZTgwNDMzMTc0NDE@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.86,
    previousScoreRank: 4.84,
    favoriteCount: 3900,
  },
  {
    id: '0000000000000000actor024',
    name: 'Viola Davis',
    dateOfBirth: '1965-08-11T00:00:00.000+00:00',
    bio: 'Oscar winner known for Fences and Ma Rainey’s Black Bottom.',
    awards: [
      {
        name: 'Academy Award – Best Supporting Actress',
        date: '2017-02-26T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.9,
    previousScoreRank: 4.88,
    favoriteCount: 3100,
  },
  {
    id: '0000000000000000actor025',
    name: 'Bradley Cooper',
    dateOfBirth: '1975-01-05T00:00:00.000+00:00',
    bio: 'Oscar-nominated actor and filmmaker known for Silver Linings Playbook.',
    awards: [
      {
        name: 'Academy Award – Best Picture (producer)',
        date: '2019-02-24T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMjA2ODIxNDM4Nl5BMl5BanBnXkFtZTYwMjkzMzU1._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.85,
    previousScoreRank: 4.83,
    favoriteCount: 3300,
  },
  {
    id: '0000000000000000actor026',
    name: 'Emma Thompson',
    dateOfBirth: '1959-04-15T00:00:00.000+00:00',
    bio: 'Oscar winner known for Sense and Sensibility, Howard’s End.',
    awards: [
      {
        name: 'Academy Award – Best Adapted Screenplay',
        date: '1996-03-25T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI2NTEyMDA2N15BMl5BanBnXkFtZTYwNTY0OTkz._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.88,
    previousScoreRank: 4.86,
    favoriteCount: 2800,
  },
  {
    id: '0000000000000000actor027',
    name: 'Morgan Freeman',
    dateOfBirth: '1937-06-01T00:00:00.000+00:00',
    bio: 'Legendary voice and screen actor; Oscar winner.',
    awards: [
      {
        name: 'Academy Award – Best Supporting Actor',
        date: '2005-02-27T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.95,
    previousScoreRank: 4.93,
    favoriteCount: 5600,
  },
  {
    id: '0000000000000000actor028',
    name: 'Nicole Kidman',
    dateOfBirth: '1967-06-20T00:00:00.000+00:00',
    bio: 'Oscar winner known for Moulin Rouge!, The Hours.',
    awards: [
      {
        name: 'Academy Award – Best Actress',
        date: '2003-03-24T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTk1MjM5NDg4MF5BMl5BanBnXkFtZTcwNDg1OTQ4Nw@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.86,
    previousScoreRank: 4.84,
    favoriteCount: 4000,
  },
  {
    id: '0000000000000000actor029',
    name: 'Will Smith',
    dateOfBirth: '1968-09-25T00:00:00.000+00:00',
    bio: 'Known for Men in Black, The Pursuit of Happyness.',
    awards: [
      {
        name: 'Academy Award – Best Actor',
        date: '2022-03-27T00:00:00.000+00:00',
      },
    ],
    profilePictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTcxMDcxMjgxOV5BMl5BanBnXkFtZTcwODc2NTk2MQ@@._V1_.jpg',
    createdAt: '2025-06-30T00:00:00.000+00:00',
    updatedAt: '2025-06-30T00:00:00.000+00:00',
    scoreRank: 4.89,
    previousScoreRank: 4.86,
    favoriteCount: 4700,
  },
]
