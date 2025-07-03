type BadgeLevel = 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM'

export type Comment = {
  id: string
  postId: string
  groupId: string
  userId: string
  username: string
  userAvatar: string
  content: string
  upvotes: string[]
  downvotes: string[]
  createAt: string
  badge: {
    level: BadgeLevel
  }
}
export const comments: Comment[] = [
  {
    id: '00000000000000comment001',
    postId: '00000000000000000post001',
    groupId: '0000000000000000group001',
    userId: '6741fe91821b58239de2aac7',
    username: 'Thanh Nguyễn',
    userAvatar:
      'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/3cc8b5ec-21fc-4bdf-a7d8-8b2b229cd96a_images (3).jpg',
    content: 'Phim hay quá, mình đã xem 3 lần rồi!',
    upvotes: ['6741fe91821b58239de2aac7'],
    downvotes: [],
    createAt: '2025-05-17T13:57:20.256+00:00',
    badge: {
      level: 'PLATINUM',
    },
  },
  {
    id: '00000000000000comment002',
    postId: '00000000000000000post001',
    groupId: '0000000000000000group001',
    userId: '6741fe91821b58239de2aac8',
    username: 'Minh Nguyễn',
    userAvatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    content: 'Phim này hay quá!',
    upvotes: ['6741fe91821b58239de2aac9'],
    downvotes: [],
    createAt: '2025-05-17T14:00:00.000+00:00',
    badge: {
      level: 'SILVER',
    },
  },
  {
    id: '00000000000000comment003',
    postId: '682895b79a4afe5243ae406d',
    groupId: '6759d7c4e5bcb70995786268',
    userId: '6741fe91821b58239de2aaca',
    username: 'Linh Đỗ',
    userAvatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    content: 'Không ngờ kết phim lại như vậy...',
    upvotes: ['6741fe91821b58239de2aac8'],
    downvotes: ['6741fe91821b58239de2aac9'],
    createAt: '2025-05-18T09:30:00.000+00:00',
    badge: {
      level: 'BRONZE',
    },
  },
  {
    id: '00000000000000comment004',
    postId: '682895b79a4afe5243ae406e',
    groupId: '6759d7c4e5bcb70995786269',
    userId: '6741fe91821b58239de2aacb',
    username: 'Nam Trần',
    userAvatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    content: 'Mình thấy phần trước vẫn hay hơn.',
    upvotes: [],
    downvotes: ['6741fe91821b58239de2aacc'],
    createAt: '2025-05-18T10:45:00.000+00:00',
    badge: {
      level: 'GOLD',
    },
  },
]
