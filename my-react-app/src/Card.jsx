import profilePic from './assets/react.svg'

function Card(){
    return(
        <div className="card">
            <img className="profile_img" src={profilePic}></img>
            <h2 className="title">Karan Chhatwani</h2>
            <p className="para">Hi my name is karan, I am web developer and I love this technology</p>
        </div>
    );
}

export default Card