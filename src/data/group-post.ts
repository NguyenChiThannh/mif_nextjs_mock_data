import { Movie } from '@/data/movie'
import { USERID } from '@/utils/contants'

export type GroupPost = {
  id: string
  groupId: string
  groupName?: string
  isJoined?: boolean
  owner: {
    id: string
    displayName: string
    profilePictureUrl: string
    badgeMap: {
      [groupId: string]: 'GOLD' | 'SILVER' | 'BRONZE' | string
    }
  }
  title: string
  content: string
  mediaUrls: string[]
  voteNumber: number
  userVotes: 'UPVOTE' | 'DOWNVOTE' | null
  isBlock?: boolean
  createdAt: string
  updatedAt: string
}

export const groupPost: GroupPost[] = [
  {
    id: '00000000000000000post901',
    groupId: '0000000000000000group001',
    groupName: 'Điện Ảnh Kinh Điển',
    isJoined: true,
    owner: {
      id: USERID,
      displayName: 'Lê Văn An',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'The Exorcism of God – Khi Đức Tin và Tội Lỗi Giao Thoa',
    content:
      'Một linh mục người Mỹ được dân làng ở Mexico coi như vị thánh sống, nhưng ẩn sâu trong tâm hồn ông là một tội lỗi ghê gớm từ một buổi trừ tà thất bại. Bộ phim khai thác sâu sắc cuộc đấu tranh nội tâm giữa lòng tin và sự chuộc lỗi, giữa ánh sáng và bóng tối mà ai trong chúng ta cũng từng phải đối mặt. @[The Exorcism of God](0000000000000000movie001) không chỉ đơn thuần là một phim kinh dị mà còn là lời cảnh tỉnh về sự yếu đuối của con người trước cám dỗ.',
    mediaUrls: [
      'https://image.tmdb.org/t/p/original/pcqo9D8Bdppt6t9fBliJYPROZkv.jpg',
    ],
    voteNumber: 12,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-25T10:00:00.000Z',
    updatedAt: '2025-06-25T10:00:00.000Z',
  },
  {
    id: '00000000000000000post902',
    groupId: '0000000000000000group001',
    groupName: 'Điện Ảnh Kinh Điển',
    isJoined: true,
    owner: {
      id: USERID,
      displayName: 'Lê Văn An',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'The Deep House – Bí Ẩn Dưới Lòng Hồ',
    content:
      '@[The Deep House](0000000000000000movie002) Một ngôi nhà chìm dưới đáy hồ sâu – tưởng chừng chỉ là một khám phá thú vị – lại trở thành cơn ác mộng thực sự. Cặp đôi YouTuber bị mắc kẹt với lượng oxy cạn kiệt và những hiện tượng kỳ dị không thể lý giải. Không khí lạnh lẽo, u tối và cảm giác tuyệt vọng dần bóp nghẹt người xem. The Deep House là trải nghiệm điện ảnh khác biệt, mang lại sự kinh hoàng từ một bối cảnh tưởng như yên bình.',
    mediaUrls: [
      'https://image.tmdb.org/t/p/original/5xhAPxRr64oQPEFnUOrttuI4ZEU.jpg',
    ],
    voteNumber: 12,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-25T10:00:00.000Z',
    updatedAt: '2025-06-25T10:00:00.000Z',
  },

  {
    id: '00000000000000000post001',
    groupId: '0000000000000000group001',
    groupName: 'Điện Ảnh Kinh Điển',
    isJoined: true,
    owner: {
      id: USERID,
      displayName: 'Lê Văn An',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'Titanic – Biểu tượng điện ảnh vượt thời gian',
    content:
      'Titanic không chỉ là một bộ phim lãng mạn mà còn là tác phẩm phản ánh sâu sắc sự phân biệt giai cấp, bi kịch và lòng quả cảm. Chuyện tình của Jack và Rose được đặt trong bối cảnh con tàu huyền thoại Titanic, mang đến những cảm xúc mãnh liệt về hy sinh, tình yêu và mất mát. Bộ phim không chỉ khiến khán giả rơi lệ mà còn để lại dấu ấn trong lịch sử điện ảnh thế giới.',
    mediaUrls: [
      'https://i.pinimg.com/736x/6e/b8/28/6eb82852b91397cfc6600348ca7a1e7d.jpg',
    ],
    voteNumber: 12,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-25T10:00:00.000Z',
    updatedAt: '2025-06-25T10:00:00.000Z',
  },
  {
    id: '00000000000000000post002',
    groupId: '0000000000000000group001',
    groupName: 'Phim Marvel',
    isJoined: true,
    owner: {
      id: USERID,
      displayName: 'Trần Thị Biển',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'Endgame – Cái kết hoành tráng cho một kỷ nguyên',
    content:
      '@[Avengers: Endgame](0000000000000000movie006) là một kết thúc đầy cảm xúc cho chuỗi hành trình hơn 10 năm của Vũ trụ Điện ảnh Marvel. Bộ phim quy tụ hầu hết các siêu anh hùng từng xuất hiện, cùng nhau chiến đấu trong trận chiến quyết định với Thanos. Những phân cảnh chia tay, hy sinh và chiến thắng trong Endgame không chỉ mãn nhãn về kỹ xảo mà còn lắng đọng về mặt cảm xúc, khiến fan hâm mộ không thể quên.',
    mediaUrls: [
      'https://i.pinimg.com/736x/34/ea/16/34ea16fcaf67ccfbd235159370c34d2a.jpg',
    ],
    voteNumber: 35,
    userVotes: null,
    createdAt: '2025-06-24T08:30:00.000Z',
    updatedAt: '2025-06-24T08:30:00.000Z',
  },
  {
    id: '00000000000000000post003',
    groupId: '0000000000000000group001',
    groupName: 'Xem Phim Là Chính',
    isJoined: true,
    owner: {
      id: '00000000000000000user003',
      displayName: 'Phạm Văn Chính',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      badgeMap: { '0000000000000000group001': 'BRONZE' },
    },
    title: 'Shutter Island – Khi thực tại là một ảo ảnh',
    content:
      'Shutter Island là một tác phẩm ly kỳ do Martin Scorsese đạo diễn, kể về hành trình điều tra của hai cảnh sát đến một hòn đảo chuyên giam giữ tội phạm tâm thần. Nhưng càng đi sâu, nhân vật chính càng rơi vào vòng xoáy của chính tâm trí mình, khiến người xem nghi ngờ đâu là sự thật, đâu là hoang tưởng. Kết thúc phim để lại nhiều tranh luận về thực tại và nhân cách thật sự của nhân vật chính.',
    mediaUrls: [
      'https://i.pinimg.com/736x/1f/7f/6d/1f7f6d738135dffd5e7cf72f6f34c747.jpg',
    ],
    voteNumber: 18,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-23T15:45:00.000Z',
    updatedAt: '2025-06-23T15:45:00.000Z',
  },
  {
    id: '00000000000000000post004',
    groupId: '0000000000000000group001',
    groupName: 'Rạp Chiếu Nhà Mình',
    isJoined: true,
    owner: {
      id: '00000000000000000user004',
      displayName: 'Ngô Thị Dung',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'Parasite – Phim Hàn đầu tiên đoạt Oscar',
    content:
      'Parasite của đạo diễn Bong Joon Ho đã làm nên lịch sử khi trở thành bộ phim Hàn Quốc đầu tiên giành giải Oscar Phim xuất sắc nhất. Tác phẩm phơi bày sự chênh lệch giàu nghèo qua hai gia đình với hoàn cảnh trái ngược, khéo léo lồng ghép yếu tố hài đen và căng thẳng tột độ. Mỗi chi tiết trong phim đều mang tính biểu tượng, khiến người xem vừa thích thú vừa rùng mình.',
    mediaUrls: [
      'https://i.pinimg.com/736x/a9/7d/26/a97d26449214bb756c75b4ed88d7b06e.jpg',
    ],
    voteNumber: 22,
    userVotes: null,
    createdAt: '2025-06-22T14:00:00.000Z',
    updatedAt: '2025-06-22T14:00:00.000Z',
  },
  {
    id: '00000000000000000post005',
    groupId: '0000000000000000group001',
    groupName: 'Fan Cứng Nolan',
    isJoined: true,
    owner: {
      id: '00000000000000000user005',
      displayName: 'Đặng Văn Nam',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'Interstellar – Cuộc hành trình xuyên không gian và thời gian',
    content:
      'Interstellar là một bản giao hưởng điện ảnh về tình cảm gia đình, khoa học và sự sống còn của nhân loại. Dưới bàn tay của Christopher Nolan, bộ phim không chỉ mang lại hình ảnh vũ trụ tuyệt đẹp mà còn truyền tải thông điệp sâu sắc về tình yêu vượt không gian. Những khái niệm vật lý phức tạp như lỗ đen, thời gian tương đối được lồng ghép khéo léo, làm nên một trải nghiệm điện ảnh khó quên.',
    mediaUrls: [
      'https://i.pinimg.com/736x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg',
    ],
    voteNumber: 50,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-21T13:20:00.000Z',
    updatedAt: '2025-06-21T13:20:00.000Z',
  },
  {
    id: '00000000000000000post006',
    groupId: '0000000000000000group001',
    groupName: 'Điện Ảnh Kinh Điển',
    isJoined: true,
    owner: {
      id: '00000000000000000user001',
      displayName: 'Lê Văn An',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'The Godfather – Bố già và những di sản bất tử',
    content:
      'The Godfather là tác phẩm điện ảnh vĩ đại không chỉ vì nội dung hấp dẫn mà còn vì chiều sâu tâm lý nhân vật. Bộ phim mô tả quá trình một gia đình mafia Mỹ vận hành trong thế giới ngầm với các giá trị về danh dự, lòng trung thành và quyền lực. Đạo diễn Francis Ford Coppola cùng diễn xuất đỉnh cao của Marlon Brando đã biến bộ phim thành tượng đài điện ảnh mà nhiều thế hệ vẫn học hỏi.',
    mediaUrls: [
      'https://i.pinimg.com/736x/3a/2d/34/3a2d34f0a80d0a462ed5b953df963a3e.jpg',
    ],
    voteNumber: 60,
    userVotes: null,
    createdAt: '2025-06-20T11:00:00.000Z',
    updatedAt: '2025-06-20T11:00:00.000Z',
  },
  {
    id: '00000000000000000post007',
    groupId: '0000000000000000group006',
    groupName: 'Cộng đồng Anime',
    isJoined: true,
    owner: {
      id: '00000000000000000user006',
      displayName: 'Nguyễn Thị Mai',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
      badgeMap: { '0000000000000000group006': 'BRONZE' },
    },
    title: 'Your Name – Khi hai linh hồn hoán đổi',
    content:
      'Your Name là một anime nổi bật của đạo diễn Makoto Shinkai, kể về câu chuyện hoán đổi thân xác kỳ lạ giữa hai người trẻ sống ở hai thế giới khác nhau. Phim gây ấn tượng mạnh bởi hình ảnh tuyệt đẹp, âm nhạc bắt tai và nội dung sâu sắc về duyên phận, ký ức và sự kết nối trong không gian lẫn thời gian. Đây là một trong những phim anime được yêu thích nhất mọi thời đại.',
    mediaUrls: [
      'https://i.pinimg.com/736x/32/0a/b7/320ab7994967c304099d49b9ba405a70.jpg',
    ],
    voteNumber: 40,
    userVotes: null,
    createdAt: '2025-06-19T09:15:00.000Z',
    updatedAt: '2025-06-19T09:15:00.000Z',
  },
  {
    id: '00000000000000000post008',
    groupId: '0000000000000000group007',
    groupName: 'Cinephile Việt Nam',
    isJoined: true,
    owner: {
      id: '00000000000000000user007',
      displayName: 'Bùi Văn Giang',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
      badgeMap: { '0000000000000000group007': 'SILVER' },
    },
    title: 'Fight Club – Luật đầu tiên là không nói về nó',
    content:
      'Fight Club là một bộ phim đậm chất ngầm, với thông điệp phản ánh sự bế tắc của con người hiện đại trước lối sống tiêu dùng. Nhân vật chính mắc chứng rối loạn nhân cách, tạo ra một phiên bản khác của chính mình để phá vỡ sự nhàm chán của cuộc sống. Tác phẩm gây sốc với cú twist cuối cùng, khiến khán giả không thể đoán trước và suy ngẫm mãi về cái tôi, bản ngã và sự nổi loạn.',
    mediaUrls: [
      'https://i.pinimg.com/736x/00/55/b1/0055b1c846f56446922396aa7921999a.jpg',
    ],
    voteNumber: 28,
    userVotes: null,
    createdAt: '2025-06-18T16:45:00.000Z',
    updatedAt: '2025-06-18T16:45:00.000Z',
  },
  {
    id: '00000000000000000post009',
    groupId: '0000000000000000group008',
    groupName: 'Review Phim Mỗi Ngày',
    isJoined: true,
    owner: {
      id: '00000000000000000user008',
      displayName: 'Nguyễn Thị Lan',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
      badgeMap: { '0000000000000000group008': 'GOLD' },
    },
    title: 'La La Land – Giai điệu mộng mơ giữa đời thực',
    content:
      'La La Land là một bản tình ca điện ảnh hiện đại, pha trộn giữa âm nhạc, tình yêu và những giấc mơ chưa thành hiện thực. Bộ phim không chỉ hút hồn người xem bằng những bản nhạc jazz quyến rũ mà còn gợi nhớ rằng không phải giấc mơ nào cũng đi cùng tình yêu. Tác phẩm đọng lại nhiều cảm xúc, khiến người xem vừa mỉm cười vừa cay mắt sau những khung hình cuối.',
    mediaUrls: [
      'https://i.pinimg.com/736x/93/e0/85/93e0856180ca4f5dec8bf8bab4a50ca0.jpg',
    ],
    voteNumber: 31,
    userVotes: 'DOWNVOTE',
    createdAt: '2025-06-17T20:00:00.000Z',
    updatedAt: '2025-06-17T20:00:00.000Z',
  },
  {
    id: '00000000000000000post010',
    groupId: '0000000000000000group001',
    groupName: 'Phim Marvel',
    isJoined: true,
    owner: {
      id: '00000000000000000user002',
      displayName: 'Trần Thị B',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'Iron Man – Người mở đường cho MCU',
    content:
      'Iron Man là tác phẩm đầu tiên đặt nền móng cho toàn bộ Vũ trụ Điện ảnh Marvel. Nhân vật Tony Stark – một thiên tài công nghệ kiêu ngạo nhưng có trái tim nhân hậu – đã trở thành biểu tượng của lòng quả cảm và hy sinh. Câu chuyện về sự trưởng thành, thay đổi và cống hiến của Stark là hành trình đầy cảm hứng mà hàng triệu khán giả vẫn luôn nhớ mãi.',
    mediaUrls: [],
    voteNumber: 25,
    userVotes: null,
    createdAt: '2025-06-16T10:00:00.000Z',
    updatedAt: '2025-06-16T10:00:00.000Z',
  },
  {
    id: '00000000000000000post011',
    groupId: '0000000000000000group009',
    groupName: 'Hội Thích Phim Tâm Lý',
    isJoined: true,
    owner: {
      id: '00000000000000000user009',
      displayName: 'Vũ Minh Khang',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
      badgeMap: { '0000000000000000group009': 'GOLD' },
    },
    title: 'Joker – Tấn bi kịch hiện đại của một kẻ bị bỏ rơi',
    content:
      'Joker là bộ phim đi sâu vào tâm lý rối loạn và sự cô lập của nhân vật Arthur Fleck – một người đàn ông bị xã hội ruồng bỏ, từng bước biến thành biểu tượng hỗn loạn. Không đơn thuần là phim siêu anh hùng, Joker là lời tố cáo mạnh mẽ về bất công, bệnh tâm thần và sự vô cảm của xã hội hiện đại. Diễn xuất đỉnh cao của Joaquin Phoenix khiến người xem ám ảnh mãi về nụ cười gượng gạo cùng đôi mắt bi thương.',
    mediaUrls: [
      'https://i.pinimg.com/736x/85/44/c2/8544c2ab18f93b4843d34bd68a095f62.jpg',
    ],
    voteNumber: 45,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-15T14:00:00.000Z',
    updatedAt: '2025-06-15T14:00:00.000Z',
  },
  {
    id: '00000000000000000post012',
    groupId: '0000000000000000group001',
    groupName: 'Phim Ý Nghĩa',
    isJoined: true,
    owner: {
      id: 'user010',
      displayName: 'Lương Hải My',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'The Pursuit of Happyness – Hành trình không bỏ cuộc',
    content:
      'The Pursuit of Happyness là câu chuyện có thật về Chris Gardner, một người cha đơn thân từng lang thang vô gia cư nhưng không bao giờ bỏ cuộc để có được một tương lai tốt đẹp hơn cho con trai mình. Bộ phim là minh chứng sống động cho nghị lực, niềm tin và tình phụ tử. Will Smith đã thể hiện xuất sắc vai diễn, mang lại cảm hứng cho hàng triệu người trên khắp thế giới.',
    mediaUrls: [
      'https://i.pinimg.com/736x/dd/4f/a0/dd4fa0752e4662e768e441f8d748492f.jpg',
    ],
    voteNumber: 33,
    userVotes: null,
    createdAt: '2025-06-14T08:00:00.000Z',
    updatedAt: '2025-06-14T08:00:00.000Z',
  },
  {
    id: '00000000000000000post013',
    groupId: '0000000000000000group001',
    groupName: 'Anime Hành Động',
    isJoined: true,
    owner: {
      id: 'user011',
      displayName: 'Trần Quốc Cường',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
      badgeMap: { '0000000000000000group001': 'BRONZE' },
    },
    title: 'Attack on Titan – Khi nhân loại đứng bên bờ tuyệt diệt',
    content:
      'Attack on Titan không chỉ nổi tiếng vì những pha hành động nghẹt thở mà còn bởi sự phức tạp trong tư tưởng chính trị, chiến tranh và tự do. Câu chuyện về Eren, Mikasa và Armin cùng những cuộc chiến không hồi kết chống lại Titan mang đến cảm giác kịch tính tột độ. Phim khiến người xem suy ngẫm về bản chất con người và cái giá của hòa bình.',
    mediaUrls: [
      'https://i.pinimg.com/736x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg',
    ],
    voteNumber: 38,
    userVotes: null,
    createdAt: '2025-06-13T18:30:00.000Z',
    updatedAt: '2025-06-13T18:30:00.000Z',
  },
  {
    id: '00000000000000000post014',
    groupId: '0000000000000000group001',
    groupName: 'Review Netflix',
    isJoined: true,
    owner: {
      id: 'user012',
      displayName: 'Nguyễn Thị Quỳnh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'Black Mirror – Khi công nghệ trở thành cơn ác mộng',
    content:
      'Black Mirror là loạt phim tuyển tập khai thác mặt tối của công nghệ và xã hội hiện đại. Mỗi tập là một câu chuyện riêng biệt nhưng đều gây ám ảnh sâu sắc, từ sự kiểm soát dữ liệu, trí tuệ nhân tạo đến thế giới ảo. Không chỉ cảnh báo về tương lai, Black Mirror còn buộc người xem tự soi lại lối sống hiện tại của chính mình.',
    mediaUrls: [
      'https://i.pinimg.com/736x/0a/b2/b9/0ab2b9f8815e1001c305c5c1801c82ea.jpg',
    ],
    voteNumber: 26,
    userVotes: null,
    createdAt: '2025-06-12T12:00:00.000Z',
    updatedAt: '2025-06-12T12:00:00.000Z',
  },
  {
    id: '00000000000000000post015',
    groupId: '0000000000000000group001',
    groupName: 'Sáng Tạo Kịch Bản',
    isJoined: true,
    owner: {
      id: 'user013',
      displayName: 'Phan Duy An',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'Tenet – Khi thời gian bị bẻ cong',
    content:
      'Tenet là bộ phim thách thức tư duy người xem với khái niệm “đảo ngược thời gian” đầy phức tạp. Dưới sự chỉ đạo của Christopher Nolan, tác phẩm đan xen giữa hành động gay cấn và triết lý sâu xa. Dù bị đánh giá là khó hiểu, Tenet vẫn được coi là cuộc cách mạng trong cách kể chuyện điện ảnh hiện đại.',
    mediaUrls: [
      'https://i.pinimg.com/736x/41/16/d3/4116d3fe45fb262d8f6d3ca4dd8c3f26.jpg',
    ],
    voteNumber: 29,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-11T10:10:00.000Z',
    updatedAt: '2025-06-11T10:10:00.000Z',
  },
  {
    id: '00000000000000000post016',
    groupId: '0000000000000000group001',
    groupName: 'Review Phim Lẻ',
    isJoined: true,
    owner: {
      id: 'user014',
      displayName: 'Nguyễn Hữu Bảo',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/14.jpg',
      badgeMap: { '0000000000000000group001': 'BRONZE' },
    },
    title: 'The Prestige – Cuộc đấu tay đôi giữa hai ảo thuật gia',
    content:
      'The Prestige là một tác phẩm điện ảnh hấp dẫn và hồi hộp về sự cạnh tranh giữa hai ảo thuật gia tài ba. Mỗi người đều sẵn sàng đánh đổi tất cả để vượt qua người còn lại, kể cả lừa dối và đánh mất chính bản thân mình. Phim có cú twist cuối khiến khán giả bàng hoàng, và gợi nhắc về bản chất của sự hi sinh cho nghệ thuật.',
    mediaUrls: [
      'https://i.pinimg.com/736x/99/76/3a/99763af666ee931302e21c9cad3243ed.jpg',
    ],
    voteNumber: 19,
    userVotes: null,
    createdAt: '2025-06-10T11:45:00.000Z',
    updatedAt: '2025-06-10T11:45:00.000Z',
  },
  {
    id: '00000000000000000post017',
    groupId: '0000000000000000group001',
    groupName: 'Bàn Luận Phim Hay',
    isJoined: true,
    owner: {
      id: 'user015',
      displayName: 'Hồ Thanh Phúc',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'The Green Mile – Phép màu trong ngục tối',
    content:
      'The Green Mile kể về câu chuyện xúc động giữa các quản ngục và một tử tù sở hữu năng lực kỳ diệu. Phim không chỉ phản ánh sự bất công của hệ thống tư pháp mà còn tôn vinh lòng nhân ái, sự thứ tha và niềm tin vào điều kỳ diệu. Diễn xuất của Tom Hanks và Michael Clarke Duncan để lại ấn tượng sâu sắc trong lòng người xem.',
    mediaUrls: [
      'https://i.pinimg.com/736x/ca/1d/78/ca1d78a293fd9b959bb6b3d58d55faaf.jpg',
    ],
    voteNumber: 34,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-09T13:00:00.000Z',
    updatedAt: '2025-06-09T13:00:00.000Z',
  },
  {
    id: '00000000000000000post018',
    groupId: '0000000000000000group001',
    groupName: 'Thảo Luận Điện Ảnh',
    isJoined: true,
    owner: {
      id: 'user016',
      displayName: 'Ngô Đức Lâm',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/16.jpg',
      badgeMap: { '0000000000000000group001': 'BRONZE' },
    },
    title: 'Her – Khi con người yêu trí tuệ nhân tạo',
    content:
      'Her là một bộ phim nhẹ nhàng nhưng sâu lắng, kể về Theodore – một người đàn ông cô đơn đã phải lòng một hệ điều hành trí tuệ nhân tạo tên Samantha. Câu chuyện tình yêu khác thường này khiến người xem suy ngẫm về cảm xúc, sự kết nối và cả sự cô lập trong thời đại công nghệ số. Bộ phim khắc họa tuyệt vời sự mỏng manh trong các mối quan hệ hiện đại.',
    mediaUrls: [
      'https://i.pinimg.com/736x/07/f6/e3/07f6e391953f5c682cd6d7727057a94b.jpg',
    ],
    voteNumber: 21,
    userVotes: null,
    createdAt: '2025-06-08T14:45:00.000Z',
    updatedAt: '2025-06-08T14:45:00.000Z',
  },
  {
    id: '00000000000000000post019',
    groupId: '0000000000000000group001',
    groupName: 'Điện Ảnh Pháp',
    isJoined: true,
    owner: {
      id: 'user017',
      displayName: 'Trương Ngọc Mai',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/17.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'Amélie – Khi cuộc sống là chuỗi bất ngờ nhỏ',
    content:
      'Amélie là bộ phim Pháp đầy màu sắc, hài hước và nhân văn, kể về cô gái kỳ lạ Amélie giúp đỡ người khác theo những cách bất ngờ. Phim là hành trình khám phá niềm vui trong những điều nhỏ bé và vẻ đẹp của lòng tốt. Với phong cách kể chuyện độc đáo và âm nhạc du dương, Amélie chạm tới trái tim của mọi khán giả yêu điện ảnh.',
    mediaUrls: [
      'https://i.pinimg.com/736x/1f/36/de/1f36de4122ef352b42679cd34249db72.jpg',
      'https://i.pinimg.com/736x/07/fd/1e/07fd1e2e9a498a2f93b6c53f773108cc.jpg',
    ],
    voteNumber: 27,
    userVotes: null,
    createdAt: '2025-06-07T10:20:00.000Z',
    updatedAt: '2025-06-07T10:20:00.000Z',
  },
  {
    id: '00000000000000000post020',
    groupId: '0000000000000000group001',
    groupName: 'Cộng đồng Phim Nghệ Thuật',
    isJoined: true,
    owner: {
      id: 'user018',
      displayName: 'Hoàng Đức Huy',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'Tree of Life – Khi điện ảnh là thơ',
    content:
      'Tree of Life của đạo diễn Terrence Malick là một kiệt tác nghệ thuật, kể về sự sống, cái chết và vai trò của con người trong vũ trụ. Bộ phim có nhịp điệu chậm rãi, hình ảnh siêu thực và câu chuyện trừu tượng, khiến người xem như lạc vào một bài thơ hình ảnh. Đây là tác phẩm không dành cho số đông nhưng lại được giới phê bình ca ngợi hết lời.',
    mediaUrls: [
      'https://i.pinimg.com/736x/6c/db/4c/6cdb4c2b4bfb0136407ef7c23e5d687e.jpg',
      'https://i.pinimg.com/736x/56/8d/20/568d2088a93b25b2d3a6371d2780e4b9.jpg',
    ],
    voteNumber: 17,
    userVotes: null,
    createdAt: '2025-06-06T11:11:00.000Z',
    updatedAt: '2025-06-06T11:11:00.000Z',
  },
  {
    id: '00000000000000000post021',
    groupId: '0000000000000000group001',
    groupName: 'Điện Ảnh Và Triết Lý',
    isJoined: true,
    owner: {
      id: 'user019',
      displayName: 'Đặng Minh Trí',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/19.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'Interstellar – Hành trình vượt thời gian và tình yêu',
    content:
      'Interstellar không đơn thuần là bộ phim khoa học viễn tưởng mà còn là một bản tình ca về tình phụ tử, sự hy sinh và niềm tin vượt thời gian. Khi Trái Đất sụp đổ, nhóm phi hành gia liều mình khám phá không gian để tìm hành tinh mới. Tác phẩm đưa người xem qua hố đen, sự giãn nở thời gian và những khoảnh khắc đầy nước mắt giữa Cooper và cô con gái Murph. Điểm mạnh không chỉ ở hình ảnh mãn nhãn mà còn ở thông điệp rằng tình yêu là thứ kết nối con người vượt qua mọi không gian, mọi chiều thời gian.',
    mediaUrls: [
      'https://i.pinimg.com/736x/71/9b/3b/719b3b67959ba85f33ce4508a4b9e5ed.jpg',
    ],
    voteNumber: 52,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-05T10:00:00.000Z',
    updatedAt: '2025-06-05T10:00:00.000Z',
  },
  {
    id: '00000000000000000post022',
    groupId: '0000000000000000group001',
    groupName: 'Điện Ảnh & Văn Học',
    isJoined: true,
    owner: {
      id: 'user020',
      displayName: 'Nguyễn Hà Linh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/20.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'Dead Poets Society – Hãy sống cuộc đời của chính mình',
    content:
      '“O Captain! My Captain!” – câu nói kinh điển từ Dead Poets Society là biểu tượng của cảm hứng, tự do và sự phản kháng. Bộ phim là hành trình của thầy giáo John Keating và các học sinh tại trường trung học khắt khe Welton. Với thơ ca, ông dạy học sinh sống thật với đam mê, đấu tranh cho chính kiến và trân trọng khoảnh khắc hiện tại. Phim gây xúc động mạnh bởi thông điệp về giá trị cá nhân và cái giá của sự tự do tư tưởng.',
    mediaUrls: [
      'https://i.pinimg.com/736x/aa/91/91/aa91916581e3ace43981255a7f70638d.jpg',
    ],
    voteNumber: 41,
    userVotes: null,
    createdAt: '2025-06-04T16:15:00.000Z',
    updatedAt: '2025-06-04T16:15:00.000Z',
  },
  {
    id: '00000000000000000post023',
    groupId: '0000000000000000group001',
    groupName: 'Phim Tình Cảm Ý Nghĩa',
    isJoined: true,
    owner: {
      id: 'user021',
      displayName: 'Phạm Gia Hưng',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
      badgeMap: { '0000000000000000group001': 'BRONZE' },
    },
    title: 'La La Land – Khi mộng mơ và hiện thực va chạm',
    content:
      'La La Land là bản hòa ca giữa hoài niệm, khát vọng và sự chia ly. Chuyện tình giữa Mia – nữ diễn viên đầy hoài bão – và Sebastian – nhạc công jazz đam mê – là bức tranh đẹp nhưng buồn về hai người yêu nhau nhưng không cùng hướng đi. Phim tỏa sáng nhờ màu sắc rực rỡ, âm nhạc tuyệt vời và cú twist thực tế đau đớn: yêu nhau không có nghĩa là đi cùng nhau đến cuối. Đây là một lời nhắc dịu dàng nhưng thấm thía về sự lựa chọn trong cuộc sống.',
    mediaUrls: [
      'https://i.pinimg.com/736x/11/6a/89/116a89bd15958154b2bf463cb9ab0b1a.jpg',
    ],
    voteNumber: 36,
    userVotes: null,
    createdAt: '2025-06-03T14:40:00.000Z',
    updatedAt: '2025-06-03T14:40:00.000Z',
  },
  {
    id: '00000000000000000post024',
    groupId: '0000000000000000group001',
    groupName: 'Suy Ngẫm Qua Điện Ảnh',
    isJoined: true,
    owner: {
      id: 'user022',
      displayName: 'Đỗ Văn Khánh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'Forrest Gump – Cái nhìn giản dị về cuộc sống',
    content:
      '“Life is like a box of chocolates” – mỗi lần xem Forrest Gump, người ta lại thấm thêm một tầng nghĩa về sự ngẫu nhiên và kỳ diệu của cuộc đời. Dù trí tuệ có giới hạn, Forrest luôn sống chân thành, tử tế và kiên trì. Anh tham gia chiến tranh, chơi bóng bàn, chạy khắp nước Mỹ... chỉ vì lời hứa và tình yêu với Jenny. Forrest Gump khiến khán giả cười, khóc, và cuối cùng là tin rằng chỉ cần sống tốt, cuộc sống sẽ trả lời theo cách riêng.',
    mediaUrls: [
      'https://i.pinimg.com/736x/ea/9d/7a/ea9d7aadfbb4a2302a4d0d08eab0bcf3.jpg',
    ],
    voteNumber: 48,
    userVotes: null,
    createdAt: '2025-06-02T13:00:00.000Z',
    updatedAt: '2025-06-02T13:00:00.000Z',
  },
  {
    id: '00000000000000000post025',
    groupId: '0000000000000000group001',
    groupName: 'Phim Và Bản Ngã',
    isJoined: true,
    owner: {
      id: 'user023',
      displayName: 'Lê Nhật Thành',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/23.jpg',
      badgeMap: { '0000000000000000group001': 'BRONZE' },
    },
    title: 'Fight Club – Cuộc chiến với chính mình',
    content:
      'Fight Club là sự va chạm giữa bản năng nổi loạn và xã hội hiện đại gò bó. Nhân vật chính – người đàn ông không tên – vật lộn giữa sự trống rỗng và khao khát kiểm soát cuộc đời. Khi Tyler Durden xuất hiện, mọi thứ bùng nổ trong một hành trình đầy bạo lực và tự vấn. Phim khiến người xem đặt câu hỏi về danh tính, vật chất và sự kháng cự với thế giới tiêu dùng vô hồn.',
    mediaUrls: [],
    voteNumber: 39,
    userVotes: null,
    createdAt: '2025-06-01T21:00:00.000Z',
    updatedAt: '2025-06-01T21:00:00.000Z',
  },
  {
    id: '00000000000000000post026',
    groupId: '0000000000000000group001',
    groupName: 'Tâm Lý & Tội Phạm',
    isJoined: true,
    owner: {
      id: 'user024',
      displayName: 'Trần Hải Đăng',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/24.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'Prisoners – Khi công lý không còn trắng đen',
    content:
      'Prisoners khai thác mặt tối của tình phụ huynh và công lý. Khi con gái bị bắt cóc, Keller Dover dấn thân vào hành trình tìm kiếm vô vọng, thậm chí tra tấn nghi phạm. Câu chuyện phơi bày nỗi sợ hãi, giới hạn đạo đức và hệ thống luật pháp thiếu sót. Phim làm người xem nghẹt thở với không khí u ám và thông điệp về niềm tin, tội lỗi và sự cứu chuộc.',
    mediaUrls: [
      'https://i.pinimg.com/736x/b5/37/3e/b5373ee459e3032a0f72f25a714e9e2c.jpg',
      'https://i.pinimg.com/736x/6c/78/b2/6c78b24e3d23cc1423b78b33cea8ce96.jpg',
    ],
    voteNumber: 31,
    userVotes: 'UPVOTE',
    createdAt: '2025-05-31T17:00:00.000Z',
    updatedAt: '2025-05-31T17:00:00.000Z',
  },
  {
    id: '00000000000000000post027',
    groupId: '0000000000000000group001',
    groupName: 'Điện Ảnh Hàn Quốc',
    isJoined: true,
    owner: {
      id: 'user025',
      displayName: 'Kim Jisoo',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/25.jpg',
      badgeMap: { '0000000000000000group001': 'GOLD' },
    },
    title: 'Parasite – Hố sâu giai cấp trong xã hội hiện đại',
    content:
      'Parasite của đạo diễn Bong Joon-ho là lời phê phán sắc sảo về bất bình đẳng giàu nghèo. Gia đình nghèo Kim len lỏi vào gia đình giàu Park, từng bước bộc lộ sự trớ trêu và u tối trong lòng xã hội Hàn Quốc. Phim dẫn dắt người xem từ hài hước đến căng thẳng, kết thúc trong bi kịch. Không chỉ là tác phẩm nghệ thuật, Parasite còn là tấm gương phản chiếu thực trạng toàn cầu.',
    mediaUrls: [
      'https://i.pinimg.com/736x/a3/b0/c1/a3b0c1c0a08758240760d696dc75e4da.jpg',
    ],
    voteNumber: 55,
    userVotes: null,
    createdAt: '2025-05-30T19:30:00.000Z',
    updatedAt: '2025-05-30T19:30:00.000Z',
  },
  {
    id: '00000000000000000post028',
    groupId: '0000000000000000group001',
    groupName: 'Điện Ảnh Nhật Bản',
    isJoined: true,
    owner: {
      id: 'user026',
      displayName: 'Yamada Taro',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/26.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'Your Name – Tình yêu vượt không gian thời gian',
    content:
      'Your Name không chỉ là anime tình cảm mà còn là bản giao hưởng về định mệnh, ký ức và hoài niệm. Mitsuha và Taki – hai con người xa lạ hoán đổi thân xác, rồi yêu nhau mà không biết tên nhau. Bộ phim đan xen giữa hiện thực và siêu nhiên, mang đến xúc cảm lãng mạn, ngọt ngào nhưng cũng rất đỗi cô đơn. Một tác phẩm khiến người xem tin rằng giữa muôn trùng thế giới, ta vẫn có thể tìm thấy người thuộc về mình.',
    mediaUrls: [
      'https://i.pinimg.com/736x/aa/a6/2c/aaa62cead4091f38f12a5e648df1b73d.jpg',
    ],
    voteNumber: 49,
    userVotes: 'UPVOTE',
    createdAt: '2025-05-29T10:10:00.000Z',
    updatedAt: '2025-05-29T10:10:00.000Z',
  },
  {
    id: '00000000000000000post029',
    groupId: '0000000000000000group001',
    groupName: 'Review Kinh Dị',
    isJoined: true,
    owner: {
      id: 'user027',
      displayName: 'Phan Minh Tú',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/27.jpg',
      badgeMap: { '0000000000000000group001': 'BRONZE' },
    },
    title: 'Get Out – Khi nỗi sợ đến từ sự ngầm định',
    content:
      'Get Out là sự pha trộn giữa kinh dị và ẩn dụ xã hội. Khi Chris – chàng trai da màu – đến thăm gia đình bạn gái da trắng, mọi thứ dần hé lộ sự bất thường ghê rợn đằng sau vẻ ngoài thân thiện. Phim khơi gợi nỗi sợ từ chủ nghĩa phân biệt chủng tộc tinh vi, và cách xã hội hiện đại áp đặt cái nhìn “tiến bộ” giả tạo. Một tác phẩm kinh dị hiếm hoi có chiều sâu xã hội mạnh mẽ.',
    mediaUrls: [
      'https://i.pinimg.com/736x/aa/2c/a0/aa2ca00922f81f3d9b1f81bf07fa6b65.jpg',
    ],
    voteNumber: 37,
    userVotes: null,
    createdAt: '2025-05-28T22:00:00.000Z',
    updatedAt: '2025-05-28T22:00:00.000Z',
  },
  {
    id: '00000000000000000post030',
    groupId: '0000000000000000group001',
    groupName: 'Bí Ẩn Và Suy Diễn',
    isJoined: true,
    owner: {
      id: 'user028',
      displayName: 'Trần Vĩnh Thịnh',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/28.jpg',
      badgeMap: { '0000000000000000group001': 'SILVER' },
    },
    title: 'Shutter Island – Trí tuệ và ảo ảnh',
    content:
      'Shutter Island là mê cung tâm trí đầy rối rắm. Teddy Daniels đến đảo điều tra vụ mất tích nhưng dần lún sâu vào cơn ác mộng của chính mình. Martin Scorsese đưa người xem vào hành trình phân ranh giữa thực – ảo, tỉnh táo – điên loạn. Kết phim mở ra câu hỏi ám ảnh: “Đi như một người điên hay sống như một con quái vật?”',
    mediaUrls: [
      'https://i.pinimg.com/736x/03/d5/6d/03d56d8190f8d35df7fbcda52365d2bb.jpg',
      'https://i.pinimg.com/736x/1f/7f/6d/1f7f6d738135dffd5e7cf72f6f34c747.jpg',
    ],
    voteNumber: 50,
    userVotes: null,
    createdAt: '2025-05-27T20:30:00.000Z',
    updatedAt: '2025-05-27T20:30:00.000Z',
  },
]

const savedPost: GroupPost[] = [
  {
    id: '683fba6fb9ee9769ec2c13da',
    groupId: '6759d7d8e5bcb70995786269',
    owner: {
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
    title: 'Inception – Kiệt tác điện ảnh hay cú lừa trí tuệ?',
    content:
      'Kể từ khi ra mắt năm 2010, @[Inception](683f2e74f259647e8295a6b1) của đạo diễn Christopher Nolan đã trở thành một trong những bộ phim được bàn luận nhiều nhất trong thế kỷ 21. Với đề tài độc đáo, hình ảnh mãn nhãn và cách kể chuyện phi tuyến tính, bộ phim đã gây ấn tượng mạnh với cả giới phê bình lẫn khán giả. Tuy nhiên, không phải ai cũng đồng tình rằng Inception xứng đáng với danh xưng "kiệt tác". Vậy điều gì khiến bộ phim này vừa được tán dương nồng nhiệt, vừa bị chỉ trích gay gắt?',
    mediaUrls: [],
    voteNumber: 0,
    userVotes: null,
    createdAt: '2025-06-04T03:15:59.166+00:00',
    updatedAt: '2025-06-04T03:15:59.197+00:00',
    isBlock: false,
  },
  {
    id: '684668ff585d4a5b609499a6',
    groupId: '6759d7d8e5bcb70995786269',
    owner: {
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
    title: 'Inception – Giấc mơ trong giấc mơ',
    content:
      '@[Inception](683f2e74f259647e8295a6b1) (2010), do Christopher Nolan đạo diễn, là một bộ phim khoa học viễn tưởng đầy kịch tính, khám phá ranh giới giữa thực tại và giấc mơ. Nhân vật chính, Dom Cobb (Leonardo DiCaprio), là một “kẻ trộm giấc mơ” chuyên xâm nhập vào tiềm thức của người khác để đánh cắp bí mật.',
    mediaUrls: [],
    voteNumber: 0,
    userVotes: null,
    createdAt: '2025-06-09T04:54:23.304+00:00',
    updatedAt: '2025-06-09T04:54:23.307+00:00',
    isBlock: false,
  },
  {
    id: '68483cd690dbc22a983b7e5b',
    groupId: '6759d7c4e5bcb70995786267',
    owner: {
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
    title: 'Inception – Giấc mơ trong giấc mơ',
    content:
      '@[Inception](683f2e74f259647e8295a6b1) (2010), do Christopher Nolan đạo diễn, là một bộ phim khoa học viễn tưởng đầy kịch tính, khám phá ranh giới giữa thực tại và giấc mơ. Nhân vật chính, Dom Cobb (Leonardo DiCaprio), là một “kẻ trộm giấc mơ” chuyên xâm nhập vào tiềm thức của người khác để đánh cắp bí mật.',
    mediaUrls: [],
    voteNumber: 0,
    userVotes: null,
    createdAt: '2025-06-10T14:10:30.923+00:00',
    updatedAt: '2025-06-10T14:10:51.942+00:00',
    isBlock: false,
  },
  {
    id: '68483f1d90dbc22a983b7f7a',
    groupId: '676ee2039a6e2c397046d135',
    owner: {
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
    title: 'Inception có hay không ?',
    content:
      '@[Inception](683f2e74f259647e8295a6b1) (2010), do Christopher Nolan đạo diễn, là một bộ phim khoa học viễn tưởng đầy kịch tính, khám phá ranh giới giữa thực tại và giấc mơ. Nhân vật chính, Dom Cobb (Leonardo DiCaprio), là một “kẻ trộm giấc mơ” chuyên xâm nhập vào tiềm thức của người khác để đánh cắp bí mật.',
    mediaUrls: [],
    voteNumber: 1,
    userVotes: 'UPVOTE',
    createdAt: '2025-06-10T14:20:13.466+00:00',
    updatedAt: '2025-06-10T14:20:41.304+00:00',
    isBlock: false,
  },
  {
    id: '685cea436c8d34602cc05b6b',
    groupId: '6759d7c4e5bcb70995786267',
    owner: {
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
    title: 'hello xin chào,địt con mẹ chúng send',
    content: 'ss',
    mediaUrls: [
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/200/300?grayscale',
    ],
    voteNumber: 0,
    userVotes: null,
    createdAt: '2025-06-26T06:35:47.953+00:00',
    updatedAt: '2025-06-26T06:37:25.123+00:00',
    isBlock: false,
  },
]
