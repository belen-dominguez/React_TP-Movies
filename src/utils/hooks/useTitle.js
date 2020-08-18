import { MEDIA, CATEGORY } from "../../const/variables"

export const useTitle = (tipo, category) => {
    if(category === "trending"){
        return `${MEDIA[tipo]} que son tendencias`
    }
    if(!category){
        return `${MEDIA[tipo]} similares`
    }
    const parsedTitle = `${MEDIA[tipo]} ${CATEGORY[category]}`
    return parsedTitle
}