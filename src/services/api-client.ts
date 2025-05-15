import axios from "axios";




export default axios.create({
    baseURL: 'https://api.rawg.io/api',
  params : {
      key:'b863e0ce16f646778120699b6ab8ba8f'
  }
})



