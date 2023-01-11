import styles, { layout } from '../style';
import { card } from '../assets';
import Button from './Button';

const CardDeal = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2>Find a better card deal <br className="sm:block hidden"/> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quidem reprehenderit aspernatur nemo excepturi nam modi unde, architecto error, eaque possimus doloremque facilis sequi, aliquam atque recusandae labore ut fugit?</p>

      <Button styles="mt-10 "/>
    </div>
    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="w-[100%] h-[100%] " />
    </div>
  </section>
)

export default CardDeal