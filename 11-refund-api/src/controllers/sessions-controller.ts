import { Request, Response } from 'express'
import { z } from 'zod'

class SessionsController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      email: z.string().trim().email({ message: 'E-mail inválido' }).toLowerCase(),
      password: z.string(),
    })

    const { email, password } = bodySchema.parse(req.body)

    res.json({ email, password })
  }
}

export { SessionsController }
