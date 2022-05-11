import LayoutFull from '@/components/Layout/Full'
import useSampleGet from '@/hooks/useApi/posts/get'
import SectionProviders from '@/components/Section/Providers'
import './oyster.scss'
export default function Oyster () {
    const { data: providers } = useSampleGet()

    return (
        <LayoutFull
            content=
                {
                    <div className="page-oyster">
                        <div className="page-oyster__content">
                            <SectionProviders
                                title="Health Benefits"
                                providers={providers}
                            />
                        </div>
                    </div>

                }
        />

    )
}

/*
const future = [
    {
        id: 1,
        name: '',
        members: []
    }, {}
]
*/
