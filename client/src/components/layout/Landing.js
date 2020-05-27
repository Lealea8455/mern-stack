import React from 'react'

const Landing = () => {
  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help from
              other developers
          </p>
            <div class="buttons">
              <a href="register.html" class="btn btn-primary">Sign Up</a>
              <a href="login.html" class="btn btn-light">Login</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing;