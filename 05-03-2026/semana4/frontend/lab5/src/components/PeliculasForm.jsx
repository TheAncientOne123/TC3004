import { useState, useEffect } from 'react'
import { createPelicula, updatePelicula } from '../services/api-peliculas'

export default function PeliculasForm({ pelicula, onSubmitSuccess, onCancel }) {
  const [formData, setFormData] = useState({ titulo: '', director: '', anio: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (pelicula) {
      setFormData({
        titulo: pelicula.titulo || '',
        director: pelicula.director || '',
        anio: pelicula.anio != null ? String(pelicula.anio) : '',
      })
    } else {
      setFormData({ titulo: '', director: '', anio: '' })
    }
  }, [pelicula])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.titulo.trim()) {
      setError('El título es obligatorio')
      return
    }
    setError(null)
    setSubmitting(true)
    try {
      if (pelicula) {
        await updatePelicula(pelicula.id, {
          titulo: formData.titulo.trim(),
          director: formData.director.trim() || null,
          anio: formData.anio ? parseInt(formData.anio, 10) : null,
        })
      } else {
        await createPelicula({
          titulo: formData.titulo.trim(),
          director: formData.director.trim() || null,
          anio: formData.anio ? parseInt(formData.anio, 10) : null,
        })
      }
      if (onSubmitSuccess) onSubmitSuccess()
    } catch (err) {
      setError(err.response?.data?.error || 'Error al guardar')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="peliculas-form">
      {error && <div className="form-error">{error}</div>}
      <div className="form-group">
        <label htmlFor="titulo">Título *</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          value={formData.titulo}
          onChange={handleChange}
          disabled={submitting}
          required
          placeholder="Nombre de la película"
        />
      </div>
      <div className="form-group">
        <label htmlFor="director">Director</label>
        <input
          id="director"
          name="director"
          type="text"
          value={formData.director}
          onChange={handleChange}
          disabled={submitting}
          placeholder="Director"
        />
      </div>
      <div className="form-group">
        <label htmlFor="anio">Año</label>
        <input
          id="anio"
          name="anio"
          type="number"
          min="1895"
          max="2030"
          value={formData.anio}
          onChange={handleChange}
          disabled={submitting}
          placeholder="Año"
        />
      </div>
      <div className="form-actions">
        <button type="submit" disabled={submitting} className="btn btn-primary">
          {submitting ? 'Guardando…' : pelicula ? 'Actualizar' : 'Crear'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} disabled={submitting} className="btn btn-ghost">
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}
