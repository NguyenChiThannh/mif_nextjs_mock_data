import { processEnv } from '@/configs/env'
import jwt, { SignOptions } from 'jsonwebtoken'

export const genarateAccessToken = (user: any): string => {
    return jwt.sign(
        {
            sub: user.id,
            role: user.role,
            email: user.email,
        },
        processEnv.JWT_ACCESS_TOKEN as string,
        { expiresIn: '1000d' } as SignOptions
    )
}
