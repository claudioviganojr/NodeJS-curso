const departamentos = [
  {
    id_departamento: 1,
    sigla: 'RH',
    nome: 'Recursos Humanos'
  },
  {
    id_departamento: 2,
    sigla: 'TI',
    nome: 'Tecnologia da Informação'
  },
  {
    id_departamento: 3,
    sigla: 'FINANC',
    nome: 'Financeiro'
  },
  {
    id_departamento: 4,
    sigla: 'SRE',
    nome: 'Site Reliability Engineering'
  }
]

export const getDepartamentos = () => {
  return departamentos
}

export const getDepartamento = (id_departamento) => {
  return departamentos.filter((item) => {
    return item.id_departamento === id_departamento 
  })
}