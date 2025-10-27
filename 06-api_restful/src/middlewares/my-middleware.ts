import { Request, Response, NextFunction } from 'express'

export function myMiddleware(request: Request, response: Response, next: NextFunction) {
  request.user_id = '1'

  console.log('My Middleware')
  return next()
}
