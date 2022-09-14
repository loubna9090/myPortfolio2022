import React from "react";
import Collapse from "../collapse/Collapse";
import "./exper.css";

export default function Exper() {
  return (
    <div className="ex" id="exper">
      <h2 className="ex-title">Experiences</h2>
      <div className="ex-container">
        <Collapse
          label="Sur le Tas"
          name="Stage Développeuse web"
          text="mars 2020 – avril 2021"
        >
          <ul className="list-exper">
            <li>Développer une interface utilisateur web dynamique.</li>
            <li> Création d’une base de données. </li>
            <li>
              Réalisation du formulaire et stockage des informations dans la
              BDD.
            </li>
          </ul>
        </Collapse>
        <Collapse
          label="Inovasquad"
          name="Infographiste / web designer"
          text="févr 2015 – févr 2020"
        >
          <ul className="list-exper">
            <li>Design des applications mobiles.</li>
            <li>Création et Intégration maquette site web.</li>
            <li>Création des nouvelles chartes graphiques des applications.</li>
            <li>
              Conception pub sur les réseaux sociaux, des newsletters, des
              emailings.
            </li>
          </ul>
        </Collapse>
        <Collapse
          label="Newcom"
          name="Infographiste"
          text="oct 2012 – mai 2014"
        >
          <ul className="list-exper">
            <li>Création Multimédia : Design Web, Bannières, Newsletter ...</li>
            <li>
              Création des supports de communication visuelle pour le site web
              (Boutika.ma) et d'autre site web crée par l'agence.
            </li>
          </ul>
        </Collapse>
        <Collapse
          label="MaroPixel "
          name="Infographiste Freelance"
          text="mai 2012 – déc 2014"
        >
          <ul className="list-exper">
            <li>Conception des identités visuelles et créations graphiques.</li>
            <li>
              Maquettes site web, newsletter, bannière publicitaires, slider ...
            </li>
          </ul>
        </Collapse>
        <Collapse
          label="Ideacom"
          name="Infographiste"
          text=" févr 2011 – mai 2012 "
        >
          <ul className="list-exper">
            <li>
              Création des supports de communication visuelle pour des
              événements.
            </li>
            <li>Création d'une maquette d'un journal mensuel</li>
            <li>Création d 'identités visuelles, et charte graphique</li>
          </ul>
        </Collapse>
        <Collapse
          label="Moorish"
          name="Infographiste"
          text=" juin 2010 - août 2010"
        >
          <ul className="list-exper">
            <li>
              Création des identités visuelles et créations graphiques pour les
              nouvelles sociétés
            </li>
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
