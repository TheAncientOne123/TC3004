import React from 'react'

export const Card = ({id, name, sprites = [], position}) => {
    return (
        <section style={{ height: 220, display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div>
                {sprites.map((sprite) => (
                    <img src={sprite} key={sprite} alt={name} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 8 }} />
                ))}
            </div>
            <div>
                <h2 className="text-capitalize">#{id} - {name}</h2>
                {position && <p style={{ margin: 0, opacity: 0.9 }}><strong>Posición:</strong> {position}</p>}
            </div>
        </section>
    )
}
