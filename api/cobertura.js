export default function handler(req, res) {
  const { cep } = req.query;

  const lista = [
    "08475-000", "07083-000", "08507-000", "07122-000", "08011-000",
    "03908-000", "07074-000", "08510-000", "08720-000"
  ];

  const cobertura = lista.includes(cep);
  res.status(200).json({ cobertura });
} 
