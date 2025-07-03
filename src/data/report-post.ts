export interface GroupReport {
  reporterId: string
  reason: string
  reportedAt: string
  isAIReport: boolean
  status: 'BLOCKED' | 'PENDING' | 'APPROVED'
}

export interface GroupPostReport {
  id: string
  postId: string
  groupId: string
  ownerId: string
  ownerUsername: string
  status: 'PENDING' | 'BLOCKED' | 'APPROVED'
  reportCount: number
  createdAt: string
  updatedAt: string
  groupReports: GroupReport[]
  title: string
  content: string
  mediaUrls: string[]
}

export const groupPostReports: GroupPostReport[] = [
  {
    id: '000000000000000report001',
    postId: '00000000000000000post001',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Minh Phạm',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T10:00:00.000Z',
    updatedAt: '2025-06-20T10:00:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report001',
        reason: 'Bài viết chứa nội dung nhạy cảm',
        reportedAt: '2025-06-20T10:00:00.000Z',
        isAIReport: true,
        status: 'PENDING',
      },
    ],
    title: 'Tôi cần lời khuyên về sức khoẻ tinh thần',
    content:
      'Dạo gần đây tôi thường xuyên cảm thấy mệt mỏi, áp lực và không còn động lực để làm việc. Có ai từng trải qua cảm giác này không?',
    mediaUrls: [],
  },
  {
    id: '000000000000000report002',
    postId: '00000000000000000post002',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Minh Phạm',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T10:05:00.000Z',
    updatedAt: '2025-06-20T10:05:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report002',
        reason: 'Ngôn ngữ không phù hợp',
        reportedAt: '2025-06-20T10:05:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Không thể chịu nổi nữa!',
    content:
      'Tôi đã cố gắng hết sức nhưng mọi thứ dường như đang chống lại tôi. Đừng ai nói tôi mạnh mẽ nữa!',
    mediaUrls: [],
  },
  {
    id: '000000000000000report003',
    postId: '00000000000000000post003',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Minh Phạm',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T10:10:00.000Z',
    updatedAt: '2025-06-20T10:10:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report003',
        reason: 'Nội dung cần xác minh',
        reportedAt: '2025-06-20T10:10:00.000Z',
        isAIReport: false,
        status: 'PENDING',
      },
    ],
    title: 'Có nên nghỉ việc để theo đuổi đam mê?',
    content:
      'Mình đang làm một công việc ổn định nhưng không còn cảm hứng nữa. Liệu có nên nghỉ để theo đuổi đam mê thiết kế đồ họa?',
    mediaUrls: [],
  },
  {
    id: '000000000000000report004',
    postId: '00000000000000000post004',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Minh Phạm',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T10:15:00.000Z',
    updatedAt: '2025-06-20T10:15:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report004',
        reason: 'Từ ngữ mang tính kích động',
        reportedAt: '2025-06-20T10:15:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Mọi thứ thật giả tạo',
    content:
      'Tôi cảm thấy cuộc sống này toàn dối trá, không ai thực sự quan tâm đến nhau cả.',
    mediaUrls: [],
  },
  {
    id: '000000000000000report005',
    postId: '00000000000000000post005',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Minh Phạm',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T10:20:00.000Z',
    updatedAt: '2025-06-20T10:20:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report005',
        reason: 'Hệ thống AI tự động đánh dấu',
        reportedAt: '2025-06-20T10:20:00.000Z',
        isAIReport: true,
        status: 'PENDING',
      },
    ],
    title: 'Cảm thấy trống rỗng',
    content:
      'Đã lâu rồi tôi không còn cảm xúc thật sự. Tôi cười nhưng bên trong lại rất trống rỗng.',
    mediaUrls: [],
  },
  {
    id: '000000000000000report006',
    postId: '00000000000000000post006',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Minh Phạm',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T10:25:00.000Z',
    updatedAt: '2025-06-20T10:25:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report006',
        reason: 'Chứa từ ngữ tiêu cực',
        reportedAt: '2025-06-20T10:25:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Không còn gì để mất',
    content: 'Tôi đã mất việc, mất bạn, và giờ chẳng còn ai bên cạnh.',
    mediaUrls: [],
  },

  {
    id: '000000000000000report007',
    postId: '00000000000000000post007',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Minh Phạm',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T10:30:00.000Z',
    updatedAt: '2025-06-20T10:30:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report007',
        reason: 'Nội dung cần kiểm duyệt',
        reportedAt: '2025-06-20T10:30:00.000Z',
        isAIReport: false,
        status: 'PENDING',
      },
    ],
    title: 'Tìm nhóm hỗ trợ tâm lý',
    content:
      'Mọi người ơi có nhóm nào hỗ trợ tâm lý online không? Mình đang rất cần được trò chuyện.',
    mediaUrls: [],
  },

  {
    id: '000000000000000report008',
    postId: '00000000000000000post008',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Minh Phạm',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T10:35:00.000Z',
    updatedAt: '2025-06-20T10:35:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report008',
        reason: 'AI phát hiện cụm từ tiêu cực',
        reportedAt: '2025-06-20T10:35:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Tôi thật vô dụng',
    content: 'Không ai cần tôi, tôi không làm được gì cả.',
    mediaUrls: [],
  },

  {
    id: '000000000000000report009',
    postId: '00000000000000000post009',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Minh Phạm',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T10:40:00.000Z',
    updatedAt: '2025-06-20T10:40:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report009',
        reason: 'Cần kiểm duyệt nội dung',
        reportedAt: '2025-06-20T10:40:00.000Z',
        isAIReport: false,
        status: 'PENDING',
      },
    ],
    title: 'Làm sao để lấy lại năng lượng mỗi ngày?',
    content:
      'Mình dạo này hay mệt mỏi khi thức dậy. Mọi người có mẹo nào để có năng lượng buổi sáng không?',
    mediaUrls: [],
  },
  {
    id: '000000000000000report010',
    postId: '00000000000000000post010',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Huỳnh Thư',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T10:45:00.000Z',
    updatedAt: '2025-06-20T10:45:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report010',
        reason: 'Ngôn từ gây hiểu nhầm',
        reportedAt: '2025-06-20T10:45:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Cuộc sống này thật tệ',
    content: 'Tôi không còn tin vào bất kỳ điều gì nữa. Chỉ toàn thất vọng.',
    mediaUrls: [],
  },
  {
    id: '000000000000000report011',
    postId: '00000000000000000post011',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Nam Nguyễn',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T10:50:00.000Z',
    updatedAt: '2025-06-20T10:50:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report011',
        reason: 'AI flag bài viết cần xác minh',
        reportedAt: '2025-06-20T10:50:00.000Z',
        isAIReport: true,
        status: 'PENDING',
      },
    ],
    title: 'Cách vượt qua nỗi sợ thất bại?',
    content:
      'Mỗi lần làm sai điều gì đó, mình luôn tự trách bản thân. Có cách nào để học cách tha thứ cho chính mình không?',
    mediaUrls: [],
  },
  {
    id: '000000000000000report012',
    postId: '00000000000000000post012',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Phương Trần',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T10:55:00.000Z',
    updatedAt: '2025-06-20T10:55:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report012',
        reason: 'Chứa từ khóa tiêu cực',
        reportedAt: '2025-06-20T10:55:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Chẳng ai quan tâm đến mình',
    content:
      'Tôi ở đây, nhưng mọi người đều lờ đi. Cảm giác vô hình thật đáng sợ.',
    mediaUrls: [],
  },
  {
    id: '000000000000000report013',
    postId: '00000000000000000post013',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Lam Nguyễn',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T11:00:00.000Z',
    updatedAt: '2025-06-20T11:00:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report013',
        reason: 'Bài viết cần kiểm duyệt',
        reportedAt: '2025-06-20T11:00:00.000Z',
        isAIReport: false,
        status: 'PENDING',
      },
    ],
    title: 'Có ai đang học cách thiền không?',
    content:
      'Mình mới bắt đầu thiền mỗi sáng và thấy khá hiệu quả. Có ai cùng thói quen không chia sẻ kinh nghiệm nhé!',
    mediaUrls: [],
  },
  {
    id: '000000000000000report014',
    postId: '00000000000000000post014',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Vũ Bảo',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T11:05:00.000Z',
    updatedAt: '2025-06-20T11:05:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report014',
        reason: 'Nội dung kích động',
        reportedAt: '2025-06-20T11:05:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Không ai xứng đáng với lòng tin của tôi',
    content:
      'Tôi đã giúp đỡ rất nhiều người, nhưng khi tôi cần, họ đều quay lưng.',
    mediaUrls: [],
  },
  {
    id: '000000000000000report015',
    postId: '00000000000000000post015',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Thùy Linh',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T11:10:00.000Z',
    updatedAt: '2025-06-20T11:10:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report015',
        reason: 'AI gắn cờ nội dung',
        reportedAt: '2025-06-20T11:10:00.000Z',
        isAIReport: true,
        status: 'PENDING',
      },
    ],
    title: 'Những cuốn sách giúp tôi vượt qua khủng hoảng',
    content:
      'Tôi muốn chia sẻ một vài cuốn sách giúp tôi ổn định lại cảm xúc, hi vọng sẽ hữu ích với bạn nào đó.',
    mediaUrls: [],
  },
  {
    id: '000000000000000report016',
    postId: '00000000000000000post016',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Dinh Long',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T11:15:00.000Z',
    updatedAt: '2025-06-20T11:15:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report016',
        reason: 'Từ khóa tiêu cực bị phát hiện',
        reportedAt: '2025-06-20T11:15:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Chẳng còn mục tiêu nào để sống',
    content:
      'Tôi không biết mình đang sống vì điều gì nữa, ngày nào cũng như địa ngục.',
    mediaUrls: [],
  },
  {
    id: '000000000000000report017',
    postId: '00000000000000000post017',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Hoang Anh',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T11:20:00.000Z',
    updatedAt: '2025-06-20T11:20:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report017',
        reason: 'Cần xác minh nội dung',
        reportedAt: '2025-06-20T11:20:00.000Z',
        isAIReport: false,
        status: 'PENDING',
      },
    ],
    title: 'Chia sẻ podcast chữa lành',
    content:
      'Dạo này mình hay nghe podcast về chữa lành tâm lý, thấy rất nhẹ nhõm. Mọi người có muốn mình gợi ý vài cái không?',
    mediaUrls: [],
  },
  {
    id: '000000000000000report018',
    postId: '00000000000000000post018',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Mai Hương',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T11:25:00.000Z',
    updatedAt: '2025-06-20T11:25:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report018',
        reason: 'Ngôn từ gây tổn thương',
        reportedAt: '2025-06-20T11:25:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Mọi người thật giả tạo',
    content:
      'Tôi không thể tin nổi người tôi từng xem là bạn thân lại làm thế với tôi.',
    mediaUrls: [],
  },
  {
    id: '000000000000000report019',
    postId: '00000000000000000post019',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Trung Vũ',
    status: 'PENDING',
    reportCount: 1,
    createdAt: '2025-06-20T11:30:00.000Z',
    updatedAt: '2025-06-20T11:30:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report019',
        reason: 'Cần kiểm tra AI',
        reportedAt: '2025-06-20T11:30:00.000Z',
        isAIReport: true,
        status: 'PENDING',
      },
    ],
    title: 'Có ai từng trải qua rối loạn lo âu?',
    content:
      'Mình muốn tìm người đã trải qua rối loạn lo âu để học hỏi cách đối mặt. Mình rất cần lời khuyên.',
    mediaUrls: [],
  },
  {
    id: '000000000000000report020',
    postId: '00000000000000000post020',
    groupId: '0000000000000000group001',
    ownerId: '00000000000000000user005',
    ownerUsername: 'Kiên Nguyễn',
    status: 'BLOCKED',
    reportCount: 1,
    createdAt: '2025-06-20T11:35:00.000Z',
    updatedAt: '2025-06-20T11:35:00.000Z',
    groupReports: [
      {
        reporterId: '000000000000000report020',
        reason: 'Chứa nội dung nhạy cảm',
        reportedAt: '2025-06-20T11:35:00.000Z',
        isAIReport: true,
        status: 'BLOCKED',
      },
    ],
    title: 'Tôi không cần ai cả',
    content:
      'Không ai quan tâm tôi thật lòng, vậy tại sao tôi phải giả vờ nữa?',
    mediaUrls: [],
  },
]
