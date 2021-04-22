import React from 'react';
import CardCategories from '../cards/cardcategories'; 

export default function categories() {
    return (
        <div className="row w-100 m-0 pb-5">
            <h2 className="section-title text-light pl-5 pr-5">Popular Categories</h2>
            <div className="scrollwrapper card-index col-sm-12 d-flex d-lg-flex d-xl-flex pt-2 pb-5  pl-2 pr-5">
            
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />

            </div>           
        </div>
    );
}