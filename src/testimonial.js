function Testimonial() {

    return (
        <div className="testimonial">
            <h2>Notre équipe</h2>
            <div className="testimonial2">
                <div>
                    <img className="profile" src="images/p1.jpg" />
                    <figcaption>S. Ecoffey</figcaption>
                    <figcaption>079 132 92 40</figcaption>
                </div>
                <div>
                    <img className="profile" src="images/p2.jpg" />
                    <figcaption>S. Déforel</figcaption>
                </div>
                <div>
                    <img className="profile" src="images/p3.jpg" />
                    <figcaption>Bob le boulanger</figcaption>
                </div>
            </div>
        </div>

    );
}

export default Testimonial;