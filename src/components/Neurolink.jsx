import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

import neurolinkImage from '../photos/image of guy.png';
import hospitalImage from '../photos/in hospital.png'; 
import anotherImage from '../photos/lv_nolandarbaugh1jpg-JS888636728.webp';
import carImage from "../photos/car.png"

export default function Neurolink() {
    return (
    <> 
        <section id="neuro-body">
            <header id="neuro-header">
                <section id="content">
                    <Link id="linkBack" to="/">
                        <button>Go back</button>
                    </Link>
                    <h1 id="neuro-header-title">
                        One ordinary summer day, a man takes a swimming trip with some of his
                        friends.
                    </h1>
                </section>      
            </header>
                <p>
                    On the walk there a friend yelled “Last one there is a rotten egg!”. A race had begun. A friendly competition to get to the water first.
                </p>
                <section id="dock">
                    <h1>
                        Not wanting to be a rotten egg, the man ran ahead of his friends and dove
                        in, as he had done many times before.
                    </h1>
                </section>
                <section id="blackout">
                    <h1>Suddenly everything was black...</h1>
                </section>
           
                    
               

        </section>
    </>
    );
}
