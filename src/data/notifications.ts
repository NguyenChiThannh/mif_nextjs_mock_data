export type INotification = {
  receiverId: string
  message: string
  type: string
  createdAt: string
  isRead: boolean
  groupId: string
  groupName?: string
  groupAvatar: string
  groupPostId?: string
  isRemove: boolean
  title?: string
  content?: string
  senderId?: string
  eventId?: string
  mediaUrls?: string[]
  notifyId: string
  url?: string
}

export const notifications: INotification[] = [
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Bài viết của bạn đã bị chặn do vi phạm nội quy nhóm',
    type: 'POST_BLOCKED',
    createdAt: '2025-06-20T06:49:14.768+00:00',
    isRead: false,
    groupId: '6759d7c4e5bcb70995786267',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '68550467cea8cc509b62f08b',
    isRemove: false,
    title: 'Hello mọi người ',
    content: 'Hello mọi người, hôm nay khoẻ không',
    mediaUrls: [],
    notifyId: '6855046acea8cc509b62f0b3',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Bài viết của bạn đã bị chặn do vi phạm nội quy nhóm',
    type: 'POST_BLOCKED',
    createdAt: '2025-06-20T06:12:42.996+00:00',
    isRead: true,
    groupId: '6759d7c4e5bcb70995786267',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6854fbd8cea8cc509b62ed82',
    isRemove: false,
    title: 'Tôi không muốn sống nữa',
    content: 'Tôi không muốn sống nữa',
    mediaUrls: [],
    notifyId: '6854fbdbcea8cc509b62edaa',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Báo cáo của bạn về bài viết đã bị từ chối',
    type: 'REPORT_REJECTED',
    createdAt: '2025-06-20T05:50:44.233+00:00',
    isRead: false,
    groupId: '6759d7c4e5bcb70995786267',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6853b6bdd5572f544eb741c0',
    isRemove: false,
    title: 'sssssssssssssssssssssssssss',
    content: '@[Inception](683f2e74f259647e8295a6b1) Hehe',
    mediaUrls: [],
    notifyId: '6854f6b4cea8cc509b62e968',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Báo cáo của bạn về bài viết đã bị từ chối',
    type: 'REPORT_REJECTED',
    createdAt: '2025-06-20T05:50:44.232+00:00',
    isRead: false,
    groupId: '6759d7c4e5bcb70995786267',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6853b6bdd5572f544eb741c0',
    isRemove: false,
    title: 'sssssssssssssssssssssssssss',
    content: '@[Inception](683f2e74f259647e8295a6b1) Hehe',
    mediaUrls: [],
    notifyId: '6854f6b4cea8cc509b62e967',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Báo cáo của bạn về bài viết đã bị từ chối',
    type: 'REPORT_REJECTED',
    createdAt: '2025-06-20T05:50:44.231+00:00',
    isRead: false,
    groupId: '6759d7c4e5bcb70995786267',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6853b6bdd5572f544eb741c0',
    isRemove: false,
    title: 'sssssssssssssssssssssssssss',
    content: '@[Inception](683f2e74f259647e8295a6b1) Hehe',
    mediaUrls: [],
    notifyId: '6854f6b4cea8cc509b62e966',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Bài viết của bạn đã bị chặn do vi phạm nội quy nhóm',
    type: 'POST_BLOCKED',
    createdAt: '2025-06-20T05:49:57.916+00:00',
    isRead: false,
    groupId: '6759d7c4e5bcb70995786267',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6854f683cea8cc509b62e912',
    isRemove: false,
    title: 'Hello mọi người',
    content: 'Hello mọi người',
    mediaUrls: [],
    notifyId: '6854f685cea8cc509b62e93a',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Your post has received an upvote!',
    type: 'UP_VOTE',
    createdAt: '2025-06-20T04:15:03.342+00:00',
    isRead: true,
    groupId: '6759d7c4e5bcb70995786267',
    groupName: 'Rạp Chiếu Nhà Mình',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6854dd3ecea8cc509b62df2c',
    senderId: '676edac59a6e2c397046cede',
    isRemove: false,
    notifyId: '6854e047cea8cc509b62e250',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Your post has received an upvote!',
    type: 'UP_VOTE',
    createdAt: '2025-06-20T04:15:01.540+00:00',
    isRead: false,
    groupId: '6759d7c4e5bcb70995786267',
    groupName: 'Rạp Chiếu Nhà Mình',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6854df90cea8cc509b62e10c',
    senderId: '676edac59a6e2c397046cede',
    isRemove: false,
    notifyId: '6854e045cea8cc509b62e22e',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Your post has received an upvote!',
    type: 'UP_VOTE',
    createdAt: '2025-06-20T04:14:56.333+00:00',
    isRead: false,
    groupId: '6759d7cce5bcb70995786268',
    groupName: 'Xem Phim Là Chính',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '68545248765b1b7d46a1de9c',
    senderId: '676edac59a6e2c397046cede',
    isRemove: false,
    notifyId: '6854e040cea8cc509b62e1f7',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Your post has received an upvote!',
    type: 'UP_VOTE',
    createdAt: '2025-06-20T04:14:54.467+00:00',
    isRead: false,
    groupId: '6759d7cce5bcb70995786268',
    groupName: 'Xem Phim Là Chính',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6854e002cea8cc509b62e176',
    senderId: '676edac59a6e2c397046cede',
    isRemove: false,
    notifyId: '6854e03ecea8cc509b62e1e1',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Bài viết của bạn đã bị chặn do vi phạm nội quy nhóm',
    type: 'POST_BLOCKED',
    createdAt: '2025-06-20T03:55:53.283+00:00',
    isRead: false,
    groupId: '6759d7c4e5bcb70995786267',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6854dbc66193b5335d61524b',
    isRemove: false,
    title: 'Hello mọi người',
    content: 'Hello mọi người',
    mediaUrls: [],
    notifyId: '6854dbc96193b5335d6152a3',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Chúc mừng bạn đã đạt được huy hiệu BRONZE!',
    type: 'BADGE_EARNED',
    createdAt: '2025-06-19T18:10:05.092+00:00',
    isRead: true,
    groupId: '6759d7cce5bcb70995786268',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    isRemove: false,
    notifyId: '6854527d765b1b7d46a1dedf',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Your post has received an upvote!',
    type: 'UP_VOTE',
    createdAt: '2025-06-19T17:39:35.991+00:00',
    isRead: true,
    groupId: '676ee2039a6e2c397046d135',
    groupName: 'The One',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    groupPostId: '6854333dd5572f544eb78633',
    senderId: '674190e37ce01e203e8f7646',
    isRemove: false,
    notifyId: '68544b57765b1b7d46a1da57',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Sự kiện Fan minions đã bắt đầu!',
    type: 'EVENT',
    createdAt: '2025-06-19T15:59:01.483+00:00',
    isRead: true,
    groupId: '676ee2039a6e2c397046d135',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    isRemove: false,
    eventId: '685433c5d5572f544eb78657',
    notifyId: '685433c5d5572f544eb78658',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Sự kiện Fan Hiếu Thứ 2 đã bắt đầu!',
    type: 'EVENT',
    createdAt: '2025-06-19T15:45:42.617+00:00',
    isRead: true,
    groupId: '681aefdef788ea0cb985a984',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    isRemove: false,
    eventId: '685430a6d5572f544eb785ca',
    url: 'http://mif-nextjs-sage.vercel.app/vi/live?roomID=2830',
    notifyId: '685430a6d5572f544eb785cb',
  },
  {
    receiverId: '6741fe91821b58239de2aac7',
    message: 'Chúc mừng bạn đã đạt được huy hiệu GOLD!',
    type: 'BADGE_EARNED',
    createdAt: '2025-06-17T15:50:48.321+00:00',
    isRead: true,
    groupId: '6759d7c4e5bcb70995786267',
    groupAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/9eee504b-9d04-4fae-acec-32d81f520a53_defaul_background_group.png',
    isRemove: false,
    notifyId: '68518ed84c15c0661eb18179',
  },
]
