import { USERID } from '@/utils/contants'

export type chatAIHistory = {
  id: string
  userId: string
  query: string
  response: string
  movies: null
  timestamp: string
}

export const chatAIHistories: chatAIHistory[] = [
  {
    id: '000000000000000chatai008',
    userId: USERID,
    query: 'Thủ đô của việt nam ở đâu ?',
    response:
      'Tôi là trợ lý ảo của hệ thống MovieInsideForum và chỉ có thể cung cấp thông tin liên quan đến phim ảnh hoặc các nhóm trong hệ thống. Nếu bạn có câu hỏi nào về phim hoặc các bài viết trong nhóm, hãy cho tôi biết!',
    movies: null,
    timestamp: '2025-06-20T06:46:41.830+00:00',
  },
  {
    id: '000000000000000chatai001',
    userId: USERID,
    query: 'Cho tôi biết các bài viết đang được up vote nhiều trong tuần này',
    response:
      'Dưới đây là top 5 bài viết được upvote nhiều nhất trong tuần này nè 👇<br><br>• 🔗 [**Phim nào khiến bạn khóc nhiều nhất?**](/groups/6759d7c4e5bcb70995786267/post/6842c1b8b8ca077e071b923e)<br>👤 Tác giả: Nguyễn Thanh - 12 upvotes<br><br>• 🔗 [**Minion là bộ phim đáng hay cho trẻ em...**](/groups/676ee2039a6e2c397046d135/post/6854333dd5572f544eb78633)<br>👤 Tác giả: Nguyễn Thanh - 2 upvotes<br><br>• 🔗 [**Inception – Khi ranh giới thực và mơ ...**](/groups/6759d7c4e5bcb70995786267/post/6854df90cea8cc509b62e10c)<br>👤 Tác giả: Nguyễn Thanh - 2 upvotes<br><br>• 🔗 [**Ciao Alberto — Lời chào mùa hè đong đ...**](/groups/6759d7cce5bcb70995786268/post/68545248765b1b7d46a1de9c)<br>👤 Tác giả: Nguyễn Thanh - 2 upvotes<br><br>• 🔗 [**Người lớn có nên xem lại phim hoạt hì...**](/groups/681c126fb51712238619a35f/post/681c43116c88405b5fbc5989)<br>👤 Tác giả: Đặng Trung Kiên - 2 upvotes<br><br>',
    movies: null,
    timestamp: '2025-06-02T09:34:12.053+00:00',
  },
  {
    id: '000000000000000chatai002',
    userId: USERID,
    query: 'Cho tôi danh sách các sự kiện tôi đã join sắp diễn ra',
    response:
      'Dưới đây là các sự kiện mà bạn đã đăng ký và sắp diễn ra nè 👇<br><br>• [**Cafe và phim**](/groups/6759d7cce5bcb70995786268/events)<br>🗓 12/07/2025 09:47<br><br>• [**Talkshow phim kinh dị Việt**](/groups/6759d7c4e5bcb70995786267/events)<br>🗓 12/07/2025 21:01<br><br>Tui cũng có gửi mail cho bạn đó! 🕒',
    movies: null,
    timestamp: '2025-06-02T09:33:45.437+00:00',
  },
  {
    id: '000000000000000chatai003',
    userId: USERID,
    query:
      '@Rạp Chiếu Nhà Mình @Xem Phim Là Chính các bài viết tôi đã đăng được nhiều upvote từ các group này',
    response:
      '⭐ **Các bài viết được like nhiều nhất của bạn từ các group đã mention:**<br><br>**1. [Phim nào khiến bạn khóc ...](/groups/6759d7c4e5bcb70995786267/post/6842c1b8b8ca077e071b923e)**<br>👍 **Likes:** 12<br>📅 **Ngày tạo:** 06/06/2025 10:23<br>📝 **Nội dung:** Một linh mục người Mỹ...<br><br>**2. [Inception – Khi ranh giớ...](/groups/6759d7c4e5bcb70995786267/post/6854df90cea8cc509b62e10c)**<br>👍 **Likes:** 2<br>📅 **Ngày tạo:** 20/06/2025 04:12<br>📝 **Nội dung:** Ra mắt năm 2010, @[Incep...<br><br>**3. [Inception – Đỉnh cao của...](/groups/6759d7cce5bcb70995786268/post/6854e002cea8cc509b62e176)**<br>👍 **Likes:** 2<br>📅 **Ngày tạo:** 20/06/2025 04:13<br>📝 **Nội dung:** Không chỉ đơn thuần là ...<br><br>**4. [Ciao Alberto — Lời chào ...](/groups/6759d7cce5bcb70995786268/post/68545248765b1b7d46a1de9c)**<br>👍 **Likes:** 2<br>📅 **Ngày tạo:** 19/06/2025 18:09<br>📝 **Nội dung:** Sau khi Luca kết thúc, n...<br><br>**5. [Inception – Hành trình l...](/groups/6759d7c4e5bcb70995786267/post/6854dd9fcea8cc509b62dfc4)**<br>👍 **Likes:** 1<br>📅 **Ngày tạo:** 20/06/2025 04:03<br>📝 **Nội dung:** Phim xoay quanh Dom Cobb...<br><br>',
    movies: null,
    timestamp: '2025-06-02T09:32:56.963+00:00',
  },
  {
    id: '000000000000000chatai004',
    userId: USERID,
    query: '@Rạp Chiếu Nhà Mình  top bài viết nổi bật',
    response:
      '⭐ **Các bài viết được like nhiều nhất của bạn từ các group đã mention:**<br><br>**1. [Phim nào khiến bạn khóc ...](/groups/6759d7c4e5bcb70995786267/post/6842c1b8b8ca077e071b923e)**<br>👍 **Likes:** 12<br>📅 **Ngày tạo:** 06/06/2025 10:23<br>📝 **Nội dung:** Một ngôi nhà chìm dưới đáy hồ sâu...<br><br>**2. [Inception – Khi ranh giớ...](/groups/6759d7c4e5bcb70995786267/post/6854df90cea8cc509b62e10c)**<br>👍 **Likes:** 2<br>📅 **Ngày tạo:** 20/06/2025 04:12<br>📝 **Nội dung:** Ra mắt năm 2010, @[Incep...<br><br>**3. [Inception – Hành trình l...](/groups/6759d7c4e5bcb70995786267/post/6854dd9fcea8cc509b62dfc4)**<br>👍 **Likes:** 1<br>📅 **Ngày tạo:** 20/06/2025 04:03<br>📝 **Nội dung:** Phim xoay quanh Dom Cobb...<br><br>**4. [Inception – Giấc mơ tron...](/groups/6759d7c4e5bcb70995786267/post/6854dd3ecea8cc509b62df2c)**<br>👍 **Likes:** 1<br>📅 **Ngày tạo:** 20/06/2025 04:02<br>📝 **Nội dung:** Cặp đôi YouTuber bị mắc kẹt với lượng oxy cạn kiệt...<br><br>**5. [The Exorcism of God – Khi Đức Tin và Tội Lỗi Giao Thoa](/groups/6759d7c4e5bcb70995786267/post/683f054c3ad33e275d0ec4c0)**<br>👍 **Likes:** 2<br>📅 **Ngày tạo:** 03/06/2025 14:23<br>📝 **Nội dung:** The Exorcism of God – Khi Đức Tin và Tội Lỗi Giao Thoa...<br><br>',
    movies: null,
    timestamp: '2025-06-02T09:32:10.517+00:00',
  },
  {
    id: '000000000000000chatai005',
    userId: USERID,
    query: '@Rạp Chiếu Nhà Mình  top bài viết nỗi bật trong tuần này',
    response: 'Hiện tại chưa có bài viết nào trending trong tuần này 🥲',
    movies: null,
    timestamp: '2025-07-03T09:31:53.917+00:00',
  },
  {
    id: '000000000000000chatai007',
    userId: USERID,
    query:
      'Tìm tôi phim gia đình có thằng cháu đam mê âm nhạc, có yếu tố huyền bí',
    response:
      'Tôi tìm thấy một bộ phim phù hợp với yêu cầu của bạn:\n\n**Phim: Coco**  \n- **Mô tả:** Bất chấp lệnh cấm âm nhạc khó hiểu của gia đình đã kéo dài nhiều thế hệ, Miguel vẫn mơ ước trở thành một nhạc sĩ tài năng như thần tượng của mình, Ernesto de la Cruz. Tuyệt vọng muốn chứng minh tài năng của mình, Miguel thấy mình ở Vùng đất của Người chết tuyệt đẹp và đầy màu sắc sau một chuỗi sự kiện bí ẩn. Trên đường đi, anh gặp Hector, một kẻ lừa đảo quyến rũ, và cùng nhau, họ bắt đầu một cuộc hành trình phi thường để mở khóa câu chuyện thực sự đằng sau lịch sử gia đình Miguel.\n- **Đạo diễn:** Christopher Nolan\n- **Diễn viên:** Gemma Chan, Robert De Niro, Anthony Hopkins, Michael Caine\n- **Thể loại:** Hài kịch, Mạo hiểm\n- **Phát hành năm:** 2020\n- **Quốc gia:** USA\n- **Thời lượng:** 155 phút\n- **Giải thưởng:** Best Fantasy Series (Wed Dec 01 00:00:00 UTC 2021)\n\n![Coco](https://image.tmdb.org/t/p/original/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg)\n\nXem thêm: **=>[link](/movies/0000000000000000movie005)**',
    movies: null,
    timestamp: '2025-06-02T07:14:48.479+00:00',
  },
]
