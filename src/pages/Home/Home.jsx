import React from 'react';
import style from './Home.module.css'
import HomeGravida from '../img/homeGravida.svg'
import Advogada from '../img/advogada.jpeg'
import Fisio from '../img/fisio.svg'
import Psicologia from '../img/psicologia.svg'
import ImgFundo from '../../assets/fundo.svg'
import Doula from '../img/doula.png'
// import Pss from '../../'

const Home = () => {
  return (
    <div className={style.center}>
        <div className={style.img_Fundo}>
          <img src={ImgFundo} alt="" />
        </div>
      <div className={style.header_container}>
        <div className={style.left_column}>
          <div className={style.text_one}>
            <p>Feito para você</p>
            <h1>Soluções que simplificam!</h1>
          </div>
          <div className={style.text_two}>
            <h2> <span>•</span> Site para o seu conhecimento</h2>
            <h2> <span>•</span> Faça sua consulta.</h2>
          </div>
          <button>Quero Ser fertly</button>
        </div>
        <div className={style.right_column}>
          <img src={HomeGravida} alt="Grávida" />
        </div>
      </div>

      <section className={style.service}>
        <h1>Conheça Nosso Serviços</h1>
        <p>Empoderar mulheres através da saúde e conhecimento de direitos
          <br />promovendo igualdade e autonomia </p>
      </section>

      <section className={style.section_one}>
        <div className={style.img_advocacy}>
          <img src={Advogada} alt="advogada" />
        </div>
        <div className={style.text_advocacy}>
          <h2>Assessoria Jurídica</h2>
          <p>
          Garanta seus direitos durante a gravidez com a assessoria jurídica especializada. Nossa equipe oferece suporte completo em questões trabalhistas, incluindo licença maternidade e estabilidade no emprego. Além disso, fornecemos orientação sobre auxílio maternidade e assistência legal em casos de aborto ou carência no plano de saúde para o parto. Conte com nossa expertise para proteger seus direitos e tomar decisões informadas durante esse período especial.
          </p>
          <button>Agendar</button>
        </div>
      </section>

      <section className={style.section_two}>
        <div className={style.text_psychology}>
          <h2 h2>Consulta psicológica</h2>
          <p>Oferecemos consultas online com uma psicóloga especializada para proporcionar o apoio necessário durante a gestação, ajudando você a compreender seus sentimentos. Em caso de aborto, nossa equipe auxilia no processo de luto, garantindo acompanhamento emocional personalizado.</p>
          <button>Agendar</button>
        </div>
        <div className={style.img_psychology}>
          <img src={Psicologia} alt="Psicologa" />
        </div>
      </section>

      <section className={style.section_three}>
        <div className={style.img_physiotherapy}>
          <img src={Fisio} alt="" />
        </div>
        <div className={style.text_physiotherapy}>
          <h2>Consulta Fisioterapêutica</h2>
          <p>Os benefícios da fisioterapia durante a gestação. Alívio de dores, fortalecimento muscular e melhoria da postura são apenas alguns dos resultados. Prepare-se para o parto e recupere-se pós-parto com exercícios personalizados.
          Consulte um fisioterapeuta especializado para obter os melhores cuidados para você e seu bebê.</p>
          <button>Agendar</button>
        </div>
      </section>

      <section className={style.section_four}>
        <div className={style.text_doula}>
        <h2>Doula</h2>
        <p>Esses profissionais capacitados estão ao seu lado durante a gestação, parto e pós-parto. Saiba como uma doula pode tornar sua experiência de maternidade mais segura e empoderada. Te dando um suporte em todos os momentos.</p>
        <button>Agendar</button>
        </div>
        <div className={style.img_doula}>
          <img src={Doula} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
