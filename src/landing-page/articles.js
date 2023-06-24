import style from '../style/landing-page-style/articles.module.css';
import ArticleBox from './article-box'
import articleimg1 from '../images/article1.jpeg'
import articleimg2 from '../images/article2.jpeg'
import articleimg3 from '../images/article3.png'

export default function Articles() {
  return (
    <div className={style.container}>
      <h3>Read News Articles</h3>
      <div className={style.backgroundbox}></div>
      <div className={style.group}>
        <ArticleBox image={articleimg1} title={'How to care for your pets'} isNew={true}/>
        <ArticleBox image={articleimg2} title={'How to care for your pets'} isNew={true}/>
        <ArticleBox image={articleimg3} title={'How to care for your pets'} isNew={true}/>
      </div>
    </div>
  );
}
