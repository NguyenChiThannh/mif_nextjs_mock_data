import { getRandomInt } from '@/utils/algorithm'
import { USERID } from '@/utils/contants'

type BadgeLevel = 'GOLD' | 'BRONZE' | 'SILVER' | 'PLATINUM'

type GroupOwner = {
  id: string
  displayName: string
  profilePictureUrl: string
  badgeMap: Record<string, BadgeLevel>
}

export type Group = {
  id: string
  groupName: string
  description: string
  owner: GroupOwner
  categoryId: string
  avatarUrl: string
  isPublic: boolean
  groupType: 'SMALL' | 'MEDIUM' | 'LARGE'
  memberCount: number
  weeklyPostCount: number
  createdAt: string
  updatedAt: string
}

export const groups: Group[] = [
  {
    id: '0000000000000000group001',
    groupName: 'Rạp Chiếu Nhà Mình',
    description:
      'Không cần ra rạp – ở nhà cũng đủ chill! Group dành cho các "mọt phim tại gia" muốn tìm phim hay, lịch chiếu và người đồng cảm!!!',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group001': 'GOLD',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group004': 'BRONZE',
        '0000000000000000group006': 'BRONZE',
        '0000000000000000group007': 'BRONZE',
        '0000000000000000group008': 'BRONZE',
      },
    },
    categoryId: '0000000000000category002',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/lnPf6hzANL6pVQTxUlsNYSuhT5l.jpg',
    isPublic: false,
    groupType: 'SMALL',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2024-12-11T18:19:48.456+00:00',
    updatedAt: '2025-06-26T06:49:29.449+00:00',
  },
  {
    id: '0000000000000000group002',
    groupName: 'Xem Phim Là Chính',
    description:
      'Nơi chia sẻ những bộ phim hay, lịch chiếu và các buổi offline cùng nhau thưởng thức điện ảnh.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category005',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/5X1n5q08mZ7NpNpxehMFODxfNYq.jpg',
    isPublic: true,
    groupType: 'SMALL',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2024-12-11T18:19:56.537+00:00',
    updatedAt: '2025-06-18T07:24:47.635+00:00',
  },
  {
    id: '0000000000000000group003',
    groupName: 'Review Phim Có Tâm',
    description:
      'Nơi tổng hợp những bài review từ người thật – cảm xúc thật. Thích phim? Ghét phim? Vào đây nói hết!',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category008',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
    isPublic: true,
    groupType: 'SMALL',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2024-12-11T18:20:08.965+00:00',
    updatedAt: '2025-06-18T19:57:51.175+00:00',
  },
  {
    id: '0000000000000000group004',
    groupName: 'The One',
    description:
      'Nơi dành cho những ai yêu thích điện ảnh và muốn tìm kiếm những bộ phim hay nhất mọi thời đại.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category010',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg',
    isPublic: false,
    groupType: 'SMALL',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2024-12-27T17:21:07.148+00:00',
    updatedAt: '2025-06-19T15:55:04.972+00:00',
  },
  {
    id: '0000000000000000group005',
    groupName: 'Điện Ảnh & Nghệ Thuật',
    description: '',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category003',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/onGdT8sYi89drvSJyEJnft97rOq.jpg',
    isPublic: true,
    groupType: 'SMALL',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-04-26T05:32:57.704+00:00',
    updatedAt: '2025-06-18T05:16:17.503+00:00',
  },
  {
    id: '0000000000000000group006',
    groupName: 'Cinemania',
    description:
      'Bạn nghiện phim đến mức không thể ngừng nói về nó? Chào mừng đến "thế giới điện ảnh điên rồ"!',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category004',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/oh8XmxWlySHgGLlx8QOBmq9k72j.jpg',
    isPublic: true,
    groupType: 'SMALL',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-04-29T02:53:40.169+00:00',
    updatedAt: '2025-06-19T09:25:54.456+00:00',
  },
  {
    id: '0000000000000000group007',
    groupName: 'Chuyện Làm Phim',
    description:
      'Từ idea đến set quay – group cho người học, làm hoặc mơ ước bước vào ngành điện ảnh.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category001',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg',
    isPublic: false,
    groupType: 'SMALL',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-05-07T05:30:06.064+00:00',
    updatedAt: '2025-06-18T05:13:29.967+00:00',
  },
  {
    id: '0000000000000000group008',
    groupName: 'Mỗi ngày một phim',
    description: '',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category012',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/kvhrltQIRp1u84ao9uj52YPaWNY.jpg',
    isPublic: false,
    groupType: 'SMALL',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-05-19T09:44:43.871+00:00',
    updatedAt: '2025-05-19T09:44:43.871+00:00',
  },
  {
    id: '0000000000000000group009',
    groupName: 'Phim đồng quê',
    description: '',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category013',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/uHkmbxb70IQhV4q94MiBe9dqVqv.jpg',
    isPublic: false,
    groupType: 'MEDIUM',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-03T20:22:04.301+00:00',
    updatedAt: '2025-06-03T20:28:52.621+00:00',
  },
  {
    id: '0000000000000000group010',
    groupName: 'Phim Đêm Khuya',
    description:
      'Nơi dành cho những ai yêu thích những bộ phim kinh dị, giật gân và muốn chia sẻ cảm xúc sau mỗi đêm xem phim.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category014',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/bKIdlJbd17rrIm4oZzhXTbmqpon.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:40.309+00:00',
    updatedAt: '2025-06-26T07:22:40.309+00:00',
  },
  {
    id: '0000000000000000group011',
    groupName: 'Góc Review Không Spoil',
    description:
      'Nơi dành cho những ai yêu thích việc chia sẻ cảm nhận về phim mà không tiết lộ nội dung quan trọng.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category010',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group012',
    groupName: 'Cảnh Quay Đỉnh Cao',
    description:
      'Nơi dành cho những ai yêu thích những cảnh quay đẹp mắt, kỹ xảo ấn tượng và muốn chia sẻ những khoảnh khắc điện ảnh đáng nhớ.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category009',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/4qE7mvUYGY5epfcgeJpM6EfHgq5.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group013',
    groupName: 'Chill cùng Soundtrack',
    description:
      'Nơi dành cho những ai yêu thích việc chia sẻ cảm nhận về phim mà không tiết lộ nội dung quan trọng.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category010',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group014',
    groupName: 'Nhà Làm Phim Tự Do',
    description:
      'Nơi dành cho những ai yêu thích việc chia sẻ cảm nhận về phim mà không tiết lộ nội dung quan trọng.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category005',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/bXAVveHiLotZbWdg3PKGhAzxYKP.jpg ',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group015',
    groupName: 'Phim Ngắn - Tác Động Dài',
    description:
      'Cộng đồng đam mê phim ngắn, những thước phim ngắn ngủi nhưng đầy cảm xúc.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category003',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/blO6k1NsYgPq4sQRZyWvi962FOo.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group016',
    groupName: 'Fan Marvel chính hiệu',
    description:
      'Thảo luận tất tần tật về vũ trụ MCU – spoiler có cảnh báo rõ ràng!',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category011',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/oduJooXJya3u6wuA6FgljAFCEQp.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group017',
    groupName: 'Điện Ảnh Châu Á',
    description:
      'Từ Hàn đến Nhật, Trung đến Thái – hội yêu điện ảnh châu Á quy tụ tại đây.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category007',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/qwoGfcg6YUS55nUweKGujHE54Wy.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group018',
    groupName: 'Phim Giả Tưởng & Sci-Fi',
    description:
      'Nếu bạn mê Star Wars, Interstellar hay Inception – bạn thuộc về nơi này.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category014',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/mab5wPeGVjbMyYMzyzfdKKnG9cl.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group019',
    groupName: 'Tâm Lý Tội Phạm',
    description:
      'Mindhunter, Breaking Bad, Prisoners... phân tích tâm lý và cú twist điên rồ!',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category001',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group020',
    groupName: 'Cười Xỉu Với Phim Hài',
    description: 'Thư giãn cuối ngày với các bộ phim cười không nhặt được mồm.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category008',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/eAdO0qa9m0NFSVLZ26PvCwmPlsr.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group021',
    groupName: 'Bình Phim Như Một Nghệ Thuật',
    description:
      'Phân tích phim theo góc nhìn nghệ thuật, văn hóa và triết lý nhân sinh.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category010',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/lcyKve7nXRFgRyms9M1bndNkKOx.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group022',
    groupName: 'Phim Buồn Cho Ngày Mưa',
    description:
      'Khi tâm trạng rơi xuống đáy, hãy để phim đưa bạn đi lên từ cảm xúc.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category004',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/32vLDKSzcCMh55zqqaSqqUA8naz.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
  {
    id: '0000000000000000group023',
    groupName: 'Phim Kinh Dị Không Dành Cho Yếu Tim',
    description: 'Thảo luận phim kinh dị, jumpscare và những đêm không ngủ.',
    owner: {
      id: USERID,
      displayName: 'Nguyễn Thanh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: {
        '0000000000000000group002': 'PLATINUM',
        '0000000000000000group003': 'BRONZE',
        '0000000000000000group010': 'BRONZE',
        '0000000000000000group011': 'BRONZE',
        '0000000000000000group012': 'BRONZE',
        '0000000000000000group013': 'BRONZE',
      },
    },
    categoryId: '0000000000000category006',
    avatarUrl:
      'https://image.tmdb.org/t/p/original/yp8vEZflGynlEylxEesbYasc06i.jpg',
    isPublic: true,
    groupType: 'LARGE',
    memberCount: getRandomInt(1, 50),
    weeklyPostCount: getRandomInt(1, 20),
    createdAt: '2025-06-26T07:22:51.713+00:00',
    updatedAt: '2025-06-26T07:22:51.713+00:00',
  },
]

export const ownerGroups = groups.slice(0, 13)
export const joinedGroups = groups.slice(13, 19)
export const suggestedGroups = groups.slice(19, 23)

export const groupStatus = {
  '0000000000000000group001': 'JOINED',
  '0000000000000000group002': 'JOINED',
  '0000000000000000group003': 'JOINED',
  '0000000000000000group004': 'JOINED',
  '0000000000000000group005': 'JOINED',
  '0000000000000000group006': 'JOINED',
  '0000000000000000group007': 'JOINED',
  '0000000000000000group008': 'JOINED',
  '0000000000000000group009': 'JOINED',
  '0000000000000000group010': 'JOINED',
  '0000000000000000group011': 'JOINED',
  '0000000000000000group012': 'JOINED',
  '0000000000000000group013': 'JOINED',
  '0000000000000000group014': 'JOINED',
  '0000000000000000group015': 'JOINED',
  '0000000000000000group016': 'JOINED',
  '0000000000000000group017': 'JOINED',
  '0000000000000000group018': 'JOINED',
  '0000000000000000group019': 'JOINED',
  '0000000000000000group020': 'NOT_JOIN',
  '0000000000000000group021': 'PENDING',
  '0000000000000000group022': 'NOT_JOIN',
  '0000000000000000group023': 'PENDING',
}
