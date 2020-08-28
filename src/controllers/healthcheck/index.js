const getHealthCheck = (req, res) => {
  try {
    return res.status(200).json({ healthCheck: 'Ok', date: new Date() })
  } catch (e) {
    return res.status(e.status || e.statusCode || 500).json(e)
  }
}

export {
  getHealthCheck
}