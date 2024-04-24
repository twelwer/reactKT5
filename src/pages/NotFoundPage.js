import { useNavigate } from "react-router-dom"

function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div className="content">
            <button onClick={() => navigate('/')}>Go home</button>
            <button onClick={() => navigate(-1)}>Go back</button>
            <img src="https://i.imgflip.com/1leu8s.jpg" alt="404" />
        </div>
    )
}
export default NotFoundPage