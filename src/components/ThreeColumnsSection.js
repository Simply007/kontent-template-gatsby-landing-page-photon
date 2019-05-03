import React from 'react'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

const threeColumnsSection = () => (
    <section id="three" className="main style1 special">
        <div className="grid-wrapper">
            <div className="col-12">
                <header className="major">
                    <h2>Adipiscing amet consequat</h2>
                </header>
                <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
            </div>

            <div className="col-4">
                <span className="image fit"><img src={pic02} alt="" /></span>
                <h3>Magna feugiat lorem</h3>
                <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                </ul>
            </div>
            <div className="col-4">
                <span className="image fit"><img src={pic03} alt="" /></span>
                <h3>Magna feugiat lorem</h3>
                <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                </ul>
            </div>
            <div className="col-4">
                <span className="image fit"><img src={pic04} alt="" /></span>
                <h3>Magna feugiat lorem</h3>
                <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                </ul>
            </div>
        </div>
    </section>
);

export default threeColumnsSection;
