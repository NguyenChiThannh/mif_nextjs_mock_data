export type Category = {
  id: string
  categoryName: string
  description: string
  createdAt: string
  updatedAt: string
}

export const movieCategories: Category[] = [
  {
    id: '0000000000000category001',
    categoryName: 'Mạo hiểm',
    description:
      'Hành trình khám phá những vùng đất bí ẩn, chinh phục thiên nhiên hoang dã và đối mặt với hiểm nguy',
    createdAt: '2024-09-23T16:09:34.259+00:00',
    updatedAt: '2024-09-23T16:09:34.259+00:00',
  },
  {
    id: '0000000000000category002',
    categoryName: 'Kinh dị',
    description:
      'Tạo cảm giác căng thẳng và khiếp sợ với các yếu tố siêu nhiên, kinh dị tâm lý và những plot twist đáng sợ',
    createdAt: '2024-09-23T17:30:25.960+00:00',
    updatedAt: '2024-09-23T17:30:25.960+00:00',
  },
  {
    id: '0000000000000category003',
    categoryName: 'Tình cảm',
    description:
      'Những câu chuyện tình lãng mạn, sâu lắng với diễn biến tâm lý nhân vật phức tạp',
    createdAt: '2025-04-29T13:32:57.327+00:00',
    updatedAt: '2025-04-29T13:32:57.327+00:00',
  },
  {
    id: '0000000000000category004',
    categoryName: 'Hài kịch',
    description:
      'Những bộ phim mang lại tiếng cười sảng khoái với tình huống hài hước, dí dỏm và các nhân vật lầy lội',
    createdAt: '2024-09-23T14:54:25.519+00:00',
    updatedAt: '2024-12-27T17:26:05.941+00:00',
  },
  {
    id: '0000000000000category005',
    categoryName: 'Hành động',
    description:
      'Những pha bắn súng đẫm máu, võ thuật mãn nhãn và các cảnh truy đuổi nghẹt thở',
    createdAt: '2024-09-26T18:30:56.010+00:00',
    updatedAt: '2024-09-26T18:30:56.010+00:00',
  },
  {
    id: '0000000000000category006',
    categoryName: 'Thám hiểm',
    description:
      'Khám phá những bí ẩn cổ đại, giải mã manh mối và chinh phục thử thách trí tuệ',
    createdAt: '2024-09-26T18:31:12.128+00:00',
    updatedAt: '2024-09-26T18:31:12.128+00:00',
  },
  {
    id: '0000000000000category007',
    categoryName: 'Phim hay',
    description:
      'Tuyển tập những tác phẩm điện ảnh xuất sắc nhất với diễn xuất đỉnh cao và kịch bản ấn tượng',
    createdAt: '2024-09-30T14:53:35.241+00:00',
    updatedAt: '2024-12-23T13:46:54.577+00:00',
  },
  {
    id: '0000000000000category008',
    categoryName: 'Tài liệu',
    description:
      'Ghi lại những câu chuyện có thật với góc nhìn chân thực và thông tin giá trị',
    createdAt: '2025-04-29T13:33:13.683+00:00',
    updatedAt: '2025-04-29T13:33:13.683+00:00',
  },
  {
    id: '0000000000000category009',
    categoryName: 'Âm nhạc',
    description:
      'Những giai điệu đầy cảm xúc kết hợp với câu chuyện cuộc đời nghệ sĩ',
    createdAt: '2025-04-29T13:33:25.600+00:00',
    updatedAt: '2025-04-29T13:33:25.600+00:00',
  },
  {
    id: '0000000000000category010',
    categoryName: 'Công nghệ',
    description:
      'Thế giới công nghệ tương lai với trí tuệ nhân tạo, robot và những phát minh đột phá',
    createdAt: '2024-11-25T07:52:54.080+00:00',
    updatedAt: '2024-12-23T13:47:09.525+00:00',
  },
  {
    id: '0000000000000category011',
    categoryName: 'Khoa học viễn tưởng',
    description:
      'Khám phá vũ trụ bao la, nền văn minh ngoài hành tinh và công nghệ tương lai vượt trội',
    createdAt: '2025-04-29T13:32:53.757+00:00',
    updatedAt: '2025-04-29T13:32:53.757+00:00',
  },
  {
    id: '0000000000000category012',
    categoryName: 'Thể thao',
    description:
      'Những màn thể hiện đỉnh cao, bài học về tinh thần đồng đội và ý chí vươn lên',
    createdAt: '2025-04-29T13:34:56.713+00:00',
    updatedAt: '2025-04-29T13:34:56.713+00:00',
  },
  {
    id: '0000000000000category013',
    categoryName: 'Hoạt hình',
    description:
      'Thế giới sáng tạo đầy màu sắc dành cho mọi lứa tuổi với đồ họa ấn tượng',
    createdAt: '2025-04-29T13:33:05.053+00:00',
    updatedAt: '2025-04-29T13:33:05.053+00:00',
  },
  {
    id: '0000000000000category014',
    categoryName: 'Hồi hộp',
    description:
      'Kịch tính đến phút cuối với những tình tiết bất ngờ và áp lực tâm lý',
    createdAt: '2025-04-29T13:33:22.794+00:00',
    updatedAt: '2025-04-29T13:33:22.794+00:00',
  },
  {
    id: '0000000000000category015',
    categoryName: 'Cổ trang',
    description:
      'Tái hiện lịch sử với trang phục cầu kỳ, bối cảnh hoành tráng và những trận chiến epic',
    createdAt: '2025-04-29T13:33:38.206+00:00',
    updatedAt: '2025-04-29T13:33:38.206+00:00',
  },
  {
    id: '0000000000000category016',
    categoryName: 'Siêu anh hùng',
    description:
      'Thế giới của những người hùng với siêu năng lực và trận chiến chống cái ác',
    createdAt: '2025-04-29T13:34:02.566+00:00',
    updatedAt: '2025-04-29T13:34:02.566+00:00',
  },
]
