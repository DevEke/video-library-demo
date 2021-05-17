import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheck, FiX } from 'react-icons/fi';


function Course(props) {
    const [activeVideo, setActiveVideo] = useState({});
    const [leftPane, setLeftPane] = useState(true);
    const { course } = props;

    const loadVideo = (video) => {
        setActiveVideo(video);
    }

    const toggleLeftPane = () => {
        if (leftPane) {
            setLeftPane(false);
        } else {
            setLeftPane(true);
        }
    }
    
    return (
        <div className="course__wpr">
            <Link className="back-mbl__btn" to="/">
                <FiArrowLeft size={20} className="back" />
            </Link>
            <div style={leftPane ? {left: 0} : {left: '-300px'}} className="course__left-pane">
                <div className="course__nav">
                    <div className="pane__nav">
                    <Link className="back__btn" to="/">
                        <FiArrowLeft size={20} className="back" />
                    </Link>
                    {/* <button onClick={toggleLeftPane}>
                        <FiX size={20} className="hide-pane"/>
                    </button> */}
                    </div>
                    <h1>{course.title}</h1>
                    <p>{course.description}
                    </p>
                    <span>{course.length}</span> 
                </div>
                <ul className="video__list">
                    {course.videos.map(video => {
                        return (
                            <li className="video-list__item" onClick={() => loadVideo(video)} key={video.id}>
                                {video.title}
                                {video.watched ? <FiCheck className="check"/> : null }
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="video__wpr">
                <div className="video">
                    <h1>{activeVideo.title} - {activeVideo.length} mins</h1>
                </div>
                <div className="video__info">
                    <h1>{activeVideo.title}</h1>
                    <p>{activeVideo.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Course;