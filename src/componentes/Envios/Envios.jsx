import './envios.css'

export const Envios = () => {
    return (
        <div className='contenedor-envios'>
            <div className='medios-pago'>
                <h2 className='medios-envios'>MEDIOS DE PAGO</h2>
                <img className='img-pagos' src="../img/mercado.png" alt="" />
                <img className='img-pagos' src="../img/tarjetas.jpg" alt="" />
                <img className='img-pagos' src="../img/visa.png" alt="" />
                <img className='img-pagos' src="../img/billetes.jpg" alt="" />
            </div>
            
            <div className='contenedor-camion'>
                <h2 className='medios-envios'>HACEMOS ENVIOS</h2>
                <div className='envios'>
                <img className='img-camion' src="../img/camion.jpg" alt="" />
                <p>GRATIS en Capital Federal. <br /> Minimo de compra de $5000.</p>
                </div>
            </div> 
        </div>
    )
}
