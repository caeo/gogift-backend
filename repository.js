const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gogiftdb',
  password: '77077csc',
  port: 5432
})

const getParceiros = (request, response) => {
  pool.query(
    'SELECT * FROM parceiros ORDER BY id_parceiros DESC',
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

const getParceirosById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'SELECT * FROM parceiros WHERE id_parceiros = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

const createParceiros = (request, response) => {
  const { razao_social, endereco, estado, cnpj, email, senha } = request.body
  const dt_criacao = new Date()
  const dt_encerramento = null
  pool.query(
    'INSERT INTO parceiros ( razao_social, endereco, estado, cnpj, email, senha, dt_criacao, dt_encerramento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    [
      razao_social,
      endereco,
      estado,
      cnpj,
      email,
      senha,
      dt_criacao,
      dt_encerramento
    ],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Pessoa criada com sucesso.`)
    }
  )
}

const updateParceiros = (request, response) => {
  const id = parseInt(request.params.id)
  const { razao_social, endereco, estado, cnpj, email, senha } = request.body

  pool.query(
    'UPDATE parceiros SET razao_social = $1, endereco = $2, estado = $3, cnpj = $4, email = $5,  senha = $6, WHERE id_parceiros = $7',
    [razao_social, endereco, estado, cnpj, email, senha, id_parceiros],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Pessoa ${id} atualizada com sucesso.`)
    }
  )
}

const deleteParceiros = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'DELETE FROM parceiros WHERE id_parceiros = $1',
    [id],
    (error, result) => {
      if (error) {
        throw error
      }
      response
        .status(200)
        .send(`Pessoa removida com sucesso com o identificador: ${id}`)
    }
  )
}

module.exports = {
  getParceiros,
  getParceirosById,
  createParceiros,
  updateParceiros,
  deleteParceiros
}
