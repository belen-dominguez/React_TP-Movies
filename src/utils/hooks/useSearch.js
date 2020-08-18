const { useGet } = require("./useGet")

const {URL_BASE} = require("../../const/api")
const useSearch = (tipo, category, page=1) => {

   return  useGet(`https://api.themoviedb.org/3/trending/${from}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`)
}