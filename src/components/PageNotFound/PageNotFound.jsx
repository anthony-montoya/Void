import React from 'react'
import { Redirect } from 'react-router-dom'

let PageNotFound = () => (
	// <div>Page Not Found...</div>
	<Redirect to="/" />
)
export default PageNotFound
