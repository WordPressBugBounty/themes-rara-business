import { __ } from "@wordpress/i18n";
import { Card } from "../../components";
import { mainDemo, demo2, demo3, demo4, demo5 } from "../../components/images"

const StarterSites = () => {
    const starterCardSettings = [
        {
            heading: __('Rara Business Pro', 'rara-business'),
            imageurl: mainDemo,
            buttonUrl: "https://rarathemesdemo.com/rara-business-pro/"
        },
        {
            heading: __('Business', 'rara-business'),
            imageurl: demo2,
            buttonUrl: "https://rarathemesdemo.com/rara-business-pro-2/"
        },
        {
            heading: __('Creative Business', 'rara-business'),
            imageurl: demo3,
            buttonUrl: "https://rarathemesdemo.com/rara-business-pro-3/"
        },
        {
            heading: __('Digital Agency', 'rara-business'),
            imageurl: demo4,
            buttonUrl: "https://rarathemesdemo.com/rara-business-pro-4/"
        },
        {
            heading: __('Creative Agency', 'rara-business'),
            imageurl: demo5,
            buttonUrl: "https://rarathemesdemo.com/rara-business-pro-5/"
        },
    ];

    return (
        <>
            <Card
                cardList={starterCardSettings}
                cardPlace='starter'
                cardCol='three-col'
            />
        </>
    )
}

export default StarterSites;