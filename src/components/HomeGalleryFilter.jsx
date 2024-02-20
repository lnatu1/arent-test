import { Icon, HeadIcon, HeadIcons } from '/src/styles/Filters'
import { icons } from '/src/data/home-data'

export default function SampleFood({filter}) {
    return (
        <>
            <HeadIcons>
                {
                    icons.map(ic => (
                        <HeadIcon key={ic.id} onClick={() => filter(ic.type)}>
                            <Icon>
                                <img src={ic.src} alt='knife fork icon'/>
                            </Icon>
                            <div>{ic.label}</div>
                        </HeadIcon>
                    ))
                }
            </HeadIcons>
        </>
    )
}