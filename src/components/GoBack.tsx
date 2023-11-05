import { useNavigate } from 'react-router-dom';

function GoBack() {
    const navigate = useNavigate();
    return (
        <div className="text-start ml-10">
            <button className="flex gap-2 items-center" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 4L6 8L10 12" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
            </button>
        </div>
    );
}

export default GoBack;
