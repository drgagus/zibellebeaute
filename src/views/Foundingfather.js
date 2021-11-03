import React from 'react';
import { NavLink } from 'react-router-dom';
import Product1 from '../components/products/Product1';
import Product2 from '../components/products/Product2';
import Brand from '../components/Brand';


function Foundingfather(props) {
    return (
        <div>
            <div className="container-fluid text-center"  style={{background: '#ff0000'}}>
                <a href="#" className="bg-transparent" data-bs-toggle="modal" data-bs-target="#Brand"><img src="img/zibelle.png" className="" alt="brand" width="200"/></a>
                <div className="row">
                    <div className="col-lg-12 text-center text-white">
                        <h4 className="fs-bold">Berkelas | Cinta Negeri</h4>
                    </div>
                </div>
                <Brand/>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fillOpacity="1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,149.3C560,139,640,149,720,160C800,171,880,181,960,165.3C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{background: '#ffd700'}}>
                <div className="row">
                    <div className="col-lg-12 text-center">            
                    <h1 className="fw-bold" style={{color:'#0f49ff'}}>APAKAH ANDA MEMPUNYAI MASALAH SEPERTI INI ?</h1>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-lg-6 col-12 ">
                        <img src="img/problems/problem.png" className="" alt="problems" width="100%"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">            
                    <h3 className="fw-bold" style={{color:'#0f49ff'}}>PRODUK KAMI SOLUSINYA</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff0000" fillOpacity="1" d="M0,32L40,42.7C80,53,160,75,240,69.3C320,64,400,32,480,53.3C560,75,640,149,720,176C800,203,880,181,960,165.3C1040,149,1120,139,1200,122.7C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="container-fluid"  style={{background: '#ff0000'}}>
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">            
                    <h1 className="fw-bold" style={{color:'#ffd700'}}>KENAPA PRODUK KAMI</h1>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-7 text-center">
                        <img src="img/whyus/why1.png" alt="whyus" style={{width:200}}/>
                        <h3 className="text-white fw-bold">NATURAL</h3>
                        <p className="text-white fw-bold">Produk skincare yang isi kandungannya sebagian diambil dari bahan alamnya Indonesia seperti gaharu, cengkeh, pala dan masih banyak lagi yang lainnya.</p>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-7 text-center">
                        <img src="img/whyus/why2.png" alt="whyus" style={{width:200}}/>
                        <h3 className="text-white fw-bold">TERPERCAYA</h3>
                        <p className="text-white fw-bold">Produk telah melalui penelitian yang akurat di Thailand, melalui proses riset dan uji coba yang sangat terjamin.</p>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-7 text-center">
                        <img src="img/whyus/why3.png" alt="whyus" style={{width:200}}/>
                        <h3 className="text-white fw-bold">LOKAL</h3>
                        <p className="text-white fw-bold">Karya anak bangsa Indonesia. Dari Indonesia,oleh Kami,untuk Dunia</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fillOpacity="1" d="M0,96L48,133.3C96,171,192,245,288,245.3C384,245,480,171,576,165.3C672,160,768,224,864,218.7C960,213,1056,139,1152,112C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{background: '#ffd700'}}>
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">            
                    <h1 className="fw-bold" style={{color:'#0f49ff'}}>PRODUK KAMI</h1>
                    </div>
                </div>
                <div className="row mx-3 d-flex justify-content-center">
                    <div className="col-lg-3 mb-3">
                        <div className="card bg-transparent border-dark">
                            <img src="img/product1/product1.png" className="card-img-top" alt="product" />
                            <div className="cad-footer">
                                <div className="row">
                                    <div className="col-12 text-center  d-grid">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Produk1">Detail Produk</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="card bg-transparent border-dark">
                            <img src="img/product2/product1.png" className="card-img-top" alt="product" />
                            <div className="cad-footer">
                                <div className="row">
                                    <div className="col-12 text-center  d-grid">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Produk2">Detail Produk</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Product1 whatsapp={props.whatsapp}/>
                <Product2 whatsapp={props.whatsapp}/>
                <div className="row">
                    <div className="col-lg-12 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff0000" fillOpacity="1" d="M0,32L40,42.7C80,53,160,75,240,69.3C320,64,400,32,480,53.3C560,75,640,149,720,176C800,203,880,181,960,165.3C1040,149,1120,139,1200,122.7C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="container-fluid"  style={{background: '#ff0000'}}>
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">            
                    <h1 className="fw-bold" style={{color:'#ffd700'}}>TESTIMONI</h1>
                    </div>
                </div>
                <div className="row mb-5 d-flex justify-content-center">
                    <div className="col-lg-5">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="img/resi/resi1.jpg" className="d-block w-100" alt="resi"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/resi/resi2.jpg" className="d-block w-100" alt="resi"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fillOpacity="1" d="M0,96L48,133.3C96,171,192,245,288,245.3C384,245,480,171,576,165.3C672,160,768,224,864,218.7C960,213,1056,139,1152,112C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>
            <div className="container-fluid"  style={{background: '#ffd700'}}>
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">            
                    <h1 className="fw-bold text-primary">RESELLER</h1>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-12 text-center">
                    <NavLink to="/reseller" className=""><img src="img/reseller.png" alt="order" style={{width:250}}/></NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,96L48,133.3C96,171,192,245,288,245.3C384,245,480,171,576,165.3C672,160,768,224,864,218.7C960,213,1056,139,1152,112C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{background:'#000000'}}>
                <div className="row">
                    <div className="col-lg-12 text-center mb-5">            
                        <h5 className="fw-bold text-white">&copy; Copyright <strong><span className="text-primary">Zibelle</span></strong><br/>All Rights Reserved 2021</h5>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Foundingfather;