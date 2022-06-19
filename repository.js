const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gogift_db',
  password: '77077csc',
  port: 5432
})

//PARCEIRO
const getParceiro = (request, response) => {
  pool.query(
    'SELECT * FROM parceiro ORDER BY id_parceiro DESC',
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

const getParceiroById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'SELECT * FROM parceiro WHERE id_parceiro = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

const createParceiro = (request, response) => {
  const { razao_social, telefone, endereco, estado, cnpj, email, senha } =
    request.body
  const dt_criacao = new Date()
  const dt_encerramento = null
  pool.query(
    'INSERT INTO parceiro ( razao_social, telefone, endereco, estado, cnpj, email, senha, dt_criacao, dt_encerramento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [
      razao_social,
      telefone,
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
      response.status(201).send(`Parceiro criada com sucesso.`)
    }
  )
}

const updateParceiro = (request, response) => {
  const id = parseInt(request.params.id)
  const { razao_social, telefone, endereco, estado, cnpj, email, senha } =
    request.body

  pool.query(
    'UPDATE parceiro SET razao_social = $1, telefone = $2, endereco = $3, estado = $4, cnpj = $5, email = $6,  senha = $7 WHERE id_parceiro = $8',
    [razao_social, telefone, endereco, estado, cnpj, email, senha, id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Parceiro ${id} atualizada com sucesso.`)
    }
  )
}

const deleteParceiro = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'DELETE FROM parceiro WHERE id_parceiro = $1',
    [id],
    (error, result) => {
      if (error) {
        throw error
      }
      response
        .status(200)
        .send(`Parceiro removida com sucesso com o identificador: ${id}`)
    }
  )
}

//CLIENTE

const getCliente = (request, response) => {
  pool.query(
    'SELECT * FROM cliente ORDER BY id_cliente DESC',
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

const getClienteById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'SELECT * FROM cliente WHERE id_cliente = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

const createCliente = (request, response) => {
  const { nome_completo, endereco, estado, cpf, telefone, email, senha } =
    request.body
  const dt_criacao = new Date()
  const dt_encerramento = null
  pool.query(
    'INSERT INTO cliente ( nome_completo, endereco, estado, cpf, telefone, email, senha, dt_criacao, dt_encerramento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [
      nome_completo,
      endereco,
      estado,
      cpf,
      telefone,
      email,
      senha,
      dt_criacao,
      dt_encerramento
    ],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Cliente criada com sucesso.`)
    }
  )
}

const updateCliente = (request, response) => {
  const id = parseInt(request.params.id)
  const { nome_completo, endereco, estado, cpf, telefone, email, senha } =
    request.body

  pool.query(
    'UPDATE cliente SET razao_social = $1, telefone, = $2 endereco = $3, estado = $4, cnpj = $5, email = $6,  senha = $7 WHERE id_cliente = $8',
    [nome_completo, endereco, estado, cpf, telefone, email, senha, id_cliente],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Cliente ${id} atualizada com sucesso.`)
    }
  )
}

const deleteCliente = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'DELETE FROM cliente WHERE id_cliente = $1',
    [id],
    (error, result) => {
      if (error) {
        throw error
      }
      response
        .status(200)
        .send(`Cliente removida com sucesso com o identificador: ${id}`)
    }
  )
}

//PRODUTO

const getProduto = (request, response) => {
  pool.query(
    'SELECT * FROM produto ORDER BY id_produto DESC',
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

const getProdutoById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'SELECT * FROM produto WHERE id_produto = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

const createProduto = (request, response) => {
  const { nome_produto, valor_unitario, avaliacao, descricao, fk_parceiro } =
    request.body

  pool.query(
    'INSERT INTO produto ( nome_produto, valor_unitario, avaliacao, descricao, fk_parceiro) VALUES ($1, $2, $3, $4, $5)',
    [nome_produto, valor_unitario, avaliacao, descricao, fk_parceiro],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Produto criado com sucesso.`)
    }
  )
}

const updateProduto = (request, response) => {
  const id = parseInt(request.params.id)
  const { nome_produto, valor_unitario, avaliacao, descricao, fk_parceiro } =
    request.body

  pool.query(
    'UPDATE produto SET nome_produto = $1, valor_unitario = $2, avaliacao = $3, descricao = $4 WHERE id_produto = $5',
    [nome_produto, valor_unitario, avaliacao, descricao, fk_parceiro],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Produto ${id} atualizada com sucesso.`)
    }
  )
}

const deleteProduto = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'DELETE FROM produto WHERE id_produto = $1',
    [id],
    (error, result) => {
      if (error) {
        throw error
      }
      response
        .status(200)
        .send(`Produto removida com sucesso com o identificador: ${id}`)
    }
  )
}

module.exports = {
  //parceiro
  getParceiro,
  getParceiroById,
  createParceiro,
  updateParceiro,
  deleteParceiro,
  //cliente
  getCliente,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
  //produto,
  getProduto,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto
}
