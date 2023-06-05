import React from 'react'
import '../Style/searchbar.css'

const searchBar = () => {
return(
<div class="search_box">
   <div class="search">
     <div class="line"></div>
     <div class = "text_and-icon">
       <input type="text" class="search_text" id="search_text" placeholder="Rechercher"/>
            
     </div>
</div>  
</div>
)
}
export default searchBar;