import React from 'react';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/26873436?s=460&v=4" alt="Juliana" />
              <div className="user-info">
                <strong>Juliana Aintablian</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>Bio linda</p>
            <a href="https://github.com/juaintablian">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/26873436?s=460&v=4" alt="Juliana" />
              <div className="user-info">
                <strong>Juliana Aintablian</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>Bio linda</p>
            <a href="https://github.com/juaintablian">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/26873436?s=460&v=4" alt="Juliana" />
              <div className="user-info">
                <strong>Juliana Aintablian</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>Bio linda</p>
            <a href="https://github.com/juaintablian">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/26873436?s=460&v=4" alt="Juliana" />
              <div className="user-info">
                <strong>Juliana Aintablian</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>Bio linda</p>
            <a href="https://github.com/juaintablian">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
