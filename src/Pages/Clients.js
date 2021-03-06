import Footer from "../components/Footer";
import Header from "../components/Header";
import '../componentcss/Clients.css'
import picDB from "../db/picDB";
import ImagePopupClient from "../components/ImagePopupClient";

function Clients() {

    return (
        <div className="clients">
            <Header />
            <div className="clients-body">
                <h2 className="clients-title">Client Gallery</h2>

                <div className="clients-pics">
                    {/* Maps client images onto page */}
                    { picDB.map((Img, index) => {
                        return (
                            <ImagePopupClient Img={Img} alt={`Customer Worn Dress ${index + 1}`} key={index + 1} />
                        );
                    })}
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Clients;
