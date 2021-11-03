import React from 'react';
import Brand from '../components/Brand';
import Product1 from '../components/products/Product1';
import Product2 from '../components/products/Product2';

function Reseller(props) {
    return (
        <div>
            <div className="container-fluid text-center"  style={{background: '#ff299c'}}>
                <a href="#" className="bg-transparent" data-bs-toggle="modal" data-bs-target="#Brand"><img src="img/zibelle.png" className="" alt="brand" width="200"/></a>
                <div className="row">
                    <div className="col-lg-12 text-center text-white">
                        <h4 className="fs-bold">Berkelas | Cinta Negeri</h4>
                    </div>
                </div>
                <Brand/>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe1ec" fillOpacity="1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,149.3C560,139,640,149,720,160C800,171,880,181,960,165.3C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{background: '#ffe1ec'}}>
            <div className="row mb-5">
                    <div className="col-lg-12 text-center">            
                    <h1 className="fw-bold" style={{color:'#ff299c'}}>MENGAPA SAYA HARUS MENJADI RESELLER</h1>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-7 text-center">
                        <img src="img/reseller/why.png" alt="why" style={{width:200}}/>
                        <p className="fw-bold">saya mau membantu orang yang memiliki masalah kulit</p>
                        <p className="fw-bold">saya mau memperkenalkan produk yang mengandung kekayaan alam khas Indonesia</p>
                        <p className="fw-bold">saya ingin membantu petani Indonesia</p>
                        <p className="fw-bold">saya mendapatkan kesempatan menjadi pioner dalam perluasan lapangan pekerjaan</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff299c" fillOpacity="1" d="M0,32L40,42.7C80,53,160,75,240,69.3C320,64,400,32,480,53.3C560,75,640,149,720,176C800,203,880,181,960,165.3C1040,149,1120,139,1200,122.7C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="container-fluid"  style={{background: '#ff299c'}}>
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">            
                    <h1 className="fw-bold" style={{color:'#ffe1ec'}}>APA YANG AKAN SAYA DAPATKAN JIKA SAYA MENJADI RESELLER</h1>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-7 text-center">
                        <img src="img/reseller/what.png" alt="what" style={{width:200}}/>
                        <p className="text-white fw-bold">penghasilan dan peluang bisnis besar</p>
                        <p className="text-white fw-bold">bimbingan dari leader</p>
                        <p className="text-white fw-bold">marketing kit</p>
                        <p className="text-white fw-bold">diskon 30%</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe1ec" fillOpacity="1" d="M0,96L48,133.3C96,171,192,245,288,245.3C384,245,480,171,576,165.3C672,160,768,224,864,218.7C960,213,1056,139,1152,112C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{background: '#ffe1ec'}}>
            <div className="row mb-5">
                    <div className="col-lg-12 text-center">            
                    <h1 className="fw-bold" style={{color:'#ff299c'}}>APA SAJA SYARAT MENJADI RESELLER</h1>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-7 text-center">
                        <img src="img/reseller/how.png" alt="how" style={{width:200}}/>
                        <p className="fw-bold">minimum belanja 1jt</p>
                        <p className="fw-bold">mendaftarkan diri sebagai reseller</p>
                        <p className="fw-bold">memiliki akun instagram, facebook, marketplace</p>
                        <p className="fw-bold">siap berjuang dan bersedia dibimbing</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff299c" fillOpacity="1" d="M0,32L40,42.7C80,53,160,75,240,69.3C320,64,400,32,480,53.3C560,75,640,149,720,176C800,203,880,181,960,165.3C1040,149,1120,139,1200,122.7C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{background: '#ff299c'}}>
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">            
                    <h1 className="fw-bold" style={{color:'#ffe1ec'}}>PRODUK KAMI</h1>
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
                <Product1/>
                <Product2/>
                <div className="row">
                    <div className="col-lg-12 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,32L40,42.7C80,53,160,75,240,69.3C320,64,400,32,480,53.3C560,75,640,149,720,176C800,203,880,181,960,165.3C1040,149,1120,139,1200,122.7C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{background:'#000000'}}>
                <div className="row">
                    <div className="col-lg-12 text-center">            
                        <h5 className="fw-bold text-white">&copy; Copyright <strong><span className="text-primary">Zibelle</span></strong><br/>All Rights Reserved 2021</h5>
                    </div>
                </div>
            </div> 
            <div  className="container-fluid fixed-bottom bg-transparent">
                <div className="row d-flex justify-content-end">
                    <div className="col-lg-12 col-12 py-5 px-0 text-end">            
                        <a href="https://wa.me/628118821631?text=Saya%20ingin%20menjadi%20reseller%20Zibelle%0ANama%20:%20%0AAlamat%20:%20%0AKota%20:%20%0AProvinsi%20:%20%0AKodepos%20:%20%0A" className=""><img src="img/reseller.png" alt="order" style={{width:200}}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reseller;