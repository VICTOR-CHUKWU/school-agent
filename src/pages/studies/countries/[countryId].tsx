import React, { useEffect, useState } from 'react'
import { Header, Country } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import { useRouter } from 'next/router'
import Page from '@/components/Page'
import { ICountry, STUDY_COUNTRIES } from '@/data/studies'

export async function getStaticPaths() {
    const paths = STUDY_COUNTRIES.map(country => ({
        params: { countryId: country.slug },
    }))

    return { paths, fallback: false }
}
export async function getStaticProps() {
    return { props: {} }
}

const CountryPage = () => {
    const router = useRouter()
    const [country, setCountry] = useState<ICountry>();

    const [countryRef] = useScrollReveal()
    const text = `Study in ${country?.name} Universities`

    useEffect(() => {
        if (router && router.query) {
            const { countryId } = router.query as Record<string, string>;
            setCountry(STUDY_COUNTRIES.find(c => c.slug === countryId));
        }
    }, [router]);

    if (!country) return null

    return (
        <Page mainRef={countryRef}>
            <Header head={text} />
            <Country country={country} />
        </Page>
    )
}

export default CountryPage
