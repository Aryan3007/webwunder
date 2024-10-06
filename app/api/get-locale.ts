import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const response = await axios.get('https://ipapi.co/json/')
        const country = response.data.country_code

        const germanSpeakingCountries = ['DE', 'BE', 'AT', 'CH']
        const locale = germanSpeakingCountries.includes(country) ? 'de' : 'en'
        res.status(200).json({ locale })
    } catch (error) {
        console.error('Failed to fetch IP location:', error)
        res.status(200).json({ locale: 'de' }) // Default to 'en' in case of error
    }
}
