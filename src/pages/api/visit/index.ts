import faunadb, { query as q } from 'faunadb'
import { NextApiRequest, NextApiResponse } from 'next'

const faunadbKey = process.env.FAUNA_DB_KEY

const client = new faunadb.Client({ secret: faunadbKey || '' })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!faunadbKey) {
    res.status(500).json({ error: 'Você não tem permissão ' })
  }
  if (req.method === 'POST') {
    try {
      let { variationKey, event } = req.body
      event = event || 'count'

      const docRef = q.Match(q.Index('visits_by_variation'), variationKey)

      await client.query(
        q.If(
          q.Exists(docRef),
          q.Update(q.Select(['ref'], q.Get(docRef)), {
            data: {
              [event]: q.Add(
                q.Select(['data', event], q.Get(docRef), 0), // Retorna 0 se o evento não estiver presente
                1
              ),
            },
          }),
          q.Create(q.Collection('Visits'), {
            data: {
              key: variationKey,
              [event]: 1,
            },
          })
        )
      )

      res
        .status(200)
        .json({ message: 'Visita registrada com sucesso.', variationKey })
    } catch (error) {
      console.error('Erro ao registrar visita:', error)
      res.status(500).json({ error: 'Erro ao registrar visita.' })
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' })
  }
}
