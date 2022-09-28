import React from "react";
import "./sobre.css";
import mo from "../../Img/te-amo.png"


export const Sobre = () => {
  return (
    <div className="sobre">
      <h1>Sobre</h1>
      <h3>
        Abri esse site a fim de completar meu trabalho de react do 3 bimestre
        passado pelo titio Julião 🙈.
        <br />
        <br /> 
        A minha idea pra esse site é como um site de relacionamento mas<br />
        inves de você procurar o amor da sua vida você mostra ele para o mundo.
        <br />falando o quanto você o ama e como o vai dar namoro ajudou nesse
        <br />prosseço, o amor da sua vida não é expecificamente alguém pode ser você
        <br />mesmo, seu cachorro ou gatinho, podem me mandar seu texto e sua
        <br />declaração para ser postada nesse site pelo meu instagram
        <br /> <a href="https://www.instagram.com/amanda_oxiiii/?next=%2F" color="white"> (@Amanda_oxiiii) </a>
           e mais para frente aqui mesmo pelo site aproveite essa
        <br />exposição de amor, e não exqueça de se declarar e ser livre para amar
        quem quiser.
      </h3>
     <img className="amor" src={mo} alt="" />
    </div>
  );
};
