import './CactusPost.css';

function CactusPost(props) {
    const { cactus, onBgClick } = props;
    return (
        <div className="cactus-post" onClick={onBgClick}>
            <div className="cactus-post-bg">

                <div className="cactus-post-content">

                    <div className="image-post">
                        <div className="img-disc">
                            <h2>{cactus.title}</h2>
                            <img src={cactus.fullpicture} alt="img" />
                        </div>

                    </div>

                    <div className="discribtion-post">
                        <div className="disc-Bx">
                            <table>
                                <tr>
                                    <td className="title-disc">
                                        Common Name :
                                    </td>
                                    <td className="detail-disc">
                                        {cactus.title}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title-disc">
                                        Scientific Name :
                                    </td>
                                    <td className="detail-disc">
                                        {cactus.sciName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title-disc">
                                        Type :
                                    </td>
                                    <td className="detail-disc">
                                        {cactus.type}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title-disc">
                                        Flower Color :
                                    </td>
                                    <td className="detail-disc">
                                        {cactus.flowerColor}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title-disc">
                                        Special Characteristics :
                                    </td>
                                    <td className="detail-disc">
                                        {cactus.special}
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default CactusPost;