import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const generatePresignedUrlForUpload = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = {
      presignedUrl:
        'https://mif-bucket-1.s3.ap-southeast-1.amazonaws.com/98528702-0f0b-4f9b-83c0-659a8d542605_image.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250630T030126Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIAX2DZEJ7GFRG5GX4N%2F20250630%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Expires=600&X-Amz-Signature=76ac190936758f6f7278320ca135517dc6ccd3da86306114e1e936672cbdea2c',
      fileName: '98528702-0f0b-4f9b-83c0-659a8d542605_image.jpg',
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

const getUploadedFileUrl = async (
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

export const uploadFilesController = {
  generatePresignedUrlForUpload,
  getUploadedFileUrl,
}
