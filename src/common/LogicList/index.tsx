import React from 'react'
interface Props<T> {
  content: T
}
function Foo<T>(props:Props<T>){
  return (
    <div>{props.content}</div>
  )
}
