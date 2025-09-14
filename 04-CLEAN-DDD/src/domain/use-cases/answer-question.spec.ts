import { test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question.js'
import { expect } from 'vitest'

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'This is an answer',
  })

  expect(answer.content).toEqual('This is an answer')
})
