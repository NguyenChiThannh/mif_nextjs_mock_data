type SocialType = 'MIF_LIVE' | 'YOUTUBE' | 'FACEBOOK' // có thể mở rộng thêm nếu cần
type EventType = 'ONLINE' | 'OFFLINE'

export type EventMIF = {
  id: string
  eventName: string
  groupId: string
  ownerId: string
  description: string
  startDate: string // ISO string, có thể dùng Date nếu muốn
  eventPicture: string
  socialType?: SocialType
  eventType: EventType
  link?: string
  location?: string // chỉ cần nếu eventType là OFFLINE
  userJoin: string[] // array of userId
  createdAt: string // ISO string
}

export const events: EventMIF[] = [
  {
    id: '0000000000000000event001',
    eventName: 'Livestream phân tích Dune 2',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user001',
    description: 'Cùng phân tích biểu tượng và ẩn dụ trong Dune: Phần 2',
    startDate: '2025-07-01T19:00:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/sap0BXb6dJUhkDbJEd6nurMQrwq.jpg',
    socialType: 'MIF_LIVE',
    eventType: 'ONLINE',
    link: 'http://mif.vercel.app/vi/live?roomID=1001',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
      '00000000000000000user005',
      '00000000000000000user006',
      '00000000000000000user007',
      '00000000000000000user008',
      '00000000000000000user009',
      '00000000000000000user010',
    ],
    createdAt: '2025-06-30T08:00:00.000+00:00',
  },
  {
    id: '0000000000000000event002',
    eventName: 'Offline Fan One Piece Hà Nội',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user003',
    description: 'Buổi họp mặt fan One Piece khu vực Hà Nội',
    startDate: '2025-07-02T14:00:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/OAXCENRg0smntp0uPhTQMPxs0O.jpg',
    eventType: 'OFFLINE',
    location: 'Hà Nội, Việt Nam',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
    ],
    createdAt: '2025-06-30T08:10:00.000+00:00',
  },
  {
    id: '0000000000000000event003',
    eventName: 'Xem chung Inside Out 2',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user007',
    description: 'Cùng xem và chia sẻ cảm xúc về Inside Out 2',
    startDate: '2025-07-03T16:30:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg',
    socialType: 'MIF_LIVE',
    eventType: 'ONLINE',
    link: 'http://mif.vercel.app/vi/live?roomID=1002',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
    ],
    createdAt: '2025-06-30T08:15:00.000+00:00',
  },
  {
    id: '0000000000000000event004',
    eventName: 'Thảo luận trailer Joker 2',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user007',
    description:
      'Thảo luận các phân cảnh nổi bật trong trailer Joker: Folie à Deux',
    startDate: '2025-07-04T20:00:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/y94auaBWq1E7sun3ZpvBmQfGUW.jpg',
    socialType: 'YOUTUBE',
    eventType: 'ONLINE',
    link: 'https://youtube.com/watch?v=trailerjoker2',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
    ],
    createdAt: '2025-06-30T08:20:00.000+00:00',
  },
  {
    id: '0000000000000000event005',
    eventName: 'Offline Marvel Fanclub Sài Gòn',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user007',
    description: 'Buổi gặp gỡ dành cho cộng đồng Marvel khu vực HCM',
    startDate: '2025-07-05T13:30:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg',
    eventType: 'OFFLINE',
    location: 'TP. Hồ Chí Minh',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
    ],
    createdAt: '2025-06-30T08:30:00.000+00:00',
  },
  {
    id: '0000000000000000event006',
    eventName: 'Cùng xem lại Inception',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user007',
    description: 'Xem và lý giải các tầng giấc mơ trong Inception',
    startDate: '2025-07-06T21:00:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/fyy1nDC8wm553FCiBDojkJmKLCs.jpg',
    socialType: 'MIF_LIVE',
    eventType: 'ONLINE',
    link: 'http://mif.vercel.app/vi/live?roomID=1003',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
    ],
    createdAt: '2025-06-30T08:35:00.000+00:00',
  },
  {
    id: '0000000000000000event007',
    eventName: 'Fan Event Studio Ghibli',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user007',
    description: 'Buổi giao lưu fan các phim hoạt hình của Ghibli',
    startDate: '2025-07-07T17:30:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/ewrIYKTLaqerwznGzNhmqr0huTs.jpg',
    eventType: 'OFFLINE',
    location: 'Đà Nẵng, Việt Nam',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
    ],
    createdAt: '2025-06-30T08:40:00.000+00:00',
  },
  {
    id: '0000000000000000event008',
    eventName: 'Giao lưu đạo diễn Việt',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user007',
    description:
      'Đạo diễn Trịnh Đình Lê Minh chia sẻ về hậu trường phim điện ảnh Việt',
    startDate: '2025-07-08T10:00:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/1UCOF11QCw8kcqvce8LKOO6pimh.jpg',
    socialType: 'FACEBOOK',
    eventType: 'ONLINE',
    link: 'https://facebook.com/live/vietfilm',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
    ],
    createdAt: '2025-06-30T08:45:00.000+00:00',
  },
  {
    id: '0000000000000000event009',
    eventName: 'Talkshow phim kinh dị Việt',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user007',
    description: 'Thảo luận xu hướng làm phim kinh dị ở Việt Nam và quốc tế',
    startDate: '2025-07-09T19:30:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
    socialType: 'MIF_LIVE',
    eventType: 'ONLINE',
    link: 'http://mif.vercel.app/vi/live?roomID=1004',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
    ],
    createdAt: '2025-06-30T08:50:00.000+00:00',
  },
  {
    id: '0000000000000000event010',
    eventName: 'Gặp mặt fan Avatar 2',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user007',
    description: 'Tổ chức offline mừng kỷ niệm 2 năm phát hành Avatar 2',
    startDate: '2025-07-10T15:00:00.000+00:00',
    eventPicture:
      'https://image.tmdb.org/t/p/original/i6TRDlVuuEXMyLSlIkDd8YhBN0r.jpg',
    eventType: 'OFFLINE',
    location: 'Huế, Việt Nam',
    userJoin: [
      '00000000000000000user001',
      '00000000000000000user003',
      '00000000000000000user004',
    ],
    createdAt: '2025-06-30T08:55:00.000+00:00',
  },
]
