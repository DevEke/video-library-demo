import { Link } from 'react-router-dom';

function CoursesList(props) {
    const { courses, filters } = props;
    

    let filteredVideos = courses.filter((course) => course.field.includes(filters[0]))

    return (
        
        <div className="course-list__wpr">
            {filteredVideos.map(course => {
                return (
                    <Link key={course.id} to={`/courses/${course.title}`} className="course-ctn__wpr"> 
                        <h1>{course.title}</h1>
                        <p>{course.description}</p>
                        <span>{course.status}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default CoursesList;