import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';


function Course(props) {
    const [activeVideo, setActiveVideo] = useState({});
    const { course } = props;

    const loadVideo = (video) => {
        setActiveVideo(video);
    }
    
    return (
        <div className="course__wpr">
            <Link className="back-mbl__btn" to="/">
                <FiArrowLeft size={20} className="back" />
            </Link>
            <div className="course__left-pane">
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