import { PaginatedResponse } from '@/types/paginate.type'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const chatWithBot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data =
      'Tôi tìm thấy một bộ phim phù hợp với yêu cầu của bạn:\n\n**Phim: Coco**  \n- **Mô tả:** Bất chấp lệnh cấm âm nhạc khó hiểu của gia đình đã kéo dài nhiều thế hệ, Miguel vẫn mơ ước trở thành một nhạc sĩ tài năng như thần tượng của mình, Ernesto de la Cruz. Tuyệt vọng muốn chứng minh tài năng của mình, Miguel thấy mình ở Vùng đất của Người chết tuyệt đẹp và đầy màu sắc sau một chuỗi sự kiện bí ẩn. Trên đường đi, anh gặp Hector, một kẻ lừa đảo quyến rũ, và cùng nhau, họ bắt đầu một cuộc hành trình phi thường để mở khóa câu chuyện thực sự đằng sau lịch sử gia đình Miguel.\n- **Đạo diễn:** Christopher Nolan\n- **Diễn viên:** Gemma Chan, Robert De Niro, Anthony Hopkins, Michael Caine\n- **Thể loại:** Hài kịch, Mạo hiểm\n- **Phát hành năm:** 2020\n- **Quốc gia:** USA\n- **Thời lượng:** 155 phút\n- **Loại phim:** SERIES\n- **Giải thưởng:** Best Fantasy Series (2021)\n\n![Coco](https://image.tmdb.org/t/p/original/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg)\n\nXem thêm: **=>[link](/movies/6845dd8da369097b262f0671)**'
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data,
    })
    return
  } catch (error) {
    next(error)
  }
}

const getHistoryChatBot = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: PaginatedResponse<any> = {
      content: [
        {
          id: '685503d1cea8cc509b62f043',
          userId: '6741fe91821b58239de2aac7',
          query: 'thủ đô của việt nam',
          response:
            'Tôi là trợ lý ảo của hệ thống MovieInsideForum và chỉ có thể cung cấp thông tin liên quan đến phim ảnh hoặc các nhóm trong hệ thống. Nếu bạn có câu hỏi nào về phim hoặc các bài viết trong nhóm, hãy cho tôi biết!',
          movies: null,
          timestamp: '2025-06-20T06:46:41.830+00:00',
        },
      ],
      pageable: {
        pageNumber: 0,
        pageSize: 10,
        sort: {
          empty: true,
          sorted: false,
          unsorted: true,
        },
        offset: 0,
        paged: true,
        unpaged: false,
      },
      size: 10,
      number: 0,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      first: true,
      last: true,
      numberOfElements: 1,
      empty: false,
    }
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data,
    })
    return
  } catch (error) {
    next(error)
  }
}

const deleteHistoryChatBot = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
    })
    return
  } catch (error) {
    next(error)
  }
}

export const chatBotAIController = {
  chatWithBot,
  getHistoryChatBot,
  deleteHistoryChatBot,
}
