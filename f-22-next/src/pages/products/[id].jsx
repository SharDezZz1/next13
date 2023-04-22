import React from 'react'
import { useRouter } from 'next/router'

const SingleProduuct = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>SingleProduuct - {id}</div>
    )
}

export default SingleProduuct