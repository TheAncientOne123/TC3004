import { useState, useEffect } from 'react'
import { getPeliculas, deletePelicula } from '../services/api-peliculas'
import PeliculasForm from './PeliculasForm'

export default function PeliculasTable() {
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const fetchPeliculas = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getPeliculas()
      setPeliculas(data)
    } catch (err) {
      setError('No se pudieron cargar las películas. ¿Está el backend en marcha?')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPeliculas()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar esta película?')) return
    try {
      await deletePelicula(id)
      setPeliculas((prev) => prev.filter((p) => p.id !== id))
      if (editingId === id) setEditingId(null)
    } catch (err) {
      setError(err.response?.data?.error || 'Error al eliminar')
    }
  }

  const handleEdit = (id) => {
    setEditingId(id)
    setShowForm(false)
  }

  const handleFormSuccess = () => {
    fetchPeliculas()
    setEditingId(null)
    setShowForm(false)
  }

  if (loading) return <div className="peliculas-state">Cargando películas…</div>
  if (error) return <div className="peliculas-state peliculas-state-error">{error}</div>

  return (
    <section className="peliculas-section">
      <div className="peliculas-toolbar">
        <h2>Películas</h2>
        {!showForm && !editingId && (
          <button type="button" className="btn-cine btn-cine-primary" onClick={() => setShowForm(true)}>
            + Nueva película
          </button>
        )}
      </div>

      {(showForm || editingId) && (
        <div className="peliculas-form-card">
          <h3>{editingId ? 'Editar película' : 'Nueva película'}</h3>
          <PeliculasForm
            pelicula={editingId ? peliculas.find((p) => p.id === editingId) : null}
            onSubmitSuccess={handleFormSuccess}
            onCancel={() => {
              setEditingId(null)
              setShowForm(false)
            }}
          />
        </div>
      )}

      <div className="peliculas-table-wrap">
        <table className="peliculas-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Director</th>
              <th>Año</th>
              <th className="th-actions">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {peliculas.length === 0 ? (
              <tr>
                <td colSpan={5}>No hay películas. Añade una con “Nueva película”.</td>
              </tr>
            ) : (
              peliculas.map((p) => (
                <tr key={p.id} className={editingId === p.id ? 'row-editing' : ''}>
                  <td className="col-id">{p.id}</td>
                  <td className="col-titulo">{p.titulo}</td>
                  <td className="col-director">{p.director || '—'}</td>
                  <td className="col-anio">{p.anio ?? '—'}</td>
                  <td className="col-actions">
                    <button
                      type="button"
                      className="btn-cine btn-cine-sm btn-cine-edit"
                      onClick={() => handleEdit(p.id)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn-cine btn-cine-sm btn-cine-delete"
                      onClick={() => handleDelete(p.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
