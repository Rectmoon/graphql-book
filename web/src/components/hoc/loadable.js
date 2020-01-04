import Loadable from "react-loadable"
import DefaultLoading from "../loading/default"

export default (loader, loading = DefaultLoading) => {
  return Loadable({
    loader,
    loading
  })
}
