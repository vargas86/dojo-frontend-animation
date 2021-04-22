import React from 'react';






export default function Footer() {
    return (
        <footer className="bg-foo-dark">
            <div className="container px-0 px-lg-5 py-5">

                    <div className="sticker justify-content-center">
                        <div className="slogan w-80 w-lg-100 mb-5 px-5">
                            <h2 className="text-light mx-auto w-100 d-block text-center">THE DOJO.COM</h2>
                            <h3 className="text-light mx-auto w-100 d-block text-center">The best streaming site to learn martial arts</h3>
                        </div>
                    </div>    

                    <div className="sticker justify-content-center">
                        <form>
                            <div className="form-group d-block d-lg-flex justify-content-center px-5">
                                <div className="d-block mr-4">
                                    <input type="email" className="newsletter form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="d-block ml-2 justify-content-center mt-3 mt-lg-0">
                                    <button type="submit" className="btn btn-newsletter mx-auto d-block">Submit</button>
                                </div>
                            </div>
                        
                        </form>
                    </div>
                    


                    <div className="d-block d-md-block d-lg-flex d-xl-flex mt-3 sticker">
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 text-light">
                            
                        <img src="https://www.thedojo.com/images/logo_2.png" className="logo mx-auto d-block" />

                            
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 text-light d-flex d-lg-block justify-content-center">
                            <ul className="colfooter">
                                <li><a href="#"><small>About</small></a></li>
                                <li><a href="#"><small>Contact</small></a></li>
                                <li><a href="#"><small>Privacy Policy</small></a></li>
                                <li><a href="#"><small>Term of Service</small></a></li>
                            </ul> 
                        </div>

                        

                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 text-light">
                            <p className="mx-auto text-light">
                                    <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" className="svg-light d-block mx-auto mx-lg-0"><title>Stripe logo</title><path fill="var(--userLogoColor, #0A2540)" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" ></path></svg>
                            </p>
                            <p className="mx-auto text-light text-center text-lg-left px-5 px-lg-0">
                                <small>With Stripe your payments are safety and learn the best martial arts in one click.</small>
                            </p>
                        </div>



                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 text-light d-flex d-lg-block">
                            <p className="mx-auto text-light">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.362 17H10.981V9.93865H12.808L13 7.57518H10.981V6.22878C10.981 5.67343 11.086 5.45387 11.581 5.45387H13V3H11.2C9.241 3 8.362 3.92343 8.362 5.6928V7.57518H7V9.96771H8.362V17Z" fill="currentColor"></path>
                            </svg><small>   The Dojo</small>
                            </p>
                            <p className="mx-auto text-light">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99771 2.62014C12.4005 2.62014 12.6888 2.62014 13.659 2.67506C14.2296 2.68214 14.7947 2.78741 15.3295 2.98627C15.7209 3.12916 16.0746 3.35922 16.3638 3.65904C16.6583 3.94917 16.8822 4.30304 17.0183 4.69336C17.2172 5.2282 17.3224 5.79328 17.3295 6.36384C17.3707 7.31121 17.3799 7.59496 17.3799 9.99771C17.3799 12.4005 17.3799 12.6888 17.3295 13.659C17.3198 14.2219 17.2146 14.779 17.0183 15.3066C16.8687 15.6958 16.639 16.0493 16.3441 16.3441C16.0493 16.639 15.6958 16.8687 15.3066 17.0183C14.7718 17.2172 14.2067 17.3224 13.6362 17.3295C12.6888 17.3707 12.4005 17.3799 9.99771 17.3799C7.59497 17.3799 7.31121 17.3799 6.36384 17.3295C5.79328 17.3224 5.2282 17.2172 4.69336 17.0183C4.30129 16.8769 3.94727 16.6466 3.65904 16.3455C3.35915 16.0554 3.12775 15.7021 2.98169 15.3112C2.7873 14.7753 2.68367 14.2107 2.67506 13.6407C2.62929 12.6934 2.62014 12.405 2.62014 10.0023C2.62014 7.59954 2.62014 7.31579 2.67506 6.36842C2.68367 5.79842 2.7873 5.23384 2.98169 4.69794C3.1253 4.30452 3.35699 3.94915 3.65904 3.65904C3.94727 3.35796 4.30129 3.12769 4.69336 2.98627C5.2282 2.78741 5.79328 2.68214 6.36384 2.67506C7.31121 2.62929 7.59497 2.62014 9.99771 2.62014ZM9.99771 1C7.55378 1 7.25172 1 6.29062 1.05492C5.5439 1.06478 4.80424 1.20095 4.10297 1.45767C3.50162 1.6881 2.958 2.04739 2.5103 2.5103C2.04739 2.958 1.6881 3.50162 1.45767 4.10297C1.19626 4.80343 1.05545 5.54311 1.04119 6.29062C1 7.24714 1 7.55377 1 9.99771C1 12.4416 1 12.7437 1.05492 13.7094C1.0652 14.4546 1.20137 15.1926 1.45767 15.8924C1.6898 16.4903 2.04894 17.0305 2.5103 17.476C2.95931 17.9373 3.50256 18.2963 4.10297 18.5286C4.80404 18.7878 5.54335 18.9286 6.29062 18.9451C7.24714 18.9908 7.55378 19 9.99771 19C12.4416 19 12.7437 19 13.7094 18.9451C14.4551 18.9282 15.1929 18.7874 15.8924 18.5286C16.4922 18.2988 17.0369 17.9453 17.4911 17.4911C17.9453 17.0369 18.2988 16.4922 18.5286 15.8924C18.7874 15.1929 18.9282 14.4551 18.9451 13.7094C18.9863 12.7483 19 12.4416 19 9.99771C19 7.55377 19 7.25172 18.9451 6.29062C18.9286 5.54335 18.7878 4.80404 18.5286 4.10297C18.2963 3.50256 17.9373 2.95931 17.476 2.5103C17.0305 2.04894 16.4903 1.6898 15.8924 1.45767C15.1927 1.20137 14.4546 1.0652 13.7094 1.05492C12.7483 1 12.4416 1 9.99771 1Z" fill="currentColor"></path>
                                <path d="M9.99764 5.37989C9.08321 5.37989 8.18932 5.65109 7.42906 6.1592C6.66881 6.66731 6.07634 7.38948 5.72661 8.23437C5.37688 9.07925 5.28561 10.0089 5.46434 10.9056C5.64307 11.8024 6.08377 12.626 6.73069 13.2723C7.37761 13.9185 8.20168 14.3584 9.09865 14.5362C9.99562 14.7141 10.9252 14.6219 11.7697 14.2713C12.6143 13.9208 13.3359 13.3276 13.8433 12.5669C14.3507 11.8061 14.621 10.912 14.6201 9.99761C14.6201 9.39081 14.5005 8.78997 14.2681 8.22942C14.0358 7.66888 13.6952 7.15962 13.2659 6.73077C12.8366 6.30191 12.327 5.96187 11.7662 5.73007C11.2054 5.49828 10.6045 5.37928 9.99764 5.37989ZM9.99764 12.9998C9.40384 12.9998 8.82337 12.8237 8.32964 12.4939C7.83592 12.164 7.4511 11.6951 7.22387 11.1465C6.99663 10.5979 6.93717 9.99428 7.05302 9.41191C7.16886 8.82954 7.45481 8.29459 7.87469 7.87473C8.29457 7.45486 8.82953 7.16893 9.41192 7.05309C9.99431 6.93725 10.598 6.9967 11.1466 7.22393C11.6952 7.45116 12.1641 7.83596 12.494 8.32967C12.8239 8.82338 12.9999 9.40383 12.9999 9.99761C12.9999 10.7938 12.6836 11.5575 12.1206 12.1205C11.5575 12.6835 10.7939 12.9998 9.99764 12.9998Z" fill="currentColor"></path>
                                <path d="M15.9724 5.24316C15.9724 5.46567 15.9064 5.68317 15.7828 5.86818C15.6592 6.05319 15.4836 6.19738 15.278 6.28253C15.0725 6.36768 14.8463 6.38996 14.6281 6.34655C14.4099 6.30314 14.2095 6.19599 14.0522 6.03866C13.8949 5.88132 13.7877 5.68087 13.7443 5.46264C13.7009 5.24441 13.7232 5.01821 13.8083 4.81264C13.8935 4.60708 14.0377 4.43138 14.2226 4.30776C14.4076 4.18414 14.6251 4.11816 14.8476 4.11816C15.1459 4.11816 15.432 4.23669 15.643 4.44767C15.8539 4.65865 15.9724 4.9448 15.9724 5.24316Z" fill="currentColor"></path>
                            </svg> <small>   The Dojo</small>
                            </p>
                        </div>

                    </div>

                    <div className="text-light pt-5 sticker">
                            <ul className="navfooter d-block d-lg-flex justify-content-center mx-auto">
                                <li>About</li>
                                <li>Contact</li>
                                <li>Privacy Policy</li>
                                <li>Term of Service</li>
                            </ul> 
                    </div>

                    <div className="pb-5 sticker">
                        <p className="mx-auto text-light">
                            <small className="text-muted">
                                The Dojo Copyright © 2021
                            </small>
                        </p>
                    </div>
            </div>
        </footer>
        
    );
}


