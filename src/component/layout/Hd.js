
function Hd() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary border-bottom fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">로고</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="토글 내비게이션">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">홈</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">서비스</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">소개</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">연락처</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Hd;
