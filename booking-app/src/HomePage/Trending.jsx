import React from 'react'
import './Trending.css'
import { Link } from 'react-router-dom'

function Trending() {
  return (
    <article>
        <div className='Trending'>
            <h2>Trending destinations</h2>
            <p>Most popular choices for travellers from India</p>
            <div className='Trending-img'>
                <Link>
                   <div className='Trending-card'>
                      <div className='Trending-Place'>
                        <p>New Delhi</p>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg==" alt="" />
                        </div>
                      <div className='Trending-picture'>
                        <picture>
                          <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="New Delhi" />
                        </picture>
                      </div>
                      
                   </div>
                </Link>
                <Link>
                 <div className='Trending-card'>
                      <div className='Trending-Place'>
                      <p>New Delhi</p>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg==" alt="" />
                      </div>
                        <div className='Trending-picture'>
                            <picture>
                              <img src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="New Delhi" />
                            </picture>
                      </div>
                 </div>
                </Link>
            </div>
            <div className='Other-Trending-Places'>
                <Link> 
                   <div className='Other-Trending-card'>
                      <div className='Other-Trending-Place'>
                      <p>New Delhi</p>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg==" alt="" />
                      </div>
                      <div className='Other-Trending-picture'>
                        <picture>
                          <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="New Delhi" />
                        </picture>
                      </div>
                   </div>
                </Link>
                <Link> 
                   <div className='Other-Trending-card'>
                      <div className='Other-Trending-Place'>
                      <p>New Delhi</p>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg==" alt="" />
                      </div>
                      <div className='Other-Trending-picture'>
                        <picture>
                          <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="New Delhi" />
                        </picture>
                      </div>
                   </div>
                </Link>
                <Link> 
                   <div className='Other-Trending-card'>
                      <div className='Other-Trending-Place'>
                      <p>New Delhi</p>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg==" alt="" />
                      </div>
                      <div className='Other-Trending-picture'>
                        <picture>
                          <img src="https://cf.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=" alt="New Delhi" />
                        </picture>
                      </div>
                   </div>
                </Link>
            </div>
        </div>
    </article>
  )
}

export default Trending