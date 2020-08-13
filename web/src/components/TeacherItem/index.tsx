import React from 'react';
import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1288696369948000258/xIwRD7yJ_400x400.jpg"
          alt="Imagem do Proffy"
        />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasmado em ensinar as pessoas assim como eu fui ensinado por minha
        cabra de estimação.
        <br />
        Aprender não é um ofício mas sim uma obrigação
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$40,00</strong>
        </p>

        <button type="button">
          <img src={whatsIcon} alt="Símbolo do Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
