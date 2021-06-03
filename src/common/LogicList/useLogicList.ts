import { useState } from 'react'

interface UseLogicListReturn {
  loading: boolean
}
interface UseLogicListOptions<C> {
  initialConditions: C // 初始检索条件

}
type UseLogicListType<C = any, D = any> = (options: UseLogicListOptions<C>) => UseLogicListReturn

const useLogicList:UseLogicListType = ({ initialConditions }) => {
  const [loading, setLoading] = useState(false)
  const [conditions, setConditions] = useState(initialConditions)
  const [data, setData] = useState([])
  return {
    loading
  }
}
export default useLogicList
