export type Rating = {
  averageRating: number
  numberOfRatings: number
}

export type BadgeLevel = 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM'

export type UserRating = {
  id: string
  ratingValue: number
  movieId: string
  user: {
    id: string
    displayName: string
    profilePictureUrl: string
    badgeMap: Record<string, BadgeLevel>
  }
  comment: string
  updatedAt: string
  createdAt: string
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'MIXED'
  positiveScore: number
  negativeScore: number
  neutralScore: number
  mixedScore: number
}

export const userRatings: UserRating[] = [
  {
    id: '67f1220426614d21b744860f',
    ratingValue: 4.2,
    movieId: '66d73a246f744579aaed006a',
    user: {
      id: '6741fe91821b58239de2aac7',
      displayName: 'Nguyễn Thanh',
      profilePictureUrl:
        'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/07bb141d-2ccf-4365-bc0e-bea4c2bc4b76_il_570xN.4893801479_e4tq.webp',
      badgeMap: {
        '680c70098cfd9240ee43ee9e': 'BRONZE',
        '6759d7c4e5bcb70995786267': 'GOLD',
        '681c126fb51712238619a35f': 'BRONZE',
        '68103f34af840f0e1786ae63': 'BRONZE',
        '6759d7d8e5bcb70995786269': 'BRONZE',
        '6759d7cce5bcb70995786268': 'BRONZE',
      },
    },
    comment: 'Horrible acting, couldn’t take it seriously.',
    updatedAt: '2025-04-05T12:28:52.757+00:00',
    createdAt: '2025-04-05T12:28:52.757+00:00',
    sentiment: 'NEGATIVE',
    positiveScore: 0.00009417408000444993,
    negativeScore: 0.9994595646858215,
    neutralScore: 0.00042070550261996686,
    mixedScore: 0.000025564368115738034,
  },
  {
    id: '67f1226726614d21b7448610',
    ratingValue: 4.2,
    movieId: '66d73a246f744579aaed006a',
    user: {
      id: '66c2dfb8ef14de7f0da2d4e0',
      displayName: 'Thanh Nguyễn',
      profilePictureUrl:
        'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/cd483506-5971-47b9-a1fd-3a68483cf178_1000_F_576652108_8Nec2OmdXJXMDGFDchNjRMywqj4YrtzM.jpg',
      badgeMap: {
        '6759cee3e5bcb7099578625f': 'BRONZE',
      },
    },
    comment: 'Fantastic cinematography, but the plot was too predictable.',
    updatedAt: '2025-04-05T12:30:31.776+00:00',
    createdAt: '2025-04-05T12:30:31.776+00:00',
    sentiment: 'MIXED',
    positiveScore: 0.0002488009340595454,
    negativeScore: 0.0000802240174380131,
    neutralScore: 0.000008208563485823106,
    mixedScore: 0.9996627569198608,
  },
  {
    id: '67f1229226614d21b7448611',
    ratingValue: 4.2,
    movieId: '66d73a246f744579aaed006a',
    user: {
      id: '674190e37ce01e203e8f7646',
      displayName: 'Đặng Trung Kiên',
      profilePictureUrl:
        'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/0a7455e0-672f-4f5e-a675-2abd7ae35e19_k8s-logo.png',
      badgeMap: {
        '675dc60734b9b7795ed71159': 'BRONZE',
        '680bd738a1f15f73b92a44de': 'BRONZE',
        '681c126fb51712238619a35f': 'SILVER',
      },
    },
    comment: 'Terrible movie, complete waste of time!',
    updatedAt: '2025-04-05T12:31:14.875+00:00',
    createdAt: '2025-04-05T12:31:14.875+00:00',
    sentiment: 'NEGATIVE',
    positiveScore: 0.00005060918556409888,
    negativeScore: 0.999669075012207,
    neutralScore: 0.00004974427793058567,
    mixedScore: 0.00023058206716086715,
  },
]
