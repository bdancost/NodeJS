import { app } from '@/app'
import { env } from './env'
import { clear } from 'console'

const PORT = env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
