import { useState } from 'react';
import '../assets/css/SlideShow.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
function SlideShow() {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const [index, setIndex] = useState(0);
    const next = () => {
        setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1));
    };
    const prev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? colors.length - 1 : prevIndex - 1));
    };
    return (
        <div className="container">
            <div className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {colors.map((slide, index) => {
                        return <div key={index} className="slide" style={{ backgroundColor: slide }}></div>;
                    })}
                </div>
            </div>
            <div className="slide_btn btn-left" onClick={prev}>
                <LeftOutlined />
            </div>
            <div className="slide_btn btn-right" onClick={next}>
                <RightOutlined />
            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={index === idx ? `slideshowDot${' active'}` : 'slideshowDot'}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default SlideShow;
