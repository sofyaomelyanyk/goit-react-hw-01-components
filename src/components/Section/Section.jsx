import propTypes from "prop-types";
import s from './Section.module.css'

export const Section=({children, title})=>{
   return(
      <>
      <section className={s['wrap']}>
        {title && <h2 className={s['title']}>{title}</h2>}
        <ul className={s['item-list']}>{children}</ul> 
      </section>
      </> 
   )
}

Section.propTypes={
   children: propTypes.node.isRequired,
   title: propTypes.string,
}