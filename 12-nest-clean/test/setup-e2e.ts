import 'dotenv/config'
import { execSync } from 'node:child_process'
import { randomUUID } from 'crypto'
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

function generateUniqueDatabaseURL(schemaId: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL not found')
  }

  const url = new URL(process.env.DATABASE_URL)
  url.searchParams.set('schema', schemaId)
  return url.toString()
}

const schemaId = randomUUID()

beforeAll(async () => {
  process.env.DATABASE_URL = generateUniqueDatabaseURL(schemaId)

  execSync('npx prisma migrate dev --skip-generate', { stdio: 'inherit' })

  prisma = new PrismaClient()
})

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
  await prisma.$disconnect()
})
