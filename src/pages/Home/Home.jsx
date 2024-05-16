import React from 'react';
import style from './Home.module.css'
import HomeGravida from '../img/homeGravida.svg'
import Advogada from '../img/advogada.jpeg'
import Fisio from '../img/fisio.svg'
import Psicologia from '../img/psicologia.svg'

const Home = () => {
  return (
    <div className={style.center}>
      <div className={style.header_container}>
        <div className={style.left_column}>
          <h3>Feito para você</h3>
          <h1>Soluções que simplificam!</h1>
          <h2>Site para o seu conhecimento</h2>
          <h2>Faça sua consulta.</h2>
          <button>Quero Ser fertly</button>
        </div>
        <div className={style.right_column}>
          <img src={HomeGravida} alt="Grávida" />
        </div>
      </div>

      <section className={style.service}>
        <h1>Conheça Nosso Serviços</h1>
        <h2>Empoderar mulheres através da saúde e conhecimento de direitos
          promovendo igualdade e autonomia </h2>
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
        </div>
      </section>

      <section className={style.section_two}>
        <h2>Consulta psicológica</h2>
        <p>Oferecemos consultas online com uma psicóloga especializada para proporcionar o apoio necessário durante a gestação, ajudando você a compreender seus sentimentos. Em caso de aborto, nossa equipe auxilia no processo de luto, garantindo acompanhamento emocional personalizado.</p>
      </section>

      <section className={style.section_three}>
        <h2>Consulta Fisioterapêutica</h2>
        <p>Os benefícios da fisioterapia durante a gestação. Alívio de dores, fortalecimento muscular e melhoria da postura são apenas alguns dos resultados. Prepare-se para o parto e recupere-se pós-parto com exercícios personalizados.
 Consulte um fisioterapeuta especializado para obter os melhores cuidados para você e seu bebê.</p>
      </section>

      <section className={style.section_four}>
        <h2>Doula</h2>
        <p>Esses profissionais capacitados estão ao seu lado durante a gestação, parto e pós-parto. Saiba como uma doula pode tornar sua experiência de maternidade mais segura e empoderada. Te dando um suporte em todos os momentos.</p>
      </section>
    </div>
  );
}

export default Home;
