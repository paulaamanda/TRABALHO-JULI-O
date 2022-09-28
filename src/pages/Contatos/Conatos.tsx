import React from "react";
import "./contatos.css";
import ar from "../../Img/amor.png";
export const Contatos = () => {
  return (
    <>
      <div>
        <h1>Contatos</h1>

        <fieldset className="bordinha">
        <div className="ar">
        <img src={ar} alt="" />
      </div>
          <div className="formin">
            <form>
              <br />
              <label>Nome Completo</label>
              <br />
              <input type="text" placeholder="Ex: Você de Paula Alexandre" />
              <br />
              <label>E-mail</label>
              <br />
              <input type="email" placeholder="Ex: Você@gmail.com" />
              <br />
              <label>User instagram</label>
              <br />
              <input type="text" placeholder="Ex: @você_123" />
              <br />
              <label>Contato</label>
              <br />
              <input type="text" placeholder="Ex: (**)123456789" />
              <br />
              <label>Coloque aqui a foto do seu amor</label>
              <input type="file" name="" id="" />
              <br />
              <label>Sua mensagem de amor</label>
              <br />
              <textarea
                rows={3}
                cols={30}
                placeholder="Seus olhos me fizeram lhe amar..."
              ></textarea>
              <br />

              <br />
              <br />
              <br />
              <br />
              <button type="submit" className="botao">
                Enviar
              </button>
              <button type="reset" className="botao">
                Limpar
              </button>
            </form>
          </div>
        </fieldset>
      </div>
      
    </>
  );
};
