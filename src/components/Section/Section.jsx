import propTypes from "prop-types";
export const Section=({children, title})=>{
   return(
      <>
      <section>
        {title && <h2>{title}</h2>}
        <ul>{children}</ul> 
      </section>
      </> 
   )
}

Section.propTypes={
   children: propTypes.node.isRequired,
   title: propTypes.string,
}