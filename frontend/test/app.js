const courses = [
    {name: 'HTML, CSS'},
    {name: 'Responsive web design'},
    {name: 'ReactJS'}
]

const postItem = 
<ul>
    {courses.map((course, index) => <li key={index} > {course.name} </li> )}
</ul>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(postItem)