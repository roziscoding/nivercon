// TODO: Replace this endpoint with a real one
import { z } from 'zod'
import { createEndpoint } from '@expresso/router'

export const dummy = createEndpoint({
  summary: 'Dummy endpoint',
  description: 'Este endpoint está aqui para fins de teste',
  input: {
    body: z.object({
      name: z.string().min(1)
    })
  },
  output: {
    200: z.object({ message: z.string() })
  },
  handlers: async (req, res) => {
    const name = req.body.name

    res.status(200).json({ message: `Hello ${name}!` })
  }
})
