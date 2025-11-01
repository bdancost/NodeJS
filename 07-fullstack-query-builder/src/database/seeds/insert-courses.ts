import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  await knex('courses').insert([
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React' },
    { name: 'Express.js' },
    { name: 'Banco de Dados' },
    { name: 'Node.js' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Docker' },
  ])
}
