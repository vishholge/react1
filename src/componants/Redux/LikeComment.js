import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { incrementCounter,decrementCounter } from './LIkeComment/action'


export default function LikeComment() {
    const useSelector = ((state) => state.count)
    const dispatch = useDispatch()
  return (
    <div>
       
    </div>
  )
}
