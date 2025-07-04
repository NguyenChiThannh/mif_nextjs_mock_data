export type Authority = {
  authority: 'ROLE_USER' | 'ROLE_ADMIN' | string
}

export type BadgeLevel = 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM'

export type UserType = 'NORMAL'

export type UserAccount = {
  id: string
  displayName: string | null
  email: string
  profilePictureUrl: string
  bio: string | null
  dob: string
  createdAt: string
  updatedAt: string
  provider: string | null
  googleSub: string | null
  userType: UserType
  balance: number
  badgeMap: Record<string, BadgeLevel>
  enabled: boolean
  username: string
  authorities: Authority[]
  accountNonLocked: boolean
  accountNonExpired: boolean
  credentialsNonExpired: boolean
}

const usersSample: UserAccount[] = [
  {
    id: '66e9b9e035abb80bb9b97c22',
    displayName: null,
    email: 'ta84@gmail.com',
    profilePictureUrl:
      'https://fastly.picsum.photos/id/120/200/300.jpg?hmac=MG0pF8PmFWKEzuFPIWwUw15CadARgBh6cxPh_YuAALY',
    bio: 'fuck',
    dob: null,
    createdAt: '2024-09-17T17:18:24.807+00:00',
    updatedAt: '2025-06-30T03:17:31.862+00:00',
    provider: null,
    googleSub: null,
    userType: 'NORMAL',
    balance: 0.0,
    badgeMap: {},
    enabled: true,
    username: '66e9b9e035abb80bb9b97c22',
    authorities: [
      {
        authority: 'admin:create',
      },
      {
        authority: 'management:read',
      },
      {
        authority: 'management:delete',
      },
      {
        authority: 'management:create',
      },
      {
        authority: 'admin:delete',
      },
      {
        authority: 'admin:update',
      },
      {
        authority: 'admin:read',
      },
      {
        authority: 'management:update',
      },
      {
        authority: 'ROLE_ADMIN',
      },
    ],
    accountNonLocked: true,
    accountNonExpired: true,
    credentialsNonExpired: true,
  },
  {
    id: '67d7d7b10234262d665ee6a1',
    displayName: 'Nguyễn Xuân Hòa',
    email: 'thanh123@gmail.com',
    profilePictureUrl: null,
    bio: null,
    dob: null,
    createdAt: '2025-03-17T08:05:05.811+00:00',
    updatedAt: '2025-03-17T08:05:05.811+00:00',
    provider: null,
    googleSub: null,
    userType: 'NORMAL',
    balance: 0.0,
    badgeMap: {},
    enabled: true,
    username: '67d7d7b10234262d665ee6a1',
    authorities: [
      {
        authority: 'management:read',
      },
      {
        authority: 'management:delete',
      },
      {
        authority: 'management:update',
      },
      {
        authority: 'management:create',
      },
      {
        authority: 'ROLE_CONTENT_CREATOR',
      },
    ],
    accountNonLocked: true,
    accountNonExpired: true,
    credentialsNonExpired: true,
  },
  {
    id: '6741fe91821b58239de2aac7',
    displayName: 'Nguyễn Thanh',
    email: 'uniiqshop848@gmail.com',
    profilePictureUrl:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/07bb141d-2ccf-4365-bc0e-bea4c2bc4b76_il_570xN.4893801479_e4tq.webp',
    bio: 'Đây là tôi, một người mê phim ảnh!',
    dob: '2025-06-17T17:00:00.000+00:00',
    createdAt: '2024-11-23T16:10:57.622+00:00',
    updatedAt: '2025-06-20T03:21:32.432+00:00',
    provider: null,
    googleSub: null,
    userType: 'NORMAL',
    balance: 0.0,
    badgeMap: {
      '680c70098cfd9240ee43ee9e': 'BRONZE',
      '6759d7c4e5bcb70995786267': 'GOLD',
      '681c126fb51712238619a35f': 'BRONZE',
      '68103f34af840f0e1786ae63': 'BRONZE',
      '6759d7d8e5bcb70995786269': 'BRONZE',
      '6759d7cce5bcb70995786268': 'BRONZE',
    },
    enabled: true,
    username: '6741fe91821b58239de2aac7',
    authorities: [
      {
        authority: 'admin:create',
      },
      {
        authority: 'management:read',
      },
      {
        authority: 'management:delete',
      },
      {
        authority: 'management:create',
      },
      {
        authority: 'admin:delete',
      },
      {
        authority: 'admin:update',
      },
      {
        authority: 'admin:read',
      },
      {
        authority: 'management:update',
      },
      {
        authority: 'ROLE_ADMIN',
      },
    ],
    accountNonLocked: true,
    accountNonExpired: true,
    credentialsNonExpired: true,
  },
  {
    id: '676edac59a6e2c397046cede',
    displayName: 'Nguyễn Chí Thanh',
    email: 'thanh.161003@gmail.com',
    profilePictureUrl: null,
    bio: 'Tôi là nguyễn chí thanh 111111',
    dob: '2024-12-10T17:00:00.000+00:00',
    createdAt: '2024-12-27T16:50:13.205+00:00',
    updatedAt: '2025-06-10T14:37:51.633+00:00',
    provider: null,
    googleSub: null,
    userType: 'NORMAL',
    balance: 0.0,
    badgeMap: {},
    enabled: true,
    username: '676edac59a6e2c397046cede',
    authorities: [
      {
        authority: 'management:read',
      },
      {
        authority: 'management:delete',
      },
      {
        authority: 'management:update',
      },
      {
        authority: 'management:create',
      },
      {
        authority: 'ROLE_CONTENT_CREATOR',
      },
    ],
    accountNonLocked: true,
    accountNonExpired: true,
    credentialsNonExpired: true,
  },
]

const popularNames = [
  'Nguyễn Văn An',
  'Trần Thị Bích',
  'Lê Văn Cường',
  'Phạm Thùy Dương',
  'Hoàng Văn Dũng',
  'Đặng Thị Hà',
  'Bùi Minh Huy',
  'Ngô Thị Hồng',
  'Vũ Đức Hiếu',
  'Đinh Thị Hạnh',
  'Trịnh Văn Hùng',
  'Lý Thị Lan',
  'Tô Văn Long',
  'Phan Thị Mai',
  'Dương Văn Mạnh',
  'Cao Thị Ngọc',
  'Trương Minh Nhật',
  'Mai Thị Như',
  'Lâm Văn Phát',
  'Huỳnh Ngọc Quang',
  'Tạ Thị Quyên',
  'Lữ Văn Sơn',
  'Châu Thị Trang',
  'Thạch Văn Thành',
  'Kiều Thị Yến',
]

export const users: UserAccount[] = popularNames.map((name, index) => {
  const stt = (index + 1).toString().padStart(3, '0')
  const id = `00000000000000000user${stt}`
  const isMale = index % 2 === 0
  const avatar = `https://randomuser.me/api/portraits/${
    isMale ? 'men' : 'women'
  }/${(index % 50) + 1}.jpg`

  const month = Math.floor(Math.random() * 6) + 1
  const day = Math.floor(Math.random() * 28) + 1
  const dayRandom = new Date(
    `2025-${String(month).padStart(2, '0')}-${String(day).padStart(
      2,
      '0',
    )}T08:00:00Z`,
  ).toISOString()

  return {
    id: id,
    displayName: name,
    email: `user${index + 1}@gmail.com`,
    profilePictureUrl: avatar,
    bio: null,
    dob: dayRandom,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    provider: null,
    googleSub: null,
    userType: 'NORMAL',
    balance: 0,
    badgeMap: {},
    enabled: true,
    username: id,
    authorities: [{ authority: 'ROLE_USER' }],
    accountNonLocked: true,
    accountNonExpired: true,
    credentialsNonExpired: true,
  }
})

export const userInfo: UserAccount = {
  id: '00000000000000000user000',
  displayName: 'Nguyễn Thanh',
  email: 'hehe@gmail.com',
  profilePictureUrl:
    'https://i.pinimg.com/736x/10/bc/bd/10bcbdc51fdacda178fbf70267e19251.jpg',
  bio: 'Đây là tôi, một người mê phim ảnh!',
  dob: '2025-06-17T17:00:00.000+00:00',
  createdAt: '2024-11-23T16:10:57.622+00:00',
  updatedAt: '2025-06-20T03:21:32.432+00:00',
  provider: null,
  googleSub: null,
  userType: 'NORMAL',
  balance: 0.0,
  badgeMap: {
    '0000000000000000group001': 'BRONZE',
    '0000000000000000group002': 'GOLD',
    '0000000000000000group006': 'BRONZE',
    '0000000000000000group007': 'BRONZE',
    '0000000000000000group010': 'SILVER',
    '0000000000000000group011': 'PLATINUM',
  },
  enabled: true,
  username: '00000000000000000user000',
  authorities: [
    {
      authority: 'admin:create',
    },
    {
      authority: 'management:read',
    },
    {
      authority: 'management:delete',
    },
    {
      authority: 'management:create',
    },
    {
      authority: 'admin:delete',
    },
    {
      authority: 'admin:update',
    },
    {
      authority: 'admin:read',
    },
    {
      authority: 'management:update',
    },
    {
      authority: 'ROLE_ADMIN',
    },
  ],
  accountNonLocked: true,
  accountNonExpired: true,
  credentialsNonExpired: true,
}
